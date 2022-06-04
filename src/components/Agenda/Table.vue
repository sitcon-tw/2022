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
      <!-- room -->
      <div class="room-name" v-for="room of rooms" :style="{
        'grid-column-start': `🥞${room}`,
        'grid-row-start': 'roomname'
      }">
        {{ room }}
      </div>
      <!-- sessions -->
      <div class="session-item" v-for="item of sessionData.sessions" :style="{ ...parseSessionStyle(item) }" @click="openModel(item)">
        {{ item.zh.title }}
      </div>
    </div>

    <modal v-model="sessionModal">
      <div class="modal-frame" v-if="activeSession">
        <div class="modal-header">
          <h2 class="text-center title"> {{ activeSession.zh.title }}</h2>
        </div>
        <div class="modal-content">
          <pre>
            {{ activeSession }}
          </pre>
        </div>
      </div>
    </modal>

    <GeneralHead v-if="activeSession"
      :page-title="activeSession.zh.title"
      :title="activeSession.zh.title"
      :description="activeSession.zh.description"
      image="https://sitcon.org/2022/imgs/cfp/cfp-og.png" />
    <GeneralHead v-else
      page-title="議程"
      title="議程"
      description="議程"
      image="https://sitcon.org/2022/imgs/cfp/cfp-og.png" />
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
        this.sessionData.sessions.map(({ start }) => start),
        this.sessionData.sessions.map(({ end }) => end),
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
      return ['[roomname]', ...res]
    },
    activeSession() {
      if (this.$route.meta.id) {
        return this.sessionData.sessions.find(x => x.id === this.$route.meta.id)
      }
    },
  },
  mounted() {
    if (this.$route.meta.id) {
      this.sessionModal = true
    }
  },
  watch: {
    sessionModal(to, from) {
      if (!to) {
        this.$router.push(`/agenda/`)
      }
    },
    '$route.meta.id': function (to, from) {
      this.sessionModal = !!to
    }
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
      this.$router.push(`/agenda/${session.id}`)
    }
  }

}

</script>
<style lang="sass" scoped>
.agenda-teble
  display: grid
  gap: 8px
  .time-item
    .time-item-content
      background-color: #82D357
      border-radius: 100em
      color: #383838
      padding: 0 12px
      transform: translateY(-50%)
  .room-name
    font-weight: bold
    font-size: 22px
    text-align: center
    background-color: rgba(255,255,255,0.25)
    border-radius: 8px
  .session-item
    background-color: #F4EEE1
    color: #383838
    border-radius: 20px
    padding: 8px 16px
    text-align: center
    cursor: pointer
    &:hover
      background-color: #F4EEC0
</style>
