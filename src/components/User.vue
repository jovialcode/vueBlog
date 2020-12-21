<template>
    <div>
        <div>
            <button v-on:click="getMe">내 정보 가져오기</button>
        </div>
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
        , methods : {
            async getMe(){
                const res = await this.$axios.get('/api/users/me');
                this.user = res.data;
            }
        }
    }
</script>

<style scoped>

</style>