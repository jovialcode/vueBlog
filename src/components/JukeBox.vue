<template>
    <div class="jukeBoxWrapper"
         v-bind:class="{active: isOpen}"
    >
        <button class="jukeBoxToggleButton" v-on:click="toggleJukeBox"><</button>
        <div class="jukeBox ng-app-embedded">
            <div class="microsite embedded-radio-player"
                 ui-view
                 data-playerwidth="340px"
                 data-playertype="web_embedded"
                 data-playstation="181fmchristmassmooth"
                 data-autoplay="true"
                 data-apikey="df04ff67dd3339a6fc19c9b8be164d5b5245ae93">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "JukeBox"
        , methods: {
            toggleJukeBox(){
                this.isOpen = !this.isOpen;
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
    .jukeBoxWrapper{
        position: absolute;
        right: 30px;
        bottom: 30px;
        background: #1e1e1e;

        visibility: hidden;
    }
    .jukeBox {
        width: 340px;
        height: 92px;
    }

    .jukeBoxToggleButton{
        position: absolute;
    }

    .jukeBox.active{
        display: block;
    }
</style>