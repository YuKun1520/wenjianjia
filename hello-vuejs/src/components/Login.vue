<template>
    <div class="register">
        <top :system="system"></top>
        <h1 class="header-title">用户登录</h1>
        <form class="form-block">
            <ul class="register-list">
                <li>
                    <label>用户名:</label>
                    <input type="text" v-model="user.username">
                </li>
                <li>
                    <label>密码:</label>
                    <input type="password" v-model="user.password">
                </li>
                <li>
                    <button type="button" @click="submit()">登录</button>
                    <p v-if="flag">用户名或密码错误!</p>
                </li>
            </ul>
        </form>
        <foot :system="system"></foot>
    </div>
</template>

<script>
    import top from './Top.vue'
    import foot from './Foot.vue'
    import qs from "qs"
    export default {
        name: 'login',
        props: {
            system: Object
        },

        data() {
            return{
                user: {
                    send: 1,
                    username: "",
                    password: ""
                },
                userId: 1,
                flag: false
            }
        },
        methods:{
            submit(){
                var data = qs.stringify(this.user);
                console.log(data)
                this.axios.post("loginSave.php",data).then(res => {
                    console.log(res);
                    if (res.data.valid){
                        alert('登陆成功')
                        this.$cookies.set('username',res.data.user[0])
                        this.$cookies.set('userId',res.data.user[1])
                        this.$cookies.set('userlevel',res.data.user[2])
                        this.$router.push('/')
                    }else{
                        this.flag = true;
                    }
                })
                    .catch(err => {
                        console.log(err);
                    })
            }
        },
        components: {
            top,
            foot
        }
    }
</script>

<style scoped>
    .header-title{
        text-align: center;
        margin-top: 20px;
    }
    .form-block {
        width: 600px;
        margin: 25px auto;
        position: relative;
    }
    .register-list>li{
        margin: 10px auto 25px;
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .register-list>li>label{
        font-size: 15px;
        width: 82%;
        padding: 0 15px;
        line-height: 35px;
        margin: 0 auto;
    }
    .register-list>li>input{
        font-size: 14px;
        margin: 0 auto;
        border-radius: 5px;
        height: 35px;
        line-height: 35px;
        padding: 0 15px;
        border: 1px solid darkgray;
        width: calc(100% - 120px);
        outline: none
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
        outline: none
    }
    .register-list>li>button:hover{
        background-color: limegreen;
        transition: 0.5s;
    }
</style>