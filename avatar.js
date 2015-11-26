// let's make a simple avatar-object: a ghost, a snake, whatever you want...
var avatar = {};

// give it some basic looks:
avatar.width = 10;
avatar.height = 10;
avatar.color = "red";

// the avatar starts in the upper left corner
avatar.x = 0;
avatar.y = 0;

// the avatar has a direction in which it is moving
// `dirX = 1` means it's going right, `dirX = -1` means it's going left
// `dirY = 1` means it's going down, `dirY = -1` means it's going up
// For starters, let's assume we don't go diagonally. Then only one of `dirX` or `dirY` can be non-0 at the same time.

// Avatar starts by moving to the right of the canvas;
avatar.dirX = 1;
avatar.dirY = 0;

// Moving forward means taking a step in the direction it's currently going.
// Remember that in the start position only `dirX = 1`, so doing `y += dirY` won't do anything.
avatar.moveForward = function() {
  this.x += this.dirX;
  this.y += this.dirY;
}

// when going horizontal:
// if `dirX = 1` then turning left means going up or `dirY = -1`
// if `dirX = -1` then turning left means going down or `dirY = 1`
// when going vertical:
// if `dirY = 1` then turning left means going right or `dirX = 1`
// if `dirY = -1` then turning left means going left or `dirX = -1`
avatar.turnLeft = function() {
  //console.log("Debug logging: before turning left : dirX=%d dirY=%d", this.dirX, this.dirY);
  if (this.dirX != 0) { // going horizontal
    this.dirY = -this.dirX;
    this.dirX = 0;
  } else if (this.dirY != 0) { // going vertical
    this.dirX = this.dirY;
    this.dirY = 0;
  }
  //console.log("Debug logging: after turning left : dirX=%d dirY=%d", this.dirX, this.dirY);
}

// when going horizontal:
// if `dirX = 1` then turning right means going down or `dirY = 1`
// if `dirX = -1` then turning right means going up or `dirY = -1`
// when going vertical:
// if `dirY = 1` then turning right means going left or `dirX = -1`
// if `dirY = -1` then turning right means going right or `dirX = 1`
avatar.turnRight = function() {
  //console.log("Debug logging: before turning right : dirX=%d dirY=%d", this.dirX, this.dirY);
  if (this.dirX !=0) { // going horizontal
    this.dirY = this.dirX;
    this.dirX = 0;
  } else if (this.dirY != 0) { // going vertical
    this.dirX = -this.dirY;
    this.dirY = 0;
  }
  //console.log("Debug logging: after turning right : dirX=%d dirY=%d", this.dirX, this.dirY);
}
