export default function chartResize(eleArr) {
    //eleArr是一个数组，因为有些页面可能有多个echart图表，而每个页面只调用一次该方法，所以统一传入
    setTimeout(() => {
        //注：此处要用addEventListener,如果用 window.onresize = function(){},如果别的组件也用了onresize事件，就容易覆盖掉此处的函数
        window.addEventListener("resize", function () {
            for (let i = 0; i < eleArr.length; i++) {
                //里面那层定时器是为了在页面存在多个图时，resize方法的调用时间微微错开，避免明显的卡顿
                setTimeout(() => {
                    eleArr[i].resize()
                }, 100 * i)
            }
        })
    }, 100)
}
 