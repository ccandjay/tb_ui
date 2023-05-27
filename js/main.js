window.addEventListener('load', function name() {
    var lbtone = this.document.querySelector('.left-btn');
    var lbttwo = this.document.querySelector('.right-btn');
    var banner = this.document.querySelector('.banner');
    banner.addEventListener('mouseenter', function () {
        lbtone.style.display = 'block'
        lbttwo.style.display = 'block'
        clearInterval(time);
        time = null;
    })

    banner.addEventListener('mouseleave', function () {
        lbtone.style.display = 'none';
        lbttwo.style.display = 'none';
        time = setInterval(function () {
            lbttwo.click();
        }, 2000);
    })

    var ol = banner.querySelector('.ol');
    var ul = banner.querySelector('.ul');
    var img = banner.querySelector('img');
    var imgW = img.offsetWidth;
    var circle = 0;   //控制小圆圈的播放
    for (let i = 0; i < ul.children.length; i++) {
        //   创建小li
        var li = this.document.createElement('li');
        // 给 li 添加自定义属性,作为索引 
        li.setAttribute('index', i);
        // 插入小li
        ol.appendChild(li);
        li.addEventListener('click', function () {
            // 排他思想
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 设置类名
            this.className = 'current';
            // ul的移动距离是小圆圈的索引号*图片的宽度
            var index = this.getAttribute('index');
            var juli = -imgW * index;   //计算移动的距离
            animate(ul, juli)
        })
    }

    // 设置第一个小li 的类名为current
    ol.children[0].className = 'current'

    // 克隆图片
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    /**
     * 点击按钮滚动
     */
    lbttwo.addEventListener('click', function () {
        // 如果走到了最后一张复制图片,ul的left值改为0
        // 获取子元素的个数
        const i = ul.childElementCount - 1
        if (num == i) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        var juli1 = -num * imgW;
        animate(ul, juli1);
        circle++;
        if (circle == ol.children.length) {//当小圆圈的变量到最后一个时,重置
            circle = 0;
        }
        circleChange();
    })
    //左侧按钮
    lbtone.addEventListener('click', function () {
        // 如果走到了最后一张复制图片,ul的left值改为0
        if (num == 0) {
            ul.style.left = -ul.children.length * imgW + 'px';
            num = 4;
        }
        num--;
        var juli1 = -num * imgW;
        animate(ul, juli1);
        circle--;
        if (circle < 0) {//当小圆圈的变量到最后一个时,重置
            circle = 3;
        }
        circleChange();
    })

    function circleChange() {
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
            ol.children[circle].className = 'current';

        }
    }

    // 自动播放
    var time = this.setInterval(function () {
        // 手工调用点击事件
        lbttwo.click();
    }, 1500);

    function animate(obj, time, callback) {
        clearInterval(obj.timer)
        obj.timer = setInterval(function () {
            // 渐满的动画步长公式  (目标值-现在的位置)/10
            var o = (time - obj.offsetLeft) / 10;
            o = o > 0 ? Math.ceil(o) : Math.floor(o);
            if (obj.offsetLeft == time) {
                clearInterval(obj.timer);
                // 回调函数
                if (callback) {
                    callback();
                }
            }

            obj.style.left = obj.offsetLeft + o + 'px';

        }, 15)
    };


    // //下拉菜单
    // var b_li = document.querySelector('.b');
    // var b_lis = b_li.querySelectorAll('li');
    // var xiala = document.querySelector('.xiala');
    // b_lis[0].onmouseover = function () {
    //     xiala.style.display = 'block'
    // }
    // b_lis[0].onmouseout = function () {
    //     xiala.style.display = 'none'
    // }


    // var two_li = document.querySelector('.two');
    // var two_lis = two_li.querySelectorAll('li');
    // var kefu = document.querySelector('.kefu')
    // var qianniu = document.querySelector('.qianniu')
    // var itaobao = document.querySelector('.itaobao')
    // var xlshoucang = document.querySelector('.xlshoucang')
    // xiala.onmouseover = function () {
    //     xiala.style.display = 'block'
    // }
    // xiala.onmouseout = function () {
    //     xiala.style.display = 'none'
    // }


    // two_lis[0].onmouseover = function name() {
    //     this.style.backgroundColor = '#eae8eb'
    //     kefu.style.display = 'block';
    // }
    // two_lis[0].onmouseout = function name() {
    //     this.style.backgroundColor = '#dcdad7'
    //     kefu.style.display = 'none';
    // }
    // kefu.onmouseover = function () {
    //     this.style.cursor = 'pointer';
    //     this.style.display = 'block';
    // }
    // kefu.onmouseout = function () {
    //     this.style.display = 'none';
    // }
    // two_lis[1].onmouseover = function name() {
    //     this.style.backgroundColor = '#eae8eb'
    //     qianniu.style.display = 'block';
    // }
    // two_lis[1].onmouseout = function name() {
    //     this.style.backgroundColor = '#dcdad7'
    //     qianniu.style.display = 'none';
    // }
    // qianniu.onmouseover = function () {
    //     this.style.display = 'block';
    // }
    // qianniu.onmouseout = function () {
    //     this.style.display = 'none';
    // }
    // two_lis[6].onmouseover = function name() {
    //     this.style.backgroundColor = '#eae8eb'
    //     itaobao.style.display = 'block';
    // }
    // two_lis[6].onmouseout = function name() {
    //     this.style.backgroundColor = '#dcdad7'
    //     itaobao.style.display = 'none';
    // }
    // itaobao.onmouseover = function () {
    //     this.style.display = 'block';
    // }
    // itaobao.onmouseout = function () {
    //     this.style.display = 'none';
    // }
    // two_lis[5].onmouseover = function name() {
    //     this.style.backgroundColor = '#eae8eb'
    //     xlshoucang.style.display = 'block';
    // }
    // two_lis[5].onmouseout = function name() {
    //     this.style.backgroundColor = '#dcdad7'
    //     xlshoucang.style.display = 'none';
    // }
    // xlshoucang.onmouseover = function () {
    //     this.style.display = 'block';
    // }
    // xlshoucang.onmouseout = function () {
    //     this.style.display = 'none';
    // }
})
