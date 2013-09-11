$(document).ready(function() {

    // When .button is clicked fire the event.
    $('.button').click(buttonOnClick);

    // Init menu hover function.
    menuHover();
});

// When the button is clicked.
function buttonOnClick(e) {
// Prevent the link click.
    e.preventDefault();

    // Add the classes to flag position.
    $('.menu').addClass('open');
    $('.content').addClass('inactive');

    // Set a timeout to add a flag to content.
    setTimeout(function() {
        $('.content').addClass('flag').on('click', contentOnClick);
    }, 100);

    // Create a variable to hold the timer.
    var timer = 0;

    // Loop through the li's gradually fading them in.
    $('.menu li').each(function(i, e) {
        timer = 40 * i;

        // Set a timeout to fire the fades.
        setTimeout(function() {
            $(e).addClass('visible');
        }, timer);
    });
}

// Content click
function contentOnClick() {
    if($(this).hasClass('flag')) {
        console.log('click');
        $(this).removeClass('inactive').removeClass('flag');
       
        setTimeout(function() {
            $('.menu').removeClass('open').find('li').removeClass('visible');
        }, 300);
    }
}

// For the menu hover
function menuHover() {
    $('.menu li').hover(function() {
        $(this).addClass('hover');
        $(this).animate({'padding-left': '10px'}, 200);
    }, function() {
        $(this).removeClass('hover');
        $(this).animate({'padding-left': '0px'}, 50);
    });
}