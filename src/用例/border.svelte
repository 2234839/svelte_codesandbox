<script>
	import ValueSwitcher from "../base/ValueSwitcher.svelte";
	import { value_map } from "../base/util.js";
	let config = {
	  color: { default: "#009345", type: "color" },
	  width: { default: 20, type: "range", max: 100, min: 0 },
	  height: { default: 20, type: "range", max: 100, min: 0 },
	  topWidth: { default: 20, type: "range", max: 100, min: 0 },
	  rightWidth: { default: 20, type: "range", max: 100, min: 0 },
	  bottomWidth: { default: 20, type: "range", max: 100, min: 0 },
	  leftWidth: { default: 20, type: "range", max: 100, min: 0 },

	  rotateZ: { default: 45, type: "range", max: 360, min: 0 }
	};
</script> 
<div> 
	<ValueSwitcher {config} let:r={s} >
		<div style="width:{s.width}px;height:{s.height}px;background:{s.color};
								border-top:{s.topWidth}px solid red;
								border-right:{s.rightWidth}px solid yellow;
								border-bottom:{s.bottomWidth}px solid black;
								border-left:{s.leftWidth}px solid blue;
								transform: rotateZ({s.rotateZ}deg);
								">
			
		</div>
	</ValueSwitcher>	
</div>