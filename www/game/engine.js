class engine{
    constructor(){
        this.g = {}; // Global Variable Store
        this.g.canvasH = window.innerHeight * window.devicePixelRatio;
        this.g.canvasW = ((9/16) * window.innerHeight) * window.devicePixelRatio;
        this.p = new Phaser.Game(this.g.canvasW, this.g.canvasH, Phaser.CANVAS, 'game');
        this.p.state.add("title", new screenTitle(this));
        this.p.state.add("game", new screenGame(this));
        this.p.state.start("title");
    }
    pause(){
        this.p.paused = true;
    }
    resume(){
        this.p.paused = false;
    }
}
