<template>
    <div class = "loader-div">
    <img src="/img/loader.gif" alt="loader" class = "loader-div-img">
    </div>
</template>

<script>
    export default {
        name: 'loader',
    };
</script>

<style lang="scss">
    .loader{
        &-div{
            height: -webkit-fill-available;
            &-img{
                position: relative;
                top: 20%;
            }
        }
    }
</style>
