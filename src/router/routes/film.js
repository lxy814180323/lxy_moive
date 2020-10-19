export default{
    path : '/film',
    // 重定向
    redirect:'/film/noplaying',
    // 引入组件,
    component: ()=>import('@/views/Film/Film.vue'),
    // 子路由 嵌套路由
    children :[
        {
            path:'comingsoon', // 即将上线
            component: ()=>import('@/views/Film/ComingSoon.vue'),
        },
        {
            path:'noplaying',   // 正在热映
            component: ()=>import('@/views/Film/NoPlaying.vue'),
        },
    ]

}