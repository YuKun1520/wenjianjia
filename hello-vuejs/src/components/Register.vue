<template>
    <div class="register">
        <top :system="system"></top>
        <h1 class="header-title">用户注册</h1>
        <form @submit.prevent="registerSave" class="form-block">
            <ul class="register-list">
                <li class="avatar-li">
                    <label></label>
                    <div class="avatar">
                        <input type="file" class="upload_file" @change="a" ref="upload_file">
                        <img alt="点击上传头像" :src="users.imageUrl" id="img-first">
                        <input type="hidden" v-model="users.imageUrl">
                    </div>
                </li>
                <li>
                    <label>用户名:</label>
                    <input type="text" v-model="users.name">
                    <p v-if="!users.name">用户名不能为空</p>
                </li>
                <li>
                    <label>设置密码:</label><input type="password" v-model="users.pass">
                    <p v-if="users.pass.length < 6 && users.pass !=''">密码长度请大于等于6位</p>
                </li>
                <li>
                    <label>确认密码:</label><input type="password" v-model="users.checkpass">
                    <p v-if="users.pass != users.checkpass">密码不一致，请重新输入！</p>
                </li>
                <li>
                    <button type="button" @click="submit()">注册</button>
                </li>
            </ul>
        </form>
        <foot :system="system"></foot>
    </div>
</template>
<script>
    import top from'./Top.vue'
    import foot from'./Foot.vue'
    import qs from "qs"
    export default{
        name:'register',
        props:{
            system:Object
        },
        data(){
            return{
                users:{
                    name:'',
                    pass:'',
                    checkpass:'',
                    send:1,
                    imageUrl:require('../assets/lu.png')
                },
            }
        },
        methods:{
            a(){
                let _this = this;
                let file = this.$refs.upload_file.files[0]
                let reader = new FileReader();
                reader.onload = function () {
                    _this.users.imageUrl = reader.result
                }
                reader.readAsDataURL(file);    //Base64
            },
            registerSave(){
                let formData = {
                    send: this.users.send,
                    username: this.users.name,
                    password: this.users.pass,
                    checkpass: this.users.checkpass,
                    userAvatar: this.users.imageUrl
                }
                formData = this.$parseString(formData);
                this.axios.post('registerSave.php', formData)
                    .then((res) => {
                        console.log(res)
                    })
            },
            submit(){
                var obj = {
                    send: 1,
                    userAvatar: this.users.imageUrl,
                    username: this.users.name,
                    password: this.users.pass
                };
                var data = qs.stringify(obj);
                console.log(data);
                this.axios.post("registerSave.php",data).then(res => {
                    console.log(res);
                    if(res.data.valid){
                        alert("注册成功！");
                    }else{
                        alert("注册失败，请完善信息！")
                    }
                })
                    .catch(err => {
                        console.log(err);
                    })
            }
        },
        components:{
            top,foot
        },
        created(){
            let formData = {
                send: this.users.send,
                username: this.users.name,
                password: this.users.pass,
                checkpass: this.users.checkpass,
                userAvatar: this.users.imageUrl
            }
            console.log(JSON.stringify(formData))
            console.log(this.$parseString(formData))
        },
    }
</script>
<style scoped>
    .header-title{
        text-align: center;
        padding-top: 20px;
    }
    .register-list>li>p{
        width: 100%;
        text-align: center;
        padding-top: 10px;
    }
    .form-block {
        width: 600px;
        margin: 25px auto;
        position: relative;
    }

    .form-block li {
        margin-bottom: 25px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .form-block li label {
        width: 82%;
        padding: 0 15px;
        line-height: 35px;
        margin: 0 auto;
    }

    .form-block li input {
        border-radius: 5px;
        height: 35px;
        line-height: 35px;
        padding: 0 15px;
        border: 1px solid darkgray;
        width: calc(100% - 120px)
    }

    .form-block li input:focus {
        outline: none
    }

    .avatar {
        position: relative;;
        width: 120px;
        height: 120px;
        overflow: hidden;
    }

    .avatar img {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        min-height: 120px;
    }

    .form-block li input.upload_file {
        position: absolute;
        z-index: 999;
        opacity: 0;
        width: 100%;
        height: 100%;
    }
    #img-first{
        position: relative;
        left: 50%;
        margin-left: -50%
    }
    .avatar-li{
        border-radius: 50%;
        width: 120px;
        height: 120px;
        overflow: hidden;
        border: 2px solid #eee;
        margin: 0 auto;
        box-sizing: border-box;
    }
    .register-list>li:not(:first-child){
        margin: 0 auto;
        width: 90%;
        margin-top: 10px;
    }
    .register-list>li>label{
        padding: 0;
        font-size: 15px;
    }
    .register-list>li>input{
        font-size: 14px;
        margin: 0 auto;
    }
    .register-list>li:last-child{
        display: flex;
        flex-direction: column;
    }
    .register-list>li>button{
        width: 150px;
        height: 45px;
        margin: 10px auto;
        display: block;
        background-color: green;
        border-radius: 25px;
        border: none;
        color: white;
    }
    .register-list>li>button:hover{
        background-color: limegreen;
        transition: 0.5s;
    }
</style>