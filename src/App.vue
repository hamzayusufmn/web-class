<script setup>
import { ref } from 'vue';
import WouldYouRather from './components/WouldYouRather.vue'
// projects need to be modifed to project i am working on for this i changed it to would you rather

const wyrQuestion = ref('Would you rather live in a house shaped like a triangle or a circle?');
const wyrAnswer1 = ref('Triangle house')
const wyrAnswer2 = ref('Circle house')

// this is reactive data and asks user is they choose a circle or triangle house

// this will store the user answer when they pick we dont know so we leave it on empty string
const userSelection = ref('');

function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! You chose ${userChoice}` // this will update with this message when user selects a choice
  // whatever is in choice value will be entered here, for example it will print out thank you chose ... either circle or triangle


}
</script>



<template>
  <h1>Would You Rather?</h1>
  <WouldYouRather
      v-bind:question="wyrQuestion"
      v-bind:answer1="wyrAnswer1"
      v-bind:answer2="wyrAnswer2"
      v-on:answer-selected="updateUserSelection"
  ></WouldYouRather>

  <!--when an answer is selected and changed it will update and  -->

  <p>{{ userSelection }}</p>
</template>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

p {
  margin-top: 20px;
  color: indianred;
}
</style>