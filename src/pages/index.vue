<template>
    <div id="app" v-on:drop="dropCreature" v-on:dragover="dragOverCreature">
        <Creature v-for="creature in creatures" :creature-type="creature.type" :creature-uuid="creature.uuid" :key="creature.uuid"></Creature>
        <CreatureNavigation/>
        <JukeBox/>
        <Tools :creature-list="creatures"/>
    </div>
</template>

<script>
    import Nav from "../components/Nav";
    import CreatureNavigation from "../components/CreatureNavigation";
    import Creature from "../components/Creature";
    import JukeBox from "../components/JukeBox";
    import Tools from "../components/Tools";
    import EventBus from "../utils/eventBus";

    let currentTarget;
    export default {
        head: {
            script: [
                {
                    type: 'text/javascript'
                    , src: 'https://www.radio.net/inc/microsite/js/full.js'
                    , id : 'radio-de-embedded'
                    , async: true
                }
            ]
        }
        , components : {
            Nav
            , CreatureNavigation
            , Creature
            , JukeBox
            , Tools
        }
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
            , deleteCreature(uuid){
                const targetIndex = this.creatures.findIndex(x => x.uuid === Number(uuid));
                this.$store.dispatch('creature/delete', targetIndex);
            }
            , createCreature(name){
                if(name === undefined) throw Error('no');
                this.$store.dispatch('creature/insert', {
                    type : name
                    , uuid: this.creaturesCount++
                });
            }
        }
        , computed: {
            creatures:{
                get(){
                    return this.$store.state.creature.creatureList;
                }
            }
        }
        , created(){
            EventBus.$on('dragStart', this.dragStartCreature);
            EventBus.$on('createCreature', this.createCreature);
            EventBus.$on('deleteCreature', this.deleteCreature);
        }
        , data(){
            return {
                message: 'Merry Christmas'
                , creaturesCount : 1
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