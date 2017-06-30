<template>
  <div class="score-box">
    <div class="score" v-for="(item,key,index) in datas" >
      <div class="title">{{item.title}}</div>
      <div class="score-pic">
        <div class="score-range" :style="'width:' + item.value*20 + '%'"></div>
        <div class="score-select">
          <div class="hand" v-for="n in 5" @click="select(n,key,index,item.msg)"></div>
        </div>
      </div>
      <div class="scoret-msg">{{scoremsg[index]}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'score',
    data(){
      return{
        datas:this.scoredatas,
        scoremsg:new Array(Object.keys(this.scoredatas).length)
      }
    },
    mounted(){

    },
    props: {
      scoredatas: {
          type: Object,
          default(){
            return {
              'score1':{
                'title':'总分',
                'value':null,
                'msg':['非常差','很差','一般','很好','非常好']
              },
            }
          }
      }

    },
    methods: {
      /**
       * [select 单击评分]
       * @param  {[type]} n     [1-5]
       * @param  {[type]} key   [单个评分组数据键值]
       * @param  {[type]} index [评分组索引]
       * @param  {[type]} msg   [评分组内容]
       * @return {[type]}       [description]
       */
      select(n,key,index,msg){
        this.datas[key].value = n;
        this.scoremsg.splice(index, 1,msg[n-1]);
        this.$emit('toscore',[key,n])
      },
    }
  }
</script>
<style scoped lang="scss">
@import '../assets/mixin';
    .score{
      display:flex;
      align-items:center;
      .title{
        width:50px;
        font-size: 15px
      }
      .score-pic{
        display:inline-block;
        text-align: left;
        @include wh(152px,20px);
        background: url('../assets/xd.png') no-repeat;
        background-size: auto 100%;
        position:relative;
        .score-range{
          background: url('../assets/xdh.png')no-repeat;
          display: inline-block;
          height: 20px;
          background-size: auto 100%;
          vertical-align: top;
        }
        .score-select{
          position:absolute;
          z-index: 10;
          top:0;
          left:0;
          display: inline-block;
          @include wh(152px,20px);
          display:flex;
          justify-content:space-between;
          .hand{
            @include wh(20px, 20px);
            display:block;
          }
        }
      }
      .scoret-msg{
        margin-left: 30px;
        display:inline-block;
        font-size: 14px
      }
    }
</style>
