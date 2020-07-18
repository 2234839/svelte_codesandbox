<script>
  export let value;
  export let min;
  export let max;
  /** boolean 控制是否显示精确数值输入框 */
  export let showInput = false;

  function onInput(e) {
    setTimeout(() => {
      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      } else {
      }
    });
  }
</script>

<input bind:value={value} {min} {max} type="range"/>
{#if showInput}
  <input on:input={onInput} bind:value={value} {min} {max} type="number" placeholder="min:{min} max:{max}" />
{/if}