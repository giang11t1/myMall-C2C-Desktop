var cont_size_1 = 1; //300*400

var Site = (function($, window, undefined) {
  var privateVar = 1;

  function privateMethod1() {
  }
  return {
    publicVar: 1,
    publicObj: {
      var1: 1,
      var2: 2
    },
    publicMethod1: privateMethod1
  };

})(jQuery, window);

$(document).ready(function() {

// ===============
    
    /*$(document).on('click', '.menu-mobile-toggle', function(e) {
        e.preventDefault();
        $('body').addClass('open-sidebar');
    });
    $(document).on('click', '.sidebar-close, .sidebar-close-bg', function(e) {
        $('body').removeClass('open-sidebar');
    });*/
    // scroll==
    $(function() {
        if ($(".scrollbar").length > 0) {
            $(".scrollbar").mCustomScrollbar();
        }
    });
    //backt-to-top
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('.back-top-btn').fadeIn();
        }
        else {
            $('.back-top-btn').fadeOut();
        }
    });
    $('.back-top-btn').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });

    // $(function() {

        var swiper = new Swiper('.MobileSlide', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });
        //slider
        var swiper = new Swiper('.OneLineSlider', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
        });
        //trending
        var sizeScreen = $(window).width();
        if (sizeScreen >=1200) {
            var swiper = new Swiper('.TrendingSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 10,
                centeredSlides: false,
                spaceBetween: 10,
            });
            //category
            var swiper = new Swiper('.CategorySlider', {
                nextButton: '.btn-category .swiper-button-next',
                prevButton: '.btn-category .swiper-button-prev',
                slidesPerView: 10,
                slidesPerColumn: 2,
                paginationClickable: false,
                spaceBetween: 0
            });

            var swiper = new Swiper('.FlashSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 6,
                centeredSlides: false,
                spaceBetween: 0,
            });
            // ===
            $("#bzoom").zoom({
                zoom_area_width: 500,
                autoplay_interval :3000,
                small_thumbs : 5,
                autoplay : false,
                not_set_small_thumb: true,
                add_ypos: 68
            });
             //menu
            var swiper = new Swiper('.MenuSlide', {
                nextButton: '.next-pre .swiper-button-next',
                prevButton: '.next-pre .swiper-button-prev',
                slidesPerView:13,
                centeredSlides: false,
                spaceBetween: 0,
            });
        }
        if (sizeScreen <1200) {
            // ===
            $("#bzoom").zoom({
                zoom_area_width: 500,
                autoplay_interval :3000,
                small_thumbs : 5,
                autoplay : true,
                not_set_small_thumb: true,
                add_ypos: 38
            });
        }
        if (sizeScreen >991 && sizeScreen <1200) {
            var swiper = new Swiper('.TrendingSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 8,
                centeredSlides: false,
                spaceBetween: 10,
            });
            //category
            var swiper = new Swiper('.CategorySlider', {
                nextButton: '.btn-category .swiper-button-next',
                prevButton: '.btn-category .swiper-button-prev',
                slidesPerView: 8,
                slidesPerColumn: 2,
                paginationClickable: false,
                spaceBetween: 0
            });

            var swiper = new Swiper('.FlashSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 6,
                centeredSlides: false,
                spaceBetween: 0,
            });
             //menu
            var swiper = new Swiper('.MenuSlide', {
                nextButton: '.next-pre .swiper-button-next',
                prevButton: '.next-pre .swiper-button-prev',
                slidesPerView: 10,
                centeredSlides: false,
                spaceBetween: 0,
            });
        }
        if (sizeScreen >=768 && sizeScreen < 991) {
            var swiper = new Swiper('.TrendingSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 8,
                centeredSlides: false,
                spaceBetween: 10,
            });

            var swiper = new Swiper('.CategorySlider', {
                nextButton: '.btn-category .swiper-button-next',
                prevButton: '.btn-category .swiper-button-prev',
                slidesPerView: 6,
                slidesPerColumn: 2,
                paginationClickable: false,
                spaceBetween: 0
            });

            var swiper = new Swiper('.FlashSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 0,
            });
             //menu
            var swiper = new Swiper('.MenuSlide', {
                nextButton: '.next-pre .swiper-button-next',
                prevButton: '.next-pre .swiper-button-prev',
                slidesPerView: 8,
                centeredSlides: false,
                spaceBetween: 0,
            });
        }
        if (sizeScreen >414 && sizeScreen < 768) {
            var swiper = new Swiper('.TrendingSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 5,
                centeredSlides: false,
                spaceBetween: 10,
            });
            var swiper = new Swiper('.CategorySlider', {
                nextButton: '.btn-category .swiper-button-next',
                prevButton: '.btn-category .swiper-button-prev',
                slidesPerView: 4,
                slidesPerColumn: 2,
                paginationClickable: false,
                spaceBetween: 0
            });
            var swiper = new Swiper('.FlashSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 0,
            });
             //menu
            var swiper = new Swiper('.MenuSlide', {
                nextButton: '.next-pre .swiper-button-next',
                prevButton: '.next-pre .swiper-button-prev',
                slidesPerView: 6,
                centeredSlides: false,
                spaceBetween: 0,
            });
          }
        if (sizeScreen >320 && sizeScreen <= 414) {
            var swiper = new Swiper('.TrendingSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 10,
            });
            var swiper = new Swiper('.CategorySlider', {
                nextButton: '.btn-category .swiper-button-next',
                prevButton: '.btn-category .swiper-button-prev',
                slidesPerView: 4,
                slidesPerColumn: 2,
                paginationClickable: false,
                spaceBetween: 0
            });
            var swiper = new Swiper('.FlashSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 0,
            });
             //menu
            var swiper = new Swiper('.MenuSlide', {
                nextButton: '.next-pre .swiper-button-next',
                prevButton: '.next-pre .swiper-button-prev',
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 0,
            });
          }
        if (sizeScreen <=320 ) {
            var swiper = new Swiper('.TrendingSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 10,
            });
            var swiper = new Swiper('.CategorySlider', {
                nextButton: '.btn-category .swiper-button-next',
                prevButton: '.btn-category .swiper-button-prev',
                slidesPerView: 3,
                slidesPerColumn: 2,
                paginationClickable: false,
                spaceBetween: 0
            });
            var swiper = new Swiper('.FlashSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 0,
            });
             //menu
            var swiper = new Swiper('.MenuSlide', {
                nextButton: '.next-pre .swiper-button-next',
                prevButton: '.next-pre .swiper-button-prev',
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 0,
            });
          }
        $( window ).resize(function() {
            var sizeScreen = $(window).width();
            if (sizeScreen >=1200) {
                var swiper = new Swiper('.TrendingSlider', {
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    slidesPerView: 10,
                    centeredSlides: false,
                    spaceBetween: 10,
                });

                var swiper = new Swiper('.CategorySlider', {
                    nextButton: '.btn-category .swiper-button-next',
                    prevButton: '.btn-category .swiper-button-prev',
                    slidesPerView: 10,
                    slidesPerColumn: 2,
                    paginationClickable: false,
                    spaceBetween: 0
                });

                var swiper = new Swiper('.FlashSlider', {
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    slidesPerView: 6,
                    centeredSlides: false,
                    spaceBetween: 0,
                });
                // ===
                $("#bzoom").zoom({
                    zoom_area_width: 500,
                    autoplay_interval :3000,
                    small_thumbs : 5,
                    autoplay : false,
                    not_set_small_thumb: true,
                    add_ypos: 68
                });
                 //menu
                var swiper = new Swiper('.MenuSlide', {
                    nextButton: '.next-pre .swiper-button-next',
                    prevButton: '.next-pre .swiper-button-prev',
                    slidesPerView:13,
                    centeredSlides: false,
                    spaceBetween: 0,
                });
          }
          if (sizeScreen <1200) {
                // ===
                $("#bzoom").zoom({
                    zoom_area_width: 500,
                    autoplay_interval :3000,
                    small_thumbs : 5,
                    autoplay : false,
                    not_set_small_thumb: true,
                    add_ypos: 38
                });
            }
          if (sizeScreen >991 && sizeScreen <1200) {
            var swiper = new Swiper('.TrendingSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 8,
                centeredSlides: false,
                spaceBetween: 10,
            });

            var swiper = new Swiper('.CategorySlider', {
                nextButton: '.btn-category .swiper-button-next',
                prevButton: '.btn-category .swiper-button-prev',
                slidesPerView: 8,
                slidesPerColumn: 2,
                paginationClickable: false,
                spaceBetween: 0
            });

            var swiper = new Swiper('.FlashSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 6,
                centeredSlides: false,
                spaceBetween: 0,
            });
             //menu
            var swiper = new Swiper('.MenuSlide', {
                nextButton: '.next-pre .swiper-button-next',
                prevButton: '.next-pre .swiper-button-prev',
                slidesPerView: 10,
                centeredSlides: false,
                spaceBetween: 0,
            });
          }
          if (sizeScreen >=768 && sizeScreen < 991) {
            var swiper = new Swiper('.TrendingSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 8,
                centeredSlides: false,
                spaceBetween: 10,
            });
            var swiper = new Swiper('.CategorySlider', {
                nextButton: '.btn-category .swiper-button-next',
                prevButton: '.btn-category .swiper-button-prev',
                slidesPerView: 6,
                slidesPerColumn: 2,
                paginationClickable: false,
                spaceBetween: 0
            });
            var swiper = new Swiper('.FlashSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 0,
            });
             //menu
            var swiper = new Swiper('.MenuSlide', {
                nextButton: '.next-pre .swiper-button-next',
                prevButton: '.next-pre .swiper-button-prev',
                slidesPerView: 8,
                centeredSlides: false,
                spaceBetween: 0,
            });
          }
          if (sizeScreen >414 && sizeScreen < 768) {
            var swiper = new Swiper('.TrendingSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 5,
                centeredSlides: false,
                spaceBetween: 10,
            });
            var swiper = new Swiper('.CategorySlider', {
                nextButton: '.btn-category .swiper-button-next',
                prevButton: '.btn-category .swiper-button-prev',
                slidesPerView: 4,
                slidesPerColumn: 2,
                paginationClickable: false,
                spaceBetween: 0
            });
            var swiper = new Swiper('.FlashSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 0,
            });
            //menu
            var swiper = new Swiper('.MenuSlide', {
                nextButton: '.next-pre .swiper-button-next',
                prevButton: '.next-pre .swiper-button-prev',
                slidesPerView: 6,
                centeredSlides: false,
                spaceBetween: 0,
            });
          }
          if (sizeScreen >320 && sizeScreen <= 414) {
            var swiper = new Swiper('.TrendingSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 10,
            });
            var swiper = new Swiper('.CategorySlider', {
                nextButton: '.btn-category .swiper-button-next',
                prevButton: '.btn-category .swiper-button-prev',
                slidesPerView: 4,
                slidesPerColumn: 2,
                paginationClickable: false,
                spaceBetween: 0
            });
            var swiper = new Swiper('.FlashSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 0,
            });
             //menu
            var swiper = new Swiper('.MenuSlide', {
                nextButton: '.next-pre .swiper-button-next',
                prevButton: '.next-pre .swiper-button-prev',
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 0,
            });
          }
          if (sizeScreen <=320 ) {
            var swiper = new Swiper('.TrendingSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 10,
            });
            var swiper = new Swiper('.CategorySlider', {
                nextButton: '.btn-category .swiper-button-next',
                prevButton: '.btn-category .swiper-button-prev',
                slidesPerView: 3,
                slidesPerColumn: 2,
                paginationClickable: false,
                spaceBetween: 0
            });
            var swiper = new Swiper('.FlashSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 0,
            });
            //menu
            var swiper = new Swiper('.MenuSlide', {
                nextButton: '.next-pre .swiper-button-next',
                prevButton: '.next-pre .swiper-button-prev',
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 0,
            });
          }
        });      
        

    // });
    // click one time
    $(".swiper-slide").click(function (){
        window.location.href = $(this).find('a').attr('href');
    });
    // show option when click in breadcrumb
    function callText(){
        $(".breadcrumb .list-cate li a").click(function(){
            var text = $(this).text();
            $(".showName").text(text);
        });
    }
    callText();

    $(".ctv-contact-btn").click(function() {
        $('html,body').animate({scrollTop: ($('.'+'section-ctv-contact').offset().top - 80)},'slow');
    });
    //treeview
    $('.ul-has-child').addClass('notransition')
    $('.li-has-child > span').on('click', function (e) {
        var children = $(this).parent('li.li-has-child').find(' > ul');
        if (children.is(":visible")) {
            children.slideUp();
        } else {
            children.slideDown();
        }
        e.stopPropagation();
    });
    //setsize img
    function setSizes(imgClass, prop) {
        var containerW = $(imgClass).width();
        $(imgClass).height(containerW * prop);
    }
    setSizes('.col-product .wrap-img', cont_size_1);
    setSizes('.col-product .wrap-img', cont_size_1);
    $(window).resize(function() {
        setSizes('.col-product .wrap-img', cont_size_1);
        setSizes('.col-product .wrap-img', cont_size_1);
    });
});
// choose color detail
$(".list-color li").click(function(){
    $(".list-color li").removeClass("active");
    $(this).addClass("active");
});
// hover in and out
$( ".btn-buy" )
  .on( "mouseenter", function() {
    $(this).children().removeClass("icon-buy");
    $(this).children().addClass("icon-buy1");
  })
  .on( "mouseleave", function() {
    $(this).children().removeClass("icon-buy1");
    $(this).children().addClass("icon-buy");
  });

$( ".btn-chat")
  .on( "mouseenter", function() {
    $(this).children().removeClass("icon-chat");
    $(this).children().addClass("icon-chat1");
  })
  .on( "mouseleave", function() {
    $(this).children().removeClass("icon-chat1");
    $(this).children().addClass("icon-chat");
  });
// choose cate 1
//show div when click
$(document).on("click", function(e){
    if($(e.target).is(".cate1 a")){
      $(".cate1 .scrollbar").show();
    }else{
        $(".cate1 .scrollbar").hide();
    }
});
$(document).on("click", function(e){
    if($(e.target).is(".header-search input")){
      // $("#show-result").show();
    }else{
        $("#show-result").hide();
    }
});
// active menu category
$(".MenuSlide .swiper-slide").click(function(){
    $(".MenuSlide .swiper-slide").removeClass("active");
    $(this).addClass("active");
});
// active pagination
$(".wrap_pagination ul li a").click(function(){
    $(".wrap_pagination ul li a").removeClass("active");
    $(this).addClass("active");
});
// resize select option
$('#resizing_select').change(function(){
    $("#width_tmp_option").html($('#resizing_select option:selected').text());
    $(this).width($("#width_tmp_select").width()+5);  
});
$('#resizing_select1').change(function(){
    $("#width_tmp_option1").html($('#resizing_select1 option:selected').text());
    $(this).width($("#width_tmp_select1").width()+10);  
});
$('#resizing_select2').change(function(){
    $("#width_tmp_option2").html($('#resizing_select2 option:selected').text());
    $(this).width($("#width_tmp_select2").width()+5);  
});
// fix position menu cate
if($('#menu_fixed').length > 0){
    var eTop = $('#menu_fixed').offset().top; //get the offset top of the element
    // alert(eTop);
      $(window).scroll(function() { //when window is scrolled
        if ($(this).scrollTop() > (eTop)) {
            $('#fixed-block-menu').addClass("position-menu");
        } else {
            $('#fixed-block-menu').removeClass("position-menu");
        }
      });
}

// show time
$(function(){    
    var ts = new Date(2012, 0, 1),
        newYear = true;
    
    if((new Date()) > ts){
        ts = (new Date()).getTime() + 10*24*60*60*1000;
        newYear = false;
    }
        
    $('#countdown').countdown({
        timestamp   : ts,
        hideDays : true,
        callback    : function(hours, minutes, seconds){
            
            var message = "";
            
            message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
            message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
            message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
            
            if(newYear){
                message += "left until the new year!";
            }
            else {
                message += "left to 10 days from now!";
            }
            
        }
    });
    
});
// line bar progress
$(function() {
    $(".meter > span").each(function() {
        $(this)
            .data("origWidth", $(this).width())
            .width(0)
            .animate({
                width: $(this).data("origWidth")
            }, 1200);
    });
});
// 
if ($("div.tab button").hasClass("active")) {
  $("#information-product").show();
}
//
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// set menu category
var hoverAndClick = function() {
  var valueDataId = $(this).attr("data-id");
    $(".menu-content .sub-content").removeClass("active");
    $(".menu-content .sub-content.sub_"+valueDataId).addClass("active");
    $("header .item  a").css("border-bottom","0");
    $("header .wrap-slider").css("border-bottom","0");
    $(this).css("border-bottom","3px solid #2bc5f8");
} ;
  Site.publicMethod1();

$("header .item  a").hover( hoverAndClick ).click( hoverAndClick ).focus( hoverAndClick) ;
$("#collapseExample > .container").mouseleave(function(){
    $(".menu-content .sub-content").removeClass("active");
    $("header .item  a").css("border-bottom","0");
    $("header .wrap-slider").css("border-bottom","2px solid #e1e1e1");
});