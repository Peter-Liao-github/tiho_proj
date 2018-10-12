$(window).scroll(function(){
    //scrollTop觸發
    var winScrollH = $(window).scrollTop();
    var windowH = $(window).height();
    var docH = $(document).height();
    var scrolled = (winScrollH / (docH - windowH)) * 10;
    var windowW = $(window).width();
    console.log(scrolled);

    if (scrolled >0.07){
        $('.ingredient img').animate({opacity: 0},700)
    }
    if (scrolled >=0.7){
        $('.ingredient img').css('display','none')
    }

    var matchPoint = 0.8
    if (scrolled > 0.5){
        var mTopParameter = (matchPoint - scrolled)/(matchPoint - 0.5)
        // var mTop = -42 + 42*mTopParameter
        var mTop = 42
        var mTopPhone = 34;
        var mTopWide = 29;
        var mTopPad = 36;
        var calTop = -mTop + mTop *mTopParameter
        var calTopPhone = -mTopPhone + mTopPhone *mTopParameter
        var calTopWide = -mTopWide + mTopWide *mTopParameter
        var calTopPad = -mTopPad + mTopPad *mTopParameter
        if (mTopParameter < 0){
            $('#opening-img').css('top', -mTop+'vh')
            $('#opening-img-phone').css('top', -mTopPhone+'vh')
            if (windowW >= 1680){
                $('#opening-img').css('top', -mTopWide+'vh')
            }
            if (windowW <= 900 && windowW > 600){
                $('#opening-img-phone').css('top', -mTopPad+'vh')
            }
        } else{
            $('#opening-img').css('top', calTop+'vh')
            $('#opening-img-phone').css('top', calTopPhone+'vh')
            if (windowW >= 1680){
                $('#opening-img').css('top', calTopWide+'vh')
            }
            if (windowW <= 900 && windowW > 600){
                $('#opening-img-phone').css('top', calTopPad+'vh')
            }
        }
    }
    if(scrolled >=matchPoint){ //0.8
        var cirPercent = scrolled - matchPoint;
        $('#opening-word').css({clipPath: 'circle('+cirPercent*(50/0.4)+'% at 50% 50%)',opacity: 1})
        $('.join').css('opacity',(scrolled - matchPoint)*2)
    }
    if(scrolled <matchPoint){
        $('#opening-word').css('opacity',0)
    }
    
    var openingOut = 1.4
    if(scrolled > openingOut){
        $('#opening-word').css('opacity',1-(scrolled-openingOut)/0.2)
    }
    //video fade in and out
    appear('video',1.6,0.8);
    function appear(block,fadeInStartPoint,fadeOutStartPoint) {
        $('.'+block+' .appear').css({opacity:0})
        var slopeOp;
        var slopeBtm;
        var scInterval = scrolled - fadeInStartPoint;
        var fadeInEndPoint = 0.4;
        var fadeOutEndPoint = 1;
        var fadeOutInterval = fadeOutEndPoint - fadeOutStartPoint;
        if(scrolled >fadeInStartPoint && scrolled <=fadeInStartPoint+fadeInEndPoint){
            slopeOp = 1/fadeInEndPoint;
            slopeBtm = 20/fadeInEndPoint;
            $('.'+block+' .appear').css({opacity: 0+scInterval*slopeOp,bottom: -20+scInterval*slopeBtm+'vh'})
        }
        if(scrolled >fadeInStartPoint+fadeInEndPoint && scrolled <=fadeInStartPoint+fadeOutStartPoint){
            slopeOp = 0;
            slopeBtm = 0;
            $('.'+block+' .appear').css({opacity: 1+scInterval*slopeOp,bottom: 0+scInterval*slopeBtm+'vh'})
        }
        if(scrolled >fadeInStartPoint+fadeOutStartPoint && scrolled <=fadeInStartPoint+fadeOutEndPoint){
            slopeOp = -1/fadeOutInterval;
            slopeBtm = 20/fadeOutInterval;
            $('.'+block+' .appear').css({opacity: 1+(scInterval-fadeOutStartPoint)*slopeOp,bottom: 0+(scInterval-fadeOutStartPoint)*slopeBtm+'vh'})
        }
    }
    backgroundSwitch('video','about',2.4)
    function backgroundSwitch(block,nextBlock,fadeOutBgiPoint) {
        
        if(scrolled >fadeOutBgiPoint && scrolled <fadeOutBgiPoint+0.6){
            var blurPx = scrolled - fadeOutBgiPoint
            $('.'+block+'-block-bgi').css({backgroundPositionY: -blurPx*80+'vh',opacity: 1.1-blurPx*2.2})
            $('.'+nextBlock+'-block-bgi').css({opacity: blurPx*1.4})
        }
    }

    appear('about-block',2.6,0.7);
    backgroundSwitch('about','question',3.3)

    appear('question-block',3.6,0.85);
    backgroundSwitch('question','compare',4.4)

    appear('compare-block',4.7,0.9);
    backgroundSwitch('compare','rules',5.4)

    if(scrolled > 5.4){
        $('.rules-block-bgi>img:first-child').css('top', -10-(scrolled-5.4)*50+'vh')
        $('.rules-block-bgi>img:nth-child(3)').css('top', -10-(scrolled-5.4)*50+'vh')
    }
    
    appear('rules-block',5.8,0.9);
    backgroundSwitch('rules','map',6.6)

    appear('map-block',6.55,0.9);
    backgroundSwitch('map','team',7.7)

    appear('team-block',7.9,0.9);
    backgroundSwitch('team','bottom',8.8)

    appear('bottom-block',8.9,1.1);
})

