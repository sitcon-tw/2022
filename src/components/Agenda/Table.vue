<template>
  <div>
    <div
      class="agenda-teble"
      :style="{
        gridTemplateColumns: ['[🥞time]', 'auto', gridTemplateColumns.join(' 1fr ') + '1fr', '[🥞end]'].join(' '),
        gridTemplateRows: gridTemplateRows.join(' auto ')
      }">
      <!-- time -->
      <div
        class="time-item"
        v-for="time of times"
        :style="{
          'grid-column-start': `🥞time`,
          'grid-row-start': `🥞${parseTime(time)}`,
        }">
        <div class="time-item-content">
          {{ time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, }) }}
        </div>
      </div>
      <!-- room decoration-line -->
      <div class="decoration-container" v-for="room of rooms" :style="{
        'grid-column-start': `🥞${room}`,
        'grid-row-start': 'decoration-line-start',
        'grid-row-end': '🥞end',
      }">
        <div class="decoration-line" />
      </div>
      <div class="decoration-end" v-for="room of rooms" :style="{
        'grid-column-start': `🥞${room}`,
        'grid-row-start': '🥞end',
      }">
        <div class="decoration-end-arrow" />
      </div>
      <!-- room -->
      <div class="room-name" v-for="room of rooms" :style="{
        'grid-column-start': `🥞${room}`,
        'grid-row-start': 'roomname'
      }">
        {{ room }}
      </div>
      <!-- sessions -->
      <Component
        :is="item.zh.description ? 'router-link' : 'div'"
        :to="`/agenda/${item.id}`"
        v-for="item of sessionData.sessions"
        class="session-item"
        :style="{ ...parseSessionStyle(item) }"
        :class="{ hoverable: item.zh.description }">
        <div class="session-title">
          {{ item.zh.title }}
        </div>
        <div class="speakers" v-if="item.speakers.length > 0">
          <span v-for="speaker of item.speakers" :key="speaker.id">
            {{ sessionData.speakers.filter(x => x.id == speaker)[0].zh.name }}
          </span>
        </div>
        <div class="tags">
          <span v-if="getTypeById(item.type)" :data-type="item.type">
            #{{ getTypeById(item.type).zh.name }}
          </span>
          <span v-for="tag of item.tags" :key="tag">
            #{{ getTagById(tag).zh.name }}
          </span>
        </div>
      </Component>
    </div>
    <div class="agenda-mobile-list">
      <template v-for="time of startTimes">
        <div class="time-item">
          {{ time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, }) }}
        </div>
        <Component
          :is="item.zh.description ? 'router-link' : 'div'"
          :to="`/agenda/${item.id}`"
          class="session-item"
          v-for="item of sessionData.sessions.filter(x => new Date(x.start).toString() == time)"
          :class="{ hoverable: item.zh.description }">
          <div class="session-title">
            {{ item.zh.title }}
          </div>
          <div class="speakers" v-if="item.speakers.length > 0">
            <span v-for="speaker of item.speakers" :key="speaker.id">
              {{ sessionData.speakers.filter(x => x.id == speaker)[0].zh.name }}
            </span>
          </div>
          <div class="footer">
            <div class="tags">
              <span v-if="getTypeById(item.type)" :data-type="item.type">
                #{{ getTypeById(item.type).zh.name }}
              </span>
              <span v-for="tag of item.tags" :key="tag">
                #{{ getTagById(tag).zh.name }}
              </span>
            </div>
            <div class="room">
              {{ item.room }} / {{ Math.floor((new Date(item.end) - new Date(item.start)) / 1000 / 60) }}mins
            </div>
          </div>
        </Component>
      </template>
    </div>
    <ArrowDialog v-model="sessionModal">
      <div class="agenda-dialog" v-if="activeSession">
        <div class="agenda-dialog-header">
          <div class="agenda-info">
            {{ activeSession.type }}
          </div>
          <div class="agenda-title">
            {{ activeSession.zh.title }}
          </div>
          <div class="agenda-info">
            {{ activeSession.room }} •
            {{ new Date(activeSession.start).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, }) }}
            ~{{ new Date(activeSession.end).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, }) }}
          </div>
        </div>
        <div class="agenda-dialog-content">
          <div class="agenda-dialog-content-description">
            <div class="tags" v-if="activeSession.tags.length > 0">
              <span class="tags-title">Tags</span>: <span class="tags-content">{{ activeSession.tags.map(x => getTagById(x).zh.name).join(', ')
              }}</span>
            </div>
            <div class="description">
              <Markdown :content="activeSession.zh.description" />
            </div>
          </div>
          <div class="agenda-dialog-content-info">
            <template v-if="activeSession.priorKnowledge.length">
              <div class="section-title">先備知識</div>
              <div class="section-content">
                <Markdown :content="activeSession.priorKnowledge" />
              </div>
            </template>
            <div class="links">
              <btn v-if="activeSession.qa" :href="activeSession.qa">即時提問</btn>
              <btn v-if="activeSession.slide" :href="activeSession.slide">簡報連結</btn>
              <btn v-if="activeSession.co_write" :href="activeSession.co_write">共筆連結</btn>
              <btn v-if="activeSession.record || activeSession.live" :href="activeSession.record || activeSession.live">
                {{ activeSession.record ? '錄影' : '直播' }}連結</btn>
            </div>
          </div>
        </div>
        <div class="agenda-speaker" v-for="speaker of activeSession.speakers">
          <div class="content">
            <div class="agenda-speaker-name"> {{ speaker.zh.name }}</div>
            <div class="agenda-speaker-bio">
              <Markdown :content="speaker.zh.bio" />
            </div>
          </div>
          <img class="agenda-speaker-avatar" :src="speaker.avatar" />
        </div>
      </div>
    </ArrowDialog>
    <GeneralHead v-if="activeSession"
      :page-title="activeSession.zh.title"
      :title="activeSession.zh.title"
      :description="activeSession.zh.description"
      :image="`https://sitcon.org/2022/imgs/sessions/${activeSession.id}.png`" />
    <GeneralHead v-else
      page-title=" 議程資訊"
      title="議程資訊 | SITCON X"
      description="大會各項一般議程與開放式議程的地點、時程一覽表"
      image="https://sitcon.org/2022/imgs/og.jpg" />
  </div>
