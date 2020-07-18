import lz_string from "lz-string";

export const value_map = {
  "justify-content":
    "start,flex-start,flex-end,center,left,right,baseline,first baseline,last baseline,space-between,space-around,space-evenly,stretch,safe,unsafe",
  "mask-mode": `alpha,luminance,match-source,inherit,initial,unset`
};

export const LZString = {
  compressToEncodedURIComponent(str) {
    return lz_string.compressToEncodedURIComponent(str);
  },
  decompressFromEncodedURIComponent(str) {
    return lz_string.decompressFromEncodedURIComponent(str);
  }
};
