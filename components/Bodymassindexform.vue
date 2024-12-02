<script setup>

import {ref} from "vue";

const userHeight = ref(0)
const userWeight = ref(0)

// this data is reactive data for user height and weight

const emit = defineEmits([`user-entered-data`])


const UserHasEnteredData = () => {
  // thus will be called when user clicks button
  // this needs to tell app vue that data is available
  emit(`user-entered-data`, userHeight.value, userWeight.value)

}

 // what to do
// what it stores
</script>

<template>

  <h2> enter your height and weight</h2>


  <label> Height in meters </label>
  <input v-model ="userHeight">

  <br>

  <label> Weight in kilograms </label>
  <input v-model="userWeight">
  <br>

  <button v-on:click="UserHasEnteredData"> Calculate </button>
<!--  when user enters data the const user enter data will use weight height added and will calcute and app.vue will display bmi -->
</template>

<style scoped>
button{
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;

}

</style>