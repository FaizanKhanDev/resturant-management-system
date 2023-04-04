<script>
export default {
  components:{
  },  
  data() {
    return {
        name:'',
    }
  },

  mounted() {
    let user = localStorage.getItem('user-info');
    if(!user) {
      this.$router.push({name:'SignUp'})
    }
    this.name = JSON.parse(user).name

  },
}
</script>

<template>
  <main>
    <h1>welcom to Home Page {{name}}</h1>
  </main>
</template>
