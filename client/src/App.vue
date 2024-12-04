<script setup>
import { ref, onMounted } from 'vue';
import WouldYouRather from './components/WouldYouRather.vue'
import wyrService from "./services/wyrService.js";

// projects need to be modifed to project i am working on for this i changed it to would you rather

const wyrQuestion = ref('');
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')

onMounted( () => {
  wyrService.getRandomWYR().then((wyrData) => {
        wyrQuestion.value = wyrData.question
        wyrAnswer1.value = wyrData.answer1
        wyrAnswer2.value = wyrData.answer2
      })
  // yhis allows for our answer an questions to change from our previous circle ot triangle
  // the random generator will fetch a random question and answer to be selected each time i reload the page, it updates automaticlly

})

// this is reactive data and asks user is they choose a circle or triangle house

// this will store the user answer when they pick we dont know so we leave it on empty string
const userSelection = ref('')


// then serves as a promise expects our data be something like questions
// play any musical instrument, speak any languages
// when it doesnt have server listed it will added automatic, to fix we will complete proxying, the server will pass request using this
// cors error arent allowed, if its same orgin that is allowed




function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! You chose ${userChoice}` // this will update with this message when user selects a choice
  // whatever is in choice value will be entered here, for example it will print out thank you chose ... either circle or triangle


}
</script>



<template>
  <div id="app">
  <h1> Hello! Would You Rather?</h1>


  <WouldYouRather
      v-bind:question="wyrQuestion"
      v-bind:answer1="wyrAnswer1"
      v-bind:answer2="wyrAnswer2"
      v-on:answer-selected="updateUserSelection"
  ></WouldYouRather>

  <!--when an answer is selected and changed it will update and  -->

  {{ userSelection }}

  </div>

</template>

<style scoped>
#app{
  color: mediumpurple;
}
h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

p {
  margin-top: 20px;
  color: indianred;
}
</style>