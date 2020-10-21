/*
  Полезные функции по работе с датой можно описать вне Vue компонента
 */

export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  template: `
    <div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button class="rangepicker__selector-control-left" @click="previous"></button>
          <div>{{ fullDate }}</div>
          <button class="rangepicker__selector-control-right" @click="next"></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
        <div v-for="oneDay in days" :key="oneDay.index" class="rangepicker__cell"
             :class="{'rangepicker__cell_inactive': oneDay.inactive}">
          {{ oneDay.day }}
          <a v-for="meetup in oneDay.meetups" :key="meetup.id" class="rangepicker__event">{{ meetup.title }}</a>
        </div>
      </div>
    </div>
    </div>`,

  props: {
    meetups: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      date: new Date(),
    };
  },
  computed: {
    fullDate() {
      return this.date.toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
      }).replace(' г.', '');
    },
    firstDay() {
      return new Date(new Date(this.date).setDate(1));
    },
    meetupsMap() {
      const map = {};

      this.meetups.forEach((item) => {
        const dayNumber = new Date(item.date).toLocaleDateString();
        map[dayNumber] = map[dayNumber] || [];
        map[dayNumber].push(item);
      });

      return map;
    },
    days() {
      const currentMonth = this.date.getMonth();
      const firstDayOfMonth = this.firstDay.getDay();
      const firstDayOfGrid = (firstDayOfMonth !== 0) ? new Date(this.firstDay).setDate(this.firstDay.getDate() - firstDayOfMonth) : new Date(this.firstDay).setDate(-6);
      let startDate = new Date(firstDayOfGrid);
      let hideEnd = false;

      return [...new Array(6 * 7)]
        .map((_, index) => {
          startDate.setDate(startDate.getDate() + 1);

          const inactive = startDate.getMonth() !== currentMonth;
          const dayID = startDate.toLocaleDateString();

          if (index > 0 && inactive && !(index % 7)) {
            hideEnd = true;
          }

          return {
            day: startDate.toLocaleString(navigator.language, {
              day: 'numeric',
            }),
            inactive,
            dayID,
            meetups: this.meetupsMap[dayID],
            hideEnd,
            index,
          };
        })
        .filter(({ hideEnd }) => !hideEnd);
    },
  },
  methods: {
    previous() {
      this.date = new Date(new Date(this.firstDay).setMonth(this.firstDay.getMonth() - 1));
    },
    next() {
      this.date = new Date(new Date(this.firstDay).setMonth(this.firstDay.getMonth() + 1));
    },
  },

  // Пропсы

  // В качестве локального состояния требуется хранить что-то,
  // что позволит определить текущий показывающийся месяц.
  // Изначально должен показываться текущий месяц

  // Вычислимые свойства помогут как с получением списка дней, так и с выводом информации

  // Методы понадобятся для переключения между месяцами
};