</template>

<script>
import sessionData from '@/assets/session.json';
export default {
  name: 'AgendaTable',
  data() {
    return {
      sessionData,
    }
  },
  computed: {
    rooms() {
      // return this.sessionData.rooms.map(x => x.zh.name)
      return ['R2', 'R0', 'R1', 'R3', 'S']
    },
    times() {
      return [...new Set(
        [...this.sessionData.sessions.map(({ start }) => start),
        ...this.sessionData.sessions.map(({ end }) => end),]
      )]
        .map(x => new Date(x))
        .sort()
    },
    startTimes() {
      return [...new Set(
        [...this.sessionData.sessions.map(({ start }) => start)]
      )]
        .map(x => new Date(x))
        .sort()
    },
    gridTemplateColumns() {
      return this.rooms.map(x => `[🥞${x}]`)
    },
    gridTemplateRows() {
      let res =
        this.times
          .map(x => this.parseTime(x))
          .sort()
          .map(x => `[🥞${x}]`)
      return ['[roomname]', '[decoration-line-start]', ...res, '[🥞end]']
    },
    activeSession() {
      if (this.$route.meta.id) {
        let res = this.sessionData.sessions.find(x => x.id === this.$route.meta.id)
        res = JSON.parse(JSON.stringify(res))
        res.type = this.sessionData.session_types.filter(x => x.id === res.type)[0]?.zh?.name
        // description
        let temp = res.zh.description.split(/## 先備知識\n/)
        let description = temp[0]
        let priorKnowledge = ''
        if (temp.length > 1) {
          priorKnowledge = temp[1]
        }
        res.zh.description = description
        res.priorKnowledge = priorKnowledge
        // speakers
        res.speakers = res.speakers
          .map(x => this.sessionData.speakers.filter(y => y.id === x)[0])
          .map(x => JSON.parse(JSON.stringify(x)))
        return res
      }
    },
    // set get
    sessionModal: {
      get() {
        return !!this.activeSession
      },
      set(val) {
        if (!val) {
          this.$router.push(`/agenda/`)
        }
      }
    }
  },
  watch: {
    '$route.meta.id': function (val) {
      this.sessionModal = !!val
    },
  },
  methods: {
    getTypeById(id) {
      let hideList = ['Ev']
      if (hideList.includes(id)) {
        return null
      } else {
        return this.sessionData.session_types.filter(x => x.id === id)[0]
      }
    },
    getTagById(id) {
      return this.sessionData.tags.filter(x => x.id === id)[0]
    },
    parseTime(time) {
      return new Date(time).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).replace(/\:/g, '')
    },
    parseSessionStyle(session) {
      let start = `🥞` + this.parseTime(session.start)
      let end = `🥞` + this.parseTime(session.end)
      if (!session.broadcast) {
        return ({
          'grid-column-start': `🥞${session.room}`,
          'grid-row': `${start} / ${end}`,
        })
      } else {
        let roomStart = Math.min(...session.broadcast.map(x => this.rooms.indexOf(x)))
        let roomEnd = Math.max(...session.broadcast.map(x => this.rooms.indexOf(x)))
        roomStart = this.rooms[roomStart] || 'time'
        roomEnd = this.rooms[roomEnd + 1] || 'end'
        return ({
          'grid-column-start': `🥞${roomStart}`,
          'grid-column-end': `🥞${roomEnd}`,
          'grid-row': `${start} / ${end}`,
        })
      }
    }
  }

}

