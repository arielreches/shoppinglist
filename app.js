var entering = false;
var helpon = false;



var clearList = function(){
	 $('.list').children().remove();

}

var clearFirst = function(){
	 $('.list').children().first().remove();

}

var newItem = function(){
	var entry = $('#entry').val();

		var string = ' <img src = "check.png" id = "check" >  <img src = "ex.png" id = "delete" >  <span> ' + entry + '</span>';


		$('#entry').val("");
		
		var newdiv = $("<div class = 'item'>").html(string).on('mousedown', '#delete',function(){
			$(this).closest('div').remove();

		}).on('mousedown', '#check', function(){
			$(this).closest('div').toggleClass("checked");
		});

		
		$(".list").prepend(newdiv);
		newdiv.hide();
		newdiv.fadeIn();

}


$(document).ready(function() {
	$('#info').hide();
	
	$('input').focus(function(){
		entering = true;
		console.log(entering);
	})

	$('input').blur(function(){
		entering = false;
		console.log(entering);

	})

	$('#submit').mousedown(newItem);
	$(document).keydown(function(e){
			if(e.which == 13)
			newItem();
		
			});
	$(document).keydown(function(e){
				if(e.which == 32 && !(entering))
				clearList();
		
			});
	$(document).keydown(function(e){
				if(e.which == 8 && !(entering))
					clearFirst();
				
		
			});

	$('#help').mouseenter(function(){
		$('#info').fadeIn();
	});

	$('h1 div').mouseleave(function(){
		$('#info').fadeOut();
	});


	/*	window.onkeydown = function(e) { 
  		return !(e.keyCode == 32);
	}; */




	/*{
			var entry = $('#entry').val();

		var string = ' <img src = "check.png" id = "check" >  <img src = "ex.png" id = "delete" >  <span> ' + entry + '</span>';


		$('#entry').val("");
		
		var newdiv = $("<div class = 'item'>").html(string).on('mousedown', '#delete',function(){
			$(this).closest('div').remove();

		}).on('mousedown', '#check', function(){
			$(this).closest('div').toggleClass("checked");
		});

		
		//newdiv.text(entry);
		$(".list").prepend(newdiv);



	});
*/



});