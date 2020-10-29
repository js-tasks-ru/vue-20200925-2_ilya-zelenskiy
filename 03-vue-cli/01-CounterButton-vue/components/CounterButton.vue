<template>
  <div>
    <button type="button" @click="changeCount">{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: "CounterButton",
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  model: {
    prop: 'count',
    event: 'increment',
  },
  methods: {
    changeCount() {
      this.$emit('increment', this.count + 1);
    },
  },
};
</script>

<style></style>