$(document).mouseup(function(e){
    var _con = $('#menu');
    if(!_con.is(e.target) && _con.has(e.target).length === 0){
        $('#menu').hide()
    }
});

$(function(){
    //頂部區漂浮文字消失切換
    $('.block-top').mouseover(function () { 
        $('.floating-word').animate({opacity: 0},700)
        $('.dental-text').animate({opacity: 1},700)
    });

    $('.menu-btn').click(function(){
        $('#menu').show()
    })
    $('.menu a').click(function(){
        $('#menu').hide()
    })


    //影片區球體左移
    $('.video-file').on('click', function(e) {
        e.preventDefault();
        $('.video-file img:nth-of-type(1)').animate({left: '-9%'},1200)
        $('iframe').css('pointer-events','initial')
    });

    //關於區圖文切換
    var aboutImgOrigin = ['img/TIHO_Web_Ingredient-22.png','img/TIHO_Web_Ingredient-23.png','img/TIHO_Web_Ingredient-24.png','img/TIHO_Web_Ingredient-25.png']
    var aboutImg = ['img/TIHO_Web_Ingredient-26.png','img/TIHO_Web_Ingredient-27.png','img/TIHO_Web_Ingredient-28.png','img/TIHO_Web_Ingredient-29.png']
    var aboutTextTitle = ['Price advantage','Quality advantage','International service','Material- lifelong warranty']
    var aboutTextP = ['The introduction of cryptocurrency allows everyone to be both consumer and investor to enjoy low-cost price for dental implant.','The quality control by one-stop service from the interference ofupstream Japanese brands to medical technology at the clinic anddental medical service as well as to the manufacturing industry of denturefactory . It is excellent in the industry.','Dental implant in one clinic allows you to enjoy international service with no concern of being left in the dark.','Material- lifelong warranty surgery fee and denture restoration feewill be charged separately.']
    
    for (let i = 1; i < aboutImg.length+1; i++) {
        $('img.about-'+i).click(function () {
            hoverChange(i,4)
        })
    }

    function hoverChange(i,j) {
        for (let k = 1; k <= j; k++) {
            $('img.about-'+k).attr('src',aboutImgOrigin[k-1])
        }
        
        $('img.about-'+i).attr('src',aboutImg[i-1])
        hoverShow($('img.about-'+i))
        $('.about-text>h3>span').text(aboutTextTitle[i-1])
        hoverShow($('.about-text>h3>span'))
        $('.about-text>p').text(aboutTextP[i-1])
        hoverShow($('.about-text>p'))
    }
    function hoverShow(e) {
        e.css('opacity',0)
            .animate({opacity: 1},500)
    }

    //問答區切換,(i=active,j=another)
    blockInnerSwitch('question',1,2)
    blockInnerSwitch('question',2,1)

    function blockInnerSwitch(t,i,j) {
        $('.'+t+' .option-'+i).click(function () {
            innerSwitch(t,i,j)
        })
        $('#'+t+'-'+i).click(function () {
            innerSwitch(t,i,j)
        })
        function innerSwitch(t,i,j) {
            $('.'+t+' .option-'+i).css('opacity',1)
            $('.'+t+' .option-'+j).css('opacity',.4)
            $('.'+t+' .opt-dot').css({
                borderColor: '#555',
                backgroundColor: '#bbb',
            })
            $('.'+t+'-content .option-'+j+'.show-content').css('display','none')
            $('.'+t+' img.option-'+j+'.show-content').css('display','none')
            $('.'+t+' .opt-dot:nth-child('+i+')').css({
                borderColor: '#bbb',
                backgroundColor: '#555',
            })
            $('.'+t+'-content .option-'+i+'.show-content').css('display','block')
            $('.'+t+' img.option-'+i+'.show-content').css('display','block')
            hoverShow($('.'+t+'-content .option-'+i+'.show-content'))
            hoverShow($('.'+t+' img.option-'+i+'.show-content'))
        }
    }
    //比較區切換
    blockInnerSwitch('compare',1,2)
    blockInnerSwitch('compare',2,1)
    //規則區切換
    blockInnerSwitch('rules',1,2)
    blockInnerSwitch('rules',2,1)
    $('.pub-sale').click(function () {
        $('.pub-sale-card').css('display','block')
        $('.pub-sale-card').animate({opacity:1},700)
    })
    $('.pub-close').click(function () {
        $('.pub-sale-card').css('display','none')
    })

    //團隊區切換
    blockInnerSwitch('team',1,2)
    blockInnerSwitch('team',2,1)
    
    $('.thum img').mouseover(function () {
        $(this).css('filter','sepia(0%)')
        $(this).next('.op0').css('opacity','1')
    })
    $('.thum img').mouseout(function () {
        $(this).css('filter','sepia(40%)')
        $(this).next('.op0').css('opacity','0')
    })
})

