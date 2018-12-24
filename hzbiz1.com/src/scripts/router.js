import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./aside.js"

Vue.use(VueRouter,routes)

// const routes = [] 
// 此部分信息在aside.js中

const router = new VueRouter({
    routes:routes,
    mode:"history"
})

router.beforeEach((to, from, next) => {
    //beforeEach是router的钩子函数，在进入路由前执行
    if (to.meta.title) {//判断是否有标题
        // document.title = JSON.stringify(to.meta.nav)
      document.title = '我们说';
      if(to.meta.title instanceof Array){
        for(let i=0;i<to.meta.title.length;i++){
            let el = to.meta.title[i]
            document.title = document.title +" - "+ el.text
          }
      }else{
        document.title = to.meta.title;
      }
    }
    let head = document.querySelector("head");
    let keywords = document.createElement("meta");
    keywords.setAttribute("name","keywords");
    if(keywords.getAttribute("name")==="keywords"){
        keywords.setAttribute("content",to.meta.keywords);
        head.appendChild(keywords);
    }
    let description = document.createElement("meta");
    description.setAttribute("name","description");
    if(description.getAttribute("name")==="description"){
        description.setAttribute("content",to.meta.description);
        head.appendChild(description);
    }  
    
    next()//执行进入路由，如果不写就不会进入目标页
})


export default router
