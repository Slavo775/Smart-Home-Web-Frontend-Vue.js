<template>
    <button v-on:click="clickOnButton" class = "main-button">{{buttonText}}</button>
</template>

<script>
    export default {
        name: "main-button",
        props: {
            buttonText: {
                type: String,
            }
        },
        methods: {
            clickOnButton() {
                this.$emit('clickOnButton');
            }
        }
    }
</script>

<style lang="scss">
    @import "~@/Shared.scss";

    .main-button{
        margin-right: 1rem;
        min-width: 193px;
        height: 50px;
        border-radius: 25px;
        background: $main;
        font-size: 15px;
        line-height: 1.5;
        color: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 25px;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;
    }
</style>
