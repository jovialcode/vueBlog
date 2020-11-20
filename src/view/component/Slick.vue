<template>
    <div id="slickWrapper" ref="slickWrapper">
        <button class="leftButton" v-on:click="leftSlide"><</button>
        <slot/>
        <button class="rightButton" v-on:click="rightSlide">></button>
    </div>
</template>

<script>
    let leftIndex = 0;

    export default{
        name : "Slick"
        , props : {
            setting : {
                type : Object
            }
        }
        , mounted(){
            this.$refs.slickWrapper.style.width = `${this.$slots["default"][0].elm.clientWidth + 100}px`;
            this.$refs.slickWrapper.style.height = `${this.$slots["default"][0].elm.clientHeight}px`;

            const $ul = this.$slots["default"][0].elm;
            const $liList = $ul.children;
            const maxCountSlideToShow = this.$options.propsData['setting'].slidesToShow;
            let countSlideToShow = 0;

            while(countSlideToShow < maxCountSlideToShow && countSlideToShow < $liList.length){
                $liList[countSlideToShow++].style.display = "none";
            }
        }
        , methods : {
            leftSlide(){
                console.log('클릭 left')
            },
            rightSlide(){
                console.log('클릭 right')
            }
        }
        // , data(){
        //     return {
        //         navList : slideList
        //     }
        // }
    }
</script>

<style lang="scss" scoped>
    #slickWrapper{
        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;
    }

    .leftButton{
        color:#ffffff;
        margin-right: 15px;
    }

    .rightButton{
        color:#ffffff;
        margin-left: 15px;
    }
</style>