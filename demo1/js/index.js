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
    function static(data){
        if(!data){
            return;
        }
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