</script>
<style lang="sass" scoped>
.agenda-dialog
  font-size: 16px
  @media (max-width: 768px)
    font-size: 12px
  .agenda-dialog-header
    margin-bottom: .75em
    .agenda-title
      font-size: 2em
      line-height: 1.5
      font-weight: bold
      position: relative
      @media (max-width: 768px)
        font-size: 1.5em
      &::before
        content: ''
        width: 2em
        height: 1em
        pointer-events: none
        float: right
        z-index: -1

  .section-title,.agenda-info
    font-size: 1.5em
    font-weight: bold
    line-height: 1.5
    @media (max-width: 768px)
      font-size: 1.25em
  .tags
    font-family: 'STIX Two Text'
    font-size: 1.25em
    font-weight: bold
    .tags-title
      color: #82D357
  .agenda-dialog-content
    display: grid
    grid-template-columns: 1fr 256px
    gap: 32px
    @media (max-width: 768px)
      grid-template-columns: 1fr
      gap: 0
    .links
      display: flex
      flex-wrap: wrap
      gap: 8px
  .agenda-speaker
    display: flex
    gap: 32px
    margin-top: 32px
    @media (max-width: 768px)
      gap: 16px
      margin-top: 16px
      flex-direction: column-reverse
    .content
      flex: 1
    .agenda-speaker-name
      font-size: 1.5em
      font-weight: bold
      line-height: 1.5
      position: relative
      padding-left: .5em
      @media (max-width: 768px)
        font-size: 1.25em
      &::before
        content: ''
        width: .25em
        height: 1em
        position: absolute
        left: 0
        top: 4px
        bottom: 0
        margin: auto
        border-radius: 100em
        background-color: #82D357
    .agenda-speaker-bio
      font-size: 1em
    .agenda-speaker-avatar
      width: 256px
      height: 256px
      object-fit: cover
      object-position: top center
      border-radius: 16px
      background-color: #fff
      aspect-ratio: 1/1
      @media (max-width: 768px)
        width: 96px
        height: 96px
        border-radius: 8px
.agenda-mobile-list
  display: none
  @media screen and (max-width: 768px)
    display: flex
    flex-direction: column
    gap: 8px
  .time-item
    background-color: #82D357
    color: #383838
    border-radius: 8px
    padding: 4px 8px
    font-size: 14px
    font-weight: bold
.session-item
  background-color: #F4EEE1
  box-shadow: 0 4px 4px rgba(0, 0, 0, .25)
  border-radius: 8px
  padding: 8px
  color: #373737
  line-height: 1.75
  text-decoration: none
  &.hoverable:hover
    cursor: pointer
    background-color: #F4EEC0
  .session-title
    font-size: 16px
    font-weight: bold
  .speakers
    font-size: 14px
    color: #666666
    span:not(:first-child)
      &::before
        content: '、'
  .footer
    display: flex
    justify-content: space-between
    align-items: center
  .tags
    span
      text-transform: capitalize
      font-size: 12px
      background-color: #82D357
      padding: 3px 6px
      border-radius: 100em
      display: inline-block
      &+span
        margin-left: 4px
  .room
    color: #51823A
    font-size: 12px
.agenda-teble
  display: grid
  gap: 8px
  @media screen and (max-width: 769px)
    display: none
  .time-item
    .time-item-content
      background-color: #82D357
      border-radius: 100em
      color: #383838
      padding: 0 12px
      transform: translateY(-50%)
  .room-name
    font-weight: bold
    font-size: 36px
    text-align: center
    color: #82D357
    border-radius: 8px
    line-height: 1.2
  .session-item
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    text-align: center
    border-radius: 16px
  .decoration-container
    display: flex
    justify-content: center
    align-items: center
    .decoration-line
      background-color: #A89B85
      width: 20px
      height: 100%
      border-radius: 100em 100em 0 0

  .decoration-end
    height: 100px
    margin-top: -8px
    display: flex
    justify-content: center
    align-items: center
    .decoration-end-arrow
      background-color: #A89B85
      width: 20px
      height: 100%
      border-radius: 0 0 100em 100em
      position: relative
      &::before, &::after
        content: ''
        position: absolute
        top: 0
        left: 0
        width: 20px
        height: 100%
        border-radius: 100em 100em
        background-color: #A89B85
        transform-origin: bottom center
      &::before
        transform: translateX(-5px) translateY(10px) rotate(45deg)
      &::after
        transform: translateX(5px) translateY(10px) rotate(-45deg)

</style>
