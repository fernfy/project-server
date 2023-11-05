import Vue from 'vue'
import Router from 'vue-router';

import SchoolIndex from '@/components/School/Index'
import SchoolCreate from '@/components/Schoolk/CreateSchool'
import SchoolEdit from '@/components/School/EditSchool'
import SchoolShow from '@/components/School/ShowSchool'


Vue.use(Router)

export default new Router({
 
  routes: [
    {
      path: "/users",
      name: "users",
      component: UserIndex
    },
    {
      path: "/user/create",
      name: "/user-create",
      component: UserCreate
    },
    {
      path: '/School',
      name: 'School',
      component: SchoolIndex
    },
    {
      path: '/School/create',
      name: 'School-create',
      component: SchoolCreate
    },
    {
      path: '/School/edit/:SchoolId',
      name: 'School-edit',
      component: SchoolEdit
    },
    {
      path: '/School/:SchoolId',
      name: 'School-show',
      component: SchoolShow
    }
  ]
})
