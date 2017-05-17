$(document).ready(function(){
	$("a[class*=go_to]").bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 500);
		e.preventDefault();
		return false;
	});
});

jQuery(function() {
    var result_outptut = jQuery("#revenue span"),
    	result_outptut2 = jQuery("#revenue2 span"),
        client = 250000,
        revenue = 0,
        check = 120,
        year = 12;

    function recount() {
        revenue = Math.round(client * check / 100);
    	revenue12 = Math.round(client * check / 100) * 12;
    	revenue = revenue.toLocaleString();
    	revenue12 = revenue12.toLocaleString();
        result_outptut.html(revenue12);
        result_outptut2.html(revenue + ' руб.');
    };
    
    $(document).on("change keyup", "#amount", function() {
        client = +$(this).val();
        $("#slider-range-min").slider("value", client);
        recount();
    });
    $(document).on("change keyup", "#amount2", function() {
        check = +$(this).val();
        $("#slider-range-min2").slider("value", check);
        recount();
    });
});
$(function() {
    $("#slider-range-min").slider({
        range: "min",
        value: 250000,
        min: 20000,
        max: 1000000,
        slide: function(event, ui) {
            $('#amount').val(ui.value).trigger("change");
        }
    });
    $("#amount").val($("#slider-range-min").slider("value"));
});

$(function() {
    $("#slider-range-min2").slider({
        range: "min",
        value: 120,
        min: 100,
        max: 200,
        slide: function(event, ui) {
            $("#amount2").val(ui.value).trigger("change");
        }
    });
    $("#amount2").val($("#slider-range-min2").slider("value"));
    recount();
});

AOS.init();