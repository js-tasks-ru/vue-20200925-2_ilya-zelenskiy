<template>
  <div v-if="toasts" class="toasts">
    <div v-for="toast in toasts" :key="toast.id" class="toast toast_success" :class="`toast_${toast.type}`">
      <app-icon :icon="toast.type === 'error' ? 'alert-circle' : 'check-circle'"/>
      <span>{{ toast.message }}</span>
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon';

const DELAY = 5000;

export default {
  name: 'AppToast',

  components: { AppIcon },

  data() {
    return {
      toasts: [],
    };
  },

  methods: {
    error(message) {
      this.toasts.push({
        id: Math.random(),
        type: 'error',
        message,
      });
      setTimeout(() => {
        this.toasts.shift();
      }, DELAY);
    },

    success(message) {
      this.toasts.push({
        id: Math.random(),
        type: 'success',
        message,
      });
      setTimeout(() => {
        this.toasts.shift();
      }, DELAY);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast > .icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
