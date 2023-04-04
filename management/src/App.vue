<script>
import { RouterLink, RouterView } from 'vue-router'
import Headers from './components/Header.vue'
export default {
  components:{
    Headers,

  }
}
</script>

<template>
  <Headers />
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.signMain {
  display: flex;
  justify-content: center;
  margin-top: 150px;
}
.main{
width: 350px;
height: 500px;
background: red;
overflow: hidden;
background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
border-radius: 10px;
box-shadow: 5px 20px 50px #000;
}
#chk{
display: none;
}
.signup{
position: relative;
width:100%;
height: 100%;
}
label{
font-size: 2.3em;
justify-content: center;
display: flex;
margin: 60px;
font-weight: bold;
cursor: pointer;
transition: .5s ease-in-out;
}
input{
width: 60%;
height: 20px;
background: #e0dede;
justify-content: center;
display: flex;
margin: 20px auto;
padding: 10px;
border: none;
outline: none;
border-radius: 5px;
}
button{
width: 60%;
height: 40px;
margin: 10px auto;
justify-content: center;
display: block;
color: #fff;
background: #573b8a;
font-size: 1em;
font-weight: bold;
margin-top: 20px;
outline: none;
border: none;
border-radius: 5px;
transition: .2s ease-in;
cursor: pointer;
}
button:hover{
background: #6d44b8;
}
.login{
height: 460px;
background: #eee;
border-radius: 60% / 10%;
transform: translateY(-180px);
transition: .8s ease-in-out;
}
.login label{
color: #573b8a;
transform: scale(.6);
}

#chk:checked ~ .login{
transform: translateY(-500px);
}
#chk:checked ~ .login label{
transform: scale(1);	
}
#chk:checked ~ .signup label{
transform: scale(.6);
}


</style>
