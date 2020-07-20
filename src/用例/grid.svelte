<script>
	import ValueSwitcher from "../base/ValueSwitcher.svelte";
	// import { value_map } from "../base/util.js";
	let config = {
	  color: { default: "#009345", type: "color" },
	  size: { default: 20, type: "range", max: 100, min: 0 },
  };
  const list=new Array(100)
</script> 
<div> 
	<ValueSwitcher {config} let:r={s} >
    <div class="grid-wrap">
      {#each list as item}
        <div class="grid-wrap-item"></div>
      {/each}
    </div>
	</ValueSwitcher>	
</div>

<style>
.grid-wrap{
  display:grid;
  grid-template-columns: 60px 60px;
  grid-template-rows: 60px 60px 30px 10px 25px 10%;
  grid-template-areas: "a b b" 
                       "a c d"
}
.grid-wrap-item{
  padding:2px;
  background:red;
  outline:1px solid #333;
}
</style>