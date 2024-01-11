import{_ as s,c as a,o as i,U as e}from"./chunks/framework.vKaV7pYm.js";const g=JSON.parse('{"title":"unreachable","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"basic/process_control/unreachable.md","filePath":"basic/process_control/unreachable.md","lastUpdated":1704979746000}'),n={name:"basic/process_control/unreachable.md"},t=e(`<h1 id="unreachable" tabindex="-1">unreachable <a class="header-anchor" href="#unreachable" aria-label="Permalink to &quot;unreachable&quot;">​</a></h1><p>在 <code>Debug</code> 和 <code>ReleaseSafe</code> 模式下，<code>unreachable</code> 会调用 <code>panic</code> ，并显示消息达到 unreachable code。</p><p>在 <code>ReleaseFast</code> 和 <code>ReleaseSmall</code> 模式下，编译器假设永远不会执行到 <code>unreachable</code> 来对代码进行优化 。</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    unreachable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,4),l=[t];function h(p,c,k,r,d,o){return i(),a("div",null,l)}const _=s(n,[["render",h]]);export{g as __pageData,_ as default};
