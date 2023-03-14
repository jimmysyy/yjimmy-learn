import{_ as n,p as s,q as a,a1 as p}from"./framework-5866ffd3.js";const t={},e=p(`<h2 id="一、包装类" tabindex="-1"><a class="header-anchor" href="#一、包装类" aria-hidden="true">#</a> 一、包装类</h2><p>基本数据类型：String Number Boolean Null Undefined</p><p>引用数据类型：Object</p><p><strong>在JS中为我们提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象</strong></p><p>1.String()：可以将基本数据类型字符串转换为String对象</p><p>2.Number()：可以将基本数据类型的数字转换为Number对象</p><p>3.Boolean()：可以将基本数据类型的布尔值转换为Boolean对象</p><p><strong>但是注意：我们在实际应用中不会使用基本数据类型的对象，如果使用基本数据类型的对象，在做一些比较时可能会带来一些不可预期的结果</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建一个Number类型的对象，num = 3;</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//但是验证类型输出为object，</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出object</span>
<span class="token comment">//所以其他三个皆同</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//所以可以向对象中添加一个属性</span>
num<span class="token punctuation">.</span>hello <span class="token operator">=</span> <span class="token string">&quot;abcdefg&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法和属性只能添加给对象，不能添加给基本数据类型</p><p>当我们对一些基本数据类型的值去调用属性和方法时，<strong>浏览器会临时使用包装类将其转换为对象，然后在调用对象的属性和方法，调用完以后，在将其转换为基本数据类型</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">tostring</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//临时的</span>
s<span class="token punctuation">.</span>hello <span class="token operator">=</span> <span class="token string">&quot;你好&quot;</span>；
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、字符串的相关方法" tabindex="-1"><a class="header-anchor" href="#二、字符串的相关方法" aria-hidden="true">#</a> 二、字符串的相关方法</h2><p>方法</p><p>1.length属性：可以用来获取字符串的长度</p><p>2.charAt()：可以返回字符串中指定位置的字符；根据索引获取指定的字符</p><p>3.charCodeAt()：获取指定位置字符的字符编码（Unicode编码）</p><p>4.String.formCharCode()：可以根据字符编码去获取字符</p><p>5.concat()：可以用来连接两个或多个字符串；作用和+一样</p><p>6.indexof()：</p><ul><li>该方法可以检索一个字符串中是否含有指定内容</li><li>如果字符串中含有该内容，则会返回其第一次出现的索引，如果没有找到指定的内容，则返回-1</li><li>可以指定一个第二个参数，指定开始查找的位置</li></ul><p>7.lastIndexOf();</p><ul><li>该方法的用法和indexOf()一样，不同的是indexOf是从前往后找，而lastIndexOf是从后往前找</li><li>也可以指定开始查找的位置</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;hello atguigu&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//在底层字符串是以字符数组的形式保存的</span>
<span class="token comment">//也就是类似[&quot;H&quot;,&quot;e&quot;,&quot;l&quot;]</span>
<span class="token comment">//1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//2</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//3</span>
result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//4</span>
result <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token number">0x2692</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//5</span>
result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;再见&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//6</span>
result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;h&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//7</span>
result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&quot;h&quot;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8.slice()：</p><ul><li><p>可以从字符串中截取指定的内容</p></li><li><p>不会影响原字符串，而是将截取到内容返回</p></li><li><p>参数：</p><p>第一个，开始位置的索引（包括开始位置）</p><p>第二个，结束位置的索引（不包括结束位置），- 如果省略第二个参数，则会截取到后边所有的</p><p>也可以传递一个负数作为参数，负数的话将会从后边计算</p></li></ul><p>9.substring()：</p><ul><li><p>可以用来截取一个字符串，可以slice()类似</p></li><li><p>参数：</p><p>第一个：开始截取位置的索引（包括开始位置）</p><p>第二个：结束位置的索引（不包括结束位置）</p><p>不同的是这个方法不能接受负值作为参数，如果传递了一个负值，则默认使用0</p><p>而且他还自动调整参数的位置，如果第二个参数小于第一个，则自动交换</p></li></ul><p>10.substr()：用来截取字符串</p><p>参数：1.截取开始位置的索引；2.截取的长度</p><p>11.split()：可以将一个字符串拆分为一个数组</p><p>参数：需要一个字符串作为参数，将会根据该字符串去拆分数组</p><p>注：如果传递一个空串作为参数，则会将每个字符都拆分为数组中的一个元素</p><p>12.toUpperCase()：将一个字符串转换为大写并返回</p><p>13.toLowerCase()：将一个字符串转换为小写并返回</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//8</span>
str <span class="token operator">=</span> <span class="token string">&quot;abcdefghijk&quot;</span><span class="token punctuation">;</span>
result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//9</span>
result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//10</span>
result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//11</span>
result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//注：如果传递一个空串作为参数，则会将每个字符都拆分为数组中的一个元素</span>
<span class="token comment">//12</span>
result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//13</span>
result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、正则表达式简介" tabindex="-1"><a class="header-anchor" href="#三、正则表达式简介" aria-hidden="true">#</a> 三、正则表达式简介</h2><p>正则表达式用于定义一些字符串的规则，计算机可以根据正则表达式，来检查一个字符串是否符合规则，获取将字符串中符合规则的内容提取出来</p><p>创建正则表达式的对象：</p><p><strong>语法：var 变量 = new RegExp(&quot;正则表达式&quot;,&quot;匹配模式&quot;);</strong></p><p>使用typeof检查正则对象，会返回object</p><p>var reg = new RegExp(&quot;a&quot;); 这个正则表达式可以来检查一个字符串中是否含有a</p><p><strong>在构造函数中可以传递一个匹配模式作为第二个参数</strong>：i 忽略大小写 ；g 全局匹配模式</p><p>正则表达式的方法：test()</p><p>使用这个方法可以用来检查一个字符串是否符合正则表达式的规则，如果符合则返回true，否则返回false</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;ab&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//验证正则</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//或者直接使用</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;Ac&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、正则语法" tabindex="-1"><a class="header-anchor" href="#四、正则语法" aria-hidden="true">#</a> 四、正则语法</h2><p>使用字面量来创建正则表达式</p><p><strong>语法：var 变量 = /正则表达式/匹配模式</strong></p><p>使用字面量的方式创建更加简单 / 使用构造函数创建更加灵活</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>teg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个正则表达式，检查一个字符串中是否有a或b</p><p><strong>使用 | 表示或者的意思</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a|b|c</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个正则表达式检查一个字符串中是否有字母</p><p>1.[]里的内容也是或的关系</p><p>2.[ab] == a|b</p><p>3.[a-z] 任意小写字母 [A-Z] 任意大写字母 [A-z] 任意字母 [0-9] 任意数字</p><p>检查一个字符串中是否含有 abc 或 adc 或 aec</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a[bde]c</span><span class="token regex-delimiter">/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>[^ ] 除了</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^ab]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^0-9]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;12a3456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,62),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","day6.html.vue"]]);export{r as default};
