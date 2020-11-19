<template>
    <div id="nav">
        <ul class="navList">
            <li v-for="item in navList">
                <a :title=item.text>
                    <img v-bind:style="{ backgroundImage: 'url(' + item.img + ')' }">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import config from "../config/config";

    const navList = [
        {
            text : 'article',
            img : `${config.imgPath}/snowman.png`
        },
        {
            text : 'game',
            img : `${config.imgPath}/ornament.png`
        },
        {
            text : 'game',
            img : `${config.imgPath}/tree.png`
        }
    ];

    export default {
        name: "Nav",
        data(){
            return {
                navList : navList
            }
        }
    }
</script>

<style lang="scss">
    @mixin circle{
        width: 100%;
        height: 100%;
        border-radius: 50%;
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
            display: flex;
            flex-direction: row;

            > li {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                text-align: center;

                margin-right: 12px;

                a {
                    display: block;
                    @include circle;

                    &:hover{
                        cursor: pointer;
                    }

                    img{
                        @include circle;
                    }
                }

                &:last-child{
                    margin-right: 0;
                }
            }
        }
    }
</style>