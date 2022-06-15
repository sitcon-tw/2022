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
      <div class="session-item"
        v-for="item of sessionData.sessions"
        :style="{ ...parseSessionStyle(item) }"
        :class="{ hoverable: item.zh.description }"
        @click="openModel(item)">

        {{ item.zh.title }}
        <div class="speakers" v-if="item.speakers.length > 0">
          <span v-for="speaker of item.speakers" :key="speaker.id">
            {{ sessionData.speakers.filter(x => x.id == speaker)[0].zh.name }}
          </span>
        </div>
      </div>
    </div>
    <div class="agenda-mobile-list">
      <template v-for="time of startTimes">
        <div class="time-item">
          {{ time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, }) }}
        </div>
        <div class="session-item" v-for="item of sessionData.sessions.filter(x => new Date(x.start).toString() == time)"
          :class="{ hoverable: item.zh.description }" @click="openModel(item)">
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
              <span v-for="tag of item.tags" :key="tag">
                #{{ tag }}
              </span>
            </div>
            <div class="room">
              {{ item.room }}/{{ Math.floor((new Date(item.end) - new Date(item.start)) / 1000 / 60) }}mins
            </div>
          </div>
        </div>
      </template>
    </div>
    <ArrowDialog v-model="sessionModal">
      <div class="agenda-dialog" v-if="activeSession">
        <div class="agenda-dialog-header">
          <div class="agenda-title">
            {{ activeSession.zh.title }}
          </div>
          <div class="agenda-type">
            {{ activeSession.type }}
          </div>
        </div>
        <div class="agenda-dialog-content">
          <div class="agenda-dialog-content-description">
            <div class="tags">
              <span class="tags-title">Tags</span>: <span class="tags-content">{{ activeSession.tags.join(', ') }}</span>
            </div>
            <div class="description">
              {{ activeSession.zh.description }}
            </div>
          </div>
          <div class="agenda-dialog-content-info"></div>
        </div>
      </div>
    </ArrowDialog>
    <GeneralHead v-if="activeSession"
      :page-title="activeSession.zh.title"
      :title="activeSession.zh.title"
      :description="activeSession.zh.description"
      image="https://sitcon.org/2022/imgs/og.jpg" />
    <GeneralHead v-else
      page-title=" 議程資訊"
      title="議程資訊 | SITCON X"
      description="議程"
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
      sessionModal: false,
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
          .map(x => `[🥞${x}]`)
      return ['[roomname]', '[decoration-line-start]', ...res, '[🥞end]']
    },
    activeSession() {
      if (this.$route.meta.id) {
        let res = this.sessionData.sessions.find(x => x.id === this.$route.meta.id)
        res = JSON.parse(JSON.stringify(res))
        res.type = this.sessionData.session_types.filter(x => x.id === res.type)[0]?.zh?.name
        return res
      }
    },
  },
  created() {
    if (this.$route.meta.id) {
      this.sessionModal = true
    }
  },
  watch: {
    '$route.meta.id': function (val) {
      this.sessionModal = !!val
    },
    sessionModal(val) {
      if (!val) {
        this.$router.push(`/agenda/`)
      }
    },
  },
  methods: {
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
    },
    openModel(session) {
      if (session.zh.description) {
        this.$router.push(`/agenda/${session.id}`)
      }
    }
  }

}

</script>
<style lang="sass" scoped>
.agenda-dialog
  color: #373737
  .agenda-title
    font-size: 36px
    font-weight: bold
  .agenda-type
    font-size: 24px
    font-weight: bold
    line-height: 1.5
  .tags
    font-family: 'STIX Two Text'
    font-size: 24px
    font-weight: bold
    .tags-title
      color: #82D357
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
        padding: 4px 8px
        border-radius: 100em
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
    font-family: 'STIX Two Text', serif
    font-weight: bold
    font-size: 36px
    text-align: center
    color: #82D357
    border-radius: 8px
    line-height: 1.2
  .session-item
    background-color: #F4EEE1
    color: #383838
    border-radius: 20px
    padding: 8px 16px
    text-align: center
    font-size: 14px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    &.hoverable:hover
      cursor: pointer
      background-color: #F4EEC0
    .speakers
      font-size: 12px
      color: #666666
      span:not(:first-child)
        &::before
          content: '、'
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
