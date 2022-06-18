import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{c as s}from"./app.597ce2f2.js";const e={},n=s(`<h1 id="git-\u7BC7" tabindex="-1"><a class="header-anchor" href="#git-\u7BC7" aria-hidden="true">#</a> Git \u7BC7</h1><h2 id="_1\u3001git-\u548C-svn\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1\u3001git-\u548C-svn\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> 1\u3001Git \u548C SVN\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h2><table><thead><tr><th>Git</th><th>SVN</th></tr></thead><tbody><tr><td>1. Git \u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u7684\u7248\u672C\u63A7\u5236\u5DE5\u5177</td><td>1. SVN \u662F\u96C6\u4E2D\u7248\u672C\u63A7\u5236\u5DE5\u5177</td></tr><tr><td>2.\u5B83\u5C5E\u4E8E\u7B2C 3 \u4EE3\u7248\u672C\u63A7\u5236\u5DE5\u5177</td><td>2.\u5B83\u5C5E\u4E8E\u7B2C 2 \u4EE3\u7248\u672C\u63A7\u5236\u5DE5\u5177</td></tr><tr><td>3.\u5BA2\u6237\u7AEF\u53EF\u4EE5\u5728\u5176\u672C\u5730\u7CFB\u7EDF\u4E0A\u514B\u9686\u6574\u4E2A\u5B58\u50A8\u5E93</td><td>3.\u7248\u672C\u5386\u53F2\u8BB0\u5F55\u5B58\u50A8\u5728\u670D\u52A1\u5668\u7AEF\u5B58\u50A8\u5E93\u4E2D</td></tr><tr><td>4.\u5373\u4F7F\u79BB\u7EBF\u4E5F\u53EF\u4EE5\u63D0\u4EA4</td><td>4.\u53EA\u5141\u8BB8\u5728\u7EBF\u63D0\u4EA4</td></tr><tr><td>5.Push/pull \u64CD\u4F5C\u66F4\u5FEB</td><td>5.Push/pull \u64CD\u4F5C\u8F83\u6162</td></tr><tr><td>6.\u5DE5\u7A0B\u53EF\u4EE5\u7528 commit \u81EA\u52A8\u5171\u4EAB</td><td>6.\u6CA1\u6709\u4EFB\u4F55\u4E1C\u897F\u81EA\u52A8\u5171\u4EAB</td></tr></tbody></table><h2 id="_2\u3001\u4EC0\u4E48\u662Fgit" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4EC0\u4E48\u662Fgit" aria-hidden="true">#</a> 2\u3001\u4EC0\u4E48\u662FGit\uFF1F</h2><p>\u6211\u5EFA\u8BAE\u4F60\u5148\u901A\u8FC7\u4E86\u89E3 git \u7684\u67B6\u6784\u518D\u6765\u56DE\u7B54\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u8BD5\u7740\u89E3\u91CA\u4E00\u4E0B\u8FD9\u4E2A\u56FE\uFF1A</p><ul><li>Git \u662F\u5206\u5E03\u5F0F\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\uFF08DVCS\uFF09\u3002\u5B83\u53EF\u4EE5\u8DDF\u8E2A\u6587\u4EF6\u7684\u66F4\u6539\uFF0C\u5E76\u5141\u8BB8\u4F60\u6062\u590D\u5230\u4EFB\u4F55\u7279\u5B9A\u7248\u672C\u7684\u66F4\u6539\u3002</li><li>\u4E0E SVN\u7B49\u5176\u4ED6\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\uFF08VCS\uFF09\u76F8\u6BD4\uFF0C\u5176\u5206\u5E03\u5F0F\u67B6\u6784\u5177\u6709\u8BB8\u591A\u4F18\u52BF\uFF0C\u4E00\u4E2A\u4E3B\u8981\u4F18\u70B9\u662F\u5B83\u4E0D\u4F9D\u8D56\u4E8E\u4E2D\u592E\u670D\u52A1\u5668\u6765\u5B58\u50A8\u9879\u76EE\u6587\u4EF6\u7684\u6240\u6709\u7248\u672C\u3002</li><li>\u6BCF\u4E2A\u5F00\u53D1\u4EBA\u5458\u90FD\u53EF\u4EE5\u201C\u514B\u9686\u201D\u6211\u5728\u56FE\u4E2D\u7528\u201CLocal repository\u201D\u6807\u6CE8\u7684\u5B58\u50A8\u5E93\u7684\u526F\u672C\uFF0C\u5E76\u4E14\u5728\u4ED6\u7684\u786C\u76D8\u9A71\u52A8\u5668\u4E0A\u5177\u6709\u9879\u76EE\u7684\u5B8C\u6574\u5386\u53F2\u8BB0\u5F55\uFF0C\u56E0\u6B64\u5F53\u670D\u52A1\u5668\u4E2D\u65AD\u65F6\uFF0C\u4F60\u9700\u8981\u7684\u6240\u6709\u6062\u590D\u6570\u636E\u90FD\u5728\u4F60\u961F\u53CB\u7684\u672C\u5730 Git \u5B58\u50A8\u5E93\u4E2D\u3002</li><li>\u8FD8\u6709\u4E00\u4E2A\u4E2D\u592E\u4E91\u5B58\u50A8\u5E93\uFF0C\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u5411\u5176\u63D0\u4EA4\u66F4\u6539\uFF0C\u5E76\u4E0E\u5176\u4ED6\u56E2\u961F\u6210\u5458\u8FDB\u884C\u5171\u4EAB\uFF0C\u5982\u56FE\u6240\u793A\uFF0C\u6240\u6709\u534F\u4F5C\u8005\u90FD\u5728\u63D0\u4EA4\u66F4\u6539\u201C\u8FDC\u7A0B\u5B58\u50A8\u5E93\u201D\u3002</li></ul><h2 id="_3\u3001\u5728-git-\u4E2D\u63D0\u4EA4\u7684\u547D\u4EE4\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u5728-git-\u4E2D\u63D0\u4EA4\u7684\u547D\u4EE4\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 3\u3001\u5728 Git \u4E2D\u63D0\u4EA4\u7684\u547D\u4EE4\u662F\u4EC0\u4E48\uFF1F</h2><p>\u7B54\u6848\u975E\u5E38\u7B80\u5355\u3002 \u7528\u4E8E\u5199\u5165\u63D0\u4EA4\u7684\u547D\u4EE4\u662F <strong>git commit -a</strong>\u3002</p><p>\u73B0\u5728\u89E3\u91CA\u4E00\u4E0B -a \u6807\u5FD7, \u901A\u8FC7\u5728\u547D\u4EE4\u884C\u4E0A\u52A0 -a \u6307\u793A git \u63D0\u4EA4\u5DF2\u4FEE\u6539\u7684\u6240\u6709\u88AB\u8DDF\u8E2A\u6587\u4EF6\u7684\u65B0\u5185\u5BB9\u3002\u8FD8\u8981\u63D0\u4E00\u4E0B\uFF0C\u5982\u679C\u4F60\u662F\u7B2C\u4E00\u6B21\u9700\u8981\u63D0\u4EA4\u65B0\u6587\u4EF6\uFF0C\u53EF\u4EE5\u5728\u5728 git commit -a \u4E4B\u524D\u5148 <strong>git add</strong> \u3002</p><h2 id="_4\u3001\u4EC0\u4E48\u662Fgit-\u4E2D\u7684-\u88F8\u5B58\u50A8\u5E93" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u4EC0\u4E48\u662Fgit-\u4E2D\u7684-\u88F8\u5B58\u50A8\u5E93" aria-hidden="true">#</a> 4\u3001\u4EC0\u4E48\u662FGit \u4E2D\u7684\u201C\u88F8\u5B58\u50A8\u5E93\u201D\uFF1F</h2><p>\u4F60\u5E94\u8BE5\u8BF4\u660E \u201C\u5DE5\u4F5C\u76EE\u5F55\u201D \u548C \u201C\u88F8\u5B58\u50A8\u5E93\u201D \u4E4B\u95F4\u7684\u533A\u522B\u3002</p><p>Git \u4E2D\u7684 \u201C\u88F8\u201D \u5B58\u50A8\u5E93\u53EA\u5305\u542B\u7248\u672C\u63A7\u5236\u4FE1\u606F\u800C\u6CA1\u6709\u5DE5\u4F5C\u6587\u4EF6\uFF08\u6CA1\u6709\u5DE5\u4F5C\u6811\uFF09\uFF0C\u5E76\u4E14\u5B83\u4E0D\u5305\u542B\u7279\u6B8A\u7684 .git \u5B50\u76EE\u5F55\u3002\u76F8\u53CD\uFF0C\u5B83\u76F4\u63A5\u5728\u4E3B\u76EE\u5F55\u672C\u8EAB\u5305\u542B .git \u5B50\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u5176\u4E2D\u5DE5\u4F5C\u76EE\u5F55\u5305\u62EC\uFF1A</p><ol><li>\u4E00\u4E2A .git \u5B50\u76EE\u5F55\uFF0C\u5176\u4E2D\u5305\u542B\u4F60\u7684\u4ED3\u5E93\u6240\u6709\u76F8\u5173\u7684 Git \u4FEE\u8BA2\u5386\u53F2\u8BB0\u5F55\u3002</li><li>\u5DE5\u4F5C\u6811\uFF0C\u6216\u7B7E\u51FA\u7684\u9879\u76EE\u6587\u4EF6\u7684\u526F\u672C\u3002</li></ol><h2 id="_5\u3001git-\u662F\u7528\u4EC0\u4E48\u8BED\u8A00\u7F16\u5199\u7684" tabindex="-1"><a class="header-anchor" href="#_5\u3001git-\u662F\u7528\u4EC0\u4E48\u8BED\u8A00\u7F16\u5199\u7684" aria-hidden="true">#</a> 5\u3001Git \u662F\u7528\u4EC0\u4E48\u8BED\u8A00\u7F16\u5199\u7684\uFF1F</h2><p>\u4F60\u9700\u8981\u8BF4\u660E\u4F7F\u7528\u5B83\u7684\u539F\u56E0\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u8BF4\u51FA\u8BED\u8A00\u7684\u540D\u79F0\u3002\u6211\u5EFA\u8BAE\u4F60\u8FD9\u6837\u56DE\u7B54\uFF1A Git \u4F7F\u7528 C \u8BED\u8A00\u7F16\u5199\u3002 GIT \u5F88\u5FEB\uFF0CC \u8BED\u8A00\u901A\u8FC7\u51CF\u5C11\u8FD0\u884C\u65F6\u7684\u5F00\u9500\u6765\u505A\u5230\u8FD9\u4E00\u70B9\u3002</p><h2 id="_6\u3001\u5728git\u4E2D-\u4F60\u5982\u4F55\u8FD8\u539F\u5DF2\u7ECF-push-\u5E76\u516C\u5F00\u7684\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u5728git\u4E2D-\u4F60\u5982\u4F55\u8FD8\u539F\u5DF2\u7ECF-push-\u5E76\u516C\u5F00\u7684\u63D0\u4EA4" aria-hidden="true">#</a> 6\u3001\u5728Git\u4E2D\uFF0C\u4F60\u5982\u4F55\u8FD8\u539F\u5DF2\u7ECF push \u5E76\u516C\u5F00\u7684\u63D0\u4EA4\uFF1F</h2><p>There can be two answers to this question and make sure that you include both because any of the below options can be used depending on the situation:</p><p>\u8FD9\u4E2A\u95EE\u9898\u53EF\u4EE5\u6709\u4E24\u4E2A\u7B54\u6848\uFF0C\u4F60\u56DE\u7B54\u65F6\u4E5F\u8981\u4FDD\u5305\u542B\u8FD9\u4E24\u4E2A\u7B54\u6848\uFF0C\u56E0\u4E3A\u6839\u636E\u5177\u4F53\u60C5\u51B5\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u9009\u9879\uFF1A</p><ul><li><p>\u5220\u9664\u6216\u4FEE\u590D\u65B0\u63D0\u4EA4\u4E2D\u7684\u9519\u8BEF\u6587\u4EF6\uFF0C\u5E76\u5C06\u5176\u63A8\u9001\u5230\u8FDC\u7A0B\u5B58\u50A8\u5E93\u3002\u8FD9\u662F\u4FEE\u590D\u9519\u8BEF\u7684\u6700\u81EA\u7136\u65B9\u5F0F\u3002\u5BF9\u6587\u4EF6\u8FDB\u884C\u5FC5\u8981\u7684\u4FEE\u6539\u540E\uFF0C\u5C06\u5176\u63D0\u4EA4\u5230\u6211\u5C06\u4F7F\u7528\u7684\u8FDC\u7A0B\u5B58\u50A8\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit -m <span class="token string">&quot;commit message&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u63D0\u4EA4\uFF0C\u64A4\u6D88\u5728\u9519\u8BEF\u63D0\u4EA4\u4E2D\u6240\u505A\u7684\u6240\u6709\u66F4\u6539\u3002\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> revert <span class="token operator">&lt;</span>name of bad commit<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><h2 id="_7\u3001git-pull-\u548C-git-fetch-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_7\u3001git-pull-\u548C-git-fetch-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> 7\u3001git pull \u548C git fetch \u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h2><p>git pull \u547D\u4EE4\u4ECE\u4E2D\u592E\u5B58\u50A8\u5E93\u4E2D\u63D0\u53D6\u7279\u5B9A\u5206\u652F\u7684\u65B0\u66F4\u6539\u6216\u63D0\u4EA4\uFF0C\u5E76\u66F4\u65B0\u672C\u5730\u5B58\u50A8\u5E93\u4E2D\u7684\u76EE\u6807\u5206\u652F\u3002</p><p>git fetch git fetch \u4E5F\u7528\u4E8E\u76F8\u540C\u7684\u76EE\u7684\uFF0C\u4F46\u5B83\u7684\u5DE5\u4F5C\u65B9\u5F0F\u7565\u6709\u4E0D\u540C\u3002\u5F53\u4F60\u6267\u884C<code>git fetch</code> \u65F6\uFF0C\u5B83\u4F1A\u4ECE\u6240\u9700\u7684\u5206\u652F\u4E2D\u63D0\u53D6\u6240\u6709\u65B0\u63D0\u4EA4\uFF0C\u5E76\u5C06\u5176\u5B58\u50A8\u5728\u672C\u5730\u5B58\u50A8\u5E93\u4E2D\u7684\u65B0\u5206\u652F\u4E2D\u3002\u5982\u679C\u8981\u5728\u76EE\u6807\u5206\u652F\u4E2D\u53CD\u6620\u8FD9\u4E9B \u66F4\u6539\uFF0C\u5FC5\u987B\u5728<code>git fetch</code> \u4E4B\u540E\u6267\u884C<code>get merge</code> \u3002\u53EA\u6709\u5728\u5BF9\u76EE\u6807\u5206\u652F\u548C\u83B7\u53D6\u7684\u5206\u652F\u8FDB\u884C\u5408\u5E76\u540E\u624D\u4F1A \u66F4\u65B0\u76EE\u6807\u5206\u652F\u3002\u4E3A\u4E86\u65B9\u4FBF\u8D77\u89C1\uFF0C\u8BF7\u8BB0\u4F4F\u4EE5\u4E0B\u7B49\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git pull = git fetch + git merge
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_8\u3001git\u4E2D\u7684-staging-area-\u6216-index-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_8\u3001git\u4E2D\u7684-staging-area-\u6216-index-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 8\u3001git\u4E2D\u7684\u201Cstaging area\u201D\u6216\u201Cindex\u201D\u662F\u4EC0\u4E48\uFF1F</h2><p>For this answer try to explain the below diagram as you can see: \u53EF\u4EE5\u901A\u8FC7\u4E0B\u56FE\u8FDB\u884C\u89E3\u91CA\uFF1A</p><p>\u5728\u5B8C\u6210\u63D0\u4EA4\u4E4B\u524D\uFF0C\u53EF\u4EE5\u5728\u79F0\u4E3A\u201Cstaging area\u201D\u6216\u201Cindex\u201D\u7684\u4E2D\u95F4\u533A\u57DF\u4E2D\u5BF9\u5176\u8FDB\u884C\u683C\u5F0F\u5316\u548C\u5BA1\u67E5\u3002\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u6BCF\u4E2A\u66F4\u6539\u9996\u5148\u5728\u6682\u5B58\u533A\u57DF\u4E2D\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u6211\u5C06\u5176\u79F0\u4E3A\u201Cstage \uFB01le\u201D\uFF0C\u7136\u540E\u5C06\u66F4\u6539\u63D0\u4EA4\u5230\u5B58\u50A8\u5E93\u3002</p><h2 id="_9\u3001\u4EC0\u4E48\u662F-git-stash-\u9996\u5148\u5E94\u8BE5\u89E3\u91CA-git" tabindex="-1"><a class="header-anchor" href="#_9\u3001\u4EC0\u4E48\u662F-git-stash-\u9996\u5148\u5E94\u8BE5\u89E3\u91CA-git" aria-hidden="true">#</a> 9\u3001\u4EC0\u4E48\u662F git stash? \u9996\u5148\u5E94\u8BE5\u89E3\u91CA git</h2><p>stash \u7684\u5FC5\u8981\u6027\u3002</p><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5F53\u4F60\u4E00\u76F4\u5728\u5904\u7406\u9879\u76EE\u7684\u67D0\u4E00\u90E8\u5206\u65F6\uFF0C\u5982\u679C\u4F60\u60F3\u8981\u5728\u67D0\u4E2A\u65F6\u5019\u5207\u6362\u5206\u652F\u53BB\u5904\u7406\u5176\u4ED6\u4E8B\u60C5\uFF0C\u4E8B\u60C5\u4F1A\u5904\u4E8E\u6DF7\u4E71\u7684\u72B6\u6001\u3002\u95EE\u9898\u662F\uFF0C\u4F60\u4E0D\u60F3\u628A\u5B8C\u6210\u4E86\u4E00\u534A\u7684\u5DE5\u4F5C\u7684\u63D0\u4EA4\uFF0C\u4EE5\u4FBF\u4F60\u4EE5\u540E\u5C31\u53EF\u4EE5\u56DE\u5230\u5F53\u524D\u7684\u5DE5\u4F5C\u3002\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\u7B54\u6848\u662F git stash\u3002</p><p>\u518D\u89E3\u91CA\u4EC0\u4E48\u662F git stash\u3002 stash \u4F1A\u5C06\u4F60\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u5373\u4FEE\u6539\u540E\u7684\u8DDF\u8E2A\u6587\u4EF6\u548C\u6682\u5B58\u7684\u66F4\u6539\u4FDD\u5B58\u5728\u4E00\u5806\u672A\u5B8C\u6210\u7684\u66F4\u6539\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u968F\u65F6\u91CD\u65B0\u5E94\u7528\u8FD9\u4E9B\u66F4\u6539\u3002</p><h2 id="_10\u3001\u4EC0\u4E48\u662Fgit-stash-drop" tabindex="-1"><a class="header-anchor" href="#_10\u3001\u4EC0\u4E48\u662Fgit-stash-drop" aria-hidden="true">#</a> 10\u3001\u4EC0\u4E48\u662Fgit stash drop\uFF1F</h2><p>\u901A\u8FC7\u8BF4\u660E\u6211\u4EEC\u4F7F\u7528 <code>git stash drop</code> \u7684\u76EE\u7684\u6765\u56DE\u7B54\u8FD9\u4E2A\u95EE\u9898\u3002</p><p>git stash drop \u547D\u4EE4\u7528\u4E8E\u5220\u9664\u9690\u85CF\u7684\u9879\u76EE\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5B83\u5C06\u5220\u9664\u6700\u540E\u6DFB\u52A0\u7684\u5B58\u50A8\u9879\uFF0C\u5982\u679C\u63D0\u4F9B\u53C2\u6570\u7684\u8BDD\uFF0C\u5B83\u8FD8\u53EF\u4EE5\u5220\u9664\u7279\u5B9A\u9879\u3002</p><p>\u4E0B\u9762\u4E3E\u4E2A\u4F8B\u5B50\u3002</p><p>\u5982\u679C\u8981\u4ECE\u9690\u85CF\u9879\u76EE\u5217\u8868\u4E2D\u5220\u9664\u7279\u5B9A\u7684\u5B58\u50A8\u9879\u76EE\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><p>git stash list\uFF1A\u5B83\u5C06\u663E\u793A\u9690\u85CF\u9879\u76EE\u5217\u8868\uFF0C\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: WIP on master: 049d078 added the index \uFB01le
stash@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: WIP on master: c264051 Revert \u201Cadded \uFB01le_size\u201D
stash@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>: WIP on master: 21d80a5 added number to log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679C\u8981\u5220\u9664\u540D\u4E3A stash@{0} \u7684\u9879\u76EE\uFF0C\u8BF7\u4F7F\u7528\u547D\u4EE4 <strong>git stash drop stash@{0}</strong>\u3002</p><h2 id="_11-\u3001\u5982\u4F55\u627E\u5230\u7279\u5B9A\u63D0\u4EA4\u4E2D\u5DF2\u66F4\u6539\u7684\u6587\u4EF6\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_11-\u3001\u5982\u4F55\u627E\u5230\u7279\u5B9A\u63D0\u4EA4\u4E2D\u5DF2\u66F4\u6539\u7684\u6587\u4EF6\u5217\u8868" aria-hidden="true">#</a> 11.\u3001\u5982\u4F55\u627E\u5230\u7279\u5B9A\u63D0\u4EA4\u4E2D\u5DF2\u66F4\u6539\u7684\u6587\u4EF6\u5217\u8868\uFF1F</h2><p>\u5BF9\u4E8E\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4E0D\u80FD\u4EC5\u4EC5\u662F\u63D0\u4F9B\u547D\u4EE4\uFF0C\u8FD8\u8981\u89E3\u91CA\u8FD9\u4E2A\u547D\u4EE4\u7A76\u7ADF\u505A\u4E86\u4E9B\u4EC0\u4E48\u3002</p><p>\u8981\u83B7\u53D6\u7279\u5B9A\u63D0\u4EA4\u4E2D\u5DF2\u66F4\u6539\u7684\u5217\u8868\u6587\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><p>git di\uFB00-tree -r {hash}</p><p>\u7ED9\u5B9A\u63D0\u4EA4\u54C8\u5E0C\uFF0C\u8FD9\u5C06\u5217\u51FA\u5728\u8BE5\u63D0\u4EA4\u4E2D\u66F4\u6539\u6216\u6DFB\u52A0\u7684\u6240\u6709\u6587\u4EF6\u3002 -r \u6807\u5FD7\u4F7F\u547D\u4EE4\u5217\u51FA\u5355\u4E2A\u6587\u4EF6\uFF0C\u800C\u4E0D\u662F\u4EC5\u5C06\u5B83\u4EEC\u6298\u53E0\u5230\u6839\u76EE\u5F55\u540D\u79F0\u4E2D\u3002</p><p>\u4F60\u8FD8\u53EF\u4EE5\u5305\u62EC\u4E0B\u9762\u63D0\u5230\u7684\u5185\u5BB9\uFF0C\u867D\u7136\u5B83\u662F\u53EF\u9009\u7684\uFF0C\u4F46\u6709\u52A9\u4E8E\u7ED9\u9762\u8BD5\u5B98\u7559\u4E0B\u6DF1\u523B\u5370\u8C61\u3002\u8F93\u51FA\u8FD8\u5C06\u5305\u542B\u4E00\u4E9B\u989D\u5916\u4FE1\u606F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5305\u542B\u4E24\u4E2A\u6807\u5FD7\u628A\u5B83\u4EEC\u8F7B\u677E\u7684\u5C4F\u853D\u6389\uFF1A</p><p>git di\uFB00-tree\u2013no-commit-id \u2013name-only -r {hash}</p><p>\u8FD9\u91CC -no-commit-id \u5C06\u7981\u6B62\u63D0\u4EA4\u54C8\u5E0C\u503C\u51FA\u73B0\u5728\u8F93\u51FA\u4E2D\uFF0C\u800C-name-only\u53EA\u4F1A\u6253\u5370\u6587\u4EF6\u540D\u800C\u4E0D\u662F\u5B83\u4EEC\u7684\u8DEF\u5F84\u3002</p><h2 id="_12\u3001git-config-\u7684\u529F\u80FD\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_12\u3001git-config-\u7684\u529F\u80FD\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 12\u3001git con\uFB01g \u7684\u529F\u80FD\u662F\u4EC0\u4E48\uFF1F</h2><p>\u9996\u5148\u8BF4\u660E\u4E3A\u4EC0\u4E48\u6211\u4EEC\u9700\u8981 git config \u3002</p><p>git \u4F7F\u7528\u4F60\u7684\u7528\u6237\u540D\u5C06\u63D0\u4EA4\u4E0E\u8EAB\u4EFD\u76F8\u5173\u8054\u3002 git config \u547D\u4EE4\u53EF\u7528\u6765\u66F4\u6539\u4F60\u7684 git \u914D\u7F6E\uFF0C\u5305\u62EC\u4F60\u7684\u7528\u6237\u540D\u3002</p><p>\u4E0B\u9762\u7528\u4E00\u4E2A\u4F8B\u5B50\u6765\u89E3\u91CA\u3002</p><p>\u5047\u8BBE\u4F60\u8981\u63D0\u4F9B\u7528\u6237\u540D\u548C\u7535\u5B50\u90AE\u4EF6 ID \u7528\u6765\u5C06\u63D0\u4EA4\u4E0E\u8EAB\u4EFD\u76F8\u5173\u8054\uFF0C\u4EE5\u4FBF\u4F60\u53EF\u4EE5\u77E5\u9053\u662F\u8C01\u8FDB\u884C\u4E86\u7279\u5B9A\u63D0\u4EA4\u3002\u4E3A\u6B64\uFF0C\u6211\u5C06\u4F7F\u7528\uFF1A</p><p>git con\uFB01g \u2013global user.name &quot;Your Name&quot;: \u6B64\u547D\u4EE4\u5C06\u6DFB\u52A0\u7528\u6237\u540D\u3002</p><p>git con\uFB01g \u2013global user.email &quot;Your E-mail Address&quot;: \u6B64\u547D\u4EE4\u5C06\u6DFB\u52A0\u7535\u5B50\u90AE\u4EF6 ID\u3002</p><h2 id="_13\u3001\u63D0\u4EA4\u5BF9\u8C61\u5305\u542B\u4EC0\u4E48-commit" tabindex="-1"><a class="header-anchor" href="#_13\u3001\u63D0\u4EA4\u5BF9\u8C61\u5305\u542B\u4EC0\u4E48-commit" aria-hidden="true">#</a> 13\u3001\u63D0\u4EA4\u5BF9\u8C61\u5305\u542B\u4EC0\u4E48\uFF1F Commit</h2><p>\u5BF9\u8C61\u5305\u542B\u4EE5\u4E0B\u7EC4\u4EF6\uFF0C\u4F60\u5E94\u8BE5\u63D0\u5230\u4EE5\u4E0B\u8FD9\u4E09\u70B9\uFF1A</p><ul><li>\u4E00\u7EC4\u6587\u4EF6\uFF0C\u8868\u793A\u7ED9\u5B9A\u65F6\u95F4\u70B9\u7684\u9879\u76EE\u72B6\u6001</li><li>\u5F15\u7528\u7236\u63D0\u4EA4\u5BF9\u8C61</li><li>SHAI \u540D\u79F0\uFF0C\u4E00\u4E2A 40 \u4E2A\u5B57\u7B26\u7684\u5B57\u7B26\u4E32\uFF0C\u63D0\u4EA4\u5BF9\u8C61\u7684\u552F\u4E00\u6807\u8BC6\u3002</li></ul><h2 id="_14\u3001-\u5982\u4F55\u5728git\u4E2D\u521B\u5EFA\u5B58\u50A8\u5E93" tabindex="-1"><a class="header-anchor" href="#_14\u3001-\u5982\u4F55\u5728git\u4E2D\u521B\u5EFA\u5B58\u50A8\u5E93" aria-hidden="true">#</a> 14\u3001 \u5982\u4F55\u5728Git\u4E2D\u521B\u5EFA\u5B58\u50A8\u5E93\uFF1F</h2><p>\u8FD9\u53EF\u80FD\u662F\u6700\u5E38\u89C1\u7684\u95EE\u9898\uFF0C\u7B54\u6848\u5F88\u7B80\u5355\u3002</p><p>\u8981\u521B\u5EFA\u5B58\u50A8\u5E93\uFF0C\u5148\u4E3A\u9879\u76EE\u521B\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF08\u5982\u679C\u8BE5\u76EE\u5F55\u4E0D\u5B58\u5728\uFF09\uFF0C\u7136\u540E\u8FD0\u884C\u547D\u4EE4 <code>git init</code> \u3002\u901A\u8FC7\u8FD0\u884C\u6B64\u547D\u4EE4\uFF0C\u5C06\u5728\u9879\u76EE\u7684\u76EE\u5F55\u4E2D\u521B\u5EFA .git \u76EE\u5F55\u3002</p><h2 id="_15\u3001\u600E\u6837\u5C06-n-\u6B21\u63D0\u4EA4\u538B\u7F29\u6210\u4E00\u6B21\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#_15\u3001\u600E\u6837\u5C06-n-\u6B21\u63D0\u4EA4\u538B\u7F29\u6210\u4E00\u6B21\u63D0\u4EA4" aria-hidden="true">#</a> 15\u3001\u600E\u6837\u5C06 N \u6B21\u63D0\u4EA4\u538B\u7F29\u6210\u4E00\u6B21\u63D0\u4EA4\uFF1F</h2><p>\u5C06N \u4E2A\u63D0\u4EA4\u538B\u7F29\u5230\u5355\u4E2A\u63D0\u4EA4\u4E2D\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li><p>\u5982\u679C\u8981\u4ECE\u5934\u5F00\u59CB\u7F16\u5199\u65B0\u7684\u63D0\u4EA4\u6D88\u606F\uFF0C\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset \u2013soft HEAD~N <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u5982\u679C\u4F60\u60F3\u5728\u65B0\u7684\u63D0\u4EA4\u6D88\u606F\u4E2D\u4E32\u8054\u73B0\u6709\u7684\u63D0\u4EA4\u6D88\u606F\uFF0C\u90A3\u4E48\u9700\u8981\u63D0\u53D6\u8FD9\u4E9B\u6D88\u606F\u5E76\u5C06\u5B83\u4EEC\u4F20\u7ED9 git commit\uFF0C\u53EF\u4EE5\u8FD9\u6837\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset \u2013soft HEAD~N <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit \u2013edit -m<span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> log \u2013format<span class="token operator">=</span>%B \u2013reverse .HEAD@<span class="token punctuation">{</span>N<span class="token punctuation">}</span><span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><h2 id="_16\u3001-\u4EC0\u4E48\u662F-git-bisect-\u5982\u4F55\u4F7F\u7528\u5B83\u6765\u786E\u5B9A-\u56DE\u5F52-\u9519\u8BEF\u7684\u6765\u6E90" tabindex="-1"><a class="header-anchor" href="#_16\u3001-\u4EC0\u4E48\u662F-git-bisect-\u5982\u4F55\u4F7F\u7528\u5B83\u6765\u786E\u5B9A-\u56DE\u5F52-\u9519\u8BEF\u7684\u6765\u6E90" aria-hidden="true">#</a> 16\u3001 \u4EC0\u4E48\u662F Git bisect\uFF1F\u5982\u4F55\u4F7F\u7528\u5B83\u6765\u786E\u5B9A\uFF08\u56DE\u5F52\uFF09\u9519\u8BEF\u7684\u6765\u6E90\uFF1F</h2><p>\u6211\u5EFA\u8BAE\u4F60\u5148\u7ED9\u51FA\u4E00\u4E2A Git bisect \u7684\u5C0F\u5B9A\u4E49\u3002</p><p>Git bisect \u7528\u4E8E\u67E5\u627E\u4F7F\u7528\u4E8C\u8FDB\u5236\u641C\u7D22\u5F15\u5165\u9519\u8BEF\u7684\u63D0\u4EA4\u3002 Git bisect \u7684\u547D\u4EE4\u662F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> bisect <span class="token operator">&lt;</span>subcommand<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>options<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u65E2\u7136\u4F60\u5DF2\u7ECF\u63D0\u5230\u8FC7\u4E0A\u9762\u7684\u547D\u4EE4\uFF0C\u90A3\u5C31\u89E3\u91CA\u4E00\u4E0B\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u505A\u4EC0\u4E48\u3002</p><p>\u6B64\u547D\u4EE4\u7528\u4E86\u4E8C\u8FDB\u5236\u641C\u7D22\u7B97\u6CD5\u6765\u67E5\u627E\u9879\u76EE\u5386\u53F2\u8BB0\u5F55\u4E2D\u7684\u54EA\u4E2A\u63D0\u4EA4\u5F15\u5165\u4E86\u9519\u8BEF\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u544A\u8BC9\u5B83\u5DF2\u77E5\u5305\u542B\u8BE5\u9519\u8BEF\u7684\u201C\u9519\u8BEF\u201D\u63D0\u4EA4\u4EE5\u53CA\u5728\u5F15\u5165\u9519\u8BEF\u4E4B\u524D\u5DF2\u77E5\u7684\u201C\u826F\u597D\u201D\u63D0\u4EA4\u6765\u4F7F\u7528\u5B83\u3002\u7136\u540E git bisect \u5728\u8FD9\u4E24\u4E2A\u7AEF\u70B9\u4E4B\u95F4\u9009\u62E9\u4E00\u4E2A\u63D0\u4EA4\uFF0C\u5E76\u8BE2\u95EE\u4F60\u6240\u9009\u7684\u63D0\u4EA4\u662F\u201C\u597D\u201D\u8FD8\u662F\u201C\u574F\u201D\u3002\u5B83\u7EE7\u7EED\u7F29\u5C0F\u8303\u56F4\uFF0C\u76F4\u5230\u627E\u5230\u5F15\u5165\u66F4\u6539\u7684\u786E\u5207\u63D0\u4EA4\u3002</p><h2 id="_17\u3001\u5982\u679C\u60F3\u8981\u5728\u63D0\u4EA4\u4E4B\u524D\u8FD0\u884C\u4EE3\u7801\u6027\u68C0\u67E5\u5DE5\u5177-\u5E76\u5728\u6D4B\u8BD5\u5931\u8D25\u65F6\u963B\u6B62\u63D0\u4EA4-\u8BE5\u600E\u6837\u914D\u7F6E-git-\u5B58\u50A8\u5E93" tabindex="-1"><a class="header-anchor" href="#_17\u3001\u5982\u679C\u60F3\u8981\u5728\u63D0\u4EA4\u4E4B\u524D\u8FD0\u884C\u4EE3\u7801\u6027\u68C0\u67E5\u5DE5\u5177-\u5E76\u5728\u6D4B\u8BD5\u5931\u8D25\u65F6\u963B\u6B62\u63D0\u4EA4-\u8BE5\u600E\u6837\u914D\u7F6E-git-\u5B58\u50A8\u5E93" aria-hidden="true">#</a> 17\u3001\u5982\u679C\u60F3\u8981\u5728\u63D0\u4EA4\u4E4B\u524D\u8FD0\u884C\u4EE3\u7801\u6027\u68C0\u67E5\u5DE5\u5177\uFF0C\u5E76\u5728\u6D4B\u8BD5\u5931\u8D25\u65F6\u963B\u6B62\u63D0\u4EA4\uFF0C\u8BE5\u600E\u6837\u914D\u7F6E Git \u5B58\u50A8\u5E93\uFF1F</h2><p>\u6211\u5EFA\u8BAE\u4F60\u5148\u4ECB\u7ECD\u4E00\u4E0B\u5B8C\u6574\u6027\u68C0\u67E5\u3002</p><p>\u5B8C\u6574\u6027\u6216\u5192\u70DF\u6D4B\u8BD5\u7528\u6765\u786E\u5B9A\u7EE7\u7EED\u6D4B\u8BD5\u662F\u5426\u53EF\u884C\u548C\u5408\u7406\u3002</p><p>\u4E0B\u9762\u89E3\u91CA\u5982\u4F55\u5B9E\u73B0\u8FD9\u4E00\u76EE\u6807\u3002</p><p>\u8FD9\u53EF\u4EE5\u901A\u8FC7\u4E0E\u5B58\u50A8\u5E93\u7684 pre-commit hook \u76F8\u5173\u7684\u7B80\u5355\u811A\u672C\u6765\u5B8C\u6210\u3002git \u4F1A\u5728\u63D0\u4EA4\u4E4B\u524D\u89E6\u53D1 pre- commit hook\u3002\u4F60\u53EF\u4EE5\u5728\u8FD9\u4E2A\u811A\u672C\u4E2D\u8FD0\u884C\u5176\u4ED6\u5DE5\u5177\uFF0C\u4F8B\u5982 linters\uFF0C\u5E76\u5BF9\u63D0\u4EA4\u5230\u5B58\u50A8\u5E93\u4E2D\u7684\u66F4\u6539\u6267\u884C\u5B8C\u6574\u6027\u68C0\u67E5\u3002 \u6700\u540E\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u811A\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh </span>
<span class="token assign-left variable">files</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> <span class="token function">diff</span> \u2013cached\u2013name-only \u2013diff-filter<span class="token operator">=</span>ACM <span class="token operator">|</span> <span class="token function">grep</span> \u2018.go$\u2019<span class="token variable">)</span></span> 
<span class="token keyword">if</span> <span class="token punctuation">[</span> -z files <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> 
	<span class="token builtin class-name">exit</span> <span class="token number">0</span> 
<span class="token keyword">fi</span> 
<span class="token assign-left variable">unfmtd</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>gofmt -l $files<span class="token variable">)</span></span> 
<span class="token keyword">if</span> <span class="token punctuation">[</span> -z unfmtd <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> 
	<span class="token builtin class-name">exit</span> <span class="token number">0</span> 
<span class="token keyword">fi</span> 
<span class="token builtin class-name">echo</span> \u201CSome .go files are not fmt\u2019d\u201D 
<span class="token builtin class-name">exit</span> <span class="token number">1</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8FD9\u6BB5\u811A\u672C\u68C0\u67E5\u662F\u5426\u9700\u8981\u901A\u8FC7\u6807\u51C6 Go \u6E90\u4EE3\u7801\u683C\u5F0F\u5316\u5DE5\u5177 gofmt \u4F20\u9012\u6240\u6709\u5373\u5C06\u63D0\u4EA4\u7684 .go \u6587\u4EF6\u3002\u5982\u679C\u811A\u6B65\u4EE5\u975E 0 \u72B6\u6001\u9000\u51FA\uFF0C\u811A\u672C\u4F1A\u6709\u6548\u5730\u963B\u6B62\u63D0\u4EA4\u64CD\u4F5C\u3002</p><h2 id="_18\u3001\u63CF\u8FF0\u4E00\u4E0B\u4F60\u6240\u4F7F\u7528\u7684\u5206\u652F\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_18\u3001\u63CF\u8FF0\u4E00\u4E0B\u4F60\u6240\u4F7F\u7528\u7684\u5206\u652F\u7B56\u7565" aria-hidden="true">#</a> 18\u3001\u63CF\u8FF0\u4E00\u4E0B\u4F60\u6240\u4F7F\u7528\u7684\u5206\u652F\u7B56\u7565\uFF1F</h2><p>\u8FD9\u4E2A\u95EE\u9898\u88AB\u8981\u6C42\u7528 Git \u6765\u6D4B\u8BD5\u4F60\u7684\u5206\u652F\u7ECF\u9A8C\uFF0C\u544A\u8BC9\u4ED6\u4EEC\u4F60\u5728\u4EE5\u524D\u7684\u5DE5\u4F5C\u4E2D\u5982\u4F55\u4F7F\u7528\u5206\u652F\u4EE5\u53CA\u5B83\u7684\u7528\u9014\u662F\u4EC0\u4E48\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0B\u63D0\u5230\u7684\u8981\u70B9\uFF1A</p><ul><li><p>\u529F\u80FD\u5206\u652F\uFF08Feature branching\uFF09</p><p>\u8981\u7D20\u5206\u652F\u6A21\u578B\u5C06\u7279\u5B9A\u8981\u7D20\u7684\u6240\u6709\u66F4\u6539\u4FDD\u7559\u5728\u5206\u652F\u5185\u3002\u5F53\u901A\u8FC7\u81EA\u52A8\u5316\u6D4B\u8BD5\u5BF9\u529F\u80FD\u8FDB\u884C\u5168\u9762\u6D4B\u8BD5\u548C\u9A8C\u8BC1\u65F6\uFF0C\u8BE5\u5206\u652F\u5C06\u5408\u5E76\u5230\u4E3B\u670D\u52A1\u5668\u4E2D\u3002</p></li><li><p>\u4EFB\u52A1\u5206\u652F\uFF08Task branching\uFF09</p><p>\u5728\u6B64\u6A21\u578B\u4E2D\uFF0C\u6BCF\u4E2A\u4EFB\u52A1\u90FD\u5728\u5176\u81EA\u5DF1\u7684\u5206\u652F\u4E0A\u5B9E\u73B0\uFF0C\u4EFB\u52A1\u952E\u5305\u542B\u5728\u5206\u652F\u540D\u79F0\u4E2D\u3002\u5F88\u5BB9\u6613\u770B\u51FA\u54EA\u4E2A\u4EE3\u7801\u5B9E\u73B0\u4E86\u54EA\u4E2A\u4EFB\u52A1\uFF0C\u53EA\u9700\u5728\u5206\u652F\u540D\u79F0\u4E2D\u67E5\u627E\u4EFB\u52A1\u952E\u3002</p></li><li><p>\u53D1\u5E03\u5206\u652F\uFF08Release branching\uFF09</p><p>\u4E00\u65E6\u5F00\u53D1\u5206\u652F\u83B7\u5F97\u4E86\u8DB3\u591F\u7684\u53D1\u5E03\u529F\u80FD\uFF0C\u4F60\u5C31\u53EF\u4EE5\u514B\u9686\u8BE5\u5206\u652F\u6765\u5F62\u6210\u53D1\u5E03\u5206\u652F\u3002\u521B\u5EFA\u8BE5\u5206\u652F\u5C06\u4F1A\u542F\u52A8\u4E0B\u4E00\u4E2A\u53D1\u5E03\u5468\u671F\uFF0C\u6240\u4EE5\u5728\u6B64\u4E4B\u540E\u4E0D\u80FD\u518D\u6DFB\u52A0\u4EFB\u4F55\u65B0\u529F\u80FD\uFF0C\u53EA\u6709\u9519\u8BEF\u4FEE\u590D\uFF0C\u6587\u6863\u751F\u6210\u548C\u5176\u4ED6\u9762\u5411\u53D1\u5E03\u7684\u4EFB\u52A1\u5E94\u8BE5\u5305\u542B\u5728\u6B64\u5206\u652F\u4E2D\u3002\u4E00\u65E6\u51C6\u5907\u597D\u53D1\u5E03\uFF0C\u8BE5\u7248\u672C\u5C06\u5408\u5E76\u5230\u4E3B\u670D\u52A1\u5668\u5E76\u6807\u8BB0\u7248\u672C\u53F7\u3002\u6B64\u5916\uFF0C\u5B83\u8FD8\u5E94\u8BE5\u518D\u5C06\u81EA\u53D1\u5E03\u4EE5\u6765\u5DF2\u7ECF\u53D6\u5F97\u7684\u8FDB\u5C55\u5408\u5E76\u56DE\u5F00\u53D1\u5206\u652F\u3002</p></li></ul><p>\u6700\u540E\u544A\u8BC9\u4ED6\u4EEC\u5206\u652F\u7B56\u7565\u56E0\u56E2\u961F\u800C\u5F02\uFF0C\u6240\u4EE5\u6211\u77E5\u9053\u57FA\u672C\u7684\u5206\u652F\u64CD\u4F5C\uFF0C\u5982\u5220\u9664\u3001\u5408\u5E76\u3001\u68C0\u67E5\u5206\u652F\u7B49\u3002</p><h2 id="_19\u3001\u5982\u679C\u5206\u652F\u662F\u5426\u5DF2\u5408\u5E76\u4E3Amaster-\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EC0\u4E48\u624B\u6BB5\u77E5\u9053" tabindex="-1"><a class="header-anchor" href="#_19\u3001\u5982\u679C\u5206\u652F\u662F\u5426\u5DF2\u5408\u5E76\u4E3Amaster-\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EC0\u4E48\u624B\u6BB5\u77E5\u9053" aria-hidden="true">#</a> 19\u3001\u5982\u679C\u5206\u652F\u662F\u5426\u5DF2\u5408\u5E76\u4E3Amaster\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EC0\u4E48\u624B\u6BB5\u77E5\u9053\uFF1F</h2><p>\u7B54\u6848\u5F88\u76F4\u63A5\u3002 \u8981\u77E5\u9053\u67D0\u4E2A\u5206\u652F\u662F\u5426\u5DF2\u5408\u5E76\u4E3A master\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><ul><li>git branch \u2013merged \u5B83\u5217\u51FA\u4E86\u5DF2\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F\u7684\u5206\u652F\u3002</li><li>git branch \u2013no-merged \u5B83\u5217\u51FA\u4E86\u5C1A\u672A\u5408\u5E76\u7684\u5206\u652F\u3002</li></ul><h2 id="_20\u3001-\u4EC0\u4E48\u662Fsubgit" tabindex="-1"><a class="header-anchor" href="#_20\u3001-\u4EC0\u4E48\u662Fsubgit" aria-hidden="true">#</a> 20\u3001 \u4EC0\u4E48\u662FSubGit\uFF1F</h2><p>SubGit \u662F\u5C06SVN \u5230 Git \u8FC1\u79FB\u7684\u5DE5\u5177\u3002\u5B83\u521B\u5EFA\u4E86\u4E00\u4E2A\u53EF\u5199\u7684\u672C\u5730\u6216\u8FDC\u7A0B Subversion \u5B58\u50A8\u5E93\u7684 Git \u955C\u50CF\uFF0C\u5E76\u4E14\u53EA\u8981\u4F60\u613F\u610F\uFF0C\u53EF\u4EE5\u968F\u610F\u4F7F\u7528 Subversion \u548C Git\u3002</p><p>\u8FD9\u6837\u505A\u6709\u5F88\u591A\u4F18\u70B9\uFF0C\u6BD4\u5982\u4F60\u53EF\u4EE5\u4ECE Subversion \u5FEB\u901F\u4E00\u6B21\u6027\u5BFC\u5165\u5230 Git \u6216\u8005\u5728 Atlassian Bitbucket Server \u4E2D\u4F7F\u7528 SubGit\u3002\u6211\u4EEC\u53EF\u4EE5\u7528 SubGit \u521B\u5EFA\u73B0\u6709 Subversion \u5B58\u50A8\u5E93\u7684\u53CC\u5411 Git-SVN \u955C\u50CF\u3002\u4F60\u53EF\u4EE5\u5728\u65B9\u4FBF\u65F6 push \u5230 Git \u6216\u63D0\u4EA4 Subversion\u3002\u540C\u6B65\u7531 SubGit \u5B8C\u6210\u3002</p><h2 id="_21\u3001\u5217\u4E3E\u5DE5\u4F5C\u4E2D\u5E38\u7528\u7684\u51E0\u4E2Agit\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_21\u3001\u5217\u4E3E\u5DE5\u4F5C\u4E2D\u5E38\u7528\u7684\u51E0\u4E2Agit\u547D\u4EE4" aria-hidden="true">#</a> 21\u3001\u5217\u4E3E\u5DE5\u4F5C\u4E2D\u5E38\u7528\u7684\u51E0\u4E2Agit\u547D\u4EE4\uFF1F</h2><ul><li>\u65B0\u589E\u6587\u4EF6\u7684\u547D\u4EE4\uFF1Agit add \uFB01le \u6216\u8005 git add .</li><li>\u63D0\u4EA4\u6587\u4EF6\u7684\u547D\u4EE4\uFF1Agit commit \u2013m \u6216\u8005git commit \u2013a</li><li>\u67E5\u770B\u5DE5\u4F5C\u533A\u72B6\u51B5\uFF1Agit status \u2013s</li><li>\u62C9\u53D6\u5408\u5E76\u8FDC\u7A0B\u5206\u652F\u7684\u64CD\u4F5C\uFF1Agit fetch/git merge \u6216\u8005 git pull</li><li>\u67E5\u770B\u63D0\u4EA4\u8BB0\u5F55\u547D\u4EE4\uFF1Agit re\uFB02og</li></ul><h2 id="_22\u3001\u5982\u679C\u672C\u6B21\u63D0\u4EA4\u8BEF\u64CD\u4F5C-\u5982\u4F55\u64A4\u9500" tabindex="-1"><a class="header-anchor" href="#_22\u3001\u5982\u679C\u672C\u6B21\u63D0\u4EA4\u8BEF\u64CD\u4F5C-\u5982\u4F55\u64A4\u9500" aria-hidden="true">#</a> 22\u3001\u5982\u679C\u672C\u6B21\u63D0\u4EA4\u8BEF\u64CD\u4F5C\uFF0C\u5982\u4F55\u64A4\u9500\uFF1F</h2><ul><li><p>\u5982\u679C\u60F3\u64A4\u9500\u63D0\u4EA4\u5230\u7D22\u5F15\u533A\u7684\u6587\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7<strong>git reset HEAD \uFB01le</strong>\uFF1B</p></li><li><p>\u5982\u679C\u60F3\u64A4\u9500\u63D0\u4EA4\u5230\u672C\u5730\u4ED3\u5E93\u7684\u6587\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>git reset \u2013soft HEAD^n</code> \u6062\u590D\u5F53\u524D\u5206\u652F\u7684\u7248\u672C\u5E93\u81F3\u4E0A\u4E00\u6B21\u63D0\u4EA4\u7684\u72B6\u6001\uFF0C\u7D22\u5F15\u533A\u548C\u5DE5\u4F5C\u7A7A\u95F4\u4E0D\u53D8\u66F4\uFF1B</p></li><li><p>\u53EF\u4EE5\u901A\u8FC7<code>git reset \u2013mixed HEAD^n</code> \u6062\u590D\u5F53\u524D\u5206\u652F\u7684\u7248\u672C\u5E93\u548C\u7D22\u5F15\u533A\u81F3\u4E0A\u4E00\u6B21\u63D0\u4EA4\u7684\u72B6\u6001</p></li></ul><h2 id="_23\u3001\u4F60\u4F7F\u7528\u8FC7git-stash\u547D\u4EE4\u5417-\u4F60\u4E00\u822C\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F1A\u4F7F\u7528\u5B83" tabindex="-1"><a class="header-anchor" href="#_23\u3001\u4F60\u4F7F\u7528\u8FC7git-stash\u547D\u4EE4\u5417-\u4F60\u4E00\u822C\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F1A\u4F7F\u7528\u5B83" aria-hidden="true">#</a> 23\u3001\u4F60\u4F7F\u7528\u8FC7git stash\u547D\u4EE4\u5417\uFF1F\u4F60\u4E00\u822C\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F1A\u4F7F\u7528\u5B83\uFF1F</h2><p>git stash \u662F\u628A\u5DE5\u4F5C\u533A\u4FEE\u6539\u7684\u5185\u5BB9\u5B58\u50A8\u5728\u6808\u533A\u3002</p><p>\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\u4F1A\u4F7F\u7528\u5230\u5B83\uFF1A</p><ul><li>\u89E3\u51B3\u51B2\u7A81\u6587\u4EF6\u65F6\uFF0C\u4F1A\u5148\u6267\u884C git stash\uFF0C\u7136\u540E\u89E3\u51B3\u51B2\u7A81\uFF1B</li><li>\u9047\u5230\u7D27\u6025\u5F00\u53D1\u4EFB\u52A1\u4F46\u76EE\u524D\u4EFB\u52A1\u4E0D\u80FD\u63D0\u4EA4\u65F6\uFF0C\u4F1A\u5148\u6267\u884Cgit stash\uFF0C\u7136\u540E\u8FDB\u884C\u7D27\u6025\u4EFB\u52A1\u7684\u5F00\u53D1\uFF0C\u7136\u540E\u901A\u8FC7 git stash pop \u53D6\u51FA\u6808\u533A\u7684\u5185\u5BB9\u7EE7\u7EED\u5F00\u53D1\uFF1B</li><li>\u5207\u6362\u5206\u652F\u65F6\uFF0C\u5F53\u524D\u5DE5\u4F5C\u7A7A\u95F4\u5185\u5BB9\u4E0D\u80FD\u63D0\u4EA4\u65F6\uFF0C\u4F1A\u5148\u6267\u884C git stash \u518D\u8FDB\u884C\u5206\u652F\u5207\u6362\uFF1B</li></ul><h2 id="_24\u3001\u5982\u4F55\u67E5\u770B\u5206\u652F\u63D0\u4EA4\u7684\u5386\u53F2\u8BB0\u5F55-\u67E5\u770B\u67D0\u4E2A\u6587\u4EF6\u7684\u5386\u53F2\u8BB0\u5F55\u5462" tabindex="-1"><a class="header-anchor" href="#_24\u3001\u5982\u4F55\u67E5\u770B\u5206\u652F\u63D0\u4EA4\u7684\u5386\u53F2\u8BB0\u5F55-\u67E5\u770B\u67D0\u4E2A\u6587\u4EF6\u7684\u5386\u53F2\u8BB0\u5F55\u5462" aria-hidden="true">#</a> 24\u3001\u5982\u4F55\u67E5\u770B\u5206\u652F\u63D0\u4EA4\u7684\u5386\u53F2\u8BB0\u5F55\uFF1F\u67E5\u770B\u67D0\u4E2A\u6587\u4EF6\u7684\u5386\u53F2\u8BB0\u5F55\u5462\uFF1F</h2><p>\u67E5\u770B\u5206\u652F\u7684\u63D0\u4EA4\u5386\u53F2\u8BB0\u5F55\uFF1A</p><ul><li>\u547D\u4EE4 git log \u2013number\uFF1A\u8868\u793A\u67E5\u770B\u5F53\u524D\u5206\u652F\u524D number \u4E2A\u8BE6\u7EC6\u7684\u63D0\u4EA4\u5386\u53F2\u8BB0\u5F55\uFF1B</li><li>\u547D\u4EE4 git log \u2013number \u2013pretty=oneline\uFF1A\u5728\u4E0A\u4E2A\u547D\u4EE4\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u7B80\u5316\uFF0C\u53EA\u663E\u793A sha-1 \u7801\u548C\u63D0\u4EA4\u4FE1\u606F\uFF1B</li><li>\u547D\u4EE4 git re\uFB02og \u2013number: \u8868\u793A\u67E5\u770B\u6240\u6709\u5206\u652F\u524D number \u4E2A\u7B80\u5316\u7684\u63D0\u4EA4\u5386\u53F2\u8BB0\u5F55\uFF1B</li><li>\u547D\u4EE4 git re\uFB02og \u2013number \u2013pretty=oneline\uFF1A\u663E\u793A\u7B80\u5316\u7684\u4FE1\u606F\u5386\u53F2\u4FE1\u606F\uFF1B</li></ul><p>\u5982\u679C\u8981\u67E5\u770B\u67D0\u6587\u4EF6\u7684\u63D0\u4EA4\u5386\u53F2\u8BB0\u5F55\uFF0C\u76F4\u63A5\u5728\u4E0A\u9762\u547D\u4EE4\u540E\u9762\u52A0\u4E0A\u6587\u4EF6\u540D\u5373\u53EF\u3002</p><p>\u6CE8\u610F\uFF1A\u5982\u679C\u6CA1\u6709 number \u5219\u663E\u793A\u5168\u90E8\u63D0\u4EA4\u6B21\u6570\u3002</p><h2 id="_25\u3001\u4F7F\u7528\u8FC7git-merge-\u548Cgit-rebase\u5417-\u5B83\u4EEC\u4E4B\u95F4\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_25\u3001\u4F7F\u7528\u8FC7git-merge-\u548Cgit-rebase\u5417-\u5B83\u4EEC\u4E4B\u95F4\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> 25\u3001\u4F7F\u7528\u8FC7git merge \u548Cgit rebase\u5417\uFF1F\u5B83\u4EEC\u4E4B\u95F4\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h2><p>\u7B80\u5355\u7684\u8BF4\uFF0Cgit merge \u548C git rebase \u90FD\u662F\u5408\u5E76\u5206\u652F\u7684\u547D\u4EE4\u3002 git merge branch \u4F1A\u628A branch \u5206\u652F\u7684\u5DEE\u5F02\u5185\u5BB9 pull \u5230\u672C\u5730\uFF0C\u7136\u540E\u4E0E\u672C\u5730\u5206\u652F\u7684\u5185\u5BB9\u4E00\u5E76\u5F62\u6210\u4E00\u4E2A committer \u5BF9\u8C61\u63D0\u4EA4\u5230\u4E3B\u5206\u652F\u4E0A\uFF0C\u5408\u5E76\u540E\u7684\u5206\u652F\u4E0E\u4E3B\u5206\u652F\u4E00\u81F4\uFF1B git rebase branch \u4F1A\u628A branch \u5206\u652F\u4F18\u5148\u5408\u5E76\u5230\u4E3B\u5206\u652F\uFF0C\u7136\u540E\u628A\u672C\u5730\u5206\u652F\u7684 commit \u653E\u5230\u4E3B\u5206\u652F\u540E\u9762\uFF0C\u5408\u5E76\u540E\u7684\u5206\u652F\u5C31\u597D\u50CF\u4ECE\u5408\u5E76\u540E\u4E3B\u5206\u652F\u53C8\u62C9\u4E86\u4E00\u4E2A\u5206\u652F\u4E00\u6837\uFF0C\u672C\u5730\u5206\u652F\u672C\u8EAB\u4E0D\u4F1A\u4FDD\u7559\u63D0\u4EA4\u5386\u53F2\u3002</p><h2 id="_26\u3001\u4F7F\u7528\u8FC7git-cherry-pick-\u6709\u4EC0\u4E48\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_26\u3001\u4F7F\u7528\u8FC7git-cherry-pick-\u6709\u4EC0\u4E48\u4F5C\u7528" aria-hidden="true">#</a> 26\u3001\u4F7F\u7528\u8FC7git cherry-pick\uFF0C\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F</h2><p>\u547D\u4EE4 git cherry-pick \u53EF\u4EE5\u628A branch A \u7684 commit \u590D\u5236\u5230 branch B \u4E0A\u3002 \u5728 branch B \u4E0A\u8FDB\u884C\u547D\u4EE4\u64CD\u4F5C\uFF1A</p><ul><li>\u590D\u5236\u5355\u4E2A\u63D0\u4EA4\uFF1Agit cherry-pick commitId</li><li>\u590D\u5236\u591A\u4E2A\u63D0\u4EA4\uFF1Agit cherry-pick commitId1\u2026commitId3</li></ul><p>\u6CE8\u610F\uFF1A\u590D\u5236\u591A\u4E2A\u63D0\u4EA4\u7684\u547D\u4EE4\u4E0D\u5305\u542B commitId1</p>`,104);function t(i,r){return n}var o=a(e,[["render",t],["__file","git.html.vue"]]);export{o as default};
