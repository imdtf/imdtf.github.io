const e={key:"v-49c96f0d",path:"/language/java/on-java-8/14-Streams.html",title:"\u7B2C\u5341\u56DB\u7AE0 \u6D41\u5F0F\u7F16\u7A0B",lang:"zh-CN",frontmatter:{summary:'\u7B2C\u5341\u56DB\u7AE0 \u6D41\u5F0F\u7F16\u7A0B " \u96C6\u5408\u4F18\u5316\u4E86\u5BF9\u8C61\u7684\u5B58\u50A8\uFF0C\u800C\u6D41\uFF08Streams\uFF09\u5219\u662F\u5173\u4E8E\u4E00\u7EC4\u7EC4\u5BF9\u8C61\u7684\u5904\u7406\u3002" \u6D41\uFF08Streams\uFF09\u662F\u4E0E\u4EFB\u4F55\u7279\u5B9A\u5B58\u50A8\u673A\u5236\u65E0\u5173\u7684\u5143\u7D20\u5E8F\u5217\u2014\u2014\u5B9E\u9645\u4E0A\uFF0C\u6211\u4EEC\u8BF4\u6D41\u662F "\u6CA1\u6709\u5B58\u50A8 "\u7684\u3002 \u53D6\u4EE3\u4E86\u5728\u96C6\u5408\u4E2D\u8FED\u4EE3\u5143\u7D20\u7684\u505A\u6CD5\uFF0C\u4F7F\u7528\u6D41\u5373\u53EF\u4ECE\u7BA1\u9053\u4E2D\u63D0\u53D6\u5143\u7D20\u5E76\u5BF9\u5176\u64CD\u4F5C\u3002\u8FD9\u4E9B\u7BA1\u9053\u901A\u5E38\u88AB\u4E32\u8054\u5728\u4E00\u8D77\u5F62\u6210\u4E00\u6574\u5957\u7684\u7BA1\u7EBF\uFF0C\u6765\u5BF9\u6D41\u8FDB\u884C\u64CD\u4F5C\u3002 \u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u5C06\u5BF9\u8C61\u5B58\u50A8\u5728\u96C6\u5408\u4E2D\u5C31',head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/language/java/on-java-8/14-Streams.html"}],["meta",{property:"og:site_name",content:"DTF's blog"}],["meta",{property:"og:title",content:"\u7B2C\u5341\u56DB\u7AE0 \u6D41\u5F0F\u7F16\u7A0B"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-05-07T12:20:31.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2022-05-07T12:20:31.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u6D41\u652F\u6301",slug:"\u6D41\u652F\u6301",children:[]},{level:2,title:"\u6D41\u521B\u5EFA",slug:"\u6D41\u521B\u5EFA",children:[{level:3,title:"\u968F\u673A\u6570\u6D41",slug:"\u968F\u673A\u6570\u6D41",children:[]},{level:3,title:"int \u7C7B\u578B\u7684\u8303\u56F4",slug:"int-\u7C7B\u578B\u7684\u8303\u56F4",children:[]},{level:3,title:"generate()",slug:"generate",children:[]},{level:3,title:"iterate()",slug:"iterate",children:[]},{level:3,title:"\u6D41\u7684\u5EFA\u9020\u8005\u6A21\u5F0F",slug:"\u6D41\u7684\u5EFA\u9020\u8005\u6A21\u5F0F",children:[]},{level:3,title:"Arrays",slug:"arrays",children:[]},{level:3,title:"\u6B63\u5219\u8868\u8FBE\u5F0F",slug:"\u6B63\u5219\u8868\u8FBE\u5F0F",children:[]}]},{level:2,title:"\u4E2D\u95F4\u64CD\u4F5C",slug:"\u4E2D\u95F4\u64CD\u4F5C",children:[{level:3,title:"\u8DDF\u8E2A\u548C\u8C03\u8BD5",slug:"\u8DDF\u8E2A\u548C\u8C03\u8BD5",children:[]},{level:3,title:"\u6D41\u5143\u7D20\u6392\u5E8F",slug:"\u6D41\u5143\u7D20\u6392\u5E8F",children:[]},{level:3,title:"\u79FB\u9664\u5143\u7D20",slug:"\u79FB\u9664\u5143\u7D20",children:[]},{level:3,title:"\u5E94\u7528\u51FD\u6570\u5230\u5143\u7D20",slug:"\u5E94\u7528\u51FD\u6570\u5230\u5143\u7D20",children:[]},{level:3,title:"\u5728 map() \u4E2D\u7EC4\u5408\u6D41",slug:"\u5728-map-\u4E2D\u7EC4\u5408\u6D41",children:[]}]},{level:2,title:"Optional \u7C7B",slug:"optional-\u7C7B",children:[{level:3,title:"\u4FBF\u5229\u51FD\u6570",slug:"\u4FBF\u5229\u51FD\u6570",children:[]},{level:3,title:"\u521B\u5EFA Optional",slug:"\u521B\u5EFA-optional",children:[]},{level:3,title:"Optional \u5BF9\u8C61\u64CD\u4F5C",slug:"optional-\u5BF9\u8C61\u64CD\u4F5C",children:[]},{level:3,title:"Optional \u6D41",slug:"optional-\u6D41",children:[]}]},{level:2,title:"\u7EC8\u7AEF\u64CD\u4F5C",slug:"\u7EC8\u7AEF\u64CD\u4F5C",children:[{level:3,title:"\u6570\u7EC4",slug:"\u6570\u7EC4",children:[]},{level:3,title:"\u5FAA\u73AF",slug:"\u5FAA\u73AF",children:[]},{level:3,title:"\u96C6\u5408",slug:"\u96C6\u5408",children:[]},{level:3,title:"\u7EC4\u5408",slug:"\u7EC4\u5408",children:[]},{level:3,title:"\u5339\u914D",slug:"\u5339\u914D",children:[]},{level:3,title:"\u67E5\u627E",slug:"\u67E5\u627E",children:[]},{level:3,title:"\u4FE1\u606F",slug:"\u4FE1\u606F",children:[]},{level:3,title:"\u6570\u5B57\u6D41\u4FE1\u606F",slug:"\u6570\u5B57\u6D41\u4FE1\u606F",children:[]}]},{level:2,title:"\u672C\u7AE0\u5C0F\u7ED3",slug:"\u672C\u7AE0\u5C0F\u7ED3",children:[]}],git:{createdTime:1651926031e3,updatedTime:1651926031e3,contributors:[{name:"DTF",email:"imdtf@qq.com",commits:1}]},readingTime:{minutes:43.78,words:13134},filePathRelative:"language/java/on-java-8/14-Streams.md"};export{e as data};
