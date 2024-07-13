import { _ as __nuxt_component_0 } from "./Art-DH2yjbuD.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { f as frogImage } from "./frog-Dr059lxH.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _sfc_main = defineComponent({
  name: "ArtPortfolio",
  components: {
    Art: __nuxt_component_0
  },
  data() {
    return {
      artworks: [
        {
          imagePath: frogImage,
          name: "Frog",
          description: "My first animation, a frog!",
          date: "2023-03-08"
        }
      ]
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Art = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto p-4" }, _attrs))}><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"><!--[-->`);
  ssrRenderList(_ctx.artworks, (art, index) => {
    _push(ssrRenderComponent(_component_Art, {
      key: index,
      imagePath: art.imagePath,
      name: art.name,
      description: art.description,
      date: art.date
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/animations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const animations = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  animations as default
};
//# sourceMappingURL=animations-c3TwVD6w.js.map
