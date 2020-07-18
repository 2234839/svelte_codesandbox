<script>
  import { LZString } from "./src/base/util.js";
  import { config_list_store } from "./src/base/store.js";
  import Example1 from "./src/用例/用例1.svelte";
  import Example2 from "./src/用例/border.svelte";
  import Example3 from "./src/用例/元素部分半透明.svelte";

  const list = [
    {
      title: "用例1",
      component: Example1,
      describe: "可以通过这个查看大致的使用方式"
    },
    {
      title: "border(单标签三角形)",
      component: Example2,
      describe: "可用用来构建各种各样的单标签三角形"
    },
    {
      title: "元素部分半透明",
      component: Example3,
      describe: "这个在chrome上的兼容性一般般，但在手机上完全可以尝试使用了"
    }
  ];
  let cur = list[1];
  try {
    loadConfig();
  } catch (error) {
    console.error(error);
  }
  function on_cur_change() {
    /** 切换到其他组件了，置空，这里实际是有问题的。ValueSwicher 无法确定当前配置是自己的，不然这里就不用置空了 */
    config_list_store.update(s => []);
  }

  function loadConfig(params) {
    const compress_code = document.location.hash.replace("#code/", "").trim();
    const code = LZString.decompressFromEncodedURIComponent(compress_code);
    if (!code) {
      return;
    }
    const config = JSON.parse(code);
    if (typeof config.cur_i === "number") {
      cur = list[config.cur_i];
    }
    config_list_store.update(s => config.config_list || []);
  }

  function share() {
    const share_config = {
      cur_title: cur.title,
      cur_i: list.findIndex(el => el === cur),
      config_list: $config_list_store
    };
    console.log("share_config", share_config);
    const hash = LZString.compressToEncodedURIComponent(
      JSON.stringify(share_config)
    );
    const cur_path = document.location.origin + document.location.pathname;
    window.history.replaceState({}, "", `${cur_path}#code/${hash}`);
  }
</script> 

<div>
  <select on:change={on_cur_change} bind:value={cur}>
    {#each list as el}
        <option value={el}>{el.title}</option>
    {/each}
  </select>
  <button on:click={share} >生成分享url(点击后复制地址栏的url分享给他人)</button>
  <blockquote>{cur.describe || 'no describe'}</blockquote>
</div>


<svelte:component this={cur.component}/>


