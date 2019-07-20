<template>
    <div class="one-remote-container">
        <div class="remote-name">{{selectedItem}}</div>
        <div class="two-button button-container">
        <remote-button
                v-bind:icon-show="true"
                v-bind:action-url=arduinoIp+samsungRemote+buttonOnOff
                v-bind:icon-name=powerOff
        ></remote-button>
        <remote-button
                v-bind:icon-show="true"
                v-bind:action-url=arduinoIp+samsungRemote+buttonSource
                v-bind:icon-name=ellipsisH
        ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonOne
                    v-bind:text-content="1"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonTwo
                    v-bind:text-content="2"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonThree
                    v-bind:text-content="3"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonFour
                    v-bind:text-content="4"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonFive
                    v-bind:text-content="5"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonSix
                    v-bind:text-content="6"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonSeven
                    v-bind:text-content="7"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonEight
                    v-bind:text-content="8"
            ></remote-button>
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonNine
                    v-bind:text-content="9"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:text-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonZero
                    v-bind:text-content="0"
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonVolUp
                    v-bind:icon-name=volumeUp
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonMute
                    v-bind:icon-name=volumeMute
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonChUp
                    v-bind:icon-name=angleUp
            ></remote-button>
        </div>
        <div class="two-button button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonVolDown
                    v-bind:icon-name=volumeDown
            ></remote-button>

            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonChDown
                    v-bind:icon-name=angleDown
            ></remote-button>
        </div>
        <div class="two-button button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonSport
                    v-bind:icon-name=futbol
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonUp
                    v-bind:icon-name=caretUp
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonHome
                    v-bind:icon-name=home
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonLeft
                    v-bind:icon-name=caretLeft
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonOk
                    v-bind:icon-name=ok
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonRight
                    v-bind:icon-name=caretRight
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonUndo
                    v-bind:icon-name=undo
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonDown
                    v-bind:icon-name=caretDown
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonExit
                    v-bind:icon-name=exit
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonPlay
                    v-bind:icon-name=play
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonPause
                    v-bind:icon-name=pause
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonStop
                    v-bind:icon-name=stop
            ></remote-button>
        </div>
        <div class="button-container">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonBackward
                    v-bind:icon-name=backward
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonRec
                    v-bind:icon-name=circle
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonForward
                    v-bind:icon-name=forward
            ></remote-button>
        </div>
        <div class="button-container two-button">
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonFastBackward
                    v-bind:icon-name=fastBackward
            ></remote-button>
            <remote-button
                    v-bind:icon-show="true"
                    v-bind:action-url=arduinoIp+samsungRemote+buttonFastForward
                    v-bind:icon-name=fastForward
            ></remote-button>
        </div>
    </div>
</template>

<script>
    import RemoteButton from '../components/remote-button';
    import {buttonsIcon} from "../variables";

    export default {
        name: "tv-remote",
        components: { RemoteButton},
        data() {
          return{
              samsungRemote: '/samsung',
              powerOff: 'power-off',
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

          };
        },
        props: [
            'arduinoIp',
            'deviceName',
            'selectedItem',
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
    }
</script>

<style lang="scss">
.one-remote-container{
   background: white;
    padding: 1rem;
    border-radius: 1rem;
    border-style: solid;
    border-width: 5px;
    border-color: black;
    margin-bottom: 3rem;
    .button-container{
        margin-bottom: 1rem;
    }
    .two-button{
        display: flex;
        justify-content: space-between;
    }
    .remote-name{
        font-weight: 900;
        font-size: xx-large;
        margin-bottom: 1rem;
    }
}
</style>
