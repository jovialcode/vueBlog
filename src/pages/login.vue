<template>
    <div class="container">
        <h1>Sign in to access the secret page</h1>
        <div>
            <label for="email">
                <input v-model="email" id="email" type="email">
            </label>
            <label for="password">
                <input v-model="password" id="password" type="password">
            </label>
            <button @click="postLogin">
                login
            </button>
            <p>The credentials are not verified for the example purpose.</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email : 'zealtez@naver.com'
                , password : 'q1w2e3r4!Q'
            }
        }
        , methods: {
            async postLogin () {
                const password = this.password;
                const email = this.email;

                await this.$store.dispatch('auth/login', {email, password})
            }
        }
    }
</script>
