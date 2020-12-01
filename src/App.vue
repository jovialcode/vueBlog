<template>
    <div id="app" v-on:drop="dropCreature" v-on:dragover="dragOverCreature">
        <Creature v-for="creature in creatures" :creature-type="creature.type" :key="creature.id"></Creature>
        <CreatureNavigation/>
        <Nav/>
    </div>
</template>

<script>
    import Nav from "./view/Nav";
    import CreatureNavigation from "./view/CreatureNavigation";
    import Creature from "./view/component/Creature";
    import EventBus from "./util/EventBus";

    let currentTarget;

    export default {
        components : {Nav, CreatureNavigation, Creature}
        , methods : {
            dragStartCreature(event){
                currentTarget = event.currentTarget;
                event.stopPropagation();
                event.preventDefault();
            }
            , dragOverCreature(event){
                event.stopPropagation();
                event.preventDefault();
            }
            , dropCreature(event){
                event.stopPropagation();
                event.preventDefault();
                if(currentTarget == null || currentTarget.classList.contains('active')){
                    return;
                }
                currentTarget.style.left = `${event.pageX- currentTarget.offsetWidth/2}px`;
                currentTarget.style.top = `${event.pageY- currentTarget.offsetHeight/2}px`;
                currentTarget = null;
            }
            , createCreature(name){
                if(name === undefined) throw Error('no');
                this.creatures.push({type : name, id: this.creaturesCount ++});
            }
        }
        , created(){
            EventBus.$on('dragStart', this.dragStartCreature);
            EventBus.$on('createCreature', this.createCreature)
        }
        , data(){
            return {
                message: 'Merry Christmas'
                , creatures : []
                , creaturesCount : 0
            };
        },
    };
</script>

<style lang="scss">
    #app{
        position: relative;

        height: 100vh;
        padding: 25px;

        background : #ab2c20;
        border : 35px solid #114815;

        color: #ffffff;
        font-size: 40px;
        font-family: MountainsofChristmas-Bold;
    }

    .draggable{
        position: absolute;
        display: inline-block;

        &:hover{
            cursor: pointer;
        }
    }
</style>