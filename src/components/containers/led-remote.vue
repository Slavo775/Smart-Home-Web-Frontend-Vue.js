<template>
    <div class="one-remote-container">
        <div class="remote-name">{{selectedItem}}
            <div class="remote-name-line"></div>
        </div>
        <div class="two-button button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonOn
                    v-bind:icon-name=buttonsIcon.powerOff
                    v-bind:css-class="buttonsIcon.iconRed"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonOff
                    v-bind:icon-name=buttonsIcon.powerOn
                    v-bind:css-class="buttonsIcon.iconRed"
            ></remote-button>
        </div>
        <div class="two-button button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+brightnessDown
                    v-bind:icon-name=buttonsIcon.circle
                    v-bind:css-class="buttonsIcon.iconBlue"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+brightnessUp
                    v-bind:icon-name=buttonsIcon.powerOn
                    v-bind:css-class="buttonsIcon.iconBlue"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonOne
                    v-bind:css-class="buttonsIcon.iconRed"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonTwo
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonThree
                    v-bind:css-class="buttonsIcon.iconBlue"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonFour
                    v-bind:css-class="buttonsIcon.iconOneLed"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonFive
                    v-bind:css-class="buttonsIcon.iconTwoLed"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonSix
                    v-bind:css-class="buttonsIcon.iconThreeLed"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonSeven
                    v-bind:css-class="buttonsIcon.iconFourLed"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonEight
                    v-bind:css-class="buttonsIcon.iconFiveLed"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonNine

                    v-bind:css-class="buttonsIcon.iconSixLed"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonZero
                    v-bind:css-class="buttonsIcon.iconSevenLed"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonVolUp
                    v-bind:css-class="buttonsIcon.iconEightLed"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonMute
                    v-bind:css-class="buttonsIcon.iconNineLed"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonZero
                    v-bind:css-class="buttonsIcon.iconTenLed"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonVolUp
                    v-bind:css-class="buttonsIcon.iconElevenLed"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonMute
                    v-bind:css-class="buttonsIcon.iconTwelveLed"
            ></remote-button>
        </div>
    </div>
</template>

<script>
    import RemoteButton from '../inputs/remote-button';
    import {buttonsIcon} from '../../remote-variables.js';

    export default {
        name: 'led-remote',
        components: {RemoteButton},
        data() {
            return {
                buttonsIcon: buttonsIcon,
            };
        },
        props: [
            'arduinoIp',
            'deviceName',
            'selectedItem',
            'magioGoShow',
            'samsungShow',
            'buttonOn',
            'buttonOff',
            'buttonSource',
            'buttonOne',
            'buttonTwo',
            'buttonThree',
            'buttonFour',
            'buttonFive',
            'buttonSix',
            'buttonSeven',
            'buttonEight',
            'buttonNine',
            'buttonZero',
            'brightnessUp',
            'brightnessDown',
            'buttonVolUp',
            'buttonMute',
        ],
    };
</script>

<style lang="scss">
    @import "~@/Shared.scss";

</style>
