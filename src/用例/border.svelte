<script>
	import ValueSwitcher from "../base/ValueSwitcher.svelte";
	import { value_map } from "../base/util.js";
	let config = {
	  colorCentre: { default: "#009345", type: "color" },
	  colorTop: { default: "#00ffff", type: "color" },
	  colorRight: { default: "#ff00ff", type: "color" },
	  colorBottom: { default: "#ffff00", type: "color" },
	  colorLeft: { default: "#000", type: "color" },

	  width: { default: 20, type: "range", max: 100, min: 0 },
	  height: { default: 20, type: "range", max: 100, min: 0 },
	  topWidth: { default: 20, type: "range", max: 100, min: 0 },
	  rightWidth: { default: 20, type: "range", max: 100, min: 0 },
	  bottomWidth: { default: 20, type: "range", max: 100, min: 0 },
	  leftWidth: { default: 20, type: "range", max: 100, min: 0 },

	  rotateZ: { default: 45, type: "range", max: 360, min: 0 },

	  skewX: { default: 0, type: "range", max: 360, min: -360 },
	  skewY: { default: 0, type: "range", max: 360, min: -360 },

	  translate3d_X: { default: 0, type: "range", max: 360, min: 0 },
	  translate3d_Y: { default: 0, type: "range", max: 360, min: 0 },
	  translate3d_Z: { default: 0, type: "range", max: 360, min: 0 }
	};
</script> 
<div> 
	<ValueSwitcher {config} let:r={s} >
		<div style="width:{s.width}px;height:{s.height}px;background:{s.colorCentre};
								border-top:{s.topWidth}px solid {s.colorTop};
								border-right:{s.rightWidth}px solid {s.colorRight};
								border-bottom:{s.bottomWidth}px solid {s.colorBottom};
								border-left:{s.leftWidth}px solid {s.colorLeft};
								transform: rotateZ({s.rotateZ}deg)
													 translate3d({s.translate3d_X}px,{s.translate3d_Y}px,{s.translate3d_Z}px)
													 skew({s.skewX}deg,{s.skewY}deg);
								">
			
		</div>
	</ValueSwitcher>

	<a target="tab" href="./#code/N4IgxgrgTg+gLgSzgGwKYgFwgEYHsoAmqUAFIKrKg4BaB+3oJBygS5GBG+gJQgA040MCmAjO2LgB2AMwQBzGMgQBnOJgDaoKKmGZwuZPgDCqQXGVt1I8ZlBFhAQwjI5WAMQAGBwE4AzABYArIbgBPAA7oWAKaUCAAvuwAbhbIEEEgji4e3pFKKmoh+AAquP6GAsZipiDmVjZqScLVqux+gZka+BHRsfGVNTUt6arBTVAASuIAFnL8QqLFGGYq5baJ1U7VPgEJWWGRIDFxCXady2kgyr3qoQBCuHBwuAC2BRMm06Wz1vN7NU4rDX2hLVttu32qkOx0aoQAMioxkZJiUyq9Kk4HF81v0-tt2vYkd0jhksAB3BAEODDe5FOEvCoYABMDjqqzUUAsgjE6HYNwsAA9eE52QhBJgHJsMUEhawemphqgRtDCrCnvCqbT6d8jszWYYOdyMDxeSAbvzBcKAUbxbiTtd-AB1IkksnymaWBE0ukgeoJJkstn6rk810GgUYMX-HaYTxiiVYKAym3E0njckKym2ZVuhlR9XerV+vmB4Mi02RnCXa43WN2hMO55OpWu92MzOa306vUB00hzHhkF4kBoYRwcvxmGPR1zTCp+sZr1N7W6-2GoPG0MYLtm0FRy4WOCoABa9pH1bHGC8Ko9jfZzdcADZ53ml5ihQBdcJAA" >三角形</a>	
</div>