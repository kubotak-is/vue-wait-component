import { shallowMount } from '@vue/test-utils'
import WaitImg from '@/components/WaitImgComponent.vue'

describe('testing waitImgComponent', () => {

  it('fetch response is slower than wait', done => {
    let promise = new Promise(resolve => {
      setTimeout(() => {
        let response = {
          ok: true,
          status: 200
        }
        resolve(response)
      }, 500)
    })
    window.fetch = jest.fn().mockImplementation(() => promise);
    const wrapper = shallowMount(WaitImg, {
      propsData: {
        wait: 250,
        src: "http://abc.com/img.jpg"
      }
    })

    promise.then(() => {
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.isLoading).toBe(true)
        expect(wrapper.vm.isLoaded).toBe(true)
        done()
      })
    })
  })

  it('fetch response is slower than wait', done => {
    let promise = new Promise(resolve => {
      setTimeout(() => {
        let response = {
          ok: true,
          status: 200
        }
        resolve(response)
      }, 250)
    })
    window.fetch = jest.fn().mockImplementation(() => promise);
    const wrapper = shallowMount(WaitImg, {
      propsData: {
        wait: 500,
        src: "http://abc.com/img.jpg"
      }
    })

    promise.then(() => {
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.isLoading).toBe(false)
        expect(wrapper.vm.isLoaded).toBe(true)
        done()
      })
    })
  })

})
