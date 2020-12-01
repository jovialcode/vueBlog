<template>
    <div v-on:drag="dragStartCreature"
         v-on:click="clickCreature"
         v-bind:class="{active: isActive}"
         draggable="true"
         v-bind:data-uuid=creatureUuid
         class="creature draggable"
         >
        <CreatureTool
                v-if="isActive"
        />
        <img
                :src="creatureConfig[creatureType].img"
        />
    </div>
</template>

<script>
    import EventBus from "../../util/EventBus"
    import CreatureTool from "./CreatureTool";

    const creatureConfig = {
        firePlace : {
            img : '/img/firePlace.png'
        }
        , light : {
            img : '/img/light.png'
        }
        , catShocks : {
            img : '/img/catShocks.png'
        }
        , cat :{
            img : '/img/persian.png'
        }
        , christmasTree : {
            img : '/img/christmasTree.png'
        }
    };

    export default {
        name: "Creature"
        , components : {CreatureTool}
        , props : ['creatureType', 'creatureUuid']
        , methods : {
            dragStartCreature(event){
                EventBus.$emit('dragStart', event);
            }
            , clickCreature(){
                this.isActive = !this.isActive;
            }
        },
        data(){
            return {
                isActive : false
                , creatureConfig : creatureConfig
            }
        }
    }
</script>

<style lang="scss">
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