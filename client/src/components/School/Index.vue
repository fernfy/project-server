<template>
    <div>
        <b-container class="bv-example-row">
  <b-row class="text-center">
           <b-col></b-col>
           <b-col cols="10" class="bg3">
            <center>
              <h1><b>Get school all</b></h1>
              <h5>จำนวนโรงเรียน {{ School.length }} </h5>
              <hr>
            </center>
              <div class="col-btn">
               
               <a class="btn btn-secondary" v-on:click="navigateTo('school/create')"><i
                 class="material-icons"></i> <span>เพิ่มข้อมูล</span></a>
            </div>
  
            <br>  
  
  
            <div>
                 <thead>
                    <div class="d-flex justify-content-center">id: {{  School.id }}</div>
                    <div class="d-flex justify-content-center">ชื่อโรงเรียน {{  School.name }} </div>
                    <div class="d-flex justify-content-center">ค่าเทอม: {{  School.price }}</div>
                    <div class="d-flex justify-content-center">หลักสูตร: {{ School.course }}</div>
                    <div class="d-flex justify-content-center">ระดับชั้น: {{ School.class }}</div>
                    <div class="col d-flex justify-content-center"></div>
                </thead>
                <p>
                   <button class="btn btn-success"  v-on:click="navigateTo('/school/' + School.id)">ดูข้อมูลโรงเรียน</button>
                    <button class="btn btn-warning" v-on:click="navigateTo('/school/edit/'+School.id)">แก้ไขข้อมูล</button>
                   <button class="btn btn-danger" v-on:click="deleteSchool(School)">ลบข้อมูล</button>
                    </p>
              </div> 
            </b-col>     
         <b-col> </b-col>
        </b-row>
     </b-container>
</div>
  </template>
  <script>
  import SchoolService from "@/services/SchoolService";
  export default {
    data() {
      return {
           School: [],
      };
    },
    async created () {
            this.School = (await SchoolService.index()).data
        },
        methods: {
            navigateTo (route) {
                this.$router.push(route)
            },
            async deleteSchool(School) {
                let result  = confirm("What to delete?")
                if (result) {
                    try{
                        await SchoolService.delete(School)
                        this.refreshData();
                    }catch (error) {
                        console.log(error)
                    }
                }
            },
            async refreshData() {
                this.School = (await SchoolService.index()).data
            }
        }
    }
</script>
<style scoped>

</style>