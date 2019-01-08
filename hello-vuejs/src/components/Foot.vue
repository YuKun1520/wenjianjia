<template>
    <footer>{{system.copyright}}</footer>
</template>
<script>
    export default{
        name:'foot',
        props:{
            system:Object
        }
    }
</script>
<!-- 添加“作用域”属性以仅将CSS限制在此组件中 -->
<style scoped>
    footer{
        padding: 20px 0;
        text-align: center;
        background-color: rgb(65,185,131);
        color: white;
        font-size: 15px;
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: auto;
    }
</style>