<template>
    <div class="creatureTool">
        <button class="resizeButton"
                v-if="option['isResizable']"
                v-on:drag="resizeCreature"
        >
            <img src="/img/resize.png">
        </button>
        <button
                class="editableButton"
                v-if="option['isEditable']"
                v-on:click="editableCreature">
            <img src="/img/editable.png">
        </button>
        <button
                class="deleteButton"
                v-on:click="deleteCreature">
            <img src="/img/delete.png">
        </button>
    </div>
</template>

<script>
    import EventBus from "../../util/EventBus"

    export default {
        name : "CreatureTool"
        , props : ['option', 'isEditable']
        , methods : {
            resizeCreature(event){
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
                const uuid = creature.dataset.uuid;
                EventBus.$emit('deleteCreature', uuid);
            }
            , editableCreature(){
                this.$emit('editableCreature');
            }
        }
    }
</script>

<style lang="scss">
    @mixin buttonSize{
        width: 38px;
        height: 38px;
    }

    .resizeButton {
        @include buttonSize;

        position: absolute;

        bottom: -25px;
        right: -20px;
    }
    .deleteButton {
        @include buttonSize;
        position: absolute;
        top: -15px;
        right: -15px;
    }

    .editableButton{
        @include buttonSize;

        position: absolute;
        bottom: -25px;
        right: -20px;

        > img {
            @include buttonSize;
        }
    }
</style>