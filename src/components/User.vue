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
            const res = await this.$axios.get('/api/users/me');
            this.user = res.data;
        }
    }
</script>

<style scoped>

</style>