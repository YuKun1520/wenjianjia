<template>
    <div class="newuseradd">
        <top :system="system"></top>
        <div>
            <button @click="componentId='phoneCodeRegister'">手机注册</button>
            <button @click="componentId='EmailRegister'">邮箱注册</button>
            <component :is="componentId"></component>
        </div>
        <foot :system="system"></foot>
    </div>
</template>
<script>
    import top from './Top.vue'
    import foot from './Foot.vue'
    import phoneCodeRegister from './phoneCodeRegister.vue'
    import EmailRegister from './EmailRegister.vue'
    export default{
        name:'newuseradd',
        props:{
            system:Object
        },
        data(){
            return{
                componentId:"phoneCodeRegister"
            }
        },
        computed:{

        },
        methods:{

        },
        components:{
            top,foot,phoneCodeRegister,EmailRegister
        },
        created(){

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>