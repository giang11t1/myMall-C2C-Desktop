var cont_size_1 = 1; //300*400


$(document).ready(function() {

// ===============
    
    $(document).on('click', '.menu-mobile-toggle', function(e) {
        e.preventDefault();
        $('body').addClass('open-sidebar');
    });
    $(document).on('click', '.sidebar-close, .sidebar-close-bg', function(e) {
        $('body').removeClass('open-sidebar');
    });
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
    var swiper = new Swiper('.TrendingSlider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 10,
        centeredSlides: false,
        spaceBetween: 10,
    });
    //category
    var swiper = new Swiper('.CategorySlider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 10,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 0
    });
    //flash
    var swiper = new Swiper('.FlashSlider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 6,
        centeredSlides: false,
        spaceBetween: 0,
    });
    

    $("#bzoom").zoom({
        zoom_area_width: 500,
        autoplay_interval :3000,
        small_thumbs : 5,
        autoplay : true,
        not_set_small_thumb: true 
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
// click button active
$(".item-button button").click(function(){
    $(".item-button button").removeClass("active");
    $(this).addClass("active");
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