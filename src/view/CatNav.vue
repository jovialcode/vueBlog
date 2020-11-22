<template>
    <div id="catNav">
        <ul class="navList">
            <li v-for="item in navList">
                <button :name=item.text :title=item.text v-on:click="createCreature">
                    <img v-bind:style="{ backgroundImage: 'url(' + item.img + ')' }">
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    import config from "../config/config";
    import EventBus from "../util/EventBus";

    const navList = [
        {
            text : 'cat',
            img : `${config.imgPath}/cat.png`
        },
        {
            text : 'dog',
            img : `${config.imgPath}/dog.png`
        }
    ];

    export default {
        name: "CatNav"
        , data(){
            return {
                navList : navList
            }
        }
        , methods: {
            createCreature(event){
                const target = event.currentTarget;
                EventBus.$emit('createCreature', target['name']);
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
        left: 0;
        top : calc(40vh);

        display: flex;
        justify-content: center;
        align-items: center;

        margin-left: 25px;

        .navList {
            display: flex;
            flex-direction: column;

            > li {
                width: 50px;
                height: 50px;
                text-align: center;

                margin-bottom: 12px;

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
                    }
                }

                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
    }
</style>