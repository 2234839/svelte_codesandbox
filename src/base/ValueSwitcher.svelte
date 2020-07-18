<script>
	export let config;
	let config_list = [];
	for (let k in config) {
	  config_list.push({
	    ref: k,
	    config: config[k],
	    value: config[k].default
	  });
	  console.log(k);
	}
	let s = {};
	function 循环() {
	  // 利用这个循环来更新值
	  const r = {};
	  config_list.forEach(el => {
	    r[el.ref] = el.value;
	  });
	  s = r;
	  requestAnimationFrame(循环);
	}
	循环();
</script> 
<slot r={s} ></slot>
<div style="margin-top:15px">
	{#each config_list as item,key}
		<div>
			ref : {item.ref}
			{#if item.config.type==="color"}
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
