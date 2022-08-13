<template>
  <div class="item-wrapper">
    <div class="header">
      <div class="price">
        {{ ticket.price }} P
      </div>

      <div class="logo">
        <img :src="logoImg" alt="logo">
      </div>
    </div>

    <div class="content">
      <div class="schedule">
        <div class="content-title">
          {{ ticket.info.origin }} – {{ ticket.info.destination }}
        </div>
        <div class="content-value">
          {{ formatTime(ticket.info.dateStart) }} – {{ formatTime(ticket.info.dateEnd) }}
        </div>
      </div>

      <div class="time">
        <div class="content-title">В пути</div>
        <div class="content-value">
          {{ convertMsToHM(ticket.info.duration) }}
        </div>
      </div>

      <div class="transfers">
        <div class="content-title">
          {{ ticket.info.stops.length ? `${ticket.info.stops.length} пересадки` :  'Без пересадок'}}
        </div>
        <div class="content-value">
          {{ ticket.info.stops.join(', ') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type {PropType} from 'vue'
import { format } from 'date-fns'
import { CompanyDto, TicketDto } from '~/core/entities/consts'

export default {
  name: "ticket-list-item",
  props: {
    ticket: {
      type: Object as PropType<TicketDto>,
      required: true,
    },
    companies: {
      type: Array as PropType<CompanyDto[]>,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    logoImg(): string {
      const path = this.companies?.find((item: CompanyDto) => item.id === this.ticket?.companyId)?.logo
      return path ? require(`~/assets/images/${path}`) : ''
    },
  },
  methods: {
    formatTime(value: string) {
      return format(new Date(value), 'HH:mm')
    },
    padTo2Digits(num: number) {
      return num.toString().padStart(2, '0');
    },
    convertMsToHM(milliseconds: number) {
      let seconds = Math.floor(milliseconds / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);

      seconds = seconds % 60;
      minutes = seconds >= 30 ? minutes + 1 : minutes;
      minutes = minutes % 60;
      hours = hours % 24;

      return `${this.padTo2Digits(hours)}ч ${this.padTo2Digits(minutes)}м`;
    }
  },
}
</script>

<style scoped>
.item-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 5px;
  background: #FFF;
  box-shadow: 0 2px 8px rgba(0 0 0 / 10%);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
}

.content-title {
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #A0B0B9;
}

.price {
  font-size: 24px;
  line-height: 24px;
  color: #2196F3;
}

.logo img {
  height: 36px;
  object-fit: cover;
}
</style>
