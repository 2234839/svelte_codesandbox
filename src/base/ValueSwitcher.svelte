<script>
	import { config_list_store } from "./store.js";
	import Range from "./select/Range.svelte";
	export let config;
	/** 用来绑定各种选择器用的 */
	let config_list = [];

	/** 如果存在默认值则使用默认值 */
	config_list_store.update(s => {
	  if (s.length) {
	    /** 存在则重载 */
	    config_list = s;
	  } else {
	    for (let k in config) {
	      config_list.push({
	        ref: k,
	        config: config[k],
	        value: config[k].default
	      });
	    }
	  }
	  return config_list;
	});

	/** 暴露出去给使用者使用选中值的 */
	let r = {};
	(function 循环() {
	  // 利用这个循环来更新值，将选择的值更新到r,外部组件再使用r来获取用户选中的值
	  const tmp = {};
	  config_list.forEach(el => {
	    tmp[el.ref] = el.value;
	  });
	  r = tmp;
	  requestAnimationFrame(循环);
	})();
</script>
<div class="appear">
	<slot r={r} ></slot>
</div>
<div class="config-list" style="margin-top:15px">
	{#each config_list as item,key}
		<div>{item.ref}</div>
		<div>
			{#if item.config.type==="color" }
				<!-- 颜色选择器 -->
				<input bind:value={item.value} type="color"/>
			{:else if item.config.type==="range"}
				<!-- 数值范围选择器 -->
				<Range bind:value={item.value} min={item.config.min} max={item.config.max} showInput={true}} />
			{:else if item.config.type==="select"}
				<select bind:value={item.value}>
					{#each item.config.items as el}
						{#if typeof el==="object"}
							<option value={el.value}>{el.name}</option>
						{:else}
							<option value={el}>{el}</option>
						{/if}
					{/each}
				</select>
			{:else}
				<b>未定义的值</b>
			{/if}
		</div>
	{/each}
</div>

<style>
	.config-list {
	  display: grid;
	  grid-template-columns: max-content auto;
	}
	.appear {
	  padding: 30px;
	  border: 1px solid #000;
	}
</style>
