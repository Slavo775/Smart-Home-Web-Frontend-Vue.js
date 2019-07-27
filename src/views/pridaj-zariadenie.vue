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

<style lang="less">
    .add-device-content {
        padding-left: 260px;
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

    .header {
        display: block;
        font-family: Montserrat-ExtraBold;
        font-size: 24px;
        color: #333333;
        line-height: 1.2;
        justify-content: center;
        text-align: center;
        width: 100%;
    }

    .add-device-container {
        width: 37rem;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 70px 70px 70px 60px;
        margin-top: 6rem;
        margin-bottom: 5rem;

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

    .buttons {
        display: flex;

        .button-add {
            margin-right: 1rem;
            min-width: 193px;
            height: 50px;
            border-radius: 25px;
            background: #18A0A3;
            font-family: Montserrat-Bold;
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

        .message {
            display: flex;
            justify-content: center;
            align-items: center;
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


</style>

