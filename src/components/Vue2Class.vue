<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div class="link" @click="$router.push('/vue2')">
           Go to Home
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

// Define the component in class-style
@Component
class Vue2Class extends Vue {
  // Class properties will be component data
  msg = 'Welcome to Vue2 Class!'
}

export default Vue2Class
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a, .link {
    color: #42b983;
    cursor: pointer;
}
</style>