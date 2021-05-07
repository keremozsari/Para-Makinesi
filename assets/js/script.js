/*-----------------------------Sidebar-------------------------------------------------*/
jQuery(function ($) {
    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
            .parent()
            .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });
    $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
        $(".homepage").addClass("fade-wrapper")
    });
    $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
        $(".homepage").removeClass("fade-wrapper")
    });
});

/*-----------------------------number counter-------------------------------------------------*/
function startCounter(){
	$('.count').each(function () {
        var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 2000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(parseFloat(now).toFixed(size));
	        }
	    });
	});
}	

startCounter();

/*-----------------------------Charts-------------------------------------------------*/
let myChart = document.getElementById('myChart').getContext('2d');

let massPopChart = new Chart(myChart, {
    type: 'line', // bar, horizontaoloBar, pie, line, dougnut, radar, polarArea
    data: {
        labels: ['Kasım', 'Aralık', 'Ocak', 'Şubat', 'Mart', 'Nisan'],
        datasets: [{
            label: 'Dolar',
            data: [
                700,
                800,
                400,
                600,
                350,
                700
            ],
            backgroundColor: 'rgba(3,137,40, 0.6)',
            borderColor: 'rgba(3,137,40, 0.6)',
            borderWidth: 1,
            hoverBorderWidth: 1,
            fillColor: "rgba(3,137,40, 0.6)",
            strokeColor: "rgba(220,220,220,1)",
            fill: true,
            tension: .5
        }],
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Gelir Grafiği',
                fontSize: 12
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    fontColor: '#777'
                }
            },
        }
    }
});

/*-----------------------------Report-------------------------------------------------*/
$(document).ready(function () {
    $("#minus").click(function () {
        $("#content").animate({
            height: 'toggle'
        });
        $("html, body").animate({
            scrollTop: $(document).height()
        }, "slow");
        $(this).toggleClass('active-minus');
    });
    /* Sign Out Alert*/
    $('.sign-out').click(function(e) {
        e.preventDefault();
        if (window.confirm("Are you sure?")) {
            location.href = this.href;
        }
    });
});