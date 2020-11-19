<template>
    <div id="app">
        {{ message }}
        <Nav/>
    </div>
</template>

<script>
    import Nav from "./view/Nav";

    export default {
        components: {Nav},
        data() {
            return {
                message: 'Merry Christmas',
            };
        },
    };
</script>

<style lang="scss">
    #app{
        height: 100vh;

        background : #ab2c20;
        border : 25px solid #114815;

        color: #ffffff;
    }
</style>