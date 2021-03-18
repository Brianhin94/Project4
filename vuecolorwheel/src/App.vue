<template>
  <div id="app">
    <h1>Vue Color Picker Wheel</h1>
    <color-picker v-model="color"></color-picker>
    <div class="selected-color-info">
      <p>Copy this color for your code!</p>

      <svg height="32" width="32">
        <circle cx="16" cy="16" r="15" :fill="color" />
      </svg>
    </div>
    <p>{{ color }}</p>
    <button type="button"
 v-clipboard:copy="message"
 v-clipboard:success="onCopy"
 v-clipboard:error="onError">Copy!</button>
    <h8
      ><p>
        Find more of my work on
        <a
          href="https://github.com/Brianhin94"
          title="Places to find more of my work"
          >Github</a
        >!
      </p></h8
    >
    <h10
      ><p>
        Or connect with me on
        <a
          href="https://www.linkedin.com/in/brian-hinchey/"
          title="Places to connect with me"
          >LinkedIn</a
        >!
      </p></h10
    >
  </div>
</template>

<script>
import ColorPicker from "vue-color-picker-wheel";


export default {
  name: "App",
  components: {
    ColorPicker,
    
  },
  data() {
    return {
      color: "#ff6600",
    };
  },
}
</script>



<style>
@import url(https://fonts.googleapis.com/css?family=Barlow);
#app {
  font-family: "Barlow", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  min-height: 100vh;
  padding: 0.01em;
  background-image: linear-gradient(to right, #c75509, #1668b5);
}

#color-wheel {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}
 

.selected-color-info {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-size-adjust: inherit;
  font-style: bold;
}
</style>

