<script>
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
      title: "border",
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
</script> 

<div>
  <select bind:value={cur}>
    {#each list as el}
        <option value={el}>{el.title}</option>
    {/each}
  </select>
  <blockquote>{cur.describe || 'no describe'}</blockquote>
</div>


<svelte:component this={cur.component}/>


