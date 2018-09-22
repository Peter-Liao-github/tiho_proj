$(window).scroll(function(){
    if($(window).scrollTop()>80){
        $('.ingredient img').animate({opacity: 0},700)
    }

    if ($(window).scrollTop()>900) {
        $('#opening-word').css({animation: 'fInOut 2.5s 0s 1 both'})
    }

    // switch ($(window).scrollTop()) {
    //     case 80:
    //         $('.large-img img:nth-child(1)').animate({opacity: 0},700)
    //         

    //     case 700:
    //         $('#opening-word').css('opacity',0)
    //         break;
            
    //     default:
    //         break;
    // }
})

$(function(){
    $('.block-top').parallax('50%',0.8);
    $('.video-opening img').parallax('50%',0.3);
    $('#opening-word').parallax('50%',0.1);

})

window.sr = ScrollReveal({ 
    // 參數設定[註1]
    origin: "bottom",  // 起始位置
    distance: "80px",  // 距離
    duration: 1000,  // 動畫時間
    delay: 200,  // 動畫延遲時間
    rotate: { x: 0, y: 0, z: 0 },  // 旋轉角度
    opacity: 0,  // 透明度
    scale: 1, // 縮放比例
    easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", // 動畫速度曲線
    container: window.document.documentElement, // 外層
    mobile: true, // 支援行動裝置
    reset: false, // 每次都啟動動畫
    useDelay: "always", // 延遲動畫次數
    viewFactor: 0.2, // 當該物件在可視範圍內，則顯示此物件(0.2表示可視範圍20%)
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, // 當外層有設定間隔造成偏移，則請設定在此維持精準度
    beforeReveal: function (domEl) { console.log(1) }, // 當啟動前，則執行此函式
    beforeReset: function (domEl) {console.log(2) }, // 當重啟前，則執行此函式
    afterReveal: function (domEl) {console.log(3) }, // 當啟動後，則執行此函式
    afterReset: function (domEl) {console.log(4) } // 當重啟後，則執行此函式
});
sr.reveal( ".appear", {
    // 參數設定[註1]
});