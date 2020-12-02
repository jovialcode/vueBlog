<template>
    <div id="catNav"
         v-if="isDebug"
         data-html2canvas-ignore="true"
    >
        <Slick v-bind:setting="setting">
            <ul class="navList">
                <li v-for="item in navList">
                    <button :name=item.text :title=item.text v-on:click="createCreature">
                        <div class="textBox" v-if="item.text === 'textBox'">TextBox</div>
                        <img v-else v-bind:style="{ backgroundImage: 'url(' + item.img + ')' }">
                    </button>
                </li>
            </ul>
        </Slick>
    </div>
</template>

<script>
    import config from "../config/config";
    import EventBus from "../util/EventBus";
    import Slick from "./component/Slick";

    const navList = [
        {
            text : 'cat',
            img : `${config.imgPath}/persian.png`
        },
        {
            text : 'catShocks',
            img : `${config.imgPath}/catShocks.png`
        },
        {
            text : 'light',
            img : `${config.imgPath}/light.png`
        },
        {
            text : 'firePlace',
            img : `${config.imgPath}/firePlace.png`
        },
        {
            text : 'christmasTree',
            img : `${config.imgPath}/christmasTree.png`
        },
        {
            text : 'santa',
            img : `${config.imgPath}/santa.png`
        },
        {
            text : 'colorBall',
            img : `${config.imgPath}/colorBall.png`
        },
        {
            text : 'fruitBall',
            img : `${config.imgPath}/fruitBall.png`
        },
        {
            text : 'greenBall',
            img : `${config.imgPath}/greenBall.png`
        },
        {
            text : 'bear',
            img : `${config.imgPath}/bear.png`
        },
        {
            text : 'textBox',
        },
    ];
    const setting = {
        "isHorizontal" : true
        , "slidesToShow": 4
        , "slidesToScroll": 1
        , "slideMarginRight" : 12
    };

    export default {
        name: "CatNav"
        , components : {Slick}
        , methods: {
            createCreature(event){
                const target = event.currentTarget;
                EventBus.$emit('createCreature', target['name']);
            }
        }
        , data(){
            return {
                navList : navList
                , setting : setting
                , isDebug : config.isDebug
            }
        }
    }
</script>

<style lang="scss" scoped>
    @mixin maxSize{
        width: 100%;
        height: 100%;
    }

    #catNav{
        position:absolute;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 80px;
        margin-left: 25px;

        .navList {
            width: 750px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            overflow: hidden;

            > li {
                float:left;
                width: 50px;
                height: 50px;
                text-align: center;

                margin-right: 12px;

                button {
                    display: block;
                    @include maxSize;

                    &:hover{
                        cursor: pointer;
                    }

                    img{
                        @include maxSize;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                    }

                    .textBox{
                        color: #ffffff;
                        font-size: 12px;
                        line-height: 50px;
                        height: 50px;

                        border: 0.5px solid #ffffff;
                    }
                }

                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
    }
</style>