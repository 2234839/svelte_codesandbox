import { writable } from "svelte/store";

export const config_list_store = writable([]);

config_list_store.subscribe(value => {
  // console.log(value);
}); // logs '0'
