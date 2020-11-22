<template>
    <div v-on:drag="dragStart"
         v-on:click="click"
         v-bind:class="{active: isActive}"
         draggable="true"
         class="creature draggable"
         >
        <img src="/img/persian.png">
    </div>
</template>

<script>
    import EventBus from "../../util/EventBus"
    export default {
        name: "Cat"
        , methods : {
            dragStart(event){
                EventBus.$emit('dragStart', event);
            }
            , click(){
                this.isActive = !this.isActive;
                if(this.isActive){
                    EventBus.$emit('creatureActive', this);
                }
            }
        },
        data(){
            return {
                isActive : false
            }
        }
    }
</script>

<style>
    .creature{
        position: absolute;
        box-sizing: border-box;
    }
    .creature.active > img{
        border: #ede1e0 2px dashed;
    }
</style>