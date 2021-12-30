$(function () {
    // [1] 프로필 페이지 넘기기 버튼
    // 왼쪽 페이지가 몇번째 페이지인지 변수
    var left_p = 1;
    $("#change_p").click(function(){
        
        if(left_p == 1) {
            $(".contents_container").animate({marginLeft:-460+"px"}, 'slow');
            left_p = 2;
        } else if(left_p == 2) {
            $(".contents_container").animate({marginLeft:0+"px"}, 'slow');
            left_p = 1;
        }
    });

  
    // [2] 포토 갤러리

    var current = 0;

    // 이전 버튼 누를 때
    $(".prev").click(function(e) {
        e.preventDefault();
        if(current > 0) {
            current--;
        } else {
            current = 2;
        }
        slidePage(current);
    });
    // 다음 버튼 누를 때
    $(".next").click(function(e) {
        e.preventDefault();
        if(current < 2) {
            current++;
        } else {
            current = 0;
        }
        slidePage(current);
    });

    // 이미지 페이지 슬라이드
    function slidePage(current) {
        var pos = current * -920 + "px"
        // 페이지 이동
        $("#photo_box ul").animate({left : pos});
    }




});