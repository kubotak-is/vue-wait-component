<template>
  <div class="col-6 p-2 mx-auto">
    <div class="Subhead">
      <div class="Subhead-heading">Vue Wait Component</div>
    </div>

    <div class="container-lg clearfix">
      <div class="col-sm-6 float-left p-2">
        <label>loating wait</label>
        <input type="range" name="wait" v-model="wait" min="0" max="1000" step="100" style="width: 100%;">
      </div>
      <div class="col-sm-2 float-left p-2">
        <p>{{ wait }}ms</p>
      </div>
      <div class="col-sm-4 float-left p-2">
        <button class="btn" type="button" @click="submit">Submit</button>
        <button class="btn btn-danger" type="button" @click="reset">Reset</button>
      </div>
    </div>

    <div class="container-lg clearfix">
      <div class="col-sm-6 float-left p-2">
        <label>api response latency</label>
        <input type="range" name="latency" v-model="latency" min="0" max="1000" step="100" style="width: 100%;">
        <p>{{ latency }}ms</p>
        <wait-list
          v-if="isList"
          :wait="Number(wait)"
          :promiseMethod="sample()">
          <p slot="loading">loading</p>
          <div slot="loaded">
            <nav class="menu" aria-label="Person settings">
              <a class="menu-item"  v-for="val in data" :key="val.text">{{ val.text }}</a>
            </nav>
          </div>
        </wait-list>
      </div>

      <div class="col-sm-6 float-left p-2">
        <wait-img
          v-if="isImg"
          class="avatar"
          src="https://4.bp.blogspot.com/-H4YfqE0zNr8/WwofRfOyapI/AAAAAAABMYA/h97Wvj7YYQYLslHxT3VIKFSZjxWazMMBQCLcBGAs/s800/internet_gazou_ninsyou.png"
          alt="test"
          :width=300
          :wait="Number(wait)">
          <p slot="loading">loading</p>
        </wait-img>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
@import "primer/index.scss";
</style>

<script>
  import WaitList from '@/components/WaitListComponent.vue'
  import WaitImg from '@/components/WaitImgComponent.vue'

  export default {
    components: { WaitList, WaitImg },
    data() {
      return {
        wait: 0,
        latency: 0,
        isImg: false,
        isList: false,
        data: [],
      };
    },
    methods: {
      submit() {
        this.isImg = true;
        this.isList = true;
      },
      reset() {
        this.isImg = false;
        this.isList = false;
      },
      sample() {
        return new Promise(resolve => {
          setTimeout(() => {
            let data = [{text: "a"}, {text: "b"}, {text: "c"}]
            resolve(data)
          }, Number(this.latency));
        }).then(response => {
          this.data = response;
        });
      },
    }
  };
</script>
