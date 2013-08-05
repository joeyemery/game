Crafty.c("Camera",{
  init: function() {},

  camera: function(obj) {
    this.set(obj);
    var instance = this;
    obj.bind("Moved", function(location) {
      instance.set(location);
    });
  },

  set: function(obj) {
    Crafty.viewport.x = -obj.x + Crafty.viewport.width / 2;
    Crafty.viewport.y = -obj.y + Crafty.viewport.height / 2;
  }
});