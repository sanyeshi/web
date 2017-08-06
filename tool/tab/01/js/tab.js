/**
 * Created by ssl on 3/16/15.
 */

function $(id)
{
    return typeof id =="string"?document.getElementById(id):id;
}

//悬停切换
/*
window.onload=function(){
    var titles=$('notice-title').getElementsByTagName('li');
    var contents=$('notice-content').getElementsByTagName('div');
    if(titles.length!=contents.length) return;

    for(var i=0;i<titles.length;i++)
    {
           titles[i].onmouseover=function()
           {
               for(var j=0;j<titles.length;j++)
               {
                  titles[j].className='';
                  contents[j].style.display='none';
               }
               titles[this.id].className='select';
               contents[this.id].style.display='block';
          };
    }
}
*/
//点击切换

/*
window.onload=function(){
    var titles=$('notice-title').getElementsByTagName('li');
    var contents=$('notice-content').getElementsByTagName('div');
    if(titles.length!=contents.length) return;

    for(var i=0;i<titles.length;i++)
    {
         titles[i].onclick=function()
         {
            for(var j=0;j<titles.length;j++)
            {
              titles[j].className='';
              contents[j].style.display='none';
            }
            titles[this.id].className='select';
            contents[this.id].style.display='block';
         };
    }
}
*/

//延迟切换
/*
window.onload=function(){
    var titles=$('notice-title').getElementsByTagName('li');
    var contents=$('notice-content').getElementsByTagName('div');
    if(titles.length!=contents.length) return;

     for(var i=0;i<titles.length;i++)
     {
          var timer=null;
          titles[i].onmouseover=function()
          {
             var index=this.id;
             if(timer)
             {
               clearTimeout(timer);
               timer=null;
             }
            timer=setTimeout(function()
            {
              for(var j=0;j<titles.length;j++)
              {
                titles[j].className='';
                contents[j].style.display='none';
              }
               titles[index].className='select';
              contents[index].style.display='block';
            },500);
         };
    }

}*/

//自动切换
window.onload=function()
{
    var titles=$('notice-title').getElementsByTagName('li');
    var contents=$('notice-content').getElementsByTagName('div');
    if(titles.length!=contents.length) return;

    //改变选项卡
    function changeItem(index)
    {
        for(var j=0;j<titles.length;j++)
        {
            titles[j].className='';
            contents[j].style.display='none';
        }
        titles[index].className='select';
        contents[index].style.display='block';
    }
    //设置定时器
    function setTimer()
    {
        timer=setInterval(autoPlay,2000);
    }
    //清除定时器
    function clearTimer()
    {
       if(timer)
       {
           clearInterval(timer);
           timer=null;
       }
    }
    //自动播放
    function autoPlay()
    {
        index++;
        if(index>=titles.length) index=0;
        changeItem(index);
    }


    var index=0;
    var timer=null;
    for(var i=0;i<titles.length;i++)
    {
        titles[i].onmouseover=function(){
           index=this.id;
           clearTimer();
           changeItem(index);
        };
        titles[i].onmouseout=setTimer;
    }
    clearTimer();
    setTimer();
};