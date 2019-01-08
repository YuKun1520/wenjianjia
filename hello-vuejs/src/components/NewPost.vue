<template>
    <div class="register">
        <top :system="system"></top>
        <div class="addchat">
            <h1>{{msg}}</h1>
            <form @submit.prevent="chatAddSave" class="addchatlist">
                <ul class="addchat-form">
                    <li><label>话题名称:</label><input type="text" v-model="chat.title"></li>
                    <li><label>话题副标题:</label><input type="password" v-model="chat.pass"></li>
                    <li>
                        <button type="button" @click="submit()">提交</button>
                    </li>
                </ul>
            </form>
        </div>
        <foot :system="system"></foot>
    </div>
</template>

<script>
    import top from './Top.vue'
    import foot from './Foot.vue'
    import qs from 'qs'

    export default {
        name: 'register',
        props: {
            system: Object
        },
        data() {
            return {
                msg: "发布话题",
                chat: {
                    title: "",
                    pass: "",
                    send: "发布话题"
                }
            }
        },
        methods: {
            submit() {
                let obj = {
                    send: 1,
                    title: this.chat.title,
                    body: this.chat.pass
                }
                let data = qs.stringify(obj)
                console.log(data)
                this.axios({
                    method: "get",
                    url: "http://yukun1520.gz01.bdysite.com/api/chatAddSave.php?"+data
                }).then(res => {
                    console.log(res);
                    if (res.data.valid) {
                        alert('发布话题成功')
                    } else {
                        this.flag = true;
                        alert('发布话题失败')
                    }
                }).catch(err => {
                    console.log(err);
                });
            }
        },
        components: {
            top, foot, qs
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .addchat {
        width: 600px;
        margin: 0 auto;
    }

    .addchat > h1 {
        text-align: center;
        font-size: 30px;
        padding-top: 50px;
    }

    .addchat-form {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .addchat-form > li {
        width: 90%;
        margin: 20px auto;
    }

    .addchat-form > li > label {
        padding: 0;
        font-size: 15px;
        width: 100%;
        display: block;
        line-height: 35px;
        margin: 0 auto;
        font-weight: 600;
    }

    .addchat-form > li > input {
        font-size: 14px;
        margin: 0 auto;
        border-radius: 5px;
        height: 35px;
        line-height: 35px;
        padding: 0 15px;
        border: 1px solid darkgray;
        width: 90%;
    }

    .addchat-form > li > input:focus {
        outline: none
    }

    .addchat-form > li > button {
        width: 150px;
        height: 45px;
        margin: 10px auto;
        display: block;
        background-color: green;
        border-radius: 25px;
        border: none;
        color: white;
        outline: none
    }

    .addchat-form > li > button:hover {
        background-color: limegreen;
        transition: 0.5s;
    }
</style>