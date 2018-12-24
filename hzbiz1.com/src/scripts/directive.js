import Vue from 'vue'
Vue.directive('fixedDimension',{
    bind:function(el){
       let height = document.documentElement.clientHeight || document.body.height
       el.style.height=height+"px"
    }
})




