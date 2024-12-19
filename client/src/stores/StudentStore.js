import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mande } from 'mande'

const studentApi = mande('api/students')

export const useStudentStore = defineStore('students', () => {

    const sortedStudents = ref([])

    const mostRecentStudent = ref({})
    const addNewStudentsErrors = ref([])

    function getAllStudents() {
        // this will make api request to get students and save them in storeS
        studentApi.get().then(students => {
            sortedStudents.value = students
        }).catch(err => {
            addNewStudentsErrors.value = err.body
        })
    }

    function addNewStudent(student) {
        studentApi.post(student).then(() => {
            getAllStudents()
            // this will request students in the list and once list is updated browser should update
        }).catch(err => {
            addNewStudentsErrors.value = err.body

        })

    }

    function deleteStudent(studentToDelete) {
        const deleteStudentAPI = mande(`/api/students/${studentToDelete.id}`)
        deleteStudentAPI.delete().then( () => {
            getAllStudents()
            mostRecentStudent.value = {}
        }) .catch(err => {
            console.log(err)
        })
        // student id like 2,3,4 on httpi will allow for students selected to be deleted
        // each number is only used once as id and if u enter number that isnt there message indicting student wasnt found
        // will pop up

    }

    function arrivedOrLeft(student) {
     const editStudentAPI = mande(`/api/students/${student.id}`)
        editStudentAPI.patch(student).then ( () => {
            getAllStudents()
            mostRecentStudent.value = student
            // added this because it wasnt here
            // this will delete student and then get all students after it has been succesfully delete
        }).catch(err => {
            addNewStudentsErrors.value = err.body
        })
    }



    const studentCount = computed(() => {
        return sortedStudents.value.length
    })

    return {
        // reactive data
        // studentList,
        mostRecentStudent,
        sortedStudents,
        addNewStudentsErrors,
        // functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        // computed properties

        studentCount,
        getAllStudents


    }
})

