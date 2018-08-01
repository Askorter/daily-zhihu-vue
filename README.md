#持续挖坑

技术栈
vue2.0+vue-router+vuex+axios+vue-cli</br>
UI库：iview</br>
记录一下已知bug：</br>
<del>重回首页时动画会出现两次；</del><del>已修复重回首页重复动画，又有了新的bug，切换栏目暂时没有动画了</del> 动画能正常显示了</br>
<del>某些图片链接不是知乎日报的图片，是外链，未做判断会导致图片url替换错误；</del> 添加了错误后显示的图片</br>
<del>移动端下拉到底无法继续加载</del> 移动端也能正常下拉到底部继续加载了</br>
剩余目标功能：</br>
下拉加载时显示在底部的动画</br>
对文章内其他网站的图片进行处理</br>
响应式设计</br>
首页图片轮播框</br>
改进路由地址</br>
规范代码</br>

2018.8.1更新
<hr/>
<div>
<span><div>使用在html文档中添加</div><div style="box-sizing: border-box; padding: 8px; font-family: Monaco, Menlo, Consolas, &quot;Courier New&quot;, monospace; font-size: 12px; color: rgb(51, 51, 51); border-radius: 4px; background-color: rgb(251, 250, 248); border: 1px solid rgba(0, 0, 0, 0.15);-en-codeblock:true;"><div><span style="color: #808080; font-family: Monaco; font-size: 9pt;">&lt;</span><span style="color: #569cd6; font-family: Monaco; font-size: 9pt;">meta</span> <span style="color: #9cdcfe; font-family: Monaco; font-size: 9pt;">name</span><span style="color: #d4d4d4; font-family: Monaco; font-size: 9pt;">=</span><span style="color: #ce9178; font-family: Monaco; font-size: 9pt;">&quot;referrer&quot;</span> <span style="color: #9cdcfe; font-family: Monaco; font-size: 9pt;">content</span><span style="color: #d4d4d4; font-family: Monaco; font-size: 9pt;">=</span><span style="color: #ce9178; font-family: Monaco; font-size: 9pt;">&quot;never&quot;</span><span style="color: #808080; font-family: Monaco; font-size: 9pt;">&gt;</span></div></div><div>的方法绕过知乎的图片防盗链机制，不用再使用第三方服务的链接来替换了</div><div><br/></div><div>使用一种很不清真的方法添加了滚动到底部加载更多内容时候的加载动画（<strike><font style="font-size: 16pt;">就是让它一直转）</font></strike></div><div><br/></div><div>去除了其他主题中的显示条数的限制，一次全部显示出来（<strike>还没有实现将数据缓存下来分批加载的功能</strike>）</div><div><br/></div><div>优化了首页加载（<strike>其实速度并没有变快，只是加上了第一次进入等待动画而已</strike>）</div><div><br/></div><div>优化了限制多次执行获取更多内容的方法，由使用定时器限制改为使用判断页面滚动距离来限制（<strike>莫名卡顿还是没有消失</strike>）</div><div><br/></div><div>过了一个多月回头来看，我的代码写的好不清真啊，页面滚动的时候也没有节流，样式也写的好混乱啊......</div><div>不过现在看着不好也正可以说明一个月过后我还是有点进步的，之后再抽空优化一下代码吧，例如把css都换成scss编写，例如使用babel来解决不同环境的兼容性问题，例如改用Rem方案，<strike>例如把请求数据的操作放在action里</strike></div><div><strike><br/></strike></div><div><strike>下拉刷新呢，怎么还没写好<span style="font-size: 12px;">（小声bb）</span></strike></div></span>
</div>

参考资料</br>
https://github.com/walleeeee/daily-zhihu</br>
https://segmentfault.com/a/1190000009242864

