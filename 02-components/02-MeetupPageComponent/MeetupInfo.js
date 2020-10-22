export const MeetupInfo = {
  template: `<ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="ISODate">{{ normilize }}</time>
      </li>
    </ul>`,

  props: {
    organizer: {
      type: String,
      required: true, //Invalid prop: type check failed for prop "organizer". Expected String with value "undefined", got Undefined
    },
    place: {
      type: String,
      required: true, //Invalid prop: type check failed for prop "place". Expected String with value "undefined", got Undefined
    },
    date: {
      type: Date,
      required: true, //Invalid prop: type check failed for prop "date". Expected Date, got Undefined
    },
  },
  computed: {
    normilize() {
      return this.date.toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    ISODate() {
      return this.date.toISOString().substr(0, 10); //Error in render: "RangeError: Invalid time value"
    },
  },
};
