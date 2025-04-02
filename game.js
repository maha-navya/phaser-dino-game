const config = {

    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#FFF",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
const game = new Phaser.Game(config);
let player;
let ground;
let clouds;
function preload() {
    this.load.spritesheet("dino", "assets/dino-idle.png", {frameWidth:88, frameHeight:94});
    this.load.image("ground", "assets/ground.png");
    this.load.image("cloud", "assets/cloud.png");
    for(let i =1; i<7; i++){
        this.load.image(`obstacles${i}`, `assets/cactuses_${i}.png`)
}
function create() {
    this.physics.add.sprite(200,200,"dino").setOrigin(0)
    .setColliderWorldBounds(true)
    .setBodySize(44,92)
    .setGravityY(5000);
    this.ground = this.add.tileSprite(0,300,1000,30,"ground").setOrigin(0,1);
    this.groundCollider= this.physics.add.staticSprite(0, 300, "ground").setOrigin(0,1);
    this.groundCollider.body.setSize(1000,30);
    this.physics.add.collider(this.player, this.groundCollider);
    this.clouds = this.add.group();
    this.clouds = this.clouds.addMultiple(
        [this.add.image(200,100, "cloud"),
            this.add.image(300,130, "cloud"),
            this.add.image(450,80, "cloud")
        ]
    );
    this.gameSpeed =5;
    this.obstacles = this.physics.add.group()}
        allowGravity:false
  }); 
}
function update() { 
this.ground.tilePositionX +=this.gameSpeed;
//as game progresses, every time update runs, ground moves by fixed unit to the left 
const num= Math.floor(Math.random() *6) +1;
this.obstacles.create(750,220, `obstacle${num}`).setOrigin(0);
}
