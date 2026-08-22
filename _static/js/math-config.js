// MathJax 配置（必须在加载核心前执行）

/**
 * 站点基础路径 SITE_BASE
 * 在脚本【同步执行时】捕获本文件的完整路径，据此推断站点根路径，
 * 从而正确定位本地 MathJax 字体（支持 GitHub Pages 子路径部署）。
 *
 * 注意：不能在 startup.ready（异步回调）里用 document.currentScript，
 * 那里它可能为 null 或指向 MathJax 核心脚本，不可靠。
 */
const _mathConfigScript = document.currentScript;
const SITE_BASE = (_mathConfigScript && _mathConfigScript.src)
  ? new URL(_mathConfigScript.src).pathname.replace(/\/_static\/js\/math-config\.js$/, '')
  : '';

window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],      // 行内公式定界符
    displayMath: [['$$', '$$'], ['\\[', '\\]']],   // 行间公式定界符
    processEscapes: true,                           // 允许转义 \$ 等
    //packages: { '[+]': ['boldsymbol'] }             // 加载额外宏包（如粗体符号）
    macros:{
      bs: ["\\boldsymbol{ #1 }",1],
      abs: ["\\left|{ #1 }\\right|",1],
      dd: ["\\mathrm{d}{ #1 }",1],
      dst: "\\displaystyle"
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
      // document 已创建、渲染开始前，强制关闭语义增强
      try {
        if (MathJax.startup.document) {
          MathJax.startup.document.options.enableEnrichment = false;
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