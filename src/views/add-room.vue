<template>
    <div class="add-form-container">
        <add-room-form></add-room-form>
    </div>
</template>

<script>
    import AddRoomForm from '../components/containers/add-room-form';
    export default {
        name: 'add-room',
        components: { AddRoomForm},
    };
</script>

<style lang="sass">
    @import "~@/Shared.scss"

</style>
