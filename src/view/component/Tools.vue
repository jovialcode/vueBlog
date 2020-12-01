<template>
    <div class="tools"
         v-bind:class="{active: isOpen}"
    >
        <div class="creatureInfo">
            <h3>생성한 객체 정보</h3>
            <ul ref="creatureList" class="creatureList">
                <li v-for="item in creatureList" :key=item.uuid>
                    {{item.type}}{{item.uuid}}
                    <button :data-uuid="item.uuid" v-on:click="deleteCreature"> X </button>
                </li>
            </ul>
            <span>{{creatureList.length}}개</span>
        </div>

        <div class="horizontalBar"></div>
        <button v-on:click="deleteAllCreature"> 전체 삭제 </button>
    </div>
</template>

<script>
    import EventBus from "../../util/EventBus";

    export default {
        name: "Tools"
        , props : ["creatureList"]
        , methods: {
            toggleToolBox(){

            }
            , deleteCreature(event){
                event.stopPropagation();
                event.preventDefault();

                const uuid = event.currentTarget.dataset.uuid;
                EventBus.$emit('deleteCreature', uuid);
            }
            , deleteAllCreature(event){
                event.stopPropagation();
                event.preventDefault();

                const creatureList = this.$refs.creatureList.children;
                Array.from(creatureList).forEach(el =>{
                    EventBus.$emit('deleteCreature', el.dataset.uuid);
                });
                console.log(creatureList);
            }
        }
        , data(){
            return {
                isOpen : true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tools{
        position: absolute;
        right: 30px;
        top: 30px;

        display: none;
        width: 180px;
        padding: 15px;

        background: #1e1e1e;

        font-family: Arial;
        font-size: 14px;

        > button {
            color: #ffffff;
            border: 1px solid #ffffff;
        }
    }

    .tools.active{
        display: block;
    }

    ul.creatureList{
        margin: 5px 0px;
        > li {
            > button {
                color: #ffffff
            }
        }
    }

    .horizontalBar{
        height: 1px;
        width: 100%;
        background: #ffffff;

        margin-top: 10px;
        margin-bottom: 5px;
    }
</style>