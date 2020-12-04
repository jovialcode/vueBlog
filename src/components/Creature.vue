<template>
    <div v-on:drag="dragStartCreature"
         v-on:click="clickCreature"
         v-bind:class="{active: isActive}"
         v-bind:data-uuid=creatureUuid
         v-bind:data-type="creatureType"
         draggable="true"
         class="creature draggable"
         >
        <CreatureTool
                v-if="isActive"
                :isEditable = isEditable
                v-on:editableCreature="clickEditable"
                :option = "creatureList[creatureType]"
        />
        <div class="textBox"
             :contenteditable="isEditable? true : false"
             v-if="!creatureList[creatureType].img">
            TextBox
        </div>
        <img v-else
             :src="creatureList[creatureType].img"
        />
    </div>
</template>

<script>
    import {EventBus} from "../utils";
    import {creatureConfig} from '../configs';
    import CreatureTool from "./CreatureTool";

    const creatureList = creatureConfig;

    export default {
        name: "Creature"
        , components : {CreatureTool}
        , props : ['creatureType', 'creatureUuid']
        , methods : {
            dragStartCreature(event){
                EventBus.$emit('dragStart', event);
            }
            , clickCreature(event){
                const creature = event.currentTarget;
                const creatureType = creature.dataset.type;
                this.isActive = !this.isActive;
            }
            , clickEditable(){
                this.isEditable = !this.isEditable;
            }
        },
        data(){
            return {
                isActive : false
                , isEditable : false
                , creatureList : creatureList
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

    .creature.active > .textBox{
        border: #ede1e0 2px dashed;
    }
</style>