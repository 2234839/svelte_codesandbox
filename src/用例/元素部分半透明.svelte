<script>
	import ValueSwitcher from "../base/ValueSwitcher.svelte";
	import { value_map } from "../base/util.js";
	let config = {
	  top: { default: 20, type: "range", max: 100, min: 0 },
	  maskMode: {
	    default: "alpha",
	    type: "select",
	    items: value_map["mask-mode"].split(",")
	  }
	};
</script> 
<div> 

	<ValueSwitcher {config} let:r={s} >
		<div class="body">
			<div class="mode" style="mask-mode1:{s.maskMode}">
				<div class="item" style="margin-top:{s.top}px">
					透明测试
				</div>
				<div class="item">透明测试</div>	
				<div class="item">透明测试</div>	
				<div class="item">透明测试</div>	
				<div class="item">透明测试</div>	
				<div class="item">透明测试</div>	
				
			</div>
		</div>
	</ValueSwitcher>	
</div>
<style>
	.mode {
	  height: 200px;
	  width: 300px;
	  padding: 1px;
	  border: 3px solid #fff;
	  /* and more */
	  mask-image: linear-gradient(to bottom, #00000000, #00000000, #ffffffff 40%);
	  mask-mode: alpha; /*  luminance也可以但兼容性不好 */
	}

	.body {
	  background-image: url(https://shenzilong.cn/util/redirect_to_bing_daily_picture_address);
	  background-size: 100% 100%;
	  position: relative;
	  padding: 0 6px;
	}
	.item {
	  border: 1px solid black;
	  background: yellow;
	}
</style>
