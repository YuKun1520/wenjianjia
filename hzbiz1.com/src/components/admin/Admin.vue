<template>
    <div class="admin" v-fixedDimension>
        <header>
            <router-link to="/Admin">{{logo}}</router-link>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item to="/Admin">
                    <i class="fa fa-home" aria-hidden="true"></i>我们说</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(value,index) in items" :key="index" :to="value.href">{{value.text}}</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        <section>
            <aside>
                <el-form :inline="true" :model="nav" class="form-inline">
                    <el-input size='mini' v-model="nav.search" placeholder="搜索信息">
                        <el-button @click="onSubmit" slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-form>
                <ul class="menu" ref="menu">
                <li v-for="(val,index) in nav.aside" :key="index">
                    <h4>
                        <router-link :to="val.path">{{val.text}}</router-link>
                    </h4>
                    <div v-if="val.children.length>0">
                        <router-link v-for="(children,int) in val.children" :key="int" :to="children.path">{{children.text}}</router-link>
                    </div>
                </li>
                </ul>
            </aside>
            <article>
                <router-view></router-view>
            </article>
        </section>
    </div>
</template>

<script>
    //引入外部资源，启用rem
    import '@/scripts/rem.js'
    import asideMenu from '@/scripts/asideMenu.js'
    //单独引入自定义css文件，专门用于修改element.css默认样式
    import '@/style/elementui.css'
    export default {
        name: 'Admin',
        data() {
            return {
                logo: "我们说 - 后台管理系统",
                items: [],
                nav: {
                    search: '',
                    // 通过独立的asideMenu.js页面获取到左侧导航所有信息列表
                    aside:[]
                }
            }
        },
        methods: {
            // 面包屑导航 通过路由数据传输
            getBreadcrumb: function () {
                this.items = this.$route.matched[1].meta.title;
            },
            // 导航查找
            onSubmit() {
                alert(this.nav.search)
            },
            // 左侧导航处理方案
            convert:function (rows){
                    // 判断传入的父类ID是否在数组里面
                    function exists(rows, parentID){
                        for(var i=0; i<rows.length; i++){
                            if (rows[i].id == parentID)
                                return true;
                        }
                        return false;
                    }
                    
                    var nodes = [];
                    // 获取所有一级分类
                    for(var i=0; i<rows.length; i++){
                        var row = rows[i];
                        if (!exists(rows, row.parentID)){
                            nodes.push({
                                id:row.id,
                                text:row.title,
                                path:row.path
                            });
                        }
                    }
                    
                    // 将一级分类放入待处理数组中
                    var toDo = [];
                    for(var i=0; i<nodes.length; i++){
                        toDo.push(nodes[i]);
                    }
                    while(toDo.length){
                        // 逐个弹出
                        var node = toDo.shift();
                        // 查找它的下级分类
                        for(var i=0; i<rows.length; i++){
                            var row = rows[i];
                            // 如果是它的下级分类则放入 children 数组中
                            if (row.parentID == node.id){
                                var child = {id:row.id,text:row.title,path:row.path};
                                if (node.children){
                                    node.children.push(child);
                                } else {
                                    node.children = [child];
                                }
                                // 将当前分类放入待处理数组中
                                toDo.push(child);
                            }
                        }
                    }
                    this.nav.aside = nodes;
                    return nodes;
            }
        },
        computed: {
            

        },
        watch: {
            $route(to, from) {
                // 通过监听路由的变化加载对应的展示面包屑导航
                // console.log(to.path,from.path);
                if (to.path != from.path) {
                    this.getBreadcrumb();
                }
            }
        },
        filters: {

        },
        created() {

        },
        mounted() {
            // 展示面包屑导航
            this.getBreadcrumb();
            // asideMenu 变量源自第37行外部文件引入
            // convert 导航处理程序
            this.convert(asideMenu)
         }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .admin {
        width: 100%;
    }

    .admin * {
        box-sizing: border-box;
        margin: 0;
        padding: 0
    }

    .admin header {
        width: 100%;
        height: 3.75rem;
        z-index: 2;
        position: fixed;
        background: -webkit-linear-gradient(45deg, #838dfb, #8191f8 10%, #4fa2f1 50%, #1eabf6);
        background: -o-linear-gradient(45deg, #838dfb 0, #8191f8 10%, #4fa2f1 50%, #1eabf6 100%);
        background: linear-gradient(45deg, #838dfb, #8191f8 10%, #4fa2f1 50%, #1eabf6);
        box-shadow: #838dfb 0 0 .3125rem;
        display: flex
    }

    .admin .el-breadcrumb {
        position: absolute;
        bottom: -2.5rem;
        left: 14rem;
        padding-left: 2rem;
        height: 2.5rem;
        line-height: 2.5rem;
        border-bottom: 1px solid rgba(216, 216, 216, .5);
        width: calc(100% - 13.75rem);
        background: -webkit-linear-gradient(left, rgba(255, 255, 255, .5) 5%, #fff 95%);
        /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, rgba(255, 255, 255, .5) 5%, #fff 95%);
        /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, rgba(255, 255, 255, .5) 5%, #fff 95%);
        /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, rgba(255, 255, 255, .5) 5%, #fff 95%);
        /* 标准的语法 */
    }

    .admin section {
        padding-top: 7rem;
        padding-left: 1rem;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
    }

    .admin aside {
        height: 100%;
        padding-top: 3.75rem;
        width: 13.75rem;
        position: fixed;
        z-index: 1;
        top: 0;
        bottom: 0;
        left: 0;
        box-shadow: #838dfb .0625rem 0 .3125rem;
        background: #e2dcf3;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
    }

    .admin aside .menu {
        display: flex;
        flex-flow: column;
        margin: 0
    }

    .admin aside .menu>li {
        border: 1px solid #000;
        width: 100%;
        display: flex;
        flex-flow: column;
        margin: 5px auto
    }

    .admin aside .menu>div h1 {
        margin: 0;
        padding: 0;
    }

    .admin aside .form-inline {
        width: 96%;
        margin: .625rem auto;
    }

    .admin article {
        width: 100%;
        padding-left: 13.75rem;
        height: 200%;
        background: #fff;
    }

    .admin header .router-link-active {
        color: #fff;
        height: 100%;
        line-height: 3.75rem;
        padding: 0 .9375rem;
    }

    header .fa-home {
        margin-right: .3125rem
    }
</style>
