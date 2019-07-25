<template>
    <div class="add-room-content">
        <add-room-form></add-room-form>
        <layout-footer></layout-footer>
    </div>
</template>

<script>
    import AddRoomForm from '../components/add-room-form';
    import LayoutFooter from '../components/layout-footer';
    export default {
        name: 'add-room',
        components: {LayoutFooter, AddRoomForm},
    };
</script>

<style lang="less">
    .add-room-content {
        background: url("../assets/room_vanity_flooring_wall_80351_1600x1200.jpg") no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>
