 //関数テンプレートNO.001
 enchant();
 /*
 Core
 -rootScene
 --sprite(bear)
 */
 
 window.onload = function(){
 	var core = new Core(320,320);
 	core.preload('image/sample/chara1.png');
  	core.onload = function() {
 	var bear = new Sprite(32,32);
 	bear.image = core.assets['image/sample/chara1.png']
 	bear.x = 0;
 	bear.y = 0;
 	core.rootScene.addChild(bear);
 
 }
 core.start();
 };