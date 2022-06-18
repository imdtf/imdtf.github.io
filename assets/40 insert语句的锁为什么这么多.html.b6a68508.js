import{_ as i}from"./09c1073f99cf71d2fb162a716b5fa577.e05ec512.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,a as l,b as e,d as t,F as o,c as a,e as s,o as c}from"./app.597ce2f2.js";var d="/assets/cdc3c75524018404710ada288e0e07d1.f32583be.jpg",m="/assets/33e513ee55d5700dc67f32bcdafb9386.2a3da011.png",b="/assets/3efdf8256309a44e23d93089459eda74.40427597.png",_="/assets/6f90b04c09188bff11dae6e788abb918.9745ec47.png",u="/assets/d7270781ee3f216325b73bd53999b82a.fb69c430.png",g="/assets/489281d8029e8f60979cb7c4494010d7.bc10c612.png",h="/assets/83fb2d877932941b230d6b5be8cca6ca.da0f478e.png",x="/assets/63658eb26e7a03b49f123fceed94cd2d.1c6c0a31.png",f="/assets/3e0bf1a1241931c14360e73fd10032b8.92bd5d0f.jpg",v="/assets/5f384d6671c87a60e1ec7e490447d702.4d50f46d.png";const k={},y=a('<h1 id="_40-insert-\u8BED\u53E5\u7684\u9501\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u591A" tabindex="-1"><a class="header-anchor" href="#_40-insert-\u8BED\u53E5\u7684\u9501\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u591A" aria-hidden="true">#</a> 40 | insert \u8BED\u53E5\u7684\u9501\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u591A\uFF1F</h1><p>2019-02-13 \u6797\u6653\u658C</p><p><img src="'+d+`" alt="img" loading="lazy"></p><p>\u5728\u4E0A\u4E00\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u63D0\u5230 MySQL \u5BF9\u81EA\u589E\u4E3B\u952E\u9501\u505A\u4E86\u4F18\u5316\uFF0C\u5C3D\u91CF\u5728\u7533\u8BF7\u5230\u81EA\u589E id \u4EE5\u540E\uFF0C\u5C31\u91CA\u653E\u81EA\u589E\u9501\u3002</p><p>\u56E0\u6B64\uFF0Cinsert \u8BED\u53E5\u662F\u4E00\u4E2A\u5F88\u8F7B\u91CF\u7684\u64CD\u4F5C\u3002\u4E0D\u8FC7\uFF0C\u8FD9\u4E2A\u7ED3\u8BBA\u5BF9\u4E8E\u201C\u666E\u901A\u7684 insert \u8BED\u53E5\u201D\u624D\u6709\u6548\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD8\u6709\u4E9B insert \u8BED\u53E5\u662F\u5C5E\u4E8E\u201C\u7279\u6B8A\u60C5\u51B5\u201D\u7684\uFF0C\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u9700\u8981\u7ED9\u5176\u4ED6\u8D44\u6E90\u52A0\u9501\uFF0C\u6216\u8005\u65E0\u6CD5\u5728\u7533\u8BF7\u5230\u81EA\u589E id \u4EE5\u540E\u5C31\u7ACB\u9A6C\u91CA\u653E\u81EA\u589E\u9501\u3002</p><p>\u90A3\u4E48\uFF0C\u4ECA\u5929\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u6211\u4EEC\u5C31\u4E00\u8D77\u6765\u804A\u804A\u8FD9\u4E2A\u8BDD\u9898\u3002</p><h1 id="insert-select-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#insert-select-\u8BED\u53E5" aria-hidden="true">#</a> insert \u2026 select \u8BED\u53E5</h1><p>\u6211\u4EEC\u5148\u4ECE\u6628\u5929\u7684\u95EE\u9898\u8BF4\u8D77\u5427\u3002\u8868 t \u548C t2 \u7684\u8868\u7ED3\u6784\u3001\u521D\u59CB\u5316\u6570\u636E\u8BED\u53E5\u5982\u4E0B\uFF0C\u4ECA\u5929\u7684\u4F8B\u5B50\u6211\u4EEC\u8FD8\u662F\u9488\u5BF9\u8FD9\u4E24\u4E2A\u8868\u5C55\u5F00\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CREATE TABLE \`t\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`c\` int(11) DEFAULT NULL,
  \`d\` int(11) DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  UNIQUE KEY \`c\` (\`c\`)
) ENGINE=InnoDB;

insert into t values(null, 1,1);
insert into t values(null, 2,2);
insert into t values(null, 3,3);
insert into t values(null, 4,4);

create table t2 like t
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u4E00\u8D77\u6765\u770B\u770B\u4E3A\u4EC0\u4E48\u5728\u53EF\u91CD\u590D\u8BFB\u9694\u79BB\u7EA7\u522B\u4E0B\uFF0Cbinlog_format=statement \u65F6\u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>insert into t2(c,d) select c,d from t;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4E2A\u8BED\u53E5\u65F6\uFF0C\u9700\u8981\u5BF9\u8868 t \u7684\u6240\u6709\u884C\u548C\u95F4\u9699\u52A0\u9501\u5462\uFF1F</p><p>\u5176\u5B9E\uFF0C\u8FD9\u4E2A\u95EE\u9898\u6211\u4EEC\u9700\u8981\u8003\u8651\u7684\u8FD8\u662F\u65E5\u5FD7\u548C\u6570\u636E\u7684\u4E00\u81F4\u6027\u3002\u6211\u4EEC\u770B\u4E0B\u8FD9\u4E2A\u6267\u884C\u5E8F\u5217\uFF1A</p><p><img src="`+m+`" alt="img" loading="lazy"></p><p>\u56FE 1 \u5E76\u53D1 insert \u573A\u666F</p><p>\u5B9E\u9645\u7684\u6267\u884C\u6548\u679C\u662F\uFF0C\u5982\u679C session B \u5148\u6267\u884C\uFF0C\u7531\u4E8E\u8FD9\u4E2A\u8BED\u53E5\u5BF9\u8868 t \u4E3B\u952E\u7D22\u5F15\u52A0\u4E86(-\u221E,1]\u8FD9\u4E2A next-key lock\uFF0C\u4F1A\u5728\u8BED\u53E5\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u624D\u5141\u8BB8 session A \u7684 insert \u8BED\u53E5\u6267\u884C\u3002</p><p>\u4F46\u5982\u679C\u6CA1\u6709\u9501\u7684\u8BDD\uFF0C\u5C31\u53EF\u80FD\u51FA\u73B0 session B \u7684 insert \u8BED\u53E5\u5148\u6267\u884C\uFF0C\u4F46\u662F\u540E\u5199\u5165 binlog \u7684\u60C5\u51B5\u3002\u4E8E\u662F\uFF0C\u5728 binlog_format=statement \u7684\u60C5\u51B5\u4E0B\uFF0Cbinlog \u91CC\u9762\u5C31\u8BB0\u5F55\u4E86\u8FD9\u6837\u7684\u8BED\u53E5\u5E8F\u5217\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>insert into t values(-1,-1,-1);
insert into t2(c,d) select c,d from t;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u4E2A\u8BED\u53E5\u5230\u4E86\u5907\u5E93\u6267\u884C\uFF0C\u5C31\u4F1A\u628A id=-1 \u8FD9\u4E00\u884C\u4E5F\u5199\u5230\u8868 t2 \u4E2D\uFF0C\u51FA\u73B0\u4E3B\u5907\u4E0D\u4E00\u81F4\u3002</p><h1 id="insert-\u5FAA\u73AF\u5199\u5165" tabindex="-1"><a class="header-anchor" href="#insert-\u5FAA\u73AF\u5199\u5165" aria-hidden="true">#</a> insert \u5FAA\u73AF\u5199\u5165</h1><p>\u5F53\u7136\u4E86\uFF0C\u6267\u884C insert \u2026 select \u7684\u65F6\u5019\uFF0C\u5BF9\u76EE\u6807\u8868\u4E5F\u4E0D\u662F\u9501\u5168\u8868\uFF0C\u800C\u662F\u53EA\u9501\u4F4F\u9700\u8981\u8BBF\u95EE\u7684\u8D44\u6E90\u3002</p><p>\u5982\u679C\u73B0\u5728\u6709\u8FD9\u4E48\u4E00\u4E2A\u9700\u6C42\uFF1A\u8981\u5F80\u8868 t2 \u4E2D\u63D2\u5165\u4E00\u884C\u6570\u636E\uFF0C\u8FD9\u4E00\u884C\u7684 c \u503C\u662F\u8868 t \u4E2D c \u503C\u7684\u6700\u5927\u503C\u52A0 1\u3002</p><p>\u6B64\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u5199\u8FD9\u6761 SQL \u8BED\u53E5 \uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>insert into t2(c,d)  (select c+1, d from t force index(c) order by c desc limit 1);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4E2A\u8BED\u53E5\u7684\u52A0\u9501\u8303\u56F4\uFF0C\u5C31\u662F\u8868 t \u7D22\u5F15 c \u4E0A\u7684(3,4]\u548C(4,supremum]\u8FD9\u4E24\u4E2A next-key lock\uFF0C\u4EE5\u53CA\u4E3B\u952E\u7D22\u5F15\u4E0A id=4 \u8FD9\u4E00\u884C\u3002</p><p>\u5B83\u7684\u6267\u884C\u6D41\u7A0B\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u4ECE\u8868 t \u4E2D\u6309\u7167\u7D22\u5F15 c \u5012\u5E8F\uFF0C\u626B\u63CF\u7B2C\u4E00\u884C\uFF0C\u62FF\u5230\u7ED3\u679C\u5199\u5165\u5230\u8868 t2 \u4E2D\u3002</p><p>\u56E0\u6B64\u6574\u6761\u8BED\u53E5\u7684\u626B\u63CF\u884C\u6570\u662F 1\u3002</p><p>\u8FD9\u4E2A\u8BED\u53E5\u6267\u884C\u7684\u6162\u67E5\u8BE2\u65E5\u5FD7\uFF08slow log\uFF09\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="`+b+`" alt="img" loading="lazy"></p><p>\u56FE 2 \u6162\u67E5\u8BE2\u65E5\u5FD7--\u5C06\u6570\u636E\u63D2\u5165\u8868 t2</p><p>\u901A\u8FC7\u8FD9\u4E2A\u6162\u67E5\u8BE2\u65E5\u5FD7\uFF0C\u6211\u4EEC\u770B\u5230 Rows_examined=1\uFF0C\u6B63\u597D\u9A8C\u8BC1\u4E86\u6267\u884C\u8FD9\u6761\u8BED\u53E5\u7684\u626B\u63CF\u884C\u6570\u4E3A 1\u3002</p><p>\u90A3\u4E48\uFF0C\u5982\u679C\u6211\u4EEC\u662F\u8981\u628A\u8FD9\u6837\u7684\u4E00\u884C\u6570\u636E\u63D2\u5165\u5230\u8868 t \u4E2D\u7684\u8BDD\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>insert into t(c,d)  (select c+1, d from t force index(c) order by c desc limit 1);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8BED\u53E5\u7684\u6267\u884C\u6D41\u7A0B\u662F\u600E\u6837\u7684\uFF1F\u626B\u63CF\u884C\u6570\u53C8\u662F\u591A\u5C11\u5462\uFF1F</p><p>\u8FD9\u65F6\u5019\uFF0C\u6211\u4EEC\u518D\u770B\u6162\u67E5\u8BE2\u65E5\u5FD7\u5C31\u4F1A\u53D1\u73B0\u4E0D\u5BF9\u4E86\u3002</p><p><img src="`+_+'" alt="img" loading="lazy"></p><p>\u56FE 3 \u6162\u67E5\u8BE2\u65E5\u5FD7--\u5C06\u6570\u636E\u63D2\u5165\u8868 t</p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u65F6\u5019\u7684 Rows_examined \u7684\u503C\u662F 5\u3002</p><p>\u6211\u5728\u524D\u9762\u7684\u6587\u7AE0\u4E2D\u63D0\u5230\u8FC7\uFF0C\u5E0C\u671B\u4F60\u90FD\u80FD\u591F\u5B66\u4F1A\u7528 explain \u7684\u7ED3\u679C\u6765\u201C\u8111\u8865\u201D\u6574\u6761\u8BED\u53E5\u7684\u6267\u884C\u8FC7\u7A0B\u3002\u4ECA\u5929\uFF0C\u6211\u4EEC\u5C31\u6765\u4E00\u8D77\u8BD5\u8BD5\u3002</p><p>\u5982\u56FE 4 \u6240\u793A\u5C31\u662F\u8FD9\u6761\u8BED\u53E5\u7684 explain \u7ED3\u679C\u3002</p><p><img src="'+u+'" alt="img" loading="lazy"></p><p>\u56FE 4 explain \u7ED3\u679C</p><p>\u4ECE Extra \u5B57\u6BB5\u53EF\u4EE5\u770B\u5230\u201CUsing temporary\u201D\u5B57\u6837\uFF0C\u8868\u793A\u8FD9\u4E2A\u8BED\u53E5\u7528\u5230\u4E86\u4E34\u65F6\u8868\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u9700\u8981\u628A\u8868 t \u7684\u5185\u5BB9\u8BFB\u51FA\u6765\uFF0C\u5199\u5165\u4E34\u65F6\u8868\u3002</p><p>\u56FE\u4E2D rows \u663E\u793A\u7684\u662F 1\uFF0C\u6211\u4EEC\u4E0D\u59A8\u5148\u5BF9\u8FD9\u4E2A\u8BED\u53E5\u7684\u6267\u884C\u6D41\u7A0B\u505A\u4E00\u4E2A\u731C\u6D4B\uFF1A\u5982\u679C\u8BF4\u662F\u628A\u5B50\u67E5\u8BE2\u7684\u7ED3\u679C\u8BFB\u51FA\u6765\uFF08\u626B\u63CF 1 \u884C\uFF09\uFF0C\u5199\u5165\u4E34\u65F6\u8868\uFF0C\u7136\u540E\u518D\u4ECE\u4E34\u65F6\u8868\u8BFB\u51FA\u6765\uFF08\u626B\u63CF 1 \u884C\uFF09\uFF0C\u5199\u56DE\u8868 t \u4E2D\u3002\u90A3\u4E48\uFF0C\u8FD9\u4E2A\u8BED\u53E5\u7684\u626B\u63CF\u884C\u6570\u5C31\u5E94\u8BE5\u662F 2\uFF0C\u800C\u4E0D\u662F 5\u3002</p><p>\u6240\u4EE5\uFF0C\u8FD9\u4E2A\u731C\u6D4B\u4E0D\u5BF9\u3002\u5B9E\u9645\u4E0A\uFF0CExplain \u7ED3\u679C\u91CC\u7684 rows=1 \u662F\u56E0\u4E3A\u53D7\u5230\u4E86 limit 1 \u7684\u5F71\u54CD\u3002</p><p>\u4ECE\u53E6\u4E00\u4E2A\u89D2\u5EA6\u8003\u8651\u7684\u8BDD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u770B InnoDB \u626B\u63CF\u4E86\u591A\u5C11\u884C\u3002\u5982\u56FE 5 \u6240\u793A\uFF0C\u662F\u5728\u6267\u884C\u8FD9\u4E2A\u8BED\u53E5\u524D\u540E\u67E5\u770B Innodb_rows_read \u7684\u7ED3\u679C\u3002</p><p><img src="'+g+`" alt="img" loading="lazy"></p><p>\u56FE 5 \u67E5\u770B Innodb_rows_read \u53D8\u5316</p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u4E2A\u8BED\u53E5\u6267\u884C\u524D\u540E\uFF0CInnodb_rows_read \u7684\u503C\u589E\u52A0\u4E86 4\u3002\u56E0\u4E3A\u9ED8\u8BA4\u4E34\u65F6\u8868\u662F\u4F7F\u7528 Memory \u5F15\u64CE\u7684\uFF0C\u6240\u4EE5\u8FD9 4 \u884C\u67E5\u7684\u90FD\u662F\u8868 t\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5BF9\u8868 t \u505A\u4E86\u5168\u8868\u626B\u63CF\u3002</p><p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u628A\u6574\u4E2A\u6267\u884C\u8FC7\u7A0B\u7406\u6E05\u695A\u4E86\uFF1A</p><ol><li>\u521B\u5EFA\u4E34\u65F6\u8868\uFF0C\u8868\u91CC\u6709\u4E24\u4E2A\u5B57\u6BB5 c \u548C d\u3002</li><li>\u6309\u7167\u7D22\u5F15 c \u626B\u63CF\u8868 t\uFF0C\u4F9D\u6B21\u53D6 c=4\u30013\u30012\u30011\uFF0C\u7136\u540E\u56DE\u8868\uFF0C\u8BFB\u5230 c \u548C d \u7684\u503C\u5199\u5165\u4E34\u65F6\u8868\u3002\u8FD9\u65F6\uFF0CRows_examined=4\u3002</li><li>\u7531\u4E8E\u8BED\u4E49\u91CC\u9762\u6709 limit 1\uFF0C\u6240\u4EE5\u53EA\u53D6\u4E86\u4E34\u65F6\u8868\u7684\u7B2C\u4E00\u884C\uFF0C\u518D\u63D2\u5165\u5230\u8868 t \u4E2D\u3002\u8FD9\u65F6\uFF0CRows_examined \u7684\u503C\u52A0 1\uFF0C\u53D8\u6210\u4E86 5\u3002</li></ol><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD9\u4E2A\u8BED\u53E5\u4F1A\u5BFC\u81F4\u5728\u8868 t \u4E0A\u505A\u5168\u8868\u626B\u63CF\uFF0C\u5E76\u4E14\u4F1A\u7ED9\u7D22\u5F15 c \u4E0A\u7684\u6240\u6709\u95F4\u9699\u90FD\u52A0\u4E0A\u5171\u4EAB\u7684 next-key lock\u3002\u6240\u4EE5\uFF0C\u8FD9\u4E2A\u8BED\u53E5\u6267\u884C\u671F\u95F4\uFF0C\u5176\u4ED6\u4E8B\u52A1\u4E0D\u80FD\u5728\u8FD9\u4E2A\u8868\u4E0A\u63D2\u5165\u6570\u636E\u3002</p><p>\u81F3\u4E8E\u8FD9\u4E2A\u8BED\u53E5\u7684\u6267\u884C\u4E3A\u4EC0\u4E48\u9700\u8981\u4E34\u65F6\u8868\uFF0C\u539F\u56E0\u662F\u8FD9\u7C7B\u4E00\u8FB9\u904D\u5386\u6570\u636E\uFF0C\u4E00\u8FB9\u66F4\u65B0\u6570\u636E\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u8BFB\u51FA\u6765\u7684\u6570\u636E\u76F4\u63A5\u5199\u56DE\u539F\u8868\uFF0C\u5C31\u53EF\u80FD\u5728\u904D\u5386\u8FC7\u7A0B\u4E2D\uFF0C\u8BFB\u5230\u521A\u521A\u63D2\u5165\u7684\u8BB0\u5F55\uFF0C\u65B0\u63D2\u5165\u7684\u8BB0\u5F55\u5982\u679C\u53C2\u4E0E\u8BA1\u7B97\u903B\u8F91\uFF0C\u5C31\u8DDF\u8BED\u4E49\u4E0D\u7B26\u3002</p><p>\u7531\u4E8E\u5B9E\u73B0\u4E0A\u8FD9\u4E2A\u8BED\u53E5\u6CA1\u6709\u5728\u5B50\u67E5\u8BE2\u4E2D\u5C31\u76F4\u63A5\u4F7F\u7528 limit 1\uFF0C\u4ECE\u800C\u5BFC\u81F4\u4E86\u8FD9\u4E2A\u8BED\u53E5\u7684\u6267\u884C\u9700\u8981\u904D\u5386\u6574\u4E2A\u8868 t\u3002\u5B83\u7684\u4F18\u5316\u65B9\u6CD5\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u5C31\u662F\u7528\u524D\u9762\u4ECB\u7ECD\u7684\u65B9\u6CD5\uFF0C\u5148 insert into \u5230\u4E34\u65F6\u8868 temp_t\uFF0C\u8FD9\u6837\u5C31\u53EA\u9700\u8981\u626B\u63CF\u4E00\u884C\uFF1B\u7136\u540E\u518D\u4ECE\u8868 temp_t \u91CC\u9762\u53D6\u51FA\u8FD9\u884C\u6570\u636E\u63D2\u5165\u8868 t1\u3002</p><p>\u5F53\u7136\uFF0C\u7531\u4E8E\u8FD9\u4E2A\u8BED\u53E5\u6D89\u53CA\u7684\u6570\u636E\u91CF\u5F88\u5C0F\uFF0C\u4F60\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u5185\u5B58\u4E34\u65F6\u8868\u6765\u505A\u8FD9\u4E2A\u4F18\u5316\u3002\u4F7F\u7528\u5185\u5B58\u4E34\u65F6\u8868\u4F18\u5316\u65F6\uFF0C\u8BED\u53E5\u5E8F\u5217\u7684\u5199\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>create temporary table temp_t(c int,d int) engine=memory;
insert into temp_t  (select c+1, d from t force index(c) order by c desc limit 1);
insert into t select * from temp_t;
drop table temp_t;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h1 id="insert-\u552F\u4E00\u952E\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#insert-\u552F\u4E00\u952E\u51B2\u7A81" aria-hidden="true">#</a> insert \u552F\u4E00\u952E\u51B2\u7A81</h1><p>\u524D\u9762\u7684\u4E24\u4E2A\u4F8B\u5B50\u662F\u4F7F\u7528 insert \u2026 select \u7684\u60C5\u51B5\uFF0C\u63A5\u4E0B\u6765\u6211\u8981\u4ECB\u7ECD\u7684\u8FD9\u4E2A\u4F8B\u5B50\u5C31\u662F\u6700\u5E38\u89C1\u7684 insert \u8BED\u53E5\u51FA\u73B0\u552F\u4E00\u952E\u51B2\u7A81\u7684\u60C5\u51B5\u3002</p><p>\u5BF9\u4E8E\u6709\u552F\u4E00\u952E\u7684\u8868\uFF0C\u63D2\u5165\u6570\u636E\u65F6\u51FA\u73B0\u552F\u4E00\u952E\u51B2\u7A81\u4E5F\u662F\u5E38\u89C1\u7684\u60C5\u51B5\u4E86\u3002\u6211\u5148\u7ED9\u4F60\u4E3E\u4E00\u4E2A\u7B80\u5355\u7684\u552F\u4E00\u952E\u51B2\u7A81\u7684\u4F8B\u5B50\u3002</p><p><img src="`+h+'" alt="img" loading="lazy"></p><p>\u56FE 6 \u552F\u4E00\u952E\u51B2\u7A81\u52A0\u9501</p><p>\u8FD9\u4E2A\u4F8B\u5B50\u4E5F\u662F\u5728\u53EF\u91CD\u590D\u8BFB\uFF08repeatable read\uFF09\u9694\u79BB\u7EA7\u522B\u4E0B\u6267\u884C\u7684\u3002\u53EF\u4EE5\u770B\u5230\uFF0Csession B \u8981\u6267\u884C\u7684 insert \u8BED\u53E5\u8FDB\u5165\u4E86\u9501\u7B49\u5F85\u72B6\u6001\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0Csession A \u6267\u884C\u7684 insert \u8BED\u53E5\uFF0C\u53D1\u751F\u552F\u4E00\u952E\u51B2\u7A81\u7684\u65F6\u5019\uFF0C\u5E76\u4E0D\u53EA\u662F\u7B80\u5355\u5730\u62A5\u9519\u8FD4\u56DE\uFF0C\u8FD8\u5728\u51B2\u7A81\u7684\u7D22\u5F15\u4E0A\u52A0\u4E86\u9501\u3002\u6211\u4EEC\u524D\u9762\u8BF4\u8FC7\uFF0C\u4E00\u4E2A next-key lock \u5C31\u662F\u7531\u5B83\u53F3\u8FB9\u754C\u7684\u503C\u5B9A\u4E49\u7684\u3002\u8FD9\u65F6\u5019\uFF0Csession A \u6301\u6709\u7D22\u5F15 c \u4E0A\u7684(5,10]\u5171\u4EAB next-key lock\uFF08\u8BFB\u9501\uFF09\u3002</p><p>\u81F3\u4E8E\u4E3A\u4EC0\u4E48\u8981\u52A0\u8FD9\u4E2A\u8BFB\u9501\uFF0C\u5176\u5B9E\u6211\u4E5F\u6CA1\u6709\u627E\u5230\u5408\u7406\u7684\u89E3\u91CA\u3002\u4ECE\u4F5C\u7528\u4E0A\u6765\u770B\uFF0C\u8FD9\u6837\u505A\u53EF\u4EE5\u907F\u514D\u8FD9\u4E00\u884C\u88AB\u522B\u7684\u4E8B\u52A1\u5220\u6389\u3002</p>',64),E=s("\u8FD9\u91CC"),L={href:"https://dev.mysql.com/doc/refman/8.0/en/innodb-locks-set.html",target:"_blank",rel:"noopener noreferrer"},N=s("\u5B98\u65B9\u6587\u6863"),A=s("\u6709\u4E00\u4E2A\u63CF\u8FF0\u9519\u8BEF\uFF0C\u8BA4\u4E3A\u5982\u679C\u51B2\u7A81\u7684\u662F\u4E3B\u952E\u7D22\u5F15\uFF0C\u5C31\u52A0\u8BB0\u5F55\u9501\uFF0C\u552F\u4E00\u7D22\u5F15\u624D\u52A0 next-key lock\u3002\u4F46\u5B9E\u9645\u4E0A\uFF0C\u8FD9\u4E24\u7C7B\u7D22\u5F15\u51B2\u7A81\u52A0\u7684\u90FD\u662F next-key lock\u3002"),w=s("\u5907\u6CE8\uFF1A\u8FD9\u4E2A bug\uFF0C\u662F\u6211\u5728\u5199\u8FD9\u7BC7\u6587\u7AE0\u67E5\u9605\u6587\u6863\u65F6\u53D1\u73B0\u7684\uFF0C\u5DF2\u7ECF"),z={href:"https://bugs.mysql.com/bug.php?id=93806",target:"_blank",rel:"noopener noreferrer"},B=s("\u53D1\u7ED9\u5B98\u65B9"),I=s("\u5E76\u88AB verified \u4E86\u3002"),T=e("p",null,"\u6709\u540C\u5B66\u5728\u524D\u9762\u6587\u7AE0\u7684\u8BC4\u8BBA\u533A\u95EE\u5230\uFF0C\u5728\u6709\u591A\u4E2A\u552F\u4E00\u7D22\u5F15\u7684\u8868\u4E2D\u5E76\u53D1\u63D2\u5165\u6570\u636E\u65F6\uFF0C\u4F1A\u51FA\u73B0\u6B7B\u9501\u3002\u4F46\u662F\uFF0C\u7531\u4E8E\u4ED6\u6CA1\u6709\u63D0\u4F9B\u590D\u73B0\u65B9\u6CD5\u6216\u8005\u73B0\u573A\uFF0C\u6211\u4E5F\u65E0\u6CD5\u505A\u5206\u6790\u3002\u6240\u4EE5\uFF0C\u6211\u5EFA\u8BAE\u4F60\u5728\u8BC4\u8BBA\u533A\u53D1\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u5C3D\u91CF\u540C\u65F6\u9644\u4E0A\u590D\u73B0\u65B9\u6CD5\uFF0C\u6216\u8005\u73B0\u573A\u4FE1\u606F\uFF0C\u8FD9\u6837\u6211\u624D\u597D\u548C\u4F60\u4E00\u8D77\u5206\u6790\u95EE\u9898\u3002",-1),U=e("p",null,"\u8FD9\u91CC\uFF0C\u6211\u5C31\u5148\u548C\u4F60\u5206\u4EAB\u4E00\u4E2A\u7ECF\u5178\u7684\u6B7B\u9501\u573A\u666F\uFF0C\u5982\u679C\u4F60\u8FD8\u9047\u5230\u8FC7\u5176\u4ED6\u552F\u4E00\u952E\u51B2\u7A81\u5BFC\u81F4\u7684\u6B7B\u9501\u573A\u666F\uFF0C\u4E5F\u6B22\u8FCE\u7ED9\u6211\u7559\u8A00\u3002",-1),R=e("p",null,[e("img",{src:x,alt:"img",loading:"lazy"})],-1),C=e("p",null,"\u56FE 7 \u552F\u4E00\u952E\u51B2\u7A81--\u6B7B\u9501",-1),q=e("p",null,"\u5728 session A \u6267\u884C rollback \u8BED\u53E5\u56DE\u6EDA\u7684\u65F6\u5019\uFF0Csession C \u51E0\u4E4E\u540C\u65F6\u53D1\u73B0\u6B7B\u9501\u5E76\u8FD4\u56DE\u3002",-1),M=e("p",null,"\u8FD9\u4E2A\u6B7B\u9501\u4EA7\u751F\u7684\u903B\u8F91\u662F\u8FD9\u6837\u7684\uFF1A",-1),S=s("\u5728 T1 \u65F6\u523B\uFF0C\u542F\u52A8 session A\uFF0C\u5E76\u6267\u884C insert \u8BED\u53E5\uFF0C\u6B64\u65F6\u5728\u7D22\u5F15 c \u7684 c=5 \u4E0A\u52A0\u4E86\u8BB0\u5F55\u9501\u3002\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u7D22\u5F15\u662F\u552F\u4E00\u7D22\u5F15\uFF0C\u56E0\u6B64\u9000\u5316\u4E3A\u8BB0\u5F55\u9501\uFF08\u5982\u679C\u4F60\u7684\u5370\u8C61\u6A21\u7CCA\u4E86\uFF0C\u53EF\u4EE5\u56DE\u987E\u4E0B"),D={href:"https://time.geekbang.org/column/article/75659",target:"_blank",rel:"noopener noreferrer"},F=s("\u7B2C 21 \u7BC7\u6587\u7AE0"),Q=s("\u4ECB\u7ECD\u7684\u52A0\u9501\u89C4\u5219\uFF09\u3002"),V=e("li",null,"\u5728 T2 \u65F6\u523B\uFF0Csession B \u8981\u6267\u884C\u76F8\u540C\u7684 insert \u8BED\u53E5\uFF0C\u53D1\u73B0\u4E86\u552F\u4E00\u952E\u51B2\u7A81\uFF0C\u52A0\u4E0A\u8BFB\u9501\uFF1B\u540C\u6837\u5730\uFF0Csession C \u4E5F\u5728\u7D22\u5F15 c \u4E0A\uFF0Cc=5 \u8FD9\u4E00\u4E2A\u8BB0\u5F55\u4E0A\uFF0C\u52A0\u4E86\u8BFB\u9501\u3002",-1),Y=e("li",null,"T3 \u65F6\u523B\uFF0Csession A \u56DE\u6EDA\u3002\u8FD9\u65F6\u5019\uFF0Csession B \u548C session C \u90FD\u8BD5\u56FE\u7EE7\u7EED\u6267\u884C\u63D2\u5165\u64CD\u4F5C\uFF0C\u90FD\u8981\u52A0\u4E0A\u5199\u9501\u3002\u4E24\u4E2A session \u90FD\u8981\u7B49\u5F85\u5BF9\u65B9\u7684\u884C\u9501\uFF0C\u6240\u4EE5\u5C31\u51FA\u73B0\u4E86\u6B7B\u9501\u3002",-1),j=a('<p>\u8FD9\u4E2A\u6D41\u7A0B\u7684\u72B6\u6001\u53D8\u5316\u56FE\u5982\u4E0B\u6240\u793A\u3002</p><p><img src="'+f+`" alt="img" loading="lazy"></p><p>\u56FE 8 \u72B6\u6001\u53D8\u5316\u56FE--\u6B7B\u9501</p><h1 id="insert-into-on-duplicate-key-update" tabindex="-1"><a class="header-anchor" href="#insert-into-on-duplicate-key-update" aria-hidden="true">#</a> insert into \u2026 on duplicate key update</h1><p>\u4E0A\u9762\u8FD9\u4E2A\u4F8B\u5B50\u662F\u4E3B\u952E\u51B2\u7A81\u540E\u76F4\u63A5\u62A5\u9519\uFF0C\u5982\u679C\u662F\u6539\u5199\u6210</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>insert into t values(11,10,10) on duplicate key update d=100;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7684\u8BDD\uFF0C\u5C31\u4F1A\u7ED9\u7D22\u5F15 c \u4E0A(5,10] \u52A0\u4E00\u4E2A\u6392\u4ED6\u7684 next-key lock\uFF08\u5199\u9501\uFF09\u3002</p><p><strong>insert into \u2026 on duplicate key update \u8FD9\u4E2A\u8BED\u4E49\u7684\u903B\u8F91\u662F\uFF0C\u63D2\u5165\u4E00\u884C\u6570\u636E\uFF0C\u5982\u679C\u78B0\u5230\u552F\u4E00\u952E\u7EA6\u675F\uFF0C\u5C31\u6267\u884C\u540E\u9762\u7684\u66F4\u65B0\u8BED\u53E5\u3002</strong></p><p>\u6CE8\u610F\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u5217\u8FDD\u53CD\u4E86\u552F\u4E00\u6027\u7EA6\u675F\uFF0C\u5C31\u4F1A\u6309\u7167\u7D22\u5F15\u7684\u987A\u5E8F\uFF0C\u4FEE\u6539\u8DDF\u7B2C\u4E00\u4E2A\u7D22\u5F15\u51B2\u7A81\u7684\u884C\u3002</p><p>\u73B0\u5728\u8868 t \u91CC\u9762\u5DF2\u7ECF\u6709\u4E86(1,1,1)\u548C(2,2,2)\u8FD9\u4E24\u884C\uFF0C\u6211\u4EEC\u518D\u6765\u770B\u770B\u4E0B\u9762\u8FD9\u4E2A\u8BED\u53E5\u6267\u884C\u7684\u6548\u679C\uFF1A</p><p><img src="`+v+'" alt="img" loading="lazy"></p><p>\u56FE 9 \u4E24\u4E2A\u552F\u4E00\u952E\u540C\u65F6\u51B2\u7A81</p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4E3B\u952E id \u662F\u5148\u5224\u65AD\u7684\uFF0CMySQL \u8BA4\u4E3A\u8FD9\u4E2A\u8BED\u53E5\u8DDF id=2 \u8FD9\u4E00\u884C\u51B2\u7A81\uFF0C\u6240\u4EE5\u4FEE\u6539\u7684\u662F id=2 \u7684\u884C\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6267\u884C\u8FD9\u6761\u8BED\u53E5\u7684 affected rows \u8FD4\u56DE\u7684\u662F 2\uFF0C\u5F88\u5BB9\u6613\u9020\u6210\u8BEF\u89E3\u3002\u5B9E\u9645\u4E0A\uFF0C\u771F\u6B63\u66F4\u65B0\u7684\u53EA\u6709\u4E00\u884C\uFF0C\u53EA\u662F\u5728\u4EE3\u7801\u5B9E\u73B0\u4E0A\uFF0Cinsert \u548C update \u90FD\u8BA4\u4E3A\u81EA\u5DF1\u6210\u529F\u4E86\uFF0Cupdate \u8BA1\u6570\u52A0\u4E86 1\uFF0C insert \u8BA1\u6570\u4E5F\u52A0\u4E86 1\u3002</p><h1 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h1><p>\u4ECA\u5929\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u6211\u548C\u4F60\u4ECB\u7ECD\u4E86\u51E0\u79CD\u7279\u6B8A\u60C5\u51B5\u4E0B\u7684 insert \u8BED\u53E5\u3002</p><p>insert \u2026 select \u662F\u5F88\u5E38\u89C1\u7684\u5728\u4E24\u4E2A\u8868\u4E4B\u95F4\u62F7\u8D1D\u6570\u636E\u7684\u65B9\u6CD5\u3002\u4F60\u9700\u8981\u6CE8\u610F\uFF0C\u5728\u53EF\u91CD\u590D\u8BFB\u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u8FD9\u4E2A\u8BED\u53E5\u4F1A\u7ED9 select \u7684\u8868\u91CC\u626B\u63CF\u5230\u7684\u8BB0\u5F55\u548C\u95F4\u9699\u52A0\u8BFB\u9501\u3002</p><p>\u800C\u5982\u679C insert \u548C select \u7684\u5BF9\u8C61\u662F\u540C\u4E00\u4E2A\u8868\uFF0C\u5219\u6709\u53EF\u80FD\u4F1A\u9020\u6210\u5FAA\u73AF\u5199\u5165\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u5F15\u5165\u7528\u6237\u4E34\u65F6\u8868\u6765\u505A\u4F18\u5316\u3002</p><p>insert \u8BED\u53E5\u5982\u679C\u51FA\u73B0\u552F\u4E00\u952E\u51B2\u7A81\uFF0C\u4F1A\u5728\u51B2\u7A81\u7684\u552F\u4E00\u503C\u4E0A\u52A0\u5171\u4EAB\u7684 next-key lock(S \u9501)\u3002\u56E0\u6B64\uFF0C\u78B0\u5230\u7531\u4E8E\u552F\u4E00\u952E\u7EA6\u675F\u5BFC\u81F4\u62A5\u9519\u540E\uFF0C\u8981\u5C3D\u5FEB\u63D0\u4EA4\u6216\u56DE\u6EDA\u4E8B\u52A1\uFF0C\u907F\u514D\u52A0\u9501\u65F6\u95F4\u8FC7\u957F\u3002</p><p>\u6700\u540E\uFF0C\u6211\u7ED9\u4F60\u7559\u4E00\u4E2A\u95EE\u9898\u5427\u3002</p><p>\u4F60\u5E73\u65F6\u5728\u4E24\u4E2A\u8868\u4E4B\u95F4\u62F7\u8D1D\u6570\u636E\u7528\u7684\u662F\u4EC0\u4E48\u65B9\u6CD5\uFF0C\u6709\u4EC0\u4E48\u6CE8\u610F\u4E8B\u9879\u5417\uFF1F\u5728\u4F60\u7684\u5E94\u7528\u573A\u666F\u91CC\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u76F8\u8F83\u4E8E\u5176\u4ED6\u65B9\u6CD5\u7684\u4F18\u52BF\u662F\u4EC0\u4E48\u5462\uFF1F</p><p>\u4F60\u53EF\u4EE5\u628A\u4F60\u7684\u7ECF\u9A8C\u548C\u5206\u6790\u5199\u5728\u8BC4\u8BBA\u533A\uFF0C\u6211\u4F1A\u5728\u4E0B\u4E00\u7BC7\u6587\u7AE0\u7684\u672B\u5C3E\u9009\u53D6\u6709\u8DA3\u7684\u8BC4\u8BBA\u6765\u548C\u4F60\u4E00\u8D77\u5206\u6790\u3002\u611F\u8C22\u4F60\u7684\u6536\u542C\uFF0C\u4E5F\u6B22\u8FCE\u4F60\u628A\u8FD9\u7BC7\u6587\u7AE0\u5206\u4EAB\u7ED9\u66F4\u591A\u7684\u670B\u53CB\u4E00\u8D77\u9605\u8BFB\u3002</p><h1 id="\u4E0A\u671F\u95EE\u9898\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u671F\u95EE\u9898\u65F6\u95F4" aria-hidden="true">#</a> \u4E0A\u671F\u95EE\u9898\u65F6\u95F4</h1><p>\u6211\u4EEC\u5DF2\u7ECF\u5728\u6587\u7AE0\u4E2D\u56DE\u7B54\u4E86\u4E0A\u671F\u95EE\u9898\u3002</p><p>\u6709\u540C\u5B66\u63D0\u5230\uFF0C\u5982\u679C\u5728 insert \u2026 select \u6267\u884C\u671F\u95F4\u6709\u5176\u4ED6\u7EBF\u7A0B\u64CD\u4F5C\u539F\u8868\uFF0C\u4F1A\u5BFC\u81F4\u903B\u8F91\u9519\u8BEF\u3002\u5176\u5B9E\uFF0C\u8FD9\u662F\u4E0D\u4F1A\u7684\uFF0C\u5982\u679C\u4E0D\u52A0\u9501\uFF0C\u5C31\u662F\u5FEB\u7167\u8BFB\u3002</p><p>\u4E00\u6761\u8BED\u53E5\u6267\u884C\u671F\u95F4\uFF0C\u5B83\u7684\u4E00\u81F4\u6027\u89C6\u56FE\u662F\u4E0D\u4F1A\u4FEE\u6539\u7684\uFF0C\u6240\u4EE5\u5373\u4F7F\u6709\u5176\u4ED6\u4E8B\u52A1\u4FEE\u6539\u4E86\u539F\u8868\u7684\u6570\u636E\uFF0C\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u8FD9\u6761\u8BED\u53E5\u770B\u5230\u7684\u6570\u636E\u3002</p><p>\u8BC4\u8BBA\u533A\u7559\u8A00\u70B9\u8D5E\u677F\uFF1A</p><blockquote><p>@\u957F\u6770 \u540C\u5B66\u56DE\u7B54\u5F97\u975E\u5E38\u51C6\u786E\u3002</p></blockquote><p><img src="'+i+'" alt="img" loading="lazy"></p>',29);function K(O,G){const n=p("ExternalLinkIcon");return c(),l(o,null,[y,e("p",null,[E,e("a",L,[N,t(n)]),A]),e("blockquote",null,[e("p",null,[w,e("a",z,[B,t(n)]),I])]),T,U,R,C,q,M,e("ol",null,[e("li",null,[S,e("a",D,[F,t(n)]),Q]),V,Y]),j],64)}var J=r(k,[["render",K],["__file","40 insert\u8BED\u53E5\u7684\u9501\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u591A.html.vue"]]);export{J as default};
