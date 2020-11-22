<template>
    <div id="app" v-on:drop="drop" v-on:dragover="dragOver">
        <component v-for="creature in creatures" v-bind:is="creature.type" :key="creature.id"></component>
        <span v-on:drag="dragStart" draggable="true" class="draggable">{{ message }}</span>
        <span v-on:drag="dragStart" draggable="true" class="draggable">{{ message }}</span>
        <span v-on:drag="dragStart" draggable="true" class="draggable">{{ message }}</span>
        <span v-on:drag="dragStart" draggable="true" class="draggable">{{ message }}</span>
        <Nav/>
        <CatNav/>
    </div>
</template>

<script>
    import Nav from "./view/Nav";
    import CatNav from "./view/CatNav";
    import Cat from "./view/component/Cat";
    import Tree from "./view/component/Tree";
    import EventBus from "./util/EventBus";

    let currentTarget;

    export default {
        components : {Nav, Tree, CatNav, Cat}
        , methods : {
            dragStart(event){
                currentTarget = event.currentTarget;
                event.stopPropagation();
                event.preventDefault();
            }
            , dragOver(event){
                event.stopPropagation();
                event.preventDefault();
            }
            , drop(event){
                event.stopPropagation();
                event.preventDefault();
                currentTarget.style.left = `${event.pageX- currentTarget.offsetWidth/2}px`;
                currentTarget.style.top = `${event.pageY- currentTarget.offsetHeight/2}px`;
            }
            , createCreature(name){
                if(name === undefined) throw Error('no');
                switch (name) {
                    case 'cat' : {
                        this.creatures.push({type : name, id: this.creaturesCount ++});
                    }
                    default:{

                    }
                }
            }
        }
        , created(){
            EventBus.$on('dragStart', this.dragStart);
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