$(function() {
    // carousel function
    $(".carousel").carousel( {interval: 2000, pause: "false"});// {... pause: 'false'}... needed to work for touchscreen
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel('pause');
            $("#carouselButton").children('i').removeClass('fa-pause');
            $("#carouselButton").children('i').addClass('fa-play');
        } else {
            $(".carousel").carousel('cycle');
            $("#carouselButton").children('i').removeClass('fa-play');
            $("#carouselButton").children('i').addClass('fa-pause');
        }
    }); // end carousel

    // modal buttons

  

    $('#reserve-button').click(function() {
        $('#reserveModal').modal('show');
    });

    $('#login-button').click(function() {
        $('#loginModal').modal('show');
    });


    
});