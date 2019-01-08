<template>
    <div class="phone">
        <h1>
            <input type="text" v-model="phone">
            <button v-if="settime<0" type="button" @click='phoneAdd'>提交</button>
            <button v-else-if="settime>-1" disabled type="button" style="background:red">
                请{{settime}}秒以后再来
            </button>
        </h1>
    </div>
</template>
<script>
    export default {
        name:'phone',
        // props:{
        //     msg:String
        // },
        data(){
            return{
                msg:"手机注册",
                phone:"",
                settime: -1
            }
        },
        methods:{
            phoneAdd(){
                let formData={
                    phone:this.phone,
                    send: 1,
                }
                formData = this.$parseString(formData)
                this.axios.post('https://wx.hzbiz.net/api/Autoloading/',formData).then((res)=>{
                    if(res.data.result>0){
                        console.log(res)
                        this.settime = 60;
                    }
                })
                let close = null;
                clearInterval(close)
                close = setInterval(() => {
                    this.settime = this.settime -1;
                    console.log(this.settime)
                    if (this.settime===-1){
                        clearInterval(close)
                    }
                },1000)
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>