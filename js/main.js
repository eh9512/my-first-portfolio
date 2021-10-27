$(document).ready(function(){

 

    $(".content .main_img a").on("click",function(e) {
        e.preventDefault();
    });

    $(".content2 .hover_box a").on("click",function(e) {
        e.preventDefault();
    });

    $(".content3 .more a").on("click",function(e) {
        e.preventDefault();
    });

    $(".content3 .product a").on("click",function(e) {
        e.preventDefault();
    });

    $(".content4 .news_img a").on("click",function(e) {
        e.preventDefault();
    });

    $("footer li a").on("click",function(e) {
        e.preventDefault();
    });

    $("footer .sns a").on("click",function(e) {
        e.preventDefault();
    });
    



    $(".slide .product").slick({
        slidesToShow: 2,
        arrows: false
    })

    $(".box_num button").on("click", function() {
        var i = $(this).index();
        console.log(i);
        $(".content .main_img > div").eq(i).find("img").fadeIn();
        $(".content .main_img > div").eq(i).siblings().find("img").fadeOut();


        $(".content .bookmark li").hide();
        $(".content .bookmark li").eq(i).show()
        $(".content .bookmark li").eq(i).siblings().fadeOut()


        $(".content .main_tit li").hide();
        $(".content .main_tit li").eq(i).show()
        $(".content .main_tit li").eq(i).siblings().fadeOut()


        $(".content .main_sen li").hide();
        $(".content .main_sen li").eq(i).show()
        $(".content .main_sen li").eq(i).siblings().fadeOut()

        $(this).css({
            "backgroundColor": "#ccc",
            "border":"none",
        }).siblings().css({
            "backgroundColor": "white",
            "border":"1px solid #777"
        })  
        
    });

    AOS.init();
});