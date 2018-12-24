<template>
  <div class="news">
   {{msg}}
  </div>
</template>

<script>
export default {
  name: 'news',
  data() {
    return {
       msg: "hello news!"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
