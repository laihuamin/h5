$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        nextButton: '.btn',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        }, 
        nSlideChangeEnd: function(swiper){ 
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }       
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
        const block = '<div class="block flash animated"></div>';
        
        const result = [];
        staticData.data.forEach((item) => {
            let resultTemp = `${item}`;   
            let temp = Math.floor(item / 5000);
            for(let i = 0; i < temp; i++){
                resultTemp += block;
            }
            result.push(resultTemp);
        });
        $('.last-one').html(result[0]);
        $('.last-two').html(result[1]);
        $('.now-one').html(result[2]);
        $('.now-two').html(result[3]);
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
