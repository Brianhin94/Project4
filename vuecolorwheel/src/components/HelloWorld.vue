<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>My Color Wheel!</p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style scoped>
h3 {
  margin: 40em 0 0;
}
ul {
  list-style-type: none;
  padding: 2em;
}
li {
  display: inline-block;
  margin: 0 10em;
}
a {
  color: #da5b21;
}
</style>
