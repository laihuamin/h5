$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        nextButton: '.btn'
    })
    //home首页
    function home(data){
        if(!data){
            return;
        }
        $('.time-con').text(data.time);
    }
    //static
    function static(staticData){
        if(!staticData){
            return;
        }
        $('.header-con').text(staticData.title);
        $('.people-num').text(staticData.people);
        const block = '<span class="block"></span>';
        const result = [];
        staticData.data.forEach((item) => {
            let temp = Math.floor(item / 500);
        });
        lastDataHtml = `<div class="last-one"></div>`
    }
    //格式化数据
    function init(data){
        home(data.home);
        static(data.static);
    }
    //请求数据
    $.ajax({
        url:"http://www.lhbzimo.cn:5000/",
        dataType: 'json',
        type: 'GET',
        data: {},
        success: function(data){
            init(data);
        },
        error: function(error){
            console.log(error);
        }
    })    
});
