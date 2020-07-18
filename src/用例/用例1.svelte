<script>
	import ValueSwitcher from "../base/ValueSwitcher.svelte";
	import { value_map } from "../base/util.js";
	let config = {
	  color: { default: "#009345", type: "color" },
	  size: { default: 20, type: "range", max: 100, min: 0 },
	  width: { default: 20, type: "range", max: 100, min: 0 },
	  select: {
	    default: "马云",
	    type: "select",
	    items: ["小猫", "anny", "杰克马", { name: "我对钱没有兴趣", value: "马云" }]
	  },
	  justifyContent: {
	    default: "start",
	    type: "select",
	    items: value_map["justify-content"].split(",")
	  }
	};
</script> 
<div> 
	<ValueSwitcher {config} let:r={s} >
		<h1 style="color:{s.color};font-size:{s.size}px"> {s.select}! {s.color}</h1>
	</ValueSwitcher>	
</div>