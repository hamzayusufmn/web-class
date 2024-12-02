<script setup>
import Bodymassindexform from "./components/Bodymassindexform.vue";
// this is considered the child component and it will be brought over here

import{ref} from "vue";



const bmi = ref(0)

// in our app before we enter data it will store as 0 and once data is entered it will change

const calculateBMI= (height, weight) => {

  bmi.value  = (weight / (height * height).toFixed(2))
  // this calculation will show user bmi, this was given to use in the instructions and
  // for future refernces when using inches and pins it would be the same by * 730

  }
// we manage one file for a more complex app with vue component
// child can contain other components  and parent component can receive messages from other components

// create a function that gets called
</script>

<template>
  <h1>  Body Mass Index Calculator</h1>
  <Bodymassindexform v-on:user-entered-data="calculateBMI"/>
  <div> Your BMI is: {{ bmi }}</div>

  <!-- todo set this up to ecpect a message
  this will show the bmi when users enter data and the v-on user entering the data waits for emit event  which is the user height and weight

  we learned parse in future labs and to add two decimal places i learned this and used https://stackoverflow.com/questions/56007730/decimal-formatting-in-vue-framework
  to show credit for code i added on line 15, my code worked but it gave me a yellow signs and to fix i added extra ) to make code have no warning -->




</template>




<style scoped>

div {
  text-align: center;
  margin-top: 20px;
  font-size: 1.2em;
  color: cadetblue;
}





</style>
