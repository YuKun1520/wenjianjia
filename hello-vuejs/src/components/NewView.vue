<template>
    <div>
        <top :system="system"/>
        <div class="replys">
            <h1>{{newsContent.title}}</h1>
            <div class="reply-small">{{newsContent.body}}</div>
            <div class="editor">
                <h4>发布留言:</h4>
                <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" class="quill"></quill-editor>
                <button @click="publish()">发布</button>
            </div>
            <div class="reply">
                <h1>评论内容:</h1>
                <ul>
                    <li v-for="(val,index) in newsView" :key="index">
                        <div class="reply-content">
                            <div class="reply-content-header">
                                <h3 class="reply-content-title">
                                    <div class="userAvatar">
                                        <img v-if="val.userAvatar!=null" :src="userAvatar+val.userAvatar" alt>
                                        <img v-if="val.userAvatar==null" :src="system.logo" alt>
                                    </div>
                                    <h3 class="userName">
                                        <em>
                                            {{val.userName}}
                                        </em>
                                        <em>
                                            {{val.id}}{{val.createTime}}
                                        </em>
                                    </h3>
                                </h3>
                            </div>
                            <div class="reply-content-text">
                                {{val.chatBody}}
                            </div>
                        </div>
                    </li>
                    <h6 class="onloadMore" v-if="comLen!=end"
                        @click="onLoadMore()">加载更多
                    </h6>
                    <p class="onloadend" v-else>我是有底线的</p>
                </ul>
            </div>
        </div>
        <foot :system="system"/>
    </div>
</template>
<script>
    import top from './Top.vue'
    import foot from './Foot.vue'
    import { quillEditor } from "vue-quill-editor"; //调用编辑器
    import "quill/dist/quill.core.css";
    import "quill/dist/quill.snow.css";
    import "quill/dist/quill.bubble.css";
    import qs from 'qs'
    export default {
        name: 'newView',
        props: {
            system: Object,
            height: {
                type: Number,
                default: 170
            },
        },
        components: {
            top, foot,qs,quillEditor
        },
        data() {
            return {
                id: this.$route.params.id,
                newsView: [],
                newsContent: {},
                comLen: 0,
                userAvatar: "http://wx.hzbiz.net/",
                start: 0,
                end: 10,
                content: ``,
                editorOption: {},
                str: '',
                editorContent: '',
                // userId: this.$cookies.get('userId')
            }
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill;
            }
        },
        created() {
            this.getChatall(this.start, this.end);
        },
        methods: {
            getChatall(start, end) {
                this.axios
                    .get("http://yukun1520.gz01.bdysite.com/api/getchatAll.php?chatId=" + this.id).then(res => {
                        // reverse 逆序
                        this.comLen = res.data.message.length;
                        this.newsView = res.data.message.reverse().splice(start, end);
                        this.newsContent = res.data.message[0];
                    console.log(res.data.message[0])
                    })
                .catch(err => {
                    console.log(err);
                });
            },
            onLoadMore() {
                let more = 10;
                if (this.commentslength - this.newsView.length < 10) {
                    more = this.commentslength - this.newsView.length;
                }
                this.end = this.end += more;
                this.getChatall(0, this.end);
            },

            publish(){
                let obj = {
                    chatId: this.id,
                    content: this.content,
                    userId: this.userId
                };
                console.log(obj.content)
                let data =qs.stringify(obj);
                console.log(data);
                this.axios.post("messageAdd.php",data).then(res => {
                    if(res.data.valid){
                        alert("信息发布成功！");
                        this.getChatall(0, this.end+1)
                        console.log(res.data);
                    }else{
                        alert(res.data.message);
                        console.log(res.data)
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>
<!-- 添加“作用域”属性以仅将CSS限制在此组件中 -->
<style scoped>
    footer {
        padding: 20px 0;
        text-align: center;
        margin-top: 20px;
    }
    .reply{
        background-color: rgb(250,250,250);
        border-radius: 10px;
        padding-bottom: 15px;
    }
    .reply-content-title{
        display: flex;
        line-height: 50px;
        border-bottom: 1px solid #eee;
    }
    .reply-content-text{
        padding: 15px 0 15px 15px;
        font-size: 15px;
        background-color: white;
    }
    .userAvatar{
        width: 50px;
        height: 50px;
        margin: 5px 10px;
        border-radius: 50%;
        overflow: hidden;
        background: #fff;
    }
    .userAvatar>img{
        width: 100%;
    }
    .userName>em{
        font-size: 14px;
        font-weight: 600;
    }
    .userName>em:last-child{
        font-weight: 400;
        font-size: 12px;
    }
    .replys {
        width: 900px;
        margin: 0 auto;
    }

    .reply-small {
        padding: 10px 10px;
        text-align: center;
        padding-bottom: 50px;
    }

    .replys > h1 {
        padding-top: 50px;
        padding-bottom: 30px;
        text-align: center;
    }

    .reply > h1 {
        font-size: 16px;
        padding: 20px 0 15px 15px;
    }

    .reply > ul > li {
        padding: 10px;
    }
    .reply-content{
        border: 1px solid #eee;
        border-radius: 5px;
    }
    .userName > span {
        font-size: 14px;
        display: inline-block;
    }
    .editor{
        margin-bottom: 50px;
        overflow: hidden;
    }
    .editor>h4{
        padding: 10px 0;
        font-size: 15px;
    }
    .editor>button{
        margin-top: 20px;
        padding: 5px 15px;
        float: right;
        margin-right: 20px;
    }
    .reply>ul>h6{
        text-align: center;
        font-size: 14px;
        background-color: darkorange;
        padding: 10px;
        width: 80px;
        margin: 0 auto;
        color: #fff;
        border-radius: 5px;
         cursor: pointer;
    }
</style>