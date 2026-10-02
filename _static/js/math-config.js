// MathJax 配置（必须在加载核心前执行）

/**
 * 站点基础路径 SITE_BASE —— 硬编码，零运行时推断
 *
 * 站点始终位于 /adv-math-wiki 子路径下：
 *   - 线上 GitHub Pages: https://r-a-s-p.github.io/adv-math-wiki/...
 *   - 本地 mkdocs serve: http://127.0.0.1:8000/adv-math-wiki/...
 *     （MkDocs 会沿用 mkdocs.yml 中 site_url 的子路径）
 *
 * 若修改了 site_url 或部署路径，只需同步改动下面这一行。
 */
const SITE_BASE = '/adv-math-wiki';

window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],      // 行内公式定界符
    displayMath: [['$$', '$$'], ['\\[', '\\]']],   // 行间公式定界符
    processEscapes: true,                           // 允许转义 \$ 等
    //packages: { '[+]': ['boldsymbol'] }             // 加载额外宏包（如粗体符号）

    // ——— 与项目根目录 preamble.sty 保持同步 ———
    // 无参数宏用字符串；带参数宏用 [展开式, 参数个数]
    macros: {
      abs: ["\\left| #1 \\right|", 1],                    // \abs{#1}
      bs: ["\\boldsymbol{#1}", 1],                        // \bs{#1}
      dd: "\\mathrm{d}",                                  // \dd
      dint: "{\\displaystyle\\int}",                      // \dint
      dprod: "{\\displaystyle\\prod}",                    // \dprod
      dst: "\\displaystyle",                              // \dst
      dsum: "{\\displaystyle\\sum}",                      // \dsum
      dv: ["\\dfrac{\\mathrm{d} #1 }{\\mathrm{d} #2 }", 2],              // \dv{#1}{#2}
      ee: "\\mathrm{e}",                                  // \ee
      eval: ["\\left. #1 \\right|", 1],                   // \eval{#1}
      grad: "\\mathrm{grad}\\;",                          // \grad
      ii: "\\mathrm{i}",                                  // \ii
      jj: "\\mathrm{j}",                                  // \jj
      ndv: ["\\dfrac{\\mathrm{d}^{#3} #1 }{\\mathrm{d} {#2}^{#3} }", 3], // \ndv{#1}{#2}{#3}
      twodphessian: ["\\begin{pmatrix}\\dfrac{\\partial^2 #1}{\\partial^2 x}&\\dfrac{\\partial^2 #1}{\\partial x\\partial y}\\\\ \\dfrac{\\partial^2 #1}{\\partial x\\partial y}&\\dfrac{\\partial^2 #1}{\\partial^2 y}\\end{pmatrix}", 1],
      threedphessian: ["\\begin{pmatrix}\\dfrac{\\partial^2 #1}{\\partial^2 x}&\\dfrac{\\partial^2 #1}{\\partial x\\partial y}&\\dfrac{\\partial^2 #1}{\\partial x\\partial z}\\\\ \\dfrac{\\partial^2 #1}{\\partial x\\partial y}&\\dfrac{\\partial^2 #1}{\\partial^2 y}&\\dfrac{\\partial^2 #1}{\\partial y\\partial z}\\\\ \\dfrac{\\partial^2 #1}{\\partial x\\partial z}&\\dfrac{\\partial^2 #1}{\\partial y\\partial z}&\\dfrac{\\partial^2 #1}{\\partial z^2}\\end{pmatrix}", 1],
      twolim: ["\\lim\\limits_{(x,y)\\to #1}", 1],        // \twolim{#1}
      vector: ["\\left\\{ #1 \\right\\}", 1]              // \vector{#1}
    }
  },
  options: {
    ignoreHtmlClass: 'tex2jax_ignore',              // 忽略的 HTML 类
    processHtmlClass: 'tex2jax_process',            // 处理的 HTML 类
    enableMenu: false,                       // 禁用右键菜单和点击弹出的辅助框
    enableEnrichment: false,       // 关闭语义增强（SRE 会显著拖慢大量公式的渲染，如无无障碍需求应关闭）
    enableExplorer: false,                // 显式关闭公式探索器
  },
  loader: {
    //load: ['[tex]/boldsymbol'],                       // 预加载的扩展包
  },
  startup: {
    ready: () => {
      // 使用同步阶段算好的 SITE_BASE，设置本地字体路径（无需在回调里动态推断）
      MathJax.config.chtml = {
        font: 'mathjax-newcm', // 或你的字体
        fontURL: SITE_BASE + '/assets/vendor/MathJax-4.1.1/mathjax-fonts/mathjax-newcm-font/woff-v2',
        dynamicPrefix: SITE_BASE + '/assets/vendor/MathJax-4.1.1/mathjax-fonts/mathjax-newcm-font/dynamic',
        mtextInheritFont: true, // 设置\text命令内的字体 或使用 mtextFontInherit: true (取决于MathJax版本)
        matchFontHeight: false
      };

      // 强制关闭语义增强（SRE 会显著拖慢大量公式页面的渲染）。
      // 注意：config.options.enableEnrichment=false 可能被 a11y handler 的默认值覆盖，
      // 而 document 在 ready 时尚未创建，必须在 pageReady（渲染前）强制设置才生效。
      // 见下方 pageReady 钩子。
      // 调用默认的 ready 函数
      MathJax.startup.defaultReady();
    },
    pageReady: () => {
      // document 已创建、渲染开始前，强制关闭语义增强与探索器。
      // 注意：两者的 false 配置都可能被 a11y handler 的默认值覆盖，
      // 必须在渲染前直接设置 document 的 options 才生效。
      // 探索器激活时会在公式右上角显示 "i" 帮助图标（mjx-help），关闭后不再出现。
      try {
        const doc = MathJax.startup.document;
        if (doc) {
          doc.options.enableEnrichment = false;
          doc.options.enableExplorer = false;
        }
      } catch (e) {}
      return MathJax.startup.defaultPageReady();
    }
  },
  chtml: {
  /*  font: 'mathjax-newcm',
    fontURL: '{{ base_url }}/mathjax-fonts/mathjax-newcm-font/woff-v2',  // 字体文件地址（可换国内源）
    dynamicPrefix: '{{ base_url }}/mathjax-fonts/mathjax-newcm-font/dynamic',
    mtextInheritFont: true, // 设置\text命令内的字体 或使用 mtextFontInherit: true (取决于MathJax版本)
    matchFontHeight: false
    */
  }
};