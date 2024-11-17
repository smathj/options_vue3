import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from "@/views/DataBinding.vue";
import DotenvTest from "@/views/DotenvTest.vue";
import DataBindingHtml from "@/views/DataBindingHtml.vue";
import DataBindingInputText from "@/views/DataBindingInputText.vue";
import DataBindingInputNumber from "@/views/DataBindingInputNumber.vue";
import DataBindingTextarea from "@/views/DataBindingTextarea.vue";
import DataBindingSelect from "@/views/DataBindingSelect.vue";
import DataBindingCheckbox from "@/views/DataBindingCheckbox.vue";
import DataBindingCheckbox2 from "@/views/DataBindingCheckbox2.vue";
import DataBindingRadio from "@/views/DataBindingRadio.vue";
import DataBindingAttribute from "@/views/DataBindingAttribute.vue";
import DataBindingButton from "@/views/DataBindingButton.vue";

/**
 * routes 은 배열인데
 * 객체마다 경로, 이름 , 컴포넌트가 명시된 객체를 가지고있다
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
/*
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/AboutView.vue')
  },
*/
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/dotenvtest',
    name: 'DotenvTest',
    component: DotenvTest
  },
  {
    path: '/dataBindingInputText',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/dataBindingInputNumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/dataBindingTextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/dataBindingSelect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/dataBindingCheckbox',
    name: 'DataBindingCheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/dataBindingCheckbox2',
    name: 'DataBindingCheckbox2',
    component: DataBindingCheckbox2
  },
  {
    path: '/dataBindingRadio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/dataBindingAttribute',
    name: 'DataBindingAttribute',
    component: DataBindingAttribute
  },
  {
    path: '/dataBindingButton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
