$( document ).ready(function() {

                $("#about_scroll").fadeOut();
                $("#work_scroll").fadeOut();
                $("#contact_scroll").fadeOut();
                $("#connect_scroll").fadeOut();

                $("#about").click(function(){
                    $("#index").fadeOut();
                    $("#about_scroll").fadeIn();
                    $('#about_left').addClass('animated slideInLeft');
                    $('#about_right').addClass('animated slideInRight');
                    });
                $("#work").click(function(){
                    $("#index").fadeOut();
                    $("#work_scroll").fadeIn();
                    $('#work_left').addClass('animated slideInLeft');
                    $('#work_right').addClass('animated slideInRight');
                    });
                $("#contact").click(function(){
                    $("#index").fadeOut();
                    $("#contact_scroll").fadeIn();
                    $('#contact_left').addClass('animated slideInLeft');
                    $('#contact_right').addClass('animated slideInRight');
                    });
                  $("#connect").click(function(){
                    $("#index").fadeOut();
                    $("#connect_scroll").fadeIn();
                    $('#connect_left').addClass('animated slideInLeft');
                    $('#connect_right').addClass('animated slideInRight');
                    });

                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });


		});
    let spans = document.querySelectorAll('.word span');
    spans.forEach((span, idx) => {
    	span.addEventListener('click', (e) => {
    		e.target.classList.add('active');
    	});
    	span.addEventListener('animationend', (e) => {
    		e.target.classList.remove('active');
    	});

    	// Initial animation
    	setTimeout(() => {
    		span.classList.add('active');
    	}, 750 * (idx+1))
    });
