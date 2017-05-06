webpackJsonp([0],[function(n,t,e){e(5);var a=e(10)(e(3),e(11),null,null);n.exports=a.exports},,function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(1),o=e(0),i=e.n(o);a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:i.a}})},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(6),o=(e.n(a),e(4)),i=(e.n(o),e(7));t.default={name:"app",data:function(){return{help1:i,help2:i,screen_phone:!1,toolbars:{underline:!0,strikethrough:!0,undo:!0,save:!0,fullscreen:!0,navigation:!0}}},created:function(){this.sizeToStatus(),window.onresize=function(){this.sizeToStatus()}},methods:{sizeToStatus:function(){window.matchMedia("(min-width:768px)").matches?this.screen_phone=!1:this.screen_phone=!0},saveone:function(n,t){alert("save one")},savetwo:function(n,t){alert("save two")},change:function(n,t){console.log("change")}},components:{mavonEditor:a.mavonEditor}}},function(n,t){},function(n,t){},,function(n,t){n.exports='markdown 语法简介\n===\n> [语法详解](http://commonmark.org/help/)\n## 粗体\n```\n**粗体**\n__粗体__\n```\n## *斜体*\n```\n*斜体*\n_斜体_\n```\n## 标题\n```\n# 一级标题 #\n一级标题\n====\n## 二级标题 ##\n二级标题\n----\n### 三级标题 ###\n#### 四级标题 ####\n##### 五级标题 #####\n###### 六级标题 ######\n```\n## 分割线\n```\n***\n---\n```\n****\n## ^上^角~下~标\n```\n上角标 x^2^\n下角标 H~2~0\n```\n## ++下划线++ ~~中划线~~\n```\n++下划线++\n~~中划线~~\n```\n## ==标记==\n```\n==标记==\n```\n## 段落引用\n```\n> 一级\n>> 二级\n>>> 三级\n...\n```\n> 一级\n>> 二级\n>>> 三级\n## 列表\n```\n有序列表\n1.\n2.\n3.\n...\n无序列表\n-\n-\n...\n```\n## 链接\n```\n[链接](www.baidu.com)\n![图片描述](http://www.image.com)\n```\n## 代码段落\n\\``` type\n\n代码段落\n\\```\n\\` 代码块 \\`\n`代码块`\n```c++\nint main()\n{\n    printf("hello world!");\n}\n```\n## 表格(table)\n```\n| 标题1 | 标题2 | 标题3 |\n| :--  | :--: | ----: |\n| 左对齐 | 居中 | 右对齐 |\n| ---------------------- | ------------- | ----------------- |\n```\n| 标题1 | 标题2 | 标题3 |\n| :--  | :--: | ----: |\n| 左对齐 | 居中 | 右对齐 |\n| ---------------------- | ------------- | ----------------- |\n## 脚注(footnote)\n```\nhello[^hello]\n```\n\n这是[^hello]\n\n[^hello]: 一个注脚\n\n## 表情(emoji)\n[参考网站https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\n```\n:laughing:\n:blush:\n:smiley:\n:)\n:(\n...\n```\n:laughing::blush::smiley::):(\n\n## $\\KaTeX$公式\n\n我们可以渲染公式例如：$x_i + y_i = z_i$和$\\sum_{i=1}^n a_i=0$\n我们也可以单行渲染\n$$\\sum_{i=1}^n a_i=0$$\n具体可参照[katex文档](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex支持的函数](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex文档](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\n'},function(n,t){n.exports="data:image/png;base64,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"},function(n,t){n.exports="data:image/png;base64,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"},,function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[n._m(0),n._v(" "),n.screen_phone?n._e():e("div",{staticClass:"item"},[e("h2",{staticClass:"item-header"},[n._v("\n      默认配置\n    ")]),n._v(" "),e("mavonEditor",{staticClass:"item-editor",on:{change:n.change,save:n.saveone},model:{value:n.help1,callback:function(t){n.help1=t},expression:"help1"}})],1),n._v(" "),n.screen_phone?e("div",{staticClass:"item"},[e("h2",{staticClass:"item-header"},[n._v("\n      自定义工具栏\n    ")]),n._v(" "),e("mavonEditor",{staticClass:"item-editor",attrs:{toolbars:n.toolbars},on:{save:n.savetwo},model:{value:n.help2,callback:function(t){n.help2=t},expression:"help2"}})],1):n._e(),n._v(" "),n._m(1),n._v(" "),n._m(2),n._v(" "),n._m(3)])},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"page-header"},[e("h1",{staticClass:"project-name"},[n._v("mavonEditor")]),n._v(" "),e("h3",{staticClass:"project-tagline"},[n._v("一款基于Vue的markdown编辑器")]),n._v(" "),e("a",{staticClass:"btn",attrs:{href:"https://github.com/hinesboy/mavonEditor"}},[n._v("View on GitHub")]),n._v(" "),e("a",{staticClass:"btn",attrs:{href:"https://github.com/hinesboy/mavonEditor/zipball/master"}},[n._v("Download .zip")]),n._v(" "),e("a",{staticClass:"btn",attrs:{href:"https://github.com/hinesboy/mavonEditor/master"}},[n._v("Download .tar.gz")])])},function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"item"},[a("span",{staticStyle:{display:"block",margin:"30px 0 15px 0",color:"#1e6bb8"}},[n._v("\n      注: 屏幕分辨率低于768px ，取消【单栏|双栏】编辑模式 ，更改为【编辑|预览】切换 ， 并且取消【沉浸式阅读】模式\n    ")]),n._v(" "),a("img",{attrs:{width:"100px",height:"auto",src:e(8)}}),n._v(" "),a("img",{attrs:{width:"100px",height:"auto",src:e(9)}})])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"item"},[e("h2",{staticClass:"item-header"},[n._v("\n      详细配置API参考"),e("a",{attrs:{href:"https://github.com/hinesboy/mavonEditor"}},[n._v("GitHub")])])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"item"},[e("h2",{staticClass:"item-header"},[n._v("\n      后续\n    ")]),n._v(" "),e("ul",[e("li",{staticStyle:{"text-decoration-line":"line-through"}},[n._v("撤销键、清空键、保存按钮")]),n._v(" "),e("li",{staticStyle:{"text-decoration-line":"line-through"}},[n._v("支持开启标题导航")]),n._v(" "),e("li",{staticStyle:{"text-decoration-line":"line-through"}},[n._v("重构")]),n._v(" "),e("li",[n._v("支持图片上传")]),n._v(" "),e("li",[n._v("滚动条样式的浏览器兼容性")]),n._v(" "),e("li",[n._v("自定义工具栏功能键")]),n._v(" "),e("li",[n._v("markdown样式自定义")])])])}]}}],[2]);
//# sourceMappingURL=app.6d8f29af187916aaaa7d.js.map