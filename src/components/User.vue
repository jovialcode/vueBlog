<template>
    <div>
        <span>{{user}}</span>
    </div>
</template>

<script>
    export default {
        name: "User"
        , data(){
            return {
                user : null
            }
        }
        , async fetch(){
            this.user = await fetch('http://localhost:8080/api/users/me').then((res)=>res.json());
        }
    }
</script>

<style scoped>

</style>