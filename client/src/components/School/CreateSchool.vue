<template>
    <div>
        <h1>Create School</h1>
        <form v-on:submit.prevent="createOven"><div style="border-radius:10px; border: 1px black solid;">
  <div style="background-color:#98FB98;"> Create School
    
  </div>
</div>
        
            <p>ชื่อโรงเรียน : <input type="text" v-model="School.Name"></p>
            <p>ค่าเทอม: <input type="text" v-model="School.price"> </p>
            <p>หลักสูตร : <input type="text" v-model="School.course"> </p>
            <p>ระดับชั้น : <input type="text" v-model="School.Class"> </p>
            <p><button type="submit">Create School</button></p>
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
        async createSchool () {
                try {
                    await SchoolService.post(this.School)
                    this.$router.push({
                        name: 'School'
                    })
                }catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>
<style scoped>

</style>