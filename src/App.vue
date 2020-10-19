<template>
  <div id="app">
    <FooterNav v-if="is_show"></FooterNav>
    <router-view/>
  </div>
</template>

<script>
import FooterNav from "@/components/FooterNav.vue"
export default {
    components:{ // 注册组件
      FooterNav,
    },
    data (){
      return {
        is_show : true
      }
    },
    created() {
        this.eventBus.$on('footernav',(mark) => {
            this.is_show = mark
        })  
    },
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
html,
body {
    touch-action: none;
    height: 100%;
    ul,
    li {
        list-style: none;
    }
}
</style>
