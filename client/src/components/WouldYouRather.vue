<script setup>
import { ref } from 'vue'

defineProps({
  question: String,
  answer1: String,
  answer2: String,
  // this will expect answer 1 or answer 2 and asks the user for their choice


})
 const emit = defineEmits([
     'answer-selected'])

const choice = ref(null)
// this will wait until user selects a choice between circle and triangle and

// this is a child component and these consts are brought from app.vuee

  // when it changes answer selected will be updated, with this additon it will remove us using v-on change

function choiceMade() {
  emit('answer-selected', choice.value)
}
</script>

<template>
<div id="wyr"></div>

  <h1> choose one please</h1>

  <div id="question">
    {{ question }}
  </div>

  <div id="answers">
    <input type="radio" id="answer-1" v-model="choice" v-bind:value="answer1" v-on:change="choiceMade">
    <label for="answer-1"> {{ answer1 }}</label>

    <input type="radio" id="answer-2" v-model="choice" v-bind:value="answer2" v-on:change="choiceMade">
    <label for="answer-2"> {{ answer2 }}</label>
  </div>
<!-- we will give it values to assoicate a unique value
 when the first is selected it will be answer 1 and the second will be answer 2 the v-model choice will allow user to select and binds -->





</template>

<style scoped>
wyr {
  background-color: mediumaquamarine;
}

label {
margin-left: 5px;
}
p {
  font-family: "Apple Symbols";
}
</style>
