<template>
    <div class="one-remote-container">
        <div class="remote-name">{{selectedItem}}
            <div class="remote-name-line"></div>
        </div>
        <div class="two-button button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonOnOff
                    v-bind:icon-name=powerOff
                    v-bind:css-class="iconRed"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonSource
                    v-bind:icon-name=powerOn
                    v-bind:css-class="iconBlue"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonOne
                    v-bind:text-content="1"
                    v-bind:css-class="iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonTwo
                    v-bind:text-content="2"
                    v-bind:css-class="iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonThree
                    v-bind:text-content="3"
                    v-bind:css-class="iconGreen"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonFour
                    v-bind:text-content="4"
                    v-bind:css-class="iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonFive
                    v-bind:text-content="5"
                    v-bind:css-class="iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonSix
                    v-bind:text-content="6"
                    v-bind:css-class="iconGreen"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonSeven
                    v-bind:text-content="7"
                    v-bind:css-class="iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonEight
                    v-bind:text-content="8"
                    v-bind:css-class="iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonNine
                    v-bind:text-content="9"
                    v-bind:css-class="iconGreen"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonZero
                    v-bind:text-content="0"
                    v-bind:css-class="iconGreen"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonVolUp
                    v-bind:icon-name=volumeUp
                    v-bind:css-class="iconOrange"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonMute
                    v-bind:icon-name=volumeMute
                    v-bind:css-class="iconBlue"
            ></remote-button>
        </div>
    </div>
</template>

<script>
    import RemoteButton from '../inputs/remote-button';

    export default {
        name: 'led-remote',
        components: {RemoteButton},
        data() {
            return {
                powerOff: 'power-off',
                powerOn: 'sun',
                ellipsisH: 'ellipsis-h',
                volumeUp: 'volume-up',
                volumeDown: 'volume-down',
                volumeMute: 'volume-mute',
                angleUp: 'angle-up',
                angleDown: 'angle-down',
                futbol: 'futbol',
                home: 'home',
                caretDown: 'caret-down',
                caretUp: 'caret-up',
                caretRight: 'caret-right',
                caretLeft: 'caret-left',
                ok: 'sign-in-alt',
                undo: 'undo',
                exit: 'door-open',
                play: 'play',
                stop: 'stop',
                forward: 'forward',
                backward: 'backward',
                fastForward: 'fast-forward',
                fastBackward: 'fast-backward',
                pause: 'pause',
                circle: 'circle',
                iconRed: 'iconRed',
                iconBlue: 'iconBlue',
                iconOrange: 'iconOrange',
                iconGreen: 'iconGreen',
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
        ]
    }
</script>

<style lang="scss">
    @import "~@/Shared.scss";

</style>
