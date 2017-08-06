内容滚动
所用知识点:
(1)overflow:hidden;
(2)scrollTop,scrollHeight
    /*scrollTop:滚动条竖直方向上的起始位置,也即子容器在父容器中向上偏移的距离;
         clientHeight:子容器可见的高度(包含上下padding);
         offsetHeight:子容器可见的高度(包含上下padding)+边框+[滚动条];
         scrollHeight:子容器实际的高度(可见部分(包含上下padding)+不可见部分,不包含边框);

        scrollLeft:滚动条水平方向上的起始位置，也即子容器在父容器中向右偏移的距离;
        offsetWidth:子容器可见的宽度(+边框);
        scrollWidth:子容器实际的宽度(可见部分+不可见部分,不包含边框);

       * */
(3)循环滚动制作原理