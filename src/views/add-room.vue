<template>
    <div class="add-room-content">
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

<style lang="less">
    .add-room-content {
        padding-left: 260px;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>
