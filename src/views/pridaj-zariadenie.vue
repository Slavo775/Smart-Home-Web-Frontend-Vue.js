<template>
    <div class="add-device-content">
        <add-device-form></add-device-form>
    </div>
</template>

<script>
    import axios from 'axios';
    import AddDeviceForm from '../components/containers/add-device-form';

    export default {
        components: {AddDeviceForm},
    };
</script>

<style lang="scss">
    @import "~@/Shared";

    .add-device-content {
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

    .header-box {
        border-radius: 3px;
        margin-top: -40px;
        padding: 15px;
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(156, 39, 176, .4);
        background: linear-gradient(60deg, #ab47bc, #8e24aa);

        .header {
            font-size: 1.125rem;
            font-weight: 300;
            line-height: 1.4em;
            font-family: Roboto, Helvetica, Arial, sans-serif;
            color: #ffffff;
        }
    }

    .add-device-container {
        border: 0;
        margin-bottom: 30px;
        margin-top: 10%;
        border-radius: 6px;
        color: #333;
        background: #fff;
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        font-size: .875rem;
        padding: 15px;

        .add-device-container-content {
            padding: 2rem 20px;
            position: relative;
            flex: 1 1 auto;
            .message {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: -9rem;
                left: 10rem;
                animation: mymove 1s;
            }

            .error-message {
                color: #D8000C;
                background-color: #FFBABA;
                padding: 0.5rem;
            }

            .success-message {
                margin: 10px 0;
                padding: 10px;
                border-radius: 3px 3px 3px 3px;
                color: #270;
                background-color: #DFF2BF;
            }
            .input-div {
                width: 100%;
                z-index: 1;
                margin-bottom: 20px;

                .input {
                    display: block;
                    margin-right: 0;
                    width: -webkit-fill-available;
                    background: #e6e6e6;
                    font-family: Montserrat-Bold;
                    font-size: 15px;
                    line-height: 1.5;
                    color: #666666;
                    border-radius: 25px;
                    border: none;
                    padding: 1rem;
                }
            }
        }
    }

    .buttons {
        display: flex;
        margin-top: 2rem;

        .button-add {
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
    }

    .input-error {
        border-style: solid !important;
        border-color: red !important;
        border-width: 1px !important;
    }

    @media only screen and (max-width: 600px) {
        .buttons {
            display: block;
        }

        .add-device-container {
            padding: 0.5rem
        }
    }

    @font-face {
        font-family: Montserrat-Regular;
        src: url('../assets/fonts/montserrat/Montserrat-Regular.ttf');
    }

    @font-face {
        font-family: Montserrat-Bold;
        src: url('../assets/fonts/montserrat/Montserrat-Bold.ttf');
    }

    @font-face {
        font-family: Montserrat-ExtraBold;
        src: url('../assets/fonts/montserrat/Montserrat-ExtraBold.ttf');
    }

    @font-face {
        font-family: Montserrat-Medium;
        src: url('../assets/fonts/montserrat/Montserrat-Medium.ttf');
    }

    @media only screen and (max-width: 600px) {
        .add-device-content {
            padding-left: 0;
        }
    }
    @keyframes mymove {
        from {top: 0;}
        to {top: -9rem;}
    }

</style>

