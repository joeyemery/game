var Stats = {
    identifier: $('.character_stats'),

    refresh: function() {
        this.identifier.find('.level span').text(localStorage.level);
        this.identifier.find('.strength span').text(localStorage.strength);
        this.identifier.find('.defence span').text(localStorage.defence);
        this.identifier.find('.speed span').text(localStorage.speed);
    },

    toggle: function() {
        if(this.identifier.is(':visible')) {
            this.identifier.hide();
        } else {
            this.identifier.show();
        }
    }

}