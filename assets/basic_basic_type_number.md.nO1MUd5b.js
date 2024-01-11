import{_ as s,c as i,o as a,U as t}from"./chunks/framework.vKaV7pYm.js";const c=JSON.parse('{"title":"数值类型","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"basic/basic_type/number.md","filePath":"basic/basic_type/number.md","lastUpdated":1704979746000}'),h={name:"basic/basic_type/number.md"},n=t(`<h1 id="数值类型" tabindex="-1">数值类型 <a class="header-anchor" href="#数值类型" aria-label="Permalink to &quot;数值类型&quot;">​</a></h1><blockquote><p>数值类型是语言运行时的基本类型，当它编译为机器码时，其中包含着许多的 <em>CPU运算器</em> 的操作指令。</p></blockquote><h2 id="整数" tabindex="-1">整数 <a class="header-anchor" href="#整数" aria-label="Permalink to &quot;整数&quot;">​</a></h2><h3 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-label="Permalink to &quot;类型&quot;">​</a></h3><p>在 zig 中，对整数的类型划分很详细，以下是类型表格：</p><table><thead><tr><th>类型</th><th>对应C类型</th><th>描述</th></tr></thead><tbody><tr><td><code>i8</code></td><td><code>int8_t</code></td><td>有符号8位整数</td></tr><tr><td><code>u8</code></td><td><code>uint8_t</code></td><td>无符号8位整数</td></tr><tr><td><code>i16</code></td><td><code>int16_t</code></td><td>有符号16位整数</td></tr><tr><td><code>u16</code></td><td><code>uint16_t</code></td><td>无符号16位整数</td></tr><tr><td><code>i32</code></td><td><code>int32_t</code></td><td>有符号32位整数</td></tr><tr><td><code>u32</code></td><td><code>uint32_t</code></td><td>无符号32位整数</td></tr><tr><td><code>i64</code></td><td><code>int64_t</code></td><td>有符号64位整数</td></tr><tr><td><code>u64</code></td><td><code>uint64_t</code></td><td>无符号64位整数</td></tr><tr><td><code>i128</code></td><td><code>__int128</code></td><td>有符号128位整数</td></tr><tr><td><code>u128</code></td><td><code>unsigned __int128</code></td><td>无符号128位整数</td></tr><tr><td><code>isize</code></td><td><code>intptr_t</code></td><td>有符号指针大小的整数</td></tr><tr><td><code>usize</code></td><td><code>uintptr_t</code> <code>size_t</code></td><td>无符号指针大小的整数</td></tr><tr><td><code>comptime_int</code></td><td>无</td><td>编译期的整数，整数字面量的类型</td></tr></tbody></table><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 下划线可以放在数字之间作为视觉分隔符</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> one_billion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1_000_000_000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> binary_mask</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0b1_1111_1111</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0o7_5_5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> big_address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0xFF80_0000_0000_0000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>同时 zig 支持任意位宽的整数，使用 <code>u</code> 或者 <code>i</code> 后面加数字即可，例如 <code>i7</code> 代表有符号的7位整数，整数类型允许的最大位宽为<code>65535</code>。</p><div class="tip custom-block"><p class="custom-block-title">🅿️ 提示</p><p><code>usize</code> 和 <code>isize</code> 这两种类型的的大小取决于，运行程序的目标计算机 CPU 的类型：32 位 CPU 则两个类型均为 32 位，64 位同理。</p></div><h3 id="不同进制" tabindex="-1">不同进制 <a class="header-anchor" href="#不同进制" aria-label="Permalink to &quot;不同进制&quot;">​</a></h3><p>你可以使用以下方式书写字面量：</p><table><thead><tr><th>字面量</th><th>示例</th></tr></thead><tbody><tr><td>十进制</td><td>98222</td></tr><tr><td>十六进制</td><td>0xff</td></tr><tr><td>八进制</td><td>0o755</td></tr><tr><td>二进制</td><td>0b11110000</td></tr></tbody></table><h3 id="除零" tabindex="-1">除零 <a class="header-anchor" href="#除零" aria-label="Permalink to &quot;除零&quot;">​</a></h3><p>zig 编译器对于除零的处理是分别在编译期和运行时（除 <code>ReleaseSmall</code> 构建模式外）进行检测，编译时检测出错误则直接停止编译，运行时如果出错会给出完整的堆栈跟踪。</p><details class="details custom-block"><summary>小细节</summary><p>这里的“除零”包括了 <em>除法</em> 和 <em>求余</em> 两种操作！</p></details><p>编译期：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">comptime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">i32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">i32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    _</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zig</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_comptime_division_by_zero.zig</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docgen_tmp/test_comptime_division_by_zero.zig:4:19:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> division</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zero</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> here</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> causes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> undefined</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> behavior</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    const</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                  ^</span></span></code></pre></div><p>运行时：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;std&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">u32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">u32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value: {}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, .{</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zig</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build-exe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> runtime_division_by_zero.zig</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./runtime_division_by_zero</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thread</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2456131</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> panic:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> division</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zero</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/home/ci/actions-runner/_work/zig-bootstrap/zig/docgen_tmp/runtime_division_by_zero.zig:6:15:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x21e83e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (runtime_division_by_zero)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    var</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">              ^</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/home/ci/actions-runner/_work/zig-bootstrap/out/host/lib/zig/std/start.zig:564:22:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x21e082</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> posixCallMainAndExit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (runtime_division_by_zero)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            root.main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                     ^</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/home/ci/actions-runner/_work/zig-bootstrap/out/host/lib/zig/std/start.zig:243:5:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x21dbd1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (runtime_division_by_zero)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    asm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> volatile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (switch (native_arch) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ^</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">???</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 0x0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ???</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">???</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">process</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> terminated</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> signal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="溢出" tabindex="-1">溢出: <a class="header-anchor" href="#溢出" aria-label="Permalink to &quot;溢出:&quot;">​</a></h3><p>zig 中，有以下默认操作可以导致溢出：</p><ul><li><code>+</code>（加法）</li><li><code>-</code>（减法）</li><li><code>-</code>（取反）</li><li><code>*</code>（乘法）</li><li><code>/</code>（除法）</li><li><a href="https://ziglang.org/documentation/0.11.0/#divTrunc" target="_blank" rel="noreferrer"><code>@divTrunc</code></a>（除法）</li><li><a href="https://ziglang.org/documentation/0.11.0/#divFloor" target="_blank" rel="noreferrer"><code>@divFloor</code></a>（除法）</li><li><a href="https://ziglang.org/documentation/0.11.0/#divExact" target="_blank" rel="noreferrer"><code>@divExact</code></a>（除法）</li></ul><p>还有在标准库 <code>@import(&quot;std&quot;).math</code> 中的函数可能导致溢出发生。</p><p>在编译期和运行时也分别有类似“除零”操作的检测和堆栈跟踪。</p><p><strong>处理溢出</strong>有两种方式，一种是使用内置的溢出处理函数，一种是环绕操作符。</p><p>内置溢出处理函数：</p><ul><li><a href="https://ziglang.org/documentation/0.11.0/#addWithOverflow" target="_blank" rel="noreferrer"><code>@addWithOverflow</code></a></li><li><a href="https://ziglang.org/documentation/0.11.0/#subWithOverflow" target="_blank" rel="noreferrer"><code>@subWithOverflow</code></a></li><li><a href="https://ziglang.org/documentation/0.11.0/#mulWithOverflow" target="_blank" rel="noreferrer"><code>@mulWithOverflow</code></a></li><li><a href="https://ziglang.org/documentation/0.11.0/#shlWithOverflow" target="_blank" rel="noreferrer"><code>@shlWithOverflow</code></a></li></ul><p>这些内建函数返回一个元组，其中包含是否存在溢出（作为 <code>u1</code>）以及操作中可能溢出的位.</p><p>环绕操作符：</p><ul><li><code>+%</code>（加法环绕）</li><li><code>-%</code>（减法环绕）</li><li><code>-%</code>（取反环绕）</li><li><code>*%</code>（乘法环绕）</li></ul><p>这些操作符保证了环绕语义（它们会取计算后溢出的值）。</p><h2 id="浮点数" tabindex="-1">浮点数 <a class="header-anchor" href="#浮点数" aria-label="Permalink to &quot;浮点数&quot;">​</a></h2><p>浮点数就是表示带有小数点的数字。在 zig 中，浮点数有 <code>f16</code>、<code>f32</code>、<code>f64</code>、<code>f80</code>、<code>f128</code>、<code>c_longdouble</code>（对应C ABI的 <code>long double</code> ）。</p><p>值得注意的是，<code>comptime_float</code> 具有 <code>f128</code> 的精度和运算。</p><p>浮点字面量则是具有 <em>任意浮点类型</em>，如果没有分母会被转换为 <em>任意整数类型</em> 。</p><p>浮点运算时遵循 <code>Strict</code> 模式，但是可以使用 <code>@setFloatMode(.Optimized)</code> 切换到 <code>Optimized</code> 模式，有关浮点运算的模式，详见 <a href="https://ziglang.org/documentation/0.11.0/#setFloatMode" target="_blank" rel="noreferrer"><code>@setFloatMode</code></a>。</p><div class="info custom-block"><p class="custom-block-title">🅿️ 提示</p><p>zig 并未像其他语言那样默认提供了 NaN、无穷大、负无穷大这些语法，如果需要使用它们，请使用标准库：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;std&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> inf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">math</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">inf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> negative_inf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">math</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">inf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> nan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">math</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f128</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></div><details class="details custom-block"><summary>注意浮点数陷阱</summary><ol><li><p>由于计算机是二进制的特性，导致浮点数往往是以近似值的方式存储（受制于浮点精度，例如有些分数无法用小数表示）。</p></li><li><p>浮点数在某些操作上是反直觉的，这也是精度问题导致的，来看个例子：</p></li></ol><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;std&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // assert用于断言，常用于单元测试和调试</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>你一定以为这个可以通过断言，0.1 + 0.2 很明显就应该是 0.3 嘛，但实际上在运行时会直接奔溃！</p></details><h2 id="运算" tabindex="-1">运算 <a class="header-anchor" href="#运算" aria-label="Permalink to &quot;运算&quot;">​</a></h2><p>常规的运算有等于(<code>==</code>)，不等于(<code>!=</code>)，大于(<code>&gt;</code>)，小于(<code>&lt;</code>)，大于等于(<code>&gt;=</code>)，小于等于(<code>&lt;=</code>)，加减乘除（<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>），左移右移(<code>&lt;&lt;</code>,<code>&gt;&gt;</code>)，与或非(<code>and</code>, <code>or</code>, <code>!</code>)，按位与(<code>&amp;</code>)，按位或(<code>|</code>)，按位异或(<code>^</code>)，按位非(<code>~</code>)，</p><blockquote><p>常见的加减乘除我们就不聊了，聊点 zig 中独具特色的小玩意。</p></blockquote><ul><li><code>+|</code>：饱和加法，这涉及到[对等类型解析]，你现在只需要知道加法结果最多只是该类型的极限即可，例如 <code>u8</code> 类型的 255 + 1 后还是 255 。</li><li><code>-|</code>：饱和减法，和上面一样，减法结果最小为该类型的极限。</li><li><code>*|</code>：饱和乘法，同上，乘法结果最大或最小为该类型的极限。</li><li><code>&lt;&lt;|</code>：饱和左移，同之前，结果为该类型的极限。</li><li><code>++</code>：矩阵（数组）串联，需要两个矩阵（数组）是相同大小（长度）。</li><li><code>**</code>：矩阵乘（数组）法，需要在编译期已知矩阵（数组）的大小（长度）和乘的倍数。</li></ul><p>运算的优先级：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 以下有一部分运算符你么见过不要紧，后续会讲解</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.?</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -%</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ~</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ?</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> %</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *%</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ++</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +%</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -%</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -|</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;|</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ^</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> orelse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> catch</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt; &gt; &lt;= &gt;=</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">or</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">= </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *%=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *|=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> %=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +%=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +|=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -%=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -|=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;|=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ^=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |=</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">🅿️ 提示</p><p>如果你有使用复数的需求，那么你需要自己实现相关的结构体了（我还未在社区发现高质量的相关包）。</p></div>`,47),l=[n];function k(p,e,d,r,o,E){return a(),i("div",null,l)}const F=s(h,[["render",k]]);export{c as __pageData,F as default};
