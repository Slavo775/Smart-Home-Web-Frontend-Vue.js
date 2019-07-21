<template>
    <div class="remote-container">
        <div>
            <select-box
                    v-bind:options="selectOptions"
                    @select="onSelect"
            ></select-box>
            <tv-remote
                    v-if="tvRemoteShow"
                    v-bind:selected-item="selectedItem"
                    v-bind:arduino-ip="arduinoIp"
                    v-bind:device-name="deviceName"
                    v-bind:button-on-off="buttonOnOff"
                    v-bind:button-source="buttonSource"
                    v-bind:button-one="buttonOne"
                    v-bind:button-two='buttonTwo'
                    v-bind:button-three='buttonThree'
                    v-bind:button-four='buttonFour'
                    v-bind:button-five='buttonFive'
                    v-bind:button-six='buttonSix'
                    v-bind:button-seven='buttonSeven'
                    v-bind:button-eight='buttonEight'
                    v-bind:button-nine='buttonNine'
                    v-bind:button-zero='buttonZero'
                    v-bind:button-vol-up='buttonVolUp'
                    v-bind:button-vol-down='buttonVolDown'
                    v-bind:button-mute='buttonMute'
                    v-bind:button-ch-up='buttonChUp'
                    v-bind:button-ch-down='buttonChDown'
                    v-bind:button-sport='buttonSport'
                    v-bind:button-up='buttonUp'
                    v-bind:button-home='buttonHome'
                    v-bind:button-left='buttonLeft'
                    v-bind:button-ok='buttonOk'
                    v-bind:button-right='buttonRight'
                    v-bind:button-down='buttonDown'
                    v-bind:button-undo='buttonUndo'
                    v-bind:button-exit='buttonExit'
                    v-bind:button-play='buttonPlay'
                    v-bind:button-pause='buttonPause'
                    v-bind:button-stop='buttonStop'
                    v-bind:button-backward='buttonBackward'
                    v-bind:button-forward='buttonForward'
                    v-bind:button-rec='buttonRec'
                    v-bind:button-fast-backward='buttonFastBackward'
                    v-bind:button-fast-forward='buttonFastForward'
                    v-bind:magio-go-show="magioGoShow"
                    v-bind:samsung-show="samsungShow"
            ></tv-remote>
        </div>
    </div>
</template>

<script>

    import RemoteButton from '../components/remote-button';
    import SelectBox from '../components/select-box';
    import TvRemote from '../components/tv-remote';

    export default {
        name: 'remotes',
        components: {TvRemote, SelectBox, RemoteButton},
        data() {
            return {
                arduinoIp: 'http://192.168.31.14:8080',
                deviceName: '/samsung',
                buttonOnOff: '/buttonON',
                buttonSource: '/buttonSource',
                selectOptions: [
                    'Samsung TV',
                    'Magio',
                    'Magio GO',
                    'Led pas',
                ],
                magioGoShow: false,
                samsungShow: true,
                selectedItem: 'Samsung TV',
                buttonOne: '/buttonOne',
                buttonTwo: '/buttonTwo',
                buttonThree: '/buttonThree',
                buttonFour: '/buttonFour',
                buttonFive: '/buttonFive',
                buttonSix: '/buttonSix',
                buttonSeven: '/buttonSeven',
                buttonEight: '/buttonEight',
                buttonNine: '/buttonNine',
                buttonZero: '/buttonZero',
                buttonVolUp: '/buttonVolUp',
                buttonVolDown: '/buttonVolDown',
                buttonMute: '/buttonMute',
                buttonChUp: '/buttonChUp',
                buttonChDown: '/buttonChDown',
                buttonSport: '/buttonSport',
                buttonUp: '/buttonUp',
                buttonHome: '/buttonHome',
                buttonLeft: '/buttonLeft',
                buttonOk: '/buttonOk',
                buttonRight: '/buttonRight',
                buttonDown: '/buttonDown',
                buttonUndo: '/buttonUndo',
                buttonExit: '/buttonExit',
                buttonPlay: '/buttonPlay',
                buttonPause: '/buttonPause',
                buttonStop: '/buttonStop',
                buttonBackward: '/buttonBackward',
                buttonForward: '/buttonForward',
                buttonRec: '/buttonRec',
                buttonFastBackward: '/buttonFastBackward',
                buttonFastForward: '/buttonFastForward',
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
                } else if (select === 'Magio') {
                    this.tvRemoteShow = true;
                    this.ledStripRemoteShow = false;
                    this.deviceName = '/magio';
                    this.magioGoShow = false;
                    this.samsungShow = false;
                } else if (select === 'Magio GO') {
                    this.tvRemoteShow = true;
                    this.ledStripRemoteShow = false;
                    this.deviceName = '/magiogo';
                    this.magioGoShow = true;
                    this.samsungShow = false;
                } else {
                    this.tvRemoteShow = false;
                    this.ledStripRemoteShow = true;
                    this.deviceName = '/ledstrip';
                    this.magioGoShow = false;
                    this.samsungShow = false;
                }
            },
        },
    };
</script>

<style lang="scss">
    .remote-container {
        background: url("../assets/remote-control-black-sony-command-wallpaper.jpg") no-repeat center center fixed;
        padding-top: 5rem;
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
        font-size: inherit;
        color: white;
        background: transparent;
        border: none;
        font-weight: 500;
        margin-bottom: 1rem;
        border-bottom: 1px solid;
        padding-bottom: 1rem;
    }
</style>
