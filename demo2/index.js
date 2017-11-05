function Radar() {
    this.width = [];
    this.height = [];
    this.deg = [];
    this.rad = [];
    this.imgGroup = [];
}
//入口函数
Radar.prototype.init = function() {
    this.imgSizeGroup();
    this.prodClass();
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
}
//给那个item添加class
Radar.prototype.prodClass = function() {
    for(let i = 0; i < this.imgGroup.length; i++) {
        let className = 'img-' + i;
        this.imgGroup[i].classList.add(className);
    }
}

var radar = new Radar();

radar.init();