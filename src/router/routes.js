
let routes=[
  {
    path:'/',
    redirect: '/todo'
  },
  {
    path:'/todo',
    component:()=> import('@/components/to-do/to-do-container.vue')
  },{
    path:'/css',
    component:()=> import('@/components/basic/css.vue')
  }
]

export default routes