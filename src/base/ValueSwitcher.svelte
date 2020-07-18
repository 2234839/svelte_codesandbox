<script>
	export let config;
	/** 用来绑定各种选择器用的 */
	let config_list = [];
	for (let k in config) {
	  config_list.push({
	    ref: k,
	    config: config[k],
	    value: config[k].default
	  });
	}
	/** 暴露出去给使用者使用选中值的 */
	let r = {};
	function 循环() {
	  // 利用这个循环来更新值，将选择的值更新到r,外部组件再使用r来获取用户选中的值
	  const tmp = {};
	  config_list.forEach(el => {
	    tmp[el.ref] = el.value;
	  });
	  r = tmp;
	  requestAnimationFrame(循环);
	}
	循环();
</script> 
<slot r={r} ></slot>
<div style="margin-top:15px">
	{#each config_list as item,key}
		<div>
			{item.ref} :
			{#if item.config.type==="color" }
				<!-- 颜色选择器 -->
				<input bind:value={item.value} type="color"/>
			{:else if item.config.type==="range"}
				<input bind:value={item.value} min={item.config.min} max={item.config.max} type="range"/>
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
