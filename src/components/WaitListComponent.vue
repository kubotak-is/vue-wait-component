<template>
  <div>
    <slot name="loading" v-if="isLoading && !isLoaded"></slot>
    <slot name="loaded" v-if="isLoaded"></slot>
  </div>
</template>

<script>
  export default {
    props: {
      wait: {
        type: Number,
        default: 500,
      },
      promiseMethod: {
        type: Promise,
        required: true,
      },
    },
    data() {
      return {
        isLoading: false,
        isLoaded: false,
      }
    },
    mounted() {
      setTimeout(() => {
        this.isLoading = true;
      }, this.wait);
      this.promiseMethod.then(() => {
        this.isLoaded = true;
      });
    }
  };
</script>
