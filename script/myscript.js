$(window).scroll(function(){
    //scrollTop觸發
    // if($(window).width()>512){
    //     if($(window).scrollTop()>90){
    //         $('.ingredient img').animate({opacity: 0},700)
    //     }
    //     if($(window).scrollTop()>300){
    //         $('.ingredient img').css('display','none')
    //     }
    //     if ($(window).scrollTop()>900){
    //         $('#opening-word').css({animation: 'fInOut 2.5s 0s 1 both'})
    //         $('.page-mark-1').css('border-left-color','rgb(140, 140, 140)')
    //         // $('.page-mark-1').css('color','black')
    //     }
    //     if ($(window).scrollTop()>1400){
    //         $('.white-btn').css('opacity','0')
    //         $('.black-btn').css('opacity','1')
    //     }
    // }

    // if($(window).width()<512){
    //     if($(window).scrollTop()>30){
    //         $('.ingredient img').animate({opacity: 0},700)
    //     }
    //     if ($(window).scrollTop()>350){
    //         $('#opening-word').css({animation: 'fInOut 2.5s 0s 1 both'})
    //         $('.page-mark-1').css('border-left-color','rgb(140, 140, 140)')
    //         // $('.page-mark-1').css('color','black')
    //     }
    //     if ($(window).scrollTop()>400){
    //         $('.white-btn').css('opacity','0')
    //         $('.black-btn').css('opacity','1')
    //     }
    // }

})

$(function(){
    //視差
    // if ($(window).width()>512) {
    //     $('.block-top').parallax('50%',0.58);
    //     $('.video-opening img').parallax('50%',1);
    //     $('#opening-word').parallax('50%',0.1);
    // } 

    // if ($(window).width()<512) {
    //     $('.block-top').parallax('50%',0.2);
    //     setInterval("$('#opening-img-phone').css('top', $(window).scrollTop()*(-1.05))",50)
    //     $('#opening-word').parallax('50%',1);
    // }

    //頂部區漂浮文字消失切換
    $('.block-top').mouseover(function () { 
        $('.floating-word').animate({opacity: 0},700)
        $('.dental-text').animate({opacity: 1},700)
    });

    //影片區球體左移
    $('iframe').click(function () { 
        $('.video-file img:nth-of-type(1)').animate({left: '-9%'},1200)
    });

    //關於區圖文切換
    var aboutImgOrigin = ['img/TIHO_Web_Ingredient-22.png','img/TIHO_Web_Ingredient-23.png','img/TIHO_Web_Ingredient-24.png','img/TIHO_Web_Ingredient-25.png']
    var aboutImg = ['img/TIHO_Web_Ingredient-26.png','img/TIHO_Web_Ingredient-27.png','img/TIHO_Web_Ingredient-28.png','img/TIHO_Web_Ingredient-29.png']
    var aboutTextTitle = ['h3-title-1','h3-title-2','h3-title-3','h3-title-4']
    var aboutTextP = ['Lorem-1, ipsum dolor sit amet consectetur adipisicing elit. Velit officiis, nostrum, perferendis corporis totam quae minima doloribus dolores est libero officia labore aliquam, voluptatibus dignissimos eligendi id deleniti ea repellat?','Lorem-2, ipsum dolor sit amet consectetur adipisicing elit. Velit officiis, nostrum, perferendis corporis totam quae minima doloribus dolores est libero officia labore aliquam, voluptatibus dignissimos eligendi id deleniti ea repellat?','Lorem-3, ipsum dolor sit amet consectetur adipisicing elit. Velit officiis, nostrum, perferendis corporis totam quae minima doloribus dolores est libero officia labore aliquam, voluptatibus dignissimos eligendi id deleniti ea repellat?','Lorem-4, ipsum dolor sit amet consectetur adipisicing elit. Velit officiis, nostrum, perferendis corporis totam quae minima doloribus dolores est libero officia labore aliquam, voluptatibus dignissimos eligendi id deleniti ea repellat?']
    
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
            $('.'+t+' .opt-dot:nth-child('+i+')').css({
                borderColor: '#bbb',
                backgroundColor: '#555',
            })
            $('.'+t+'-content .option-'+i+'.show-content').css('display','block')
            hoverShow($('.'+t+'-content .option-'+i+'.show-content'))
        }
    }
    //比較區切換
    blockInnerSwitch('compare',1,2)
    blockInnerSwitch('compare',2,1)
    //團隊區切換
    blockInnerSwitch('team',1,2)
    blockInnerSwitch('team',2,1)
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