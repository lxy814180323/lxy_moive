<template>
    <div>
        <FimlListTopNav></FimlListTopNav>
        <router-view></router-view>
    </div>
</template>

<script>
import FimlListTopNav from '@/components/FimlListTopNav'
export default {
    components:{
        FimlListTopNav
    }
}
</script>
