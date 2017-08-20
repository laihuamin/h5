# 搭项目的骨架
## swiper插件的使用
```
//css
html, body {
    position: relative;
    height: 100%;
}
body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
}
.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-slide {
    font-size: 14px;
    background: #fff;
    color: #4afdbe;
}
```
```
//html
<link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="./css/swiper-3.4.2.min.css">
</head>
<body>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">slide1</div>
            <div class="swiper-slide">slide2</div>
            <div class="swiper-slide">slide3</div>
            <div class="swiper-slide">slide4</div>
            <div class="swiper-slide">slide5</div>
            <div class="swiper-slide">slide6</div>
        </div>
        <div class="swiper-button-next"></div>
    </div>
    <script src="./js/jquery.min.js"></script>
    <script src="./js/swiper-3.4.2.min.js"></script>
    <script src="./js/index.js"></script>
</body>
```
```
//js
$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
        autoplay: 5000,
        dirction: 'vertial',
        loop: true,
        nextButton: '.swiper-button-prev'
    })
});
```