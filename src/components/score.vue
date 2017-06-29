<template>
  <div class="star-box">
    <div class="star" v-for="(item,key,index) in datas" >
      <div class="nm">{{item.title}}</div>
      <span class="star-pic">
        <i class="i" :style="'width:' + item.value*20 + '%'"></i>
        <span class="star-select">
          <i class="hand" v-for="n in 5" @click="select(n,key,index,item.msg)"></i>
        </span>
      </span>
      <span class="start-msg">{{starmsg[index]}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name:'score',
    data(){
      return{
        datas:this.scoredatas,
        starmsg:[]
      }
    },
    mounted(){

    },
    props: {
      scoredatas: {
          type: Object,
          default(){
            return {
              'Star1':{
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
        this.starmsg.splice(index, 1,msg[n-1]);
        this.$emit('toscore',[key,n])
      },
    }
  }
</script>
<style scoped lang="scss">
@import '../assets/mixin';
    .star{
      display:flex;
      align-items:center;
      .nm{
        width:50px;
        font-size: 15px
      }
      .star-pic{display:inline-block;
        @include wh(272px,36px);
        background: url('../assets/xd.png') no-repeat;
        background-size: auto 100%;
        position:relative;
        .i{
          background: url('../assets/xdh.png')no-repeat;
          display: inline-block;
          height: 36px;
          background-size: auto 100%;
          vertical-align: top;
        }
        .star-select{
          position:absolute;
          z-index: 10;
          top:0;
          left:0;
          display: inline-block;
          @include wh(272px,36px);
          display:flex;
          justify-content:space-between;
          .hand{
            @include wh(36px, 36px);
            display:block;
          }
        }
      }
      .start-msg{
        margin-left: 30px;
        display:inline-block;
        font-size: 14px
      }
    }
</style>
