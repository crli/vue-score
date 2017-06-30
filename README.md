# vue-score


### How to use?
```bash
npm install vue-score
```

### Example

```vue
<template>
  <score @toscore="setscore"></score>
</template>

<script>
  import score from "vue-score"
  import "vue-score/dist/vue-score.css"
  export default {
    name: 'app',
    data(){
      return{
        parameter:{}
      }
    },
    methods:{
      setscore(arr){
        this.parameter[arr[0]] = arr[1]
      }
    },
    components:{score}
  }
</script>
```
```vue
<template>
  <score :scoredatas="datas" @toscore="setscore"></score>
</template>

<script>
  import score from "vue-score"
  import "vue-score/dist/vue-score.css"
  export default {
    name: 'app',
    data(){
      return{
        parameter:{}
        datas:{
          'Star1':{
             'title':'总分',
             'value':null,
             'msg':['非常差','很差','一般','很好','非常好']
           }
           'Star2':{
             'title':'环境',
             'value':null,
             'msg':['非常差','很差','一般','很好','非常好']
           },
           'Star3':{
             'title':'口味',
             'value':null,
             'msg':['非常差','很差','一般','很好','非常好']
           },
           'Star4':{
             'title':'服务',
             'value':null,
             'msg':['非常差','很差','一般','很好','非常好']
           }
        }
      }
    },
    methods:{
      setscore(arr){
        this.parameter[arr[0]] = arr[1]
      }
    },
    components:{score}
  }
</script>
```
### Options
scoredatas 初始化数据，
Object类型，默认``` {'score1':{'title':'总分','value':null,'msg':['非常差','很差','一般','很好','非常好']}}```
数据key值可以任意设置

### Functions
toscore方法 给父层传值arr, arr[0]为所传数据key值，默认'score1'，arr[1]位value值,默认为null,

