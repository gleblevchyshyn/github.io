//скрывающаяся картинка
$(document).on('click', ".hidden_picture",function(){ 
	$(".hidden_picture").hide("slow");
});
// эффект карусели
$(document).ready(function () {

    let change_img_time = 4000,
        transition_speed = 400;
  
    let listItems = $("#slider").children('li'),
        dotItems = $('#dots').children('li'),
        listLen = listItems.length,
        current,
        changeTimeout;
  
    function moveTo(newIndex) {
  
      let i = newIndex;
  
      if (newIndex == 'prev') {
          i = (current > 0) ? (current - 1) : (listLen - 1);
      }
  
      if (newIndex == 'next') {
          i = (current < listLen - 1) ? (current + 1) : 0;
      }
  
      dotItems.removeClass('active')
              .eq(i).addClass('active');
  
      listItems.fadeOut(transition_speed)
               .eq(i).fadeIn(transition_speed);
  
      current = i;
  
      clearTimeout(changeTimeout);
      changeTimeout = setTimeout(function() { moveTo('next'); }, change_img_time);
    };
  

    $("#dots li").click(function () {
      let i = $('#dots li').index(this);
      moveTo(i);
    });
  
    $("#prev").click(function () {
      moveTo('prev');
    });
  
    $("#next").click(function () {
      moveTo('next');
    });
    
    moveTo('next');
  });

  // эффект аккордион
  $(document).ready(function() {
    $('#accordion .accordion_head').on('click', f_acc);
});
function f_acc(){
  $('#accordion .accordion_body').not($(this).next()).slideUp(2000);
    $(this).next().slideToggle(700);
}

//Sortable
$( function() {
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();
  } );

  // tabs

  $(function() {
	var tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	$('#tabs .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	$('.tabs-target').click(function(){
		$('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
	});
});



// labels
$(document).ready(function() {
    $(".radio_option").change(function() {
        if ($('#optionsRadios1').prop("checked")) {
            $('#hide').fadeIn(300);
            $('#hideHorror').fadeIn(300);
      } else {
            $('#hideHorror').fadeOut(300);
      }

      if ($('#optionsRadios2').prop("checked")) {
            $('#hide').fadeIn(300);
            $('#hideFantasy').fadeIn(300);
      } else {
            $('#hideFantasy').fadeOut(300);
      }

      if ($('#optionsRadios3').prop("checked")) {
            $('#hide').fadeIn(300);
            $('#hideFighters').fadeIn(300);
      } else {
            $('#hideFighters').fadeOut(300);
      }
  
    });
  });