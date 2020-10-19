<template>
    <div>
        <FimlListTopNav :class=" fixed ? 'fixed':'' "></FimlListTopNav>
        <router-view></router-view>
    </div>
</template>

<script>
import FimlListTopNav from '@/components/FimlListTopNav'
export default {
    data(){
        return {
            // 设置默认不吸顶
            fixed : false ,
            
        }
    },
    components:{
        FimlListTopNav
    },
    mounted () {
        window.addEventListener(
            "scroll",
            (e) => {
                let top = document.documentElement.scrollTop;
                if(top > 66*2){
                    this.fixed = true ;
                }else{
                    this.fixed = false
                }
            },true
        )
    }
}
</script>

<style lang="scss" scoped>
    .fixed {
        position: fixed;
        top: 0;
        background: #ffffff;
    }
</style>
