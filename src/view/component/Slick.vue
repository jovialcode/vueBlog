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
    import util from '../../util/util';
    let slideList;
    let slideConfig = {
        slideSpeed : 300 // 슬라이드 속력
        , slideWidth : null // 슬라이드 1장 너비
        , slideCount : null // 슬라이드 총 개수
        , slidesToShow : null // 슬라이드했을 때 카운트
    };
    let curIndex = 0;
    let fn = {
        slide(isLeft){
            if (curIndex < slideConfig['slideCount'] - 1) {
                slideList.style.transform = util.stringFormat('translate3d({0}{1}px, 0px, 0px)', isLeft? '-': '+', slideConfig['slideWidth'] * (curIndex + 1));
            } else {
                slideList.style.transform = "translate3d(0px, 0px, 0px)";
                curIndex = -1;
            }
            curIndex += 1;
        }
    };

    export default{
        name : "Slick"
        , props : {
            setting : {
                type : Object
            }
        }
        , methods : {
            leftSlide(){
                fn.slide(true);
            },
            rightSlide(){
                fn.slide(false);
            }
        }
        , created(){
            const setting = this.$options.propsData['setting'];
            slideConfig['slidesToShow'] = setting['slidesToShow'];
            slideConfig['slideSpeed'] = setting['slideSpeed'] | slideConfig['slideSpeed'];
        }
        , mounted(){
            slideList = this.$slots['default'][0].elm;
            slideList.style.transition = slideConfig['slideSpeed'] + "ms";
            const slideListWidth = slideList.clientWidth;
            const slideListHeight = slideList.clientHeight;

            slideConfig['slideCount'] = slideList.childElementCount;
            slideConfig['slideWidth'] = slideListWidth / slideConfig['slideCount'];

            const slideWrapperWidth = slideConfig['slideWidth'] * slideConfig['slidesToShow'];

            this.$refs.slideWrapper.style.width = `${slideWrapperWidth}px`;
            this.$refs.slideWrapper.style.height = `${slideListHeight}px`;
            this.$refs.slick.style.width = `${slideListWidth}px`;
        }

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