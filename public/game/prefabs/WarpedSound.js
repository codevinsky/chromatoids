'use strict';

var WarpedSound = function(game, key, volume, loop) {
  Phaser.Sound.call(this, game, key, volume, loop);
  game.sound._sounds.push(this);
};

WarpedSound.prototype = Object.create(Phaser.Sound.prototype);
WarpedSound.prototype.constructor = WarpedSound;

