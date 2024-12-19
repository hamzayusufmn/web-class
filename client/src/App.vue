<script setup>

import NewStudentForm from './components/NewStudentForm.vue'
import StudentTable from './components/StudentTable.vue'
import StudentMessage from './components/StudentMessage.vue'
import {onMounted} from "vue";

import {useStudentStore} from "./stores/StudentStore.js";

const studentStore  = useStudentStore()

onMounted( () => {
  studentStore.getAllStudents()
  // had an issue with this but i returned get all students and code is working now
  // always return functions in student store when creating
})

</script>

<template>
  <h1> student sign up </h1>
  <NewStudentForm></NewStudentForm>
  <StudentTable></StudentTable>
  <StudentMessage></StudentMessage>
  
</template>

<style scoped>

</style>
