$(function(){
    //關於區圖文切換
    var aboutImgOrigin = ['img/TIHO_Web_Ingredient-22.png','img/TIHO_Web_Ingredient-23.png','img/TIHO_Web_Ingredient-24.png','img/TIHO_Web_Ingredient-25.png']
    var aboutImg = ['img/TIHO_Web_Ingredient-26.png','img/TIHO_Web_Ingredient-27.png','img/TIHO_Web_Ingredient-28.png','img/TIHO_Web_Ingredient-29.png']
    var aboutTextTitle = ['平价植牙','一条龙品质把关','全省服务','材料终身保固']
    var aboutTextP = ['引进加密货币，使得人人都可以是消费者，也能成为投资者，<br class="non-phone-appear" />享受高档次、低成本的植牙价格。','从日本品牌上游介入到诊所医疗技术以及牙疗服务，再到假牙估厂制作产业，能够一条龙把关，超越业界。','套件工具齐全，不会变成种植牙孤儿。','不会在同病患身上收取两次材料费用。']
    
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
        $('.about-text>p').html(aboutTextP[i-1])
        hoverShow($('.about-text>p'))
    }
    function hoverShow(e) {
        e.css('opacity',0)
            .animate({opacity: 1},500)
    }
})