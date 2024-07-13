import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './Art-DH2yjbuD.mjs';
import { defineComponent, useSSRContext, mergeProps } from 'vue';
import { e as exo2Image, a as exo3Image, b as exo4Image } from './exo4-DXjMfG4d.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const exo1Image = "" + buildAssetsURL("exo1.CdmUZms1.jpg");
const _sfc_main = defineComponent({
  name: "ArtPortfolio",
  components: {
    Art: __nuxt_component_0
  },
  data() {
    return {
      artworks: [
        {
          imagePath: exo2Image,
          name: "Exo2",
          description: "Exercising.",
          date: "2024-02-04"
        },
        {
          imagePath: exo3Image,
          name: "Exo3",
          description: "Exercising",
          date: "2024-02-01"
        },
        {
          imagePath: exo4Image,
          name: "Exo4",
          description: "Exercising?",
          date: "2024-03-01"
        },
        {
          imagePath: exo1Image,
          name: "Exo1",
          description: "Exercising!",
          date: "2023-08-30"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/studies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const studies = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { studies as default };
//# sourceMappingURL=studies--DxSSdft.mjs.map
