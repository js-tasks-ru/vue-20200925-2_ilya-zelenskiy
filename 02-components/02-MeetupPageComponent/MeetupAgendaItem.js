import {agendaItemIcons , agendaItemTitles} from './data.js';
export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="\`/assets/icons/icon-\${icon}.svg\`" />
      </div>
      <div class="meetup-agenda__item-col">{{agendaItem.startsAt}} - {{ agendaItem.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ agendaItem.title ? agendaItem.title : title }}</h5>
        <p v-if="agendaItem.type == 'talk'">
          <span>Докладчик</span>
          <span class="meetup-agenda__dot">{{agendaItem.speaker}}</span>
          <span class="meetup-agenda__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,

  // props
  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    title() {
      return agendaItemTitles[this.agendaItem.type];
    },
    icon() {
      return agendaItemIcons[this.agendaItem.type];
    },
  },
};