// window.sr = ScrollReveal({ 
//     // 參數設定[註1]
//     origin: "bottom",  // 起始位置
//     distance: "80px",  // 距離
//     duration: 1000,  // 動畫時間
//     delay: 200,  // 動畫延遲時間
//     rotate: { x: 0, y: 0, z: 0 },  // 旋轉角度
//     opacity: 0,  // 透明度
//     scale: 1, // 縮放比例
//     easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", // 動畫速度曲線
//     container: window.document.documentElement, // 外層
//     mobile: true, // 支援行動裝置
//     reset: true, // 每次都啟動動畫
//     useDelay: "always", // 延遲動畫次數
//     viewFactor: 0.2, // 當該物件在可視範圍內，則顯示此物件(0.2表示可視範圍20%)
//     viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, // 當外層有設定間隔造成偏移，則請設定在此維持精準度
//     beforeReveal: function (domEl) { console.log(1) }, // 當啟動前，則執行此函式
//     beforeReset: function (domEl) {console.log(2) }, // 當重啟前，則執行此函式
//     afterReveal: function (domEl) {console.log(3) }, // 當啟動後，則執行此函式
//     afterReset: function (domEl) {console.log(4) } // 當重啟後，則執行此函式
// });
// sr.reveal( ".appear", {
//     // 參數設定[註1]
// });