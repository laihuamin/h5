function Radar() {
    this.width = [];
    this.height = [];
    this.deg = [];
    this.rad = [];
    this.imgGroup = [];
    this.top = [];
    this.left = [];
    this.sheet = [];
}
//入口函数
Radar.prototype.init = function() {
    this.imgSizeGroup();
    this.prodClass();
    this.setClass();
    console.log(this);
}
//图片任意大小
Radar.prototype.imgSizeGroup = function() {
    this.imgGroup = document.getElementsByClassName('img-item');
    for(let i = 0; i < this.imgGroup.length; i++) {
        this.imgSize();
    }
}

//生产随机的图片大小
Radar.prototype.imgSize = function() {
    //在50到150之间随意取大小
    let width = Math.round((Math.random() + .5) * 100);
    this.width.push(width);
    this.height.push(width);
    //在0到360之间随意取角度
    let deg = Math.round(Math.random() * 360);
    this.deg.push(deg);
    //在0到600之间随意取半径
    let rad = Math.round(Math.random() * 600);
    this.rad.push(rad);
    //随机取top
    let top = Math.round(Math.random() * 100);
    this.top.push(top);
    //随机取left
    let left = Math.round(Math.random() * 100);
    this.left.push(left);
}
//给那个item添加class
Radar.prototype.prodClass = function() {
    for(let i = 0; i < this.imgGroup.length; i++) {
        let className = 'img-' + i;
        this.imgGroup[i].classList.add(className);
    }
}
//给每个class添加属性
Radar.prototype.setClass = function() {
    //获取样式表
    var sheets = document.styleSheets[0];
    //往样式表中插入样式
    for(let i = 0; i < this.imgGroup.length; i++) {
        sheets.insertRule(`.img-${i} {
            width: ${this.width[i]}px;
            height: ${this.height[i]}px;
            top: ${this.top[i]}%;
            left: ${this.left[i]}%;
        }`, 0);
    }
}

var radar = new Radar();

radar.init();