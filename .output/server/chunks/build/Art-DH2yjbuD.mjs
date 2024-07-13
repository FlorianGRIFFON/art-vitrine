import { defineComponent, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = defineComponent({
  name: "Art",
  props: {
    imagePath: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "art-container mb-4" }, _attrs))} data-v-495b9df0><img${ssrRenderAttr("src", _ctx.imagePath)} alt="Art image" class="w-full h-auto object-cover rounded" data-v-495b9df0><h3 class="text-xl font-bold mt-2" data-v-495b9df0>${ssrInterpolate(_ctx.name)}</h3><p class="text-gray-600" data-v-495b9df0>${ssrInterpolate(_ctx.description)}</p><p class="text-sm text-gray-400" data-v-495b9df0>${ssrInterpolate(_ctx.date)}</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Art.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-495b9df0"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Art-DH2yjbuD.mjs.map
