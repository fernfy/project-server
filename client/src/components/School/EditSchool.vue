<template>
    <div>
        <h1>Edit School</h1>
        <form v-on:submit.prevent="Edit School">
            <div style="background-color:#98FB98; border-radius:10px; border: 1px black solid;">
            Edit School 
</div>
            <p>ชื่อโรงเรียน : <input type="text" v-model="School.Name"></p>
            <p>ค่าเทอม: <input type="text" v-model="School.price"> </p>
            <p>หลักสูตร : <input type="text" v-model="School.course"> </p>
            <p>ระดับชั้น : <input type="text" v-model="School.Class"> </p>
           <button v-on:click="navigateTo('/ovens')">กลับ</button>
          
      </form>
        <hr>
    </div>
</template>

<script>

import SchoolService from '@/services/SchoolService'

export default {
  data() {
    return {
        School: {
                Name: '',
                Price: '',
                Course : '',
                Class: '',
        }
    }
  },

  methods: {
    async editSchool () {
                try {
                    await SchoolService.put(this.School)
                    this.$router.push({
                        name: 'school'
                    })
                }catch (error) {
                    console.log(error)
                }
            }
        },
        async created () {
            try {
                let schoolId = this.$route.params.schoolId
                this.school = (await SchoolService.show(schoolId)).data
            }catch (error) {
                console.log (error)
            }
        }
    }
</script>
<style scoped>

</style>