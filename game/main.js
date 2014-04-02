'use strict';

requirejs.config({
  paths: {
    Phaser: '../bower_components/phaser-official/build/phaser'
  },
  map: {
    '*': {
      phaser: 'Phaser'
    }
  }
});

//global variables
define(function(require) {
  var Phaser = require('phaser');
  var BootState = require('states/boot');
  var GameoverState = require('states/gameover');
  var MenuState = require('states/menu');
  var PlayState = require('states/play');
  var PreloadState = require('states/preload');
  
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'chromatoids');

  // Game States
  game.state.add('boot', BootState);
  game.state.add('gameover', GameoverState);
  game.state.add('menu', MenuState);
  game.state.add('play', PlayState);
  game.state.add('preload', PreloadState);
  

  game.state.start('boot');

});
  