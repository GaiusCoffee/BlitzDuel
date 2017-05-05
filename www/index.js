class gameLoader{
    constructor(){
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    }
    onDeviceReady(){
        head.load(
            [
                "js/phaser.min.js",
                "game/engine.js",
                "game/states/screenTitle.js",
                "game/states/screenGame.js"
            ], ()=>{
                this.Engine = new engine();
                document.addEventListener('pause', ()=>{
                    this.Engine.pause();
                }, false);
                document.addEventListener('resume', ()=>{
                    this.Engine.resume();
                }, false);
                document.getElementById('app').setAttribute('style', 'display:none;');
                document.getElementById('game').setAttribute('style', 'display:table;');
        });
    }
}
let g = new gameLoader();
