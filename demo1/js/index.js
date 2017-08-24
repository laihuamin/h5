$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        nextButton: '.btn',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        }, 
        onSlideChangeEnd: function(swiper){ 
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
        function block(num, i){ 
            return `<div class="block ani" swiper-animate-duration="0.5s" swiper-animate-effect=fadeIn swiper-animate-delay="${0.5+(num - i) * 0.1}s"></div>`;
        }
        const result = [];
        staticData.data.forEach((item) => {
            let resultTemp = `${item}`;   
            let temp = Math.floor(item / 5000);
            for(let i = 0; i < temp; i++){
                resultTemp += block(temp, i);
            }
            result.push(resultTemp);
        });
        $('.last-one').html(result[0]);
        $('.last-two').html(result[1]);
        $('.now-one').html(result[2]);
        $('.now-two').html(result[3]);
    }
    // popularity
    function popularity(data){
        if(!data){
            return;
        }
        $('.pop-title').text(data.title);
        const li = function(item){
            return `<li class="pop-item ani" swiper-animate-effect=fadeIn swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">
            <div class="item-left ani" swiper-animate-effect=flip swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">
                <div class="left-top ani" swiper-animate-effect=slideInLeft swiper-animate-duration="0.5s" swiper-animate-delay="1.5s">${item.title}</div>
                <div class="left-bottom ani" swiper-animate-effect=slideInLeft swiper-animate-duration="0.5s" swiper-animate-delay="1.5s">公众号：${item.gongzhonghao}</div>
            </div>
            <div class="item-right" >
                <div class="right-top ani" swiper-animate-effect=slideInRight swiper-animate-duration="0.5s" swiper-animate-delay="1s">参与人数</div>
                <div class="right-bottom ani" swiper-animate-effect=slideInRight swiper-animate-duration="0.5s" swiper-animate-delay="1.5s">${item.number}</div>
            </div>
        </li>`;
        }
        let result = '';
        data.data.forEach((item) => {
            result += li(item);
        })
        console.log(result);
        $('.pop-group').html(result);
    }
    //top
    function top(data){
        if(!data){
            return;
        }
        $('.top-title').text(data.title);
        const li = function(item){
            return `<li class="pop-item ani" swiper-animate-effect=fadeIn swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">
            <div class="item-left ani" swiper-animate-effect=flip swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">
                <div class="left-top ani" swiper-animate-effect=slideInLeft swiper-animate-duration="0.5s" swiper-animate-delay="1.5s">${item.title}</div>
                <div class="left-bottom ani" swiper-animate-effect=slideInLeft swiper-animate-duration="0.5s" swiper-animate-delay="1.5s">公众号：${item.gongzhonghao}</div>
            </div>
            <div class="item-right" >
                <div class="right-top ani" swiper-animate-effect=slideInRight swiper-animate-duration="0.5s" swiper-animate-delay="1s">参与人数</div>
                <div class="right-bottom ani" swiper-animate-effect=slideInRight swiper-animate-duration="0.5s" swiper-animate-delay="1.5s">${item.number}</div>
            </div>
        </li>`;
        }
        let result = '';
        data.data.forEach((item) => {
            result += li(item);
        })
        console.log(result);
        $('.top-group').html(result);
    }
    // analysis
    function analysis(data){
        if(!data){
            return;
        }
        const img = function(item){
            return `<img class="img-item ani" swiper-animate-effect=fadeInDown swiper-animate-duration="0.5s" swiper-animate-delay="1s" src="${item}"/>`
        }
        $('.img-one').html(img(data.imgs[0]));
        $('.img-two').html(img(data.imgs[1]));
        $('.ana-title').text(data.title);
        $('.ana-sub-title').text(data.subtitle)
        $('.ana-con').text(data.content);
    }
    //格式化数据
    function init(data){
        home(data.home);
        static(data.static);
        popularity(data.popularity);
        top(data.top);
        analysis(data.analysis);
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
