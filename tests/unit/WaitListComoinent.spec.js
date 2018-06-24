import { shallowMount } from '@vue/test-utils'
import WaitList from '@/components/WaitListComponent.vue'

it('promise response is slower than wait', done => {
  const promiseMethod = new Promise(resolve => {
    setTimeout(() => {
      let data = [{text: "a"}, {text: "b"}, {text: "c"}]
      resolve(data)
    }, 500)
  })

  const wrapper = shallowMount(WaitList, {
    propsData: {
      wait: 250,
      promiseMethod: promiseMethod
    }
  })
  promiseMethod.then(() => {
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.isLoading).toBe(true)
      expect(wrapper.vm.isLoaded).toBe(true)
      done()
    })
  })
})

it('promise response is faster than wait', done => {
  const promiseMethod = new Promise(resolve => {
    setTimeout(() => {
      let data = [{text: "a"}, {text: "b"}, {text: "c"}]
      resolve(data)
    }, 250)
  })

  const wrapper = shallowMount(WaitList, {
    propsData: {
      wait: 500,
      promiseMethod: promiseMethod
    }
  })
  promiseMethod.then(() => {
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.isLoading).toBe(false)
      expect(wrapper.vm.isLoaded).toBe(true)
      done()
    })
  })
})
