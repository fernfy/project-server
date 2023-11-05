<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <h1 class="d-flex justify-content-center">Show School</h1>
            <div style="border: solid 1px; border-radius: 10px; padding-top: 2vh; background-color:rgb(217, 251, 255);">
                <p class="d-flex justify-content-center input-group inputGroup-sizing-sm">School ID: {{ hospital.id }}</p>
               
                <p class="d-flex justify-content-center input-group inputGroup-sizing-sm">ชื่อโรงเรียน: <input class="form-control" type="text" v-model="School.name"></p>
                <p class="d-flex justify-content-center input-group inputGroup-sizing-sm">ค่าเทอม: <input class="form-control" type="text" v-model="School.price"></p>
                <p class="d-flex justify-content-center input-group inputGroup-sizing-sm">หลักสูตร: <input class="form-control" type="text" v-model="School.course"></p>
                <p class="d-flex justify-content-center input-group inputGroup-sizing-sm">ระดับชั้น: <input class="form-control" type="text" v-model="School.class"></p>
                <p class="d-flex justify-content-center input-group inputGroup-sizing-sm"><button class="btn btn-danger form-control" v-on:click="navigateTo('/School/')">กลับ</button></p>
            </div>
        </div>
    </div>
</template>
<script>
import SchoolService from '@/services/SchoolService';

export default {
        data () {
            return {
                School: null
            }
        },
        async created () {
            try {
                let SchooleId = this.$route.params.SchoolId
                this.School = (await SchoolService.show(SchoolId)).data
            }catch (error) {
                console.log (error)
            }
        },
        methods: {
            navigateTo (route) {
                this.$router.push(route)
            },
        }

    }
</script>
<style scoped>


</style>
  