<template>
    <div id="nav">
        <Slick v-bind:setting="setting">
            <ul class="navList">
                <li v-for="item in navList">
                    <a :title=item.text>
                        <img v-bind:style="{ backgroundImage: 'url(' + item.img + ')' }">
                    </a>
                </li>
            </ul>
        </Slick>
    </div>
</template>

<script>
    import {envConfig} from "../config";
    import Slick from "./component/Slick";

    const navList = [
        {
            text : 'article',
            img : `${envConfig.imgPath}/snowman.png`
        },
        {
            text : 'game',
            img : `${envConfig.imgPath}/ornament.png`
        },
        {
            text : 'game',
            img : `${envConfig.imgPath}/tree.png`
        },
        {
            text : 'rudolph',
            img : `${envConfig.imgPath}/rudolph.png`
        }
    ];
    const setting = {
        "isHorizontal" : true
        , "slidesToShow": 3
        , "slidesToScroll": 1
        , "slideMarginRight" : 12
    };

    export default {
        name: "Nav"
        , components : {Slick}
        , data(){
            return {
                navList : navList
                , setting : setting
            }
        }
    }
</script>

<style lang="scss" scoped>
    @mixin maxSize{
        width: 100%;
        height: 100%;
    }

    #nav{
        position:absolute;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 80px;
        margin-bottom: 25px;

        .navList {
            width: 240px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            overflow-x: hidden;

            > li {
                float:left;
                width: 50px;
                height: 50px;
                text-align: center;

                margin-right: 12px;

                a {
                    display: block;
                    @include maxSize;

                    &:hover{
                        cursor: pointer;
                    }

                    img{
                        @include maxSize;
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                }

                &:last-child{
                    margin-right: 0;
                }
            }
        }
    }
</style>