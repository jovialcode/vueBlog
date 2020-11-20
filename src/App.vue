<template>
    <div id="app" v-on:drop="drop" v-on:dragover="dragOver">
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
    import Tree from "./view/component/Tree";

    let currentTarget;

    export default {
        components: {Nav, Tree, CatNav},
        methods:{
            dragStart(event){
                currentTarget = event.target;
            },
            dragOver(event){
                event.stopPropagation();
                event.preventDefault();
            },
            drop(event){
                event.stopPropagation();
                event.preventDefault();
                currentTarget.style.marginLeft = `${event.pageX- currentTarget.offsetWidth/2}px`;
                currentTarget.style.marginTop = `${event.pageY- currentTarget.offsetHeight/2}px`;
            }
        },
        data() {
            return {
                message: 'Merry Christmas',
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