<template>
    <div class="remote-container">
        <div>
            <select-box
                    v-bind:options="buttonsUrl.selectOptions"
                    @select="onSelect"
            ></select-box>
            <tv-remote
                    v-if="tvRemoteShow"
                    v-bind:selected-item="selectedItem"
                    v-bind:arduino-ip="arduinoIp"
                    v-bind:device-name="deviceName"
                    v-bind:button-on-off="buttonsUrl.buttonOnOff"
                    v-bind:button-source="buttonsUrl.buttonSource"
                    v-bind:button-one="buttonsUrl.buttonOne"
                    v-bind:button-two='buttonsUrl.buttonTwo'
                    v-bind:button-three='buttonsUrl.buttonThree'
                    v-bind:button-four='buttonsUrl.buttonFour'
                    v-bind:button-five='buttonsUrl.buttonFive'
                    v-bind:button-six='buttonsUrl.buttonSix'
                    v-bind:button-seven='buttonsUrl.buttonSeven'
                    v-bind:button-eight='buttonsUrl.buttonEight'
                    v-bind:button-nine='buttonsUrl.buttonNine'
                    v-bind:button-zero='buttonsUrl.buttonZero'
                    v-bind:button-vol-up='buttonsUrl.buttonVolUp'
                    v-bind:button-vol-down='buttonsUrl.buttonVolDown'
                    v-bind:button-mute='buttonsUrl.buttonMute'
                    v-bind:button-ch-up='buttonsUrl.buttonChUp'
                    v-bind:button-ch-down='buttonsUrl.buttonChDown'
                    v-bind:button-sport='buttonsUrl.buttonSport'
                    v-bind:button-up='buttonsUrl.buttonUp'
                    v-bind:button-home='buttonsUrl.buttonHome'
                    v-bind:button-left='buttonsUrl.buttonLeft'
                    v-bind:button-ok='buttonsUrl.buttonOk'
                    v-bind:button-right='buttonsUrl.buttonRight'
                    v-bind:button-down='buttonsUrl.buttonDown'
                    v-bind:button-undo='buttonsUrl.buttonUndo'
                    v-bind:button-exit='buttonsUrl.buttonExit'
                    v-bind:button-play='buttonsUrl.buttonPlay'
                    v-bind:button-pause='buttonsUrl.buttonPause'
                    v-bind:button-stop='buttonsUrl.buttonStop'
                    v-bind:button-backward='buttonsUrl.buttonBackward'
                    v-bind:button-forward='buttonsUrl.buttonForward'
                    v-bind:button-rec='buttonsUrl.buttonRec'
                    v-bind:button-fast-backward='buttonsUrl.buttonFastBackward'
                    v-bind:button-fast-forward='buttonsUrl.buttonFastForward'
                    v-bind:magio-go-show="buttonsUrl.magioGoShow"
                    v-bind:samsung-show="buttonsUrl.samsungShow"
            ></tv-remote>
            <led-remote
                    v-if="ledStripRemoteShow"
                    v-bind:selected-item="selectedItem"
                    v-bind:arduino-ip="arduinoIp"
                    v-bind:device-name="deviceName"
                    v-bind:button-on="buttonsUrl.buttonOn"
                    v-bind:button-off="buttonsUrl.buttonOff"
                    v-bind:button-one="buttonsUrl.buttonOne"
                    v-bind:button-two='buttonsUrl.buttonTwo'
                    v-bind:button-three='buttonsUrl.buttonThree'
                    v-bind:button-four='buttonsUrl.buttonFour'
                    v-bind:button-five='buttonsUrl.buttonFive'
                    v-bind:button-six='buttonsUrl.buttonSix'
                    v-bind:button-seven='buttonsUrl.buttonSeven'
                    v-bind:button-eight='buttonsUrl.buttonEight'
                    v-bind:button-nine='buttonsUrl.buttonNine'
                    v-bind:button-zero='buttonsUrl.buttonZero'
                    v-bind:brightness-down='buttonsUrl.brightnessDown'
                    v-bind:brightness-up='buttonsUrl.brightnessUp'
            >
            </led-remote>
        </div>
    </div>
</template>

<script>

    import RemoteButton from '../components/inputs/remote-button';
    import SelectBox from '../components/inputs/select-box';
    import TvRemote from '../components/containers/tv-remote';
    import LedRemote from '../components/containers/led-remote';
    import {buttonsUrl} from '../remote-variables.js';

    export default {
        name: 'remotes',
        components: {LedRemote, TvRemote, SelectBox, RemoteButton},
        data() {
            return {
                buttonsUrl,
                arduinoIp: 'http://192.168.31.14:8080',
                deviceName: '/samsung',
                selectOptions: [
                    'Samsung TV',
                    'Magio',
                    'Magio GO',
                    'Led pas',
                ],
                selectedItem: 'Samsung Tv',
                magioGoShow: false,
                samsungShow: true,
                tvRemoteShow: true,
                ledStripRemoteShow: false,
            };
        },
        methods: {
            onSelect(select) {
                this.selectedItem = select;
                if (select === 'Samsung TV') {
                    this.tvRemoteShow = true;
                    this.ledStripRemoteShow = false;
                    this.deviceName = '/samsung';
                    this.magioGoShow = false;
                    this.samsungShow = true;
                    this.arduinoIp = 'http://192.168.31.14:8080';
                } else if (select === 'Magio') {
                    this.tvRemoteShow = true;
                    this.ledStripRemoteShow = false;
                    this.deviceName = '/magio';
                    this.magioGoShow = false;
                    this.samsungShow = false;
                    this.arduinoIp = 'http://192.168.31.14:8080';
                } else if (select === 'Magio GO') {
                    this.tvRemoteShow = true;
                    this.ledStripRemoteShow = false;
                    this.deviceName = '/magiogo';
                    this.magioGoShow = true;
                    this.samsungShow = false;
                    this.arduinoIp = 'http://192.168.31.218:8080';
                } else {
                    this.tvRemoteShow = false;
                    this.ledStripRemoteShow = true;
                    this.deviceName = '/ledstrip';
                    this.magioGoShow = false;
                    this.samsungShow = false;
                    this.arduinoIp = 'http://192.168.31.14:8080';
                }
            },
        },
    };
</script>

<style lang="scss">
    .remote-container {
        padding-left: 260px;
        /*background: url("../assets/remote-control-black-sony-command-wallpaper.jpeg") no-repeat center center fixed;*/
        width: -webkit-fill-available;
        padding-top: 1rem;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .select {
        width: -webkit-fill-available;
        background: transparent;
        border: none;
        margin-bottom: 1rem;
        text-transform: uppercase;
        padding: 5px 0;
        display: inline-block;
        font-size: 18px;
        color: #3c4858;
        white-space: nowrap;
        font-weight: 400;
        line-height: 30px;
        overflow: hidden;
        text-align: center;
        text-decoration: none;
    }
    @media only screen and (max-width: 600px) {
        .remote-container{
            padding-left: 0;
        }
    }
</style>
