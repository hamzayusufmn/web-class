<script setup>
import { ref, watch } from 'vue'

defineProps({
  question: String,
  answer1: String,
  answer2: String,
  // this will expect answer 1 or answer 2 and asks the user for their choice


})
 const emit = defineEmits(['answer-selected'])
const choice = ref('')
// this will wait until user selects a choice between circle and triangle and

// this is a child component and these consts are brought from app.vuee
// function choiceMade() {
 //  emit('answer-selected', choice.value)
// }

watch(choice, ()=> {
  emit('answer-selected', choice.value)
  // when it changes answer selected will be updated, with this additon it will remove us using v-on change
})
</script>

<template>
<div id="wyr"></div>

  <h1> choose one please</h1>
  <p>{{ question }}</p>

<div>
  <input v-model="choice"  v-bind:value="answer1" type="radio" id="answer1" >
  <label for="answer1"> {{ answer1}}</label>

  <input v-model="choice" v-bind:value="answer2"  type="radio" id="answer2" >
  <label for="answer2">{{ answer2 }}</label>

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
