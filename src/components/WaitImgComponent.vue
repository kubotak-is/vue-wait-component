<template>
  <div>
    <slot name="loading" v-if="isLoading && !isLoaded"></slot>
    <img v-if="isLoaded" :class="classes" :src="src" :alt="alt" :width="width" :height="height">
  </div>
</template>

<script>
  import 'whatwg-fetch'
  export default {
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: "",
      },
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
      wait: {
        type: Number,
        default: 500,
      },
    },
    data() {
      return {
        isLoading: false,
        isLoaded: false,
        classes: [],
      }
    },
    mounted() {
      let classList = Array(this.$el.classList).map(e => {
        return e.value;
      });
      this.classes = classList.join([' ']);
      this.$el.classList = [];

      setTimeout(() => {
        this.isLoading = true;
      }, this.wait);
      fetch(this.src).then(response => {
        if (response.ok && response.status === 200) {
          this.isLoaded = true;
        }
      });
    }
  };
</script>
