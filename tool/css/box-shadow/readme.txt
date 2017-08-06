box-shadow参数详解
box-shadow: inset h-shadow v-shadow blur-radius spread-radius color

inset:可选，默认投影方式是外阴影，如果取值为inset，则为内阴影；
h-shadow:必选，阴影水平偏移值,可正可负,正值阴影在盒子的右边缘，负值阴影在盒子的左边缘；
v-shadow:必选，阴影垂直偏移值，可正可负，正值阴影在盒子的下边缘，负值阴影在盒子的上边缘；
blur-radius:可选，阴影模糊半径，其值只能为正，如果其值为0则阴影不具有模糊效果，其值越大阴影的边缘就越模糊,同时阴影的尺寸也越大；设置该属性则四周具有相同的阴影效果；
spread-radius:可选，阴影扩展半径，其值可正可负，如果为正，则整个阴影都扩展大，反之为负值，则缩小；
color:可选，阴影颜色，如果不设定任何颜色，浏览器会取默认色，但各个浏览器默认样色可能不同，建议不要省略此参数。


IE9以前
filter: progid:DXImageTransform.Microsoft.Shadow(color=’颜色值’, Direction=阴影角度（数值）, Strength=阴影半径（数值）);
该属性必须配合background属性。


