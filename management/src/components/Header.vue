<template>
    <div class="container">
        <div class="header-container">
            <div class="logo">
                LOGO
            </div>
            <div class="menu-active">
                <nav class="navbar">
                    <div class="nav-item"><router-link to="/">Home</router-link></div>
                    <div class="nav-item"><a href="#">About</a></div>
                    <div class="nav-item"><a href="#">Contact</a></div>
                    <div class="nav-item"><a href="#">Blog</a></div>
                    <div class="nav-item">
                        <router-link to="/signup">SignUp</router-link>
                    </div>
                </nav>
                <div class="user-options">
                    <div class="option"><i class="fa fa-moon"></i></div>
                    <div class="option"><i class="fa fa-user"></i></div>
                    <div class="option"><i class="fa fa-gear"></i></div>
                </div>
            </div>
            <nav class="navbar">
                <div class="nav-item"><a href="#">Home</a></div>
                <div class="nav-item"><a href="#">About</a></div>
                <div class="nav-item"><a href="#">Contact</a></div>
                <div class="nav-item"><a href="#">Blog</a></div>
                <div class="nav-item"><router-link to="/signup">SignUp</router-link></div>
                <div class="nav-item"><router-link @click="logout" to="/">Logout </router-link></div>
            </nav>
            <div class="user-options">
                <div class="option"><i class="fa fa-moon"></i></div>
                <div class="option"><i class="fa fa-user"></i></div>
                <div class="option"><i class="fa fa-gear"></i></div>
            </div>

        </div>

        <hr>


    </div>
</template>

<script>
export default {
    name: 'header',
    methods: {
        logout () {
            console.log("logout");
            localStorage.clear()
        }
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    font-family: sans-serif;
}

.header-container {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;
}

.logo {
    font-weight: bold;
    font-style: italic;
}

.menu-active {
    display: flex;
    align-items: cneter;
    justify-content: space-between;
    display: none;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-item a {
    border-radius: 5px;
    text-decoration: none;
    padding: 1rem;
    transition: 0.25s;
}

.nav-item a:hover {
    background-color: #8df;
}

.user-options {
    display: flex;
    align-items: center;
    justify-content: center;
}

.option {
    padding: 1rem;
}

.option:hover {
    cursor: pointer;
    color: blue;
}

.menu {
    display: none;
}

.footer-container {
    background-color: #cef;
    position: absolute;
    width: 100vw;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.newsletter {
    width: 100%;
    padding: 2rem;
    background-color: #8df;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.newsletter div {
    background-color: white;
    padding: 0 10px;
    border-radius: 35px;
    display: flex;
    align-items: center;
}

.newsletter div input {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 1rem;

}

.newsletter div i {
    cursor: pointer;
    background-color: #0081FE;
    border-radius: 50%;
    font-size: 20px;
    padding: 10px;
    color: white;
}

.social-links {
    display: flex;
    align-items: center;
}

.social-links .link {
    padding: 2rem 10px;
}

.social-links .link a {
    color: #000;
}

.social-links .link a:hover {
    color: #00f;
}

.copyright {
    padding: 0 0 2rem;
    font-size: 10px;
}


@media screen and (max-width: 600px) {

    .navbar,
    .user-options {
        display: none;
    }

    .menu {
        display: block;
    }
}

@media screen and (max-width: 400px) {
    .newsletter {
        flex-direction: column;
    }

    .newsletter span:before {
        content: 'Join Our ';
    }
}

@media screen and (min-width: 1300px) {
    .header-container {
        margin: 0 6rem;
    }
}
</style>