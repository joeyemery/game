function Resizer(callback) {
    this.height = $(window).height();
    this.width  = $(window).width();
    if(callback)
        this.callback   = callback;

    this.register_bindings();
}

Resizer.prototype = {

    register_bindings: function() {
        var instance = this;

        $(window).resize(function() {
            instance.height = $(window).height();
            instance.width  = $(window).width();
            instance.callback(instance);
        });
    },

    callback: function() {}
    
}