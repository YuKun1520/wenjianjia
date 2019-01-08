<template>
    <div class="index">
        <top :system="system"/>
        <section class="news wrap">
            <ul>
                <li v-for="(val,index) in news" :key="index">
                    <div class="newlist">
                        <div class="list-top">
                            <h1>
                                <router-link :to={path:/newView/+val.chatId}>{{val.title}}</router-link>
                                <small><span>{{val.createDate.substring(0,4)}}</span><span>{{ val.createDate.substring(5) }}</span></small>
                            </h1>
                        </div>
                        <div class="list-center">
                            {{val.body}}
                        </div>
                        <div class="list-footer"></div>
                    </div>

                </li>
            </ul>
        </section>
        <foot :system="system"/>
    </div>
</template>
<script>
    import top from './Top.vue'
    import foot from './Foot.vue'

    export default {
        name: 'Index',
        props: {
            system: Object
        },
        data() {
            return {
                news: [],
            }
        },
        methods:{
            getNewsList(){
                this.axios.get('http://yukun1520.gz01.bdysite.com/api/getChatList.php').then((res)=>{this.news
                    = res.data})
            }
        },
        created() {
            this.getNewsList();
            // console.log(this.axios)
        },
        components:{
            top,foot
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{
        background: #000;
    }
    .news{
        width: 900px;
        margin: 0 auto;
    }
    .news ul{
        padding: 50px 0;
        width: 96%;
        min-height: auto;
    }
    .news ul li{
        line-height: 35px;
    }
</style>