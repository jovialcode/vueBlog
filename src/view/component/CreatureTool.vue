<template>
    <div class="creatureTool">
        <button
                class="resizeButton"
                v-on:drag="resizeCreature"
        >
            <img src="/img/resize.png">
        </button>
        <button
                class="deleteButton"
                v-on:click="deleteCreature">
            <img src="/img/delete.png">
        </button>
    </div>
</template>

<script>
    export default {
        name : "CreatureTool"
        , methods : {
            detachTool(event){

            }
            , resizeCreature(event){
                event.stopPropagation();
                event.preventDefault();

                const creature = event.currentTarget.closest('.creature');
                creature.style.width = `${event.pageX - creature.offsetLeft}px`;
                creature.style.height = `${event.pageY - creature.offsetTop}px`;
            }
            , deleteCreature(event){
                event.stopPropagation();
                event.preventDefault();

                const creature = event.currentTarget.closest('.creature');
                creature.remove();
            }
        }
    }
</script>

<style lang="scss">
    .resizeButton {
        position: absolute;

        bottom: -15px;
        right: -15px;

        width: 38px;
        height: 38px;
    }
    .deleteButton {
        position: absolute;
        right: 0;
    }
</style>