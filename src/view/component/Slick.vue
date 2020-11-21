<template>
    <div class="slick" ref="slick">
        <div id="slideWrapper" ref="slideWrapper">
            <slot/>
        </div>
        <button class="leftButton" v-on:click="leftSlide"><</button>
        <button class="rightButton" v-on:click="rightSlide">></button>
    </div>
</template>

<script>
    let slides, slideSpeed, slideWidth, slideLen;
    let curIndex = 0;

    export default{
        name : "Slick"
        , props : {
            setting : {
                type : Object
            }
        }
        , mounted(){
            const setting = this.$options.propsData['setting'];
            const slidesToShow = setting['slidesToShow'];
            slides = this.$slots['default'][0].elm;
            slides.style.transition = slideSpeed + "ms";
            slideLen = slides.childElementCount;

            const slidesWidth = slides.clientWidth;
            const slidesHeight = slides.clientHeight;

            slideWidth = slidesWidth / slideLen;
            
            const slideWrapperWidth = slideWidth * slidesToShow;

            this.$refs.slideWrapper.style.width = `${slideWrapperWidth}px`;
            this.$refs.slideWrapper.style.height = `${slidesHeight}px`;
            this.$refs.slick.style.width = `${slidesWidth}px`;
        }
        , methods : {
            leftSlide(){
                if (curIndex < slideLen - 1) {
                    slides.style.transform = "translate3d(-" + (slideWidth * (curIndex + 1)) + "px, 0px, 0px)";
                } else {
                    slides.style.transform = "translate3d(0px, 0px, 0px)";
                    curIndex = -1;
                }
                curIndex += 1;

            },
            rightSlide(){
                if (curIndex < slideLen - 1) {
                    slides.style.transform = "translate3d(+" + (slideWidth * (curIndex + 1)) + "px, 0px, 0px)";
                } else {
                    slides.style.transform = "translate3d(0px, 0px, 0px)";
                    curIndex = -1;
                }
                curIndex += 1;
            }
        }
        // , data(){
        //     return {
        //         navList : slideList
        //     }
        // }
    }
</script>

<style lang="scss">
    @mixin maxSize{
        width: 100%;
        height: 100%;
    }

    .slick{
        position: relative;

        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;

        #slideWrapper{
            position: relative;
            overflow : hidden;
        }

        .leftButton{
            position: absolute;
            left : 0;
            color:#ffffff;
        }

        .rightButton{
            color:#ffffff;
        }
    }
</style>