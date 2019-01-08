<template>
    <header class="top">
        <div class="wrap">
            <div class="logo">
                <img v-bind:src="system.logo" :alt="system.title" :title="system.title">
                <h1>{{system.title}}</h1>
            </div>
            <div class="nav">
                <ul>
                    <li>
                        <router-link to="/">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/NewPost">发布聊天室</router-link>
                    </li>
                    <li>
                        <router-link to="/Login">会员登录</router-link>
                    </li>
                    <li>
                        <router-link to="/Register">用户注册</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'top',
        props: {
            system: Object
        },
        data(){
            return{
                msg:0
            }
        }
    }
</script>
<!-- 添加“作用域”属性以仅将CSS限制在此组件中 -->
<style scoped>
    .top{
        background: #333;
        height: 50px;
        width: 100%;
        color: #eee;
        position: fixed;
        top: 0;
        z-index: 99999;
    }
    .top>.wrap{
        display: flex;
        justify-content: space-between;
    }
    .logo{
        width: 25%;
        position: relative;
    }
    .logo h1{
        position: absolute;
        left: 60px;
        top: 0;
        line-height: 50px;
        font-size: 18px;
    }
    .logo img{
        position: absolute;
        left: 0;
        top: 5px;
        height: 40px;
    }
    .nav{
        width: 75%;
    }
    .nav ul{
        display: flex;
        justify-content: flex-end;
    }
    .nav ul li{
        line-height: 50px;
        font-size: 15px;
        margin-left: 15px;
    }
    .nav ul li a{
        color: #fff;
        display: inline-block;
        padding: 0 15px;
        text-align: center;
    }
    .nav ul li a.router-link-exact-active{
        background: #eee;
        color: #aaa;
    }
    /*router-link-exact-active router-link-active*/
</style>