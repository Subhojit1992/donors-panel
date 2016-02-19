/*================================================
*
*   DOM Ready
*
*=================================================*/
$(document).ready(function(){

	/*=======================================================================
	*	Full logic for input field value.
	*	As per input field value the tooltip value and progress bar will appare.
	*=======================================================================*/

	// the input filed only take number
	$("#valuefield").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
             // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

	// on click the "give now" button
	$('#gvnw').on('click', function(event) {
		event.preventDefault();
		// get the input field value.
		var gtval = $('#valuefield').val();

		// hover on the progress will work if input value will gater then 0
		if(gtval>0){
			// Hover on progress tooltip appare
			$('#progressbr').hover(function(event) {
				/* Stuff to do when the mouse enters the element */
				event.preventDefault();
		        $('.outwrap').find('#tooltip').addClass('active').stop();
			}, function(event) {
				/* Stuff to do when the mouse leaves the element */
				event.preventDefault();
		        $('.outwrap').find('#tooltip').removeClass('active');
			});
		}

		// why give text dynamic according to the filed value
		if(gtval<=0){
			$('#statustext').html('Please give a correct dollar value').css('color', '#EF0909');
			$('#tooltip').hide();
		}else if(gtval>=1 && gtval<200){
			$('#statustext').html('Why give us $'+gtval+'?').css('color', '#28a3d5');
			$('#tooltip').show().html('<strong>$'+ (200-gtval) +'</strong> still need for this project');
		}else{
			$('#statustext').html('Many thanks for your contribution.').css('color', '#22ae2f');
			$('#tooltip').show().html('Thank You');
		}

		// if else logic for the progressbar
		if(gtval>=200){
			// if value more then 200 then your progress compleated 100%
			$('#progress').css({
				width: 100 + "%",
			});
		}else{
			// giving a range to the progress bar if value less then 200
			if(gtval<=0){ //if lower then or eq 0 
				sweetAlert("Oops...", "Please give a correct dollar value");
				$('#progress').css({
					width: 0 + "%",
				});
			}else if(gtval>=1 && gtval<=40){ //if 1 to 40 
				$('#progress').css({
					width: 20 + "%",
				});
			}else if(gtval>=41 && gtval<=80){ //if 41 to 80 
				$('#progress').css({
					width: 40 + "%",
				});
			}else if(gtval>=81 && gtval<=120){ //if 81 to 120 
				$('#progress').css({
					width: 60 + "%",
				});
			}else if(gtval>=121 && gtval<=160){ //if 121 to 160 
				$('#progress').css({
					width: 80 + "%",
				});
			}else if(gtval>=161 && gtval<=199){ //if 161 to 199 
				$('#progress').css({
					width: 95 + "%",
				});
			}

		}

	}); // end on click the "give now" button


	/*==================================
	*
	*  Share func happening by below code
	*
	*====================================*/
	$('#tlfrnd').on('click', function(event) {
		event.preventDefault();
		$('.shareoverly').toggleClass('active');
	});
	$('#escapeshare').on('click', function(event) {
		event.preventDefault();
		$('.shareoverly').toggleClass('active');
	});



	/*============================================
	*
	*  Save for later func happening by below code
	*
	*============================================*/
	$('#svltr').on('click', function(event) {
		event.preventDefault();
		$('.outwrap').addClass('savelater');
		$(".k-loading-mask").show();
		setTimeout(function () {
			$('.outwrap').addClass('happenedsltr').html('<div class="inrwrapsuc"><div class="succtick"><i class="fa fa-check"></i></div><h3>Saved for later</h3></div>'); 
			$('.k-loading-mask').hide();
		}, 4000);
	});



}); // end dom ready