const e={key:"v-7d52b3a8",path:"/language/java/on-java-8/Appendix-IO-Streams.html",title:"\u9644\u5F55:\u6D41\u5F0F IO",lang:"zh-CN",frontmatter:{summary:'\u9644\u5F55:\u6D41\u5F0F IO " Java 7 \u5F15\u5165\u4E86\u4E00\u79CD\u7B80\u5355\u660E\u4E86\u7684\u65B9\u5F0F\u6765\u8BFB\u5199\u6587\u4EF6\u548C\u64CD\u4F5C\u76EE\u5F55\u3002\u5927\u591A\u60C5\u51B5\u4E0B\uFF0C\u6587\u4EF6\u8FD9\u4E00\u7AE0\u6240\u4ECB\u7ECD\u7684\u90A3\u4E9B\u5E93\u548C\u6280\u672F\u5C31\u8DB3\u591F\u4F60\u7528\u4E86\u3002\u4F46\u662F\uFF0C\u5982\u679C\u4F60\u5FC5\u987B\u9762\u5BF9\u4E00\u4E9B\u7279\u6B8A\u7684\u9700\u6C42\u548C\u6BD4\u8F83\u5E95\u5C42\u7684\u64CD\u4F5C\uFF0C\u6216\u8005\u5904\u7406\u4E00\u4E9B\u8001\u7248\u672C\u7684\u4EE3\u7801\uFF0C\u90A3\u4E48\u4F60\u5C31\u5FC5\u987B\u4E86\u89E3\u672C\u9644\u5F55\u4E2D\u7684\u5185\u5BB9\u3002" \u5BF9\u4E8E\u7F16\u7A0B\u8BED\u8A00\u7684\u8BBE\u8BA1\u8005\u6765\u8BF4\uFF0C\u5B9E\u73B0\u826F\u597D\u7684\u8F93\u5165/\u8F93\u51FA\uFF08I/O\uFF09\u7CFB\u7EDF\u662F\u4E00\u9879\u6BD4\u8F83\u8270\u96BE\u7684\u4EFB\u52A1\uFF0C\u4E0D\u540C\u5B9E\u73B0\u65B9\u6848\u7684\u6570\u91CF\u5C31\u53EF\u4EE5\u8BC1',head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/language/java/on-java-8/Appendix-IO-Streams.html"}],["meta",{property:"og:site_name",content:"DTF's blog"}],["meta",{property:"og:title",content:"\u9644\u5F55:\u6D41\u5F0F IO"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-05-07T12:20:31.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2022-05-07T12:20:31.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u8F93\u5165\u6D41\u7C7B\u578B",slug:"\u8F93\u5165\u6D41\u7C7B\u578B",children:[]},{level:2,title:"\u8F93\u51FA\u6D41\u7C7B\u578B",slug:"\u8F93\u51FA\u6D41\u7C7B\u578B",children:[]},{level:2,title:"\u6DFB\u52A0\u5C5E\u6027\u548C\u6709\u7528\u7684\u63A5\u53E3",slug:"\u6DFB\u52A0\u5C5E\u6027\u548C\u6709\u7528\u7684\u63A5\u53E3",children:[{level:3,title:"\u901A\u8FC7 FilterInputStream \u4ECE InputStream \u8BFB\u53D6",slug:"\u901A\u8FC7-filterinputstream-\u4ECE-inputstream-\u8BFB\u53D6",children:[]},{level:3,title:"\u901A\u8FC7 FilterOutputStream \u5411 OutputStream \u5199\u5165",slug:"\u901A\u8FC7-filteroutputstream-\u5411-outputstream-\u5199\u5165",children:[]}]},{level:2,title:"Reader \u548C Writer",slug:"reader-\u548C-writer",children:[{level:3,title:"\u6570\u636E\u7684\u6765\u6E90\u548C\u53BB\u5904",slug:"\u6570\u636E\u7684\u6765\u6E90\u548C\u53BB\u5904",children:[]},{level:3,title:"\u66F4\u6539\u6D41\u7684\u884C\u4E3A",slug:"\u66F4\u6539\u6D41\u7684\u884C\u4E3A",children:[]},{level:3,title:"\u672A\u53D1\u751F\u6539\u53D8\u7684\u7C7B",slug:"\u672A\u53D1\u751F\u6539\u53D8\u7684\u7C7B",children:[]}]},{level:2,title:"RandomAccessFile \u7C7B",slug:"randomaccessfile-\u7C7B",children:[]},{level:2,title:"IO \u6D41\u5178\u578B\u7528\u9014",slug:"io-\u6D41\u5178\u578B\u7528\u9014",children:[{level:3,title:"\u7F13\u51B2\u8F93\u5165\u6587\u4EF6",slug:"\u7F13\u51B2\u8F93\u5165\u6587\u4EF6",children:[]},{level:3,title:"\u4ECE\u5185\u5B58\u8F93\u5165",slug:"\u4ECE\u5185\u5B58\u8F93\u5165",children:[]},{level:3,title:"\u683C\u5F0F\u5316\u5185\u5B58\u8F93\u5165",slug:"\u683C\u5F0F\u5316\u5185\u5B58\u8F93\u5165",children:[]},{level:3,title:"\u57FA\u672C\u6587\u4EF6\u7684\u8F93\u51FA",slug:"\u57FA\u672C\u6587\u4EF6\u7684\u8F93\u51FA",children:[]},{level:3,title:"\u6587\u672C\u6587\u4EF6\u8F93\u51FA\u5FEB\u6377\u65B9\u5F0F",slug:"\u6587\u672C\u6587\u4EF6\u8F93\u51FA\u5FEB\u6377\u65B9\u5F0F",children:[]},{level:3,title:"\u5B58\u50A8\u548C\u6062\u590D\u6570\u636E",slug:"\u5B58\u50A8\u548C\u6062\u590D\u6570\u636E",children:[]},{level:3,title:"\u8BFB\u5199\u968F\u673A\u8BBF\u95EE\u6587\u4EF6",slug:"\u8BFB\u5199\u968F\u673A\u8BBF\u95EE\u6587\u4EF6",children:[]}]},{level:2,title:"\u672C\u7AE0\u5C0F\u7ED3",slug:"\u672C\u7AE0\u5C0F\u7ED3",children:[]}],git:{createdTime:1651926031e3,updatedTime:1651926031e3,contributors:[{name:"DTF",email:"imdtf@qq.com",commits:1}]},readingTime:{minutes:28.21,words:8462},filePathRelative:"language/java/on-java-8/Appendix-IO-Streams.md"};export{e as data};
