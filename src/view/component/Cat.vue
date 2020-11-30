<template>
    <div v-on:drag="dragStart"
         v-on:click="click"
         v-bind:class="{active: isActive}"
         draggable="true"
         class="creature draggable"
         >
        <CreatureTool
                v-if="isActive"
        />
        <img src="/img/christmastree.png">
    </div>
</template>

<script>
    import EventBus from "../../util/EventBus"
    import CreatureTool from "./CreatureTool";

    export default {
        name: "Cat"
        , components : {CreatureTool}
        , methods : {
            dragStart(event){
                EventBus.$emit('dragStart', event);
            }
            , click(){
                this.isActive = !this.isActive;
                if(this.isActive){

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
    .creature > img{
        width: 100%;
        height: 100%;
    }
    .creature.active > img{
        border: #ede1e0 2px dashed;
    }
</style>