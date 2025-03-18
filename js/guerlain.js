$(document).ready(function(){    
    // sliderFunc(".headSlider", false, false, false, 0, 450, true, true, 'horizontal');
    sliderFunc(".headSlider", false, false, true, 4000, 450, true, true, 'horizontal'); // 자동 재생 활성화 (auto: true, delay: 4000)
    sliderFunc2(".aboutsinSlider",true,"full",true,true,true,0);
    openCloseControl("header div > div input[type='button']");
    toggleUI("#menuPanel nav div");
    searchPanel("header > div:first-of-type ul li input[value='search']");
    mainvideoCon();
    mainvideoCon2();
    indexVideoBox();
    toggleAction(".detail_ingre div ol li ol li");
    toggleAction(".csDetail div ol li ol li");
    detailImg(".image-item");
    detailImg2("servicebox li img");
    videoControls(); 
    videoControls2();
    pwToggle();
    quantityComponent(".cartContainer > ul li .numberComponent .countNo1",".countMinus1",".countPlus1","#price1");
    quantityComponent(".cartContainer > ul li .numberComponent .countNo2",".countMinus2",".countPlus2","#price2");
    quantityComponent(".cartContainer > ul li .numberComponent .countNo3",".countMinus3",".countPlus3","#price3");
    accControl(".accComponent h4");
    mainPopup();
});
function mainPopup(){
    $(".popupClose").click(function(){
        $(".mainPopup").addClass("active");
        $(".mainPopup").fadeOut();
        $(".mainPopupContent").fadeOut();
    });
}
function sliderFunc(target, conVal, pagVal, autoVal, delayVal, speedVal, dotNav, infiniteLoop, mode){
    $(target).bxSlider({
        controls: conVal,         // 이전/다음 버튼 여부
        pager: dotNav,            // 점 네비게이션 여부
        auto: autoVal,            // 자동재생 여부 (이제 true로 설정 가능)
        pause: delayVal,          // 자동재생 간격 (ms 단위, 기본 4000ms = 4초)
        autoControls: false,      // 자동재생 컨트롤 버튼 표시 여부
        autoControlsCombine: false,
        touchEnabled: true,       // 터치 스와이프 활성화
        autoDelay: 0,             // 자동재생 시작 지연 시간 (바로 시작)
        speed: speedVal,          // 슬라이드 전환 속도
        infiniteLoop: infiniteLoop, // 무한 반복 여부
        mode: mode                // 슬라이드 방식 ('horizontal'로 설정)
    });
}
// function sliderFunc(target, conVal, pagVal, autoVal, delayVal, speedVal, dotNav, infiniteLoop, mode){
//     $(target).bxSlider({
//         controls: conVal,         // 이전/다음 버튼 여부
//         pager: dotNav,            // 점 네비게이션 여부
//         auto: autoVal,            // 자동재생 여부
//         autoControls: false,      // 자동재생 컨트롤 버튼 표시 여부
//         autoControlsCombine: false,
//         touchEnabled: true,       // 터치 스와이프 활성화
//         autoDelay: delayVal,      // 자동재생 지연 시간
//         speed: speedVal,          // 슬라이드 전환 속도
//         infiniteLoop: infiniteLoop, // 무한 반복 여부
//         mode: 'horizontal'        // 슬라이드 방식 ('horizontal'로 변경)
//     });
// }
function sliderFunc2(target,conVal,pagVal,autoVal,autoConVal,autoCombineVal,delayVal){
    $(target).bxSlider({
        controls: conVal,
        pagerType: pagVal,
        auto: autoVal,
        autoControls: autoConVal, 
        autoControlsCombine: autoCombineVal,
        touchEnabled: false,
        autoDelay: delayVal,
        speed: 4000  // 슬라이드 전환 속도를 4000ms (4초)로 설정
    });
}
function accControl(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    });
}
function toggleAction(accordionBtn){
    $(accordionBtn).click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle(450);
    });
}
function pwToggle(){
    var toggleStatus = false;
    $(".toggleInput input[value='SHOW']").click(function(){
        if(toggleStatus == false){
            $(this).siblings("input").attr("type","text");
        }else{
            $(this).siblings("input").attr("type","password");
        }
        toggleStatus = !toggleStatus;
    });
}

function quantityComponent(target,minus,plus,price){
    var orderField=$(target);
    var orderCount=$(orderField).val();
    var productPrice=Number($(price).val());
    var totalPrice=$(price);

    $(minus).click(function(){
        orderCount--;
        if(orderCount<=1){
            orderCount=1;
        }
        orderField.val(orderCount);
        $(totalPrice).val(productPrice*orderCount);
    });
    $(plus).click(function(){
        orderCount++;
        if(orderCount>=99){
            orderCount=99;
        }
        orderField.val(orderCount);
        $(totalPrice).val(productPrice*orderCount);
    });
}

function mainvideoCon(){
    var mainVideo = null;    
    $('.ex_video .videoPbtn').click(function(){
        var keyCon = $(this).attr("data-get");
        mainVideo = $("#videoarea").get(keyCon);
        if (mainVideo.paused) {
            mainVideo.play(); 
            $('.ex_video .videoPbtn').hide();
            $('.ex_video .videoSbtn').show();
        } else {
            mainVideo.pause();           
        }
    });
}
function mainvideoCon2(){
    var mainVideo2 = null;    
    $('.ex_video .videoSbtn').click(function(){
        var keyCon2 = $(this).attr("data-get1");
        mainVideo2 = $("#videoarea").get(keyCon2);
        if (mainVideo2.paused) {
            mainVideo2.play(); 
        } else {
            mainVideo2.pause();                  
            $('.ex_video .videoPbtn').show();
            $('.ex_video .videoSbtn').hide();                  
        }
    });
}

function videoControls(){
    var mediaVideo = null;    
    $('.video_list .videoPbtn').click(function(){
        var keyVal = $(this).attr("data-get");
        mediaVideo = $(".video-item").get(keyVal);
        if (mediaVideo.paused) {
            mediaVideo.play(); 
            $('.video_list .videoPbtn').hide();
            $('.video_list .videoSbtn').show();
        } else {
            mediaVideo.pause();           
        }
    });
}
function videoControls2(){
    var mediaVideo2 = null;    
    $('.video_list .videoSbtn').click(function(){
        var keyVal2 = $(this).attr("data-get1");
        mediaVideo2 = $(".video-item").get(keyVal2);
        if (mediaVideo2.paused) {
            mediaVideo2.play(); 
        } else {
            mediaVideo2.pause();                  
            $('.video_list .videoPbtn').show();
            $('.video_list .videoSbtn').hide();                  
        }
    });
}

function openCloseControl(target){
    var dataPanel=null;    

    $(target).click(function(){
        dataPanel="#"+$(this).attr("data-panel");
        $(dataPanel).addClass("active");
    });
    $(".closeBtn").click(function(){
        $(dataPanel).removeClass("active");
    });
}

function toggleUI(btn){
    $(btn).click(function(){
        $(this).toggleClass("active");
    });
}

function searchPanel(){
    $("header div ul li input").click(function(){
        $("#searchPanel").addClass("active");
    });
    $(".closeBtn").click(function(){
        $("#searchPanel").removeClass("active");
    });
}

function indexVideoBox(){
    $('.ex_product ul li').click(function(){
        var videoData = '';
        var posterData = '';
        videoData = $(this).attr("data-src");       
        posterData = $(this).attr("data-poster");
        $("#videoarea").attr("src",videoData);       
        $("#videoarea").attr("poster",posterData);       
    });
}

function detailImg(){
    $('.image-item').click(function(){
        var ImgData = '';
        ImgData = $(this).attr("src");     
        $(".detail_wrap > img").attr("src",ImgData);          
    });
}
function detailImg2(){
    $('.servicebox li img').click(function(){
        var ImgData = '';
        ImgData = $(this).attr("src");     
        $(".service_right img").attr("src",ImgData);          
    });
}