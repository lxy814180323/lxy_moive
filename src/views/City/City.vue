<template>
    <div>
        <van-index-bar :index-list="indexList" highlight-color="red">
            <template v-for="(item,index) in dataList">
                <van-index-anchor :index="item.index" :key="index" style="background:#eee" />
                <van-cell  
                    @click="chooseCity(sub.name)"
                    v-for="(sub,key) in item.data"
                    :title="sub.name"
                    :key="key"
                />
            </template>

        </van-index-bar>    
    </div>

</template>

<script>
import {cityListData} from '@/api/api'
import Vue from 'vue';
import {IndexBar, IndexAnchor, Cell} from 'vant';
import 'vant/lib/index.css';
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
    data(){
        return{
            dataList: [],
            indexList:[],
        }
    },
    created(){
        this.eventBus.$emit("footernav",false);
    },
    beforeDestroy(){
        this.eventBus.$emit("footernav",true);
    },
    async mounted() {
        let ret = await cityListData() ; //传过来的是[dataList, indexList] 是数组
        this.dataList = ret[0];
        this.indexList = ret[1];
    },
    methods:{
        chooseCity:function(cityName){
            // console.log(cityName)
            this.$store.commit('setCity',cityName)
            this.$router.go(-1)
        },
    },
};
</script>