
clone之后npm install   （这个应该是废话）

VUE2.0版本 

右上角的三个按钮没有做链接 直接通过路径访问不同的设备详情

http://localhost:8080/#/deviceDetailA（智能井盖）
http://localhost:8080/#/deviceDetailB （智能井盖航天城）
http://localhost:8080/#/deviceDetailC （井下中继）

ws的通信在utils => ws.js 
调取的数据需要用vuex.Store，我还没弄，你需要自己从头来  (vuex的使用链接:https://www.jianshu.com/p/6fe1438bbf0c   这个是我自己写的，最简单的方式使用全局变量)

views文件夹下面的ABC分别对应不同的设备 


components文件夹对应不同类型设备界面的echarts组件 （每个组件上方也都有备注，关于echarts图表样式的修改需要配合对应的deviceDetail界面css以及echarts配置项一同修改 
  echarts配置项介绍：https://echarts.apache.org/zh/option.html#title
）

assets => img  图片在这里 


赶时间，这里边的很多变量名都没改正，尤其是components里边的这些echats组件，都是复制粘贴的，能跑起来就行。
