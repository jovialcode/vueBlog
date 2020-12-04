<template>
    <div class="tools"
         v-if="isDebug"
         data-html2canvas-ignore="true"
         v-bind:class="{active: isOpen}"
    >
        <button class="toggleToolBox"
                v-on:click="toggleToolBox"
        > ㅡ
        </button>
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
        <button v-on:click="saveAllCreature"> 이미지 저장 </button>

        <a id="downloadTarget" style="display: none"></a>
    </div>
</template>

<script>
    import EventBus from "../../util/EventBus";
    import html2canvas from "html2canvas";
    import {envConfig} from "../../config";

    export default {
        name: "Tools"
        , props : ["creatureList"]
        , methods: {
            toggleToolBox(){
                this.isOpen = !this.isOpen;
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
            , saveAllCreature(){
                html2canvas(document.body).then(function(canvas) {
                    const el = document.getElementById('downloadTarget');
                    el.href = canvas.toDataURL('image/jpeg');
                    el.download = 'christmasCard.jpg';
                    el.click();
                });
            }
        }
        , data(){
            return {
                isOpen : true
                , isDebug : envConfig.isDebug
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tools{
        position: absolute;
        right: 30px;
        top: 30px;

        width: 180px;
        padding: 15px;

        background: #1e1e1e;
        height: 35px;
        transition: height 0.5s cubic-bezier(0, 0, 1, 1);
        overflow-y: hidden;

        font-family: Arial;
        font-size: 14px;

        > button {
            color: #ffffff;
            border: 1px solid #ffffff;
        }

        .toggleToolBox{
            position: absolute;
            right : 15px;
            top : 10px;
        }
    }

    .tools.active{
        height: auto;
    }

    ul.creatureList{
        margin: 10px 0px;
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