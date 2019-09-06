<template>
    <div>
        <div class = "error-number"><strong>{{errorCode}}</strong></div>
        <div class = "error-message">{{errorMessage}}</div>
    </div>
</template>

<script>
    export default {
        name: 'error-page',
        props: [
            'errorCode',
            'errorMessage',
        ],
    };
</script>

<style lang="scss">
    @import "~@/Shared.scss";

    .error{
        &-number{
            font-size: 12rem;
            color: #9C27B0;
        }
        &-message{
            font-size: 3rem;
        }
    }
</style>
