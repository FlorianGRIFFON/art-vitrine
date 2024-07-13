import { defineComponent, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = defineComponent({
  components: {}
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-container p-8" }, _attrs))} data-v-3e08eb91><h1 class="text-lg font-thin mb-4" data-v-3e08eb91> Clara is an artist living and working in France. <br data-v-3e08eb91> She received her Masters of Fine Arts in Painting &amp; Drawing at the University of Aix and her Bachelor of Fine Arts in Painting with an Honors Thesis in Glass from the School of Art at Toulon State University in Toulon. <br data-v-3e08eb91> Clara was born and raised in La Destrousse. <br data-v-3e08eb91><br data-v-3e08eb91> She is also the cutest person on earth, and I value her greatly. </h1><h2 class="font-medium pt-24" data-v-3e08eb91> For business inquiries: <a href="mailto:clagarcia03@gmail.com" class="text-blue-500 hover:underline" data-v-3e08eb91>clagarcia03@gmail.com</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3e08eb91"]]);

export { contact as default };
//# sourceMappingURL=contact-DGC7HUqf.mjs.map
