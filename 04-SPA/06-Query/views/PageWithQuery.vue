<template>
  <div class="container">
    <meetups-view
      :participation.sync="participation"
      :date.sync="date"
      :view.sync="view"
      :search.sync="search"/>
  </div>
</template>

<script>
import MeetupsView from '../components/MeetupsView';

export const tmpl = function(name, defVal) {
  return {
    [name]: {
      get() {
        return this.$route.query[name];
      },
      set(value) {
        const { [name]: queryProp, ...query } = this.$route.query || {};
        if (queryProp === value) {
          return;
        }
        if (value !== defVal) {
          query[name] = value;
        }
        this.$router.replace({
          path: '/',
          query,
        });
      },
    },
  };
};

export const prepare = function() {
  const defaults = {
    view: 'list',
    participation: 'all',
    date: 'all',
    search: '',
  };
  return {
    ...tmpl('view', defaults.view),
    ...tmpl('participation', defaults.participation),
    ...tmpl('date', defaults.date),
    ...tmpl('search', defaults.search),
  };
};

export default {
  name: 'PageWithQuery',
  components: { MeetupsView },
  computed: {
    ...prepare(),
  },
};
</script>

<style scoped></style>
