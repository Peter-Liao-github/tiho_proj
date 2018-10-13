$(function(){
    //關於區圖文切換
    var aboutImgOrigin = ['img/TIHO_Web_Ingredient-22.png','img/TIHO_Web_Ingredient-23.png','img/TIHO_Web_Ingredient-24.png','img/TIHO_Web_Ingredient-25.png']
    var aboutImg = ['img/TIHO_Web_Ingredient-26.png','img/TIHO_Web_Ingredient-27.png','img/TIHO_Web_Ingredient-28.png','img/TIHO_Web_Ingredient-29.png']
    var aboutTextTitle = ['価格の利点','ブランド利点','サービス利点','材料-永久保証']
    var aboutTextP = ['インプラントの価格は透明で合理的です。鈦好コインの流通と値上りを合わせて費用を大幅に抑える!','日本ブランドの供給からクリニックに浸透し、技術とサービスの提供、差し歯の生産まで一貫サービスになる。','一軒で歯科インプラント、国際的なサービスは、インプラントを孤児にさせません。','材料費は同じ患者で2回課金されません。']
    
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