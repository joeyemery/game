function player() {
    this.equips = JSON.parse(localStorage.equips);
}

player.prototype = {
    load: function() {
        this.base = Crafty.e('2D, Canvas, player, Hero, Animate, Collision, Controls').attr({x: Number(localStorage.player_x), y: Number(localStorage.player_y), w: 32, h: 32}).controls(3);
        this.load_equips();
    },

    load_equips: function() {
        var instance = this;

        $.each(this.equips, function(key, value) {
            instance[key] = Crafty.e('2D, Canvas, player, ' + value + ', Hero, Animate, Collision, Controls').attr({x: Number(localStorage.player_x), y: Number(localStorage.player_y), w: 32, h: 32}).controls(3);
        });
    },

    unequip: function(location) {
        this[location].destroy();
        delete this.equips[location];
        this.save_equips();
    },

    equip: function(location, item) {
        if(this[location])
            this.unequip(location);

        this.equips[location] = item;
        this[location] = Crafty.e('2D, Canvas, player, ' + item + ', Hero, Animate, Collision, Controls').attr({x: this.base._x, y: this.base._y, w: 32, h: 32}).controls(3);
        this.save_equips();
    },

    save_equips: function() {
        localStorage.equips = JSON.stringify(this.equips);
    }
}