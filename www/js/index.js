class loader{
    constructor(){
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    }
    onDeviceReady(){
        head.load(
            [
                "js/phaser.min.js"
            ], ()=>{
                document.addEventListener('pause', this.onPause.bind(this), false);
                document.addEventListener('resume', this.onResume.bind(this), false);
                document.getElementById('app').setAttribute('style', 'display:none;');
                document.getElementById('game').setAttribute('style', 'display:block;');
        });
    }
    onPause(){

    }
    onResume(){

    }
}
let Loader = new loader();
