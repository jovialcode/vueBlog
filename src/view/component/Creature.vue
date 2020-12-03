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
                :option = "creatureConfig[creatureType]"
        />
        <div class="textBox"
             :contenteditable="isEditable? true : false"
             v-if="!creatureConfig[creatureType].img">
            TextBox
        </div>
        <img v-else
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
            , isResizable : true
            , isEditable : false
        }
        , light : {
            img : '/img/light.png'
            , isResizable : true
            , isEditable : false
        }
        , catShocks : {
            img : '/img/catShocks.png'
            , isResizable : true
            , isEditable : false
        }
        , cat :{
            img : '/img/persian.png'
            , isResizable : true
            , isEditable : false
        }
        , christmasTree : {
            img : '/img/christmasTree.png'
            , isResizable : true
            , isEditable : false
        }
        , santa : {
            img : '/img/santa.png'
            , isResizable : true
            , isEditable : false
        }
        , colorBall : {
            img : '/img/colorBall.png'
            , isResizable : true
            , isEditable : false
        }
        , fruitBall : {
            img : '/img/fruitBall.png'
            , isResizable : true
            , isEditable : false
        }
        , greenBall : {
            img : '/img/greenBall.png'
            , isResizable : true
            , isEditable : false
        }
        , bear : {
            img : '/img/bear.png'
            , isResizable : true
            , isEditable : false
        }
        , textBox : {
            img : null
            , isResizable : false
            , isEditable : true
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

    .creature.active > .textBox{
        border: #ede1e0 2px dashed;
    }
</style>