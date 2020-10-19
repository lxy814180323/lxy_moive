<template>
    <div class="list scroll" :style="{height: height + 'px'}">
        <Loading v-if="loading" ></Loading>
        <div>
            <div class="item" v-for="(item,index) in data" :key="index" @click="goDetail(item.filmId)">
                <div class="left">
                    <img v-lazy="item.poster"/>
                </div>
                <div class="middle">
                    <div>{{item.name}}</div>
                    <div v-if ="type == 1">
                        <span>观众评分 </span>
                        <span class="grade">{{item.grade}}</span>
                    </div>
                    <div>主演:{{item.actors | parseActors}}</div>
                    <div>{{item.nation}} | {{item.runtime}}分钟</div>
                </div>
                <div class="right">
                    <span v-if ="type == 1">购票</span>
                    <span v-else>预购</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from './Loading'
import BScroll from "better-scroll";
import {nowPlayingListData,comingSoonListData} from '@/api/api'
export default {
    data(){
        return {
            // 设置默认显示loading
            loading: true,
            height: 0,
            flag: true,
            pageNum:1,
            data: [],
        }
    },
    props:["list","type"],
    created(){
        // 当进入页面之后需要将父传子的数据list转交给data
        this.data= this.list
        // 判断列表有没有数据
        if(this.data.length > 0 ){
            this.loading = false 
        }
    },
    components:{
        Loading 
    },
    filters : {
        parseActors : function(value){
            let actors = "";
            if(value){
                value.forEach((element) => {
                    actors += element.name + " "
                });
            }else{
                actors = '暂无主演'
            }
            return actors;
        }
    },
    methods:{
        goDetail : function(filmId){
             this.$router.push({ name: "detail", params: { filmId } });
        },
        // 获取数据的方法
        getData:async function(){
            if(this.flag) {
                this.pageNum++;
                // 获取数据
                if(this.type == 1){
                    // 正在热映
                    var ret = await nowPlayingListData(this.pageNum)
                }else{
                    // 即将上映
                    var ret = await comingSoonListData(this.pageNum)
                }
                // 如果当前请求到的数据小于10,则说明后面已经没有数据可以被请求,此时需要将标志设置成false
                if(ret.data.data.films.length < 10) {
                    this.flag = false ;
                }
                // 将处理好的数据新增到列表中去  // 连接数组
                this.data = this.data.concat(ret.data.data.films);
            }
        }
    },
    mounted(){
        // 获取可视高度
        this.height = document.documentElement.clientHeight - 100
        // this.$nextTick(()=>{

        // })
    },
    updated() {
            this.bs = new BScroll('.scroll',{
                // 激活上滑动的事件监听
                pullUpLoad: true,
                // 激活下滑的事件监听
                pullDownRefresh: true,
                // 默认情况下使用bs后,它会禁止浏览器的点击事件
                click: true
            })
            this.bs.on('pullingUp',()=>{
                // console.log('上拉刷新')
                // 获取数据
                this.getData()
                // 本次pullup动作已经完成,继续准备下一次pullup
                this.bs.finishPullUp()
            })
            this.bs.on('pullingDown', () => {
                // console.log('下拉刷新')
                // 获取数据
                this.getData()
                //本次pulldown动作已经完成，继续准备下一次pulldown
                this.bs.finishPullDown()
            })
    }
}
</script>

<style lang="scss" scoped>
.list{
    margin-bottom: 50px;

    .item {
        margin-top: 15px;
        padding-bottom: 15px;
        display: flex;
        color: #797d82;
        font-size: 13px;
        border-bottom: 1px solid #ededed;

        .left {
            width: 77px;
            height: 100px;
            margin-left: 20px;
            img {
                width: 66px;
                height: 100%;
            }
        }

        .middle {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 55%;

            div:nth-of-type(1) {
                color: #191a1b;
                font-size: 16px;
            }

            div:nth-of-type(3) {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .grade {
                color: #ffb232;
                font-size: 14px;
            }
        }

        .right {
            width: 15%;
            display: flex;
            align-items: center;
            margin-right: 20px;

            span {
                border: 1px solid #ff5f16;
                background: white;
                color: #ff5f16;
                border-radius: 2px;
                height: 25px;
                line-height: 25px;
                font-size: 13px;
                width: 50px;
                text-align: center;
            }
        }
    }
}
.scroll {
	overflow: hidden;
}
</style>