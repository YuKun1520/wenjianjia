<template>
    <div id="app">
        <router-view :system="system"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                system: {
                    logo: require('./assets/logo.png'),
                    title: "欢迎您来到Vue.js的世界",
                    copyright: "版权所有@0918"
                }
            }
        },
        components: {}
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-size: border-box;
    }

    ul,
    ol {
        list-style: none;
    }

    body {
        font-family: "微软雅黑,宋体";
        font-size: 13px;
        color: #666;
    }

    a {
        color: #666;
        text-decoration: none;
        outline: none;
    }

    a:hover {
        color: red;
    }

    .wrap {
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }

    .newlist {
        margin: 20px 0;
        border: 1px solid #eee;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 0 10px;
    }

    .list-top > h1 > small {
        padding-left: 20px;
    }
    #app{
        box-sizing: border-box;
        padding-top: 50px;
        padding-bottom: 80px;
    }
</style>
