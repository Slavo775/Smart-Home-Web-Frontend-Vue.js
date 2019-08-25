<template>
    <div class="one-remote-container">
        <div class="remote-name">{{selectedItem}}<div class="remote-name-line"></div></div>
        <div class="two-button button-container">
        <remote-button
                v-bind:icon-show="true"
                v-bind:action-url=arduinoIp+deviceName+buttonOnOff
                v-bind:icon-name=buttonsIcon.powerOff
                v-bind:css-class="buttonsIcon.iconRed"
        ></remote-button>
        <remote-button
                v-bind:icon-show="true"
                v-bind:action-url=arduinoIp+deviceName+buttonSource
                v-bind:icon-name=buttonsIcon.ellipsisH
                v-bind:css-class="buttonsIcon.iconBlue"
        ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonOne
                    v-bind:text-content="1"
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonTwo
                    v-bind:text-content="2"
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonThree
                    v-bind:text-content="3"
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonFour
                    v-bind:text-content="4"
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonFive
                    v-bind:text-content="5"
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonSix
                    v-bind:text-content="6"
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonSeven
                    v-bind:text-content="7"
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonEight
                    v-bind:text-content="8"
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonNine
                    v-bind:text-content="9"
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonZero
                    v-bind:text-content="0"
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonVolUp
                    v-bind:icon-name=buttonsIcon.volumeUp
                    v-bind:css-class="buttonsIcon.iconOrange"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonMute
                    v-bind:icon-name=buttonsIcon.volumeMute
                    v-bind:css-class="buttonsIcon.iconBlue"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonChUp
                    v-bind:icon-name=buttonsIcon.angleUp
                    v-bind:css-class="buttonsIcon.iconOrange"
            ></remote-button>
        </div>
        <div class="two-button button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonVolDown
                    v-bind:icon-name=buttonsIcon.volumeDown
                    v-bind:css-class="buttonsIcon.iconOrange"
            ></remote-button>

            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonChDown
                    v-bind:icon-name=buttonsIcon.angleDown
                    v-bind:css-class="buttonsIcon.iconOrange"
            ></remote-button>
        </div>
        <div class="button-container" v-bind:class="{'right-two-button' : !samsungShow}">
            <remote-button
                    v-if="samsungShow"
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonSport
                    v-bind:icon-name=buttonsIcon.futbol
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonUp
                    v-bind:icon-name=buttonsIcon.caretUp
                    v-bind:css-class="buttonsIcon.iconBlue"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonHome
                    v-bind:icon-name=buttonsIcon.home
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonLeft
                    v-bind:icon-name=buttonsIcon.caretLeft
                    v-bind:css-class="buttonsIcon.iconBlue"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonOk
                    v-bind:icon-name=buttonsIcon.ok
                    v-bind:css-class="buttonsIcon.iconRed"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonRight
                    v-bind:icon-name=buttonsIcon.caretRight
                    v-bind:css-class="buttonsIcon.iconBlue"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonUndo
                    v-bind:icon-name=buttonsIcon.undo
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonDown
                    v-bind:icon-name=buttonsIcon.caretDown
                    v-bind:css-class="buttonsIcon.iconBlue"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonExit
                    v-bind:icon-name=buttonsIcon.exit
                    v-bind:css-class="buttonsIcon.iconGreen"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonPlay
                    v-bind:icon-name=buttonsIcon.play
                    v-bind:css-class="buttonsIcon.iconOrange"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonPause
                    v-bind:icon-name=buttonsIcon.pause
                    v-bind:css-class="buttonsIcon.iconOrange"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonStop
                    v-bind:icon-name=buttonsIcon.stop
                    v-bind:css-class="buttonsIcon.iconOrange"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonBackward
                    v-bind:icon-name=buttonsIcon.backward
                    v-bind:css-class="buttonsIcon.iconOrange"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonRec
                    v-bind:icon-name=buttonsIcon.circle
                    v-bind:css-class="buttonsIcon.iconOrange"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonForward
                    v-bind:icon-name=buttonsIcon.forward
                    v-bind:css-class="buttonsIcon.iconOrange"
            ></remote-button>
        </div>
        <div class="button-container two-button" v-if="magioGoShow">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonFastBackward
                    v-bind:icon-name=buttonsIcon.fastBackward
                    v-bind:css-class="buttonsIcon.iconOrange"
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+deviceName+buttonFastForward
                    v-bind:icon-name=buttonsIcon.fastForward
                    v-bind:css-class="buttonsIcon.iconOrange"
            ></remote-button>
        </div>
    </div>
</template>

<script>
    import RemoteButton from '../inputs/remote-button';
    import {buttonsIcon} from '../../remote-variables.js';

    export default {
        name: 'tv-remote',
        components: { RemoteButton},
        data() {
          return{
              buttonsIcon,
          };
        },
        props: [
            'arduinoIp',
            'deviceName',
            'selectedItem',
            'magioGoShow',
            'samsungShow',
            'buttonOnOff',
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
            'buttonVolUp',
            'buttonVolDown',
            'buttonMute',
            'buttonChUp',
            'buttonChDown',
            'buttonSport',
            'buttonUp',
            'buttonHome',
            'buttonLeft',
            'buttonOk',
            'buttonRight',
            'buttonDown',
            'buttonUndo',
            'buttonExit',
            'buttonPlay',
            'buttonPause',
            'buttonStop',
            'buttonBackward',
            'buttonForward',
            'buttonRec',
            'buttonFastBackward',
            'buttonFastForward',
        ],
    };
</script>

<style lang="scss">
.one-remote-container{
   background: white;
    padding: 1rem;
    border-radius: 1rem;
    /*border-style: solid;*/
    /*border-width: 5px;*/
    /*border-color: black;*/
    margin-bottom: 3rem;
    background: #fff;
    box-shadow: 0 16px 38px -12px rgba(0,0,0,.56), 0 4px 25px 0 rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);
    .button-container{
        margin-bottom: 1rem;
    }
    .two-button{
        display: flex;
        justify-content: space-between;
    }
    .remote-name{
        margin-bottom: 1rem;
        text-transform: uppercase;
        padding: 5px 0;
        display: inline-block;
        font-size: 18px;
        color: #3c4858;
        white-space: nowrap;
        font-weight: bold;
        line-height: 30px;
        overflow: hidden;
        text-align: center;
        width: 80%;
        .remote-name-line{
            content: "";
            bottom: 0;
            right: 15px;
            height: 1px;
            width: 100%;
            background-color: hsla(0, 0%, 71%, 0.3);
            margin-top: 1rem;
        }
    }
    .right-two-button{
        justify-content: flex-end;
        display: flex;
    }
}
</style>
