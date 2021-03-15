import { createApp } from 'vue'
import App from './App.vue'
import { Photoshop } from 'vue-color'

new Vue({
    el: '#app',
    components: {
      'material-picker': material,
      'compact-picker': compact,
      'swatches-picker': swatches,
      'slider-picker': slider,
      'sketch-picker': sketch,
      'chrome-picker': chrome,
      'photoshop-picker': photoshop
    },
    data () {
      return {
        colors
      }
    }
  })

createApp(App).mount('#app')
