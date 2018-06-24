# Vue Wait Component
[![Build Status](https://travis-ci.org/kubotak-is/vue-wait-component.svg?branch=master)](https://travis-ci.org/kubotak-is/vue-wait-component)

When load is delayed if it is later than the response.

## Usage

```bash
$ npm install vue-wait-component
or
$ yarn add vue-wait-component
```

### WaitList
API response wait component.

### WaitImg
Image response wait component.

```html
<template>
  <div>
    <wait-list
      :wait=1000
      :promiseMethod="sample()">
      <p slot="loading">loading</p>
      <div slot="loaded">
        <li v-for="val in data" :key="val.text">
          <p>{{ val.text }}</p>
        </li>
      </div>
    </wait-list>

    <wait-img
      src="https://~~~.com/~~~.jpg"
      alt="test"
      :width=300
      :wait=100>
      <p slot="loading">loading</p>
    </wait-img>
  </div>
</template>

<script>
import { WaitList, WaitImg } from 'vue-wait-component'

export default {
  components: { WaitList, WaitImg },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    sample() {
      return new Promise(resolve => {
        setTimeout(() => {
          let data = [{text: "a"}, {text: "b"}, {text: "c"}]
          resolve(data)
        }, 3000);
      }).then(response => {
        this.data = response;
      });
    },
  }
};
</script>
```
