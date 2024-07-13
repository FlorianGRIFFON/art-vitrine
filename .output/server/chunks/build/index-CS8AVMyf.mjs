import { _ as __nuxt_component_0 } from './Art-DH2yjbuD.mjs';
import { defineComponent, useSSRContext, mergeProps } from 'vue';
import { f as fortuneImage, e as exilivianImage, k as kataraImage, a as kostarttImage, s as secretsantaImage, l as leesinImage, p as patchouliImage, b as splatoonImage, o as originalcharacterImage } from './originalcharacter-CKCEmc36.mjs';
import { e as exo2Image, a as exo3Image, b as exo4Image } from './exo4-DXjMfG4d.mjs';
import { f as frogImage } from './frog-Dr059lxH.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
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

const _sfc_main = defineComponent({
  name: "ArtPortfolio",
  components: {
    Art: __nuxt_component_0
  },
  data() {
    return {
      artworks: [
        {
          imagePath: fortuneImage,
          name: "Fortune",
          description: "A depiction of fate and chance.",
          date: "2024-01-01"
        },
        {
          imagePath: exilivianImage,
          name: "Exilivian",
          description: "Do it in your style!",
          date: "2024-02-01"
        },
        {
          imagePath: kataraImage,
          name: "Katara",
          description: "Fan art of Katara disguised as the Painted Lady --> Character belonging to the Avatar, the Last Airbender license.",
          date: "2024-03-01"
        },
        {
          imagePath: kostarttImage,
          name: "Kostartt",
          description: "Do it in your style!",
          date: "2024-04-01"
        },
        {
          imagePath: secretsantaImage,
          name: "Secret Santa",
          description: 'Illustration for a secret Santa, the goal being to have the themes "Japan" and "Christmas" combined (The illustration must be to the taste of the person to whom it is offered). 1st place \u{1F3C6}',
          date: "2024-05-01"
        },
        {
          imagePath: leesinImage,
          name: "Leesin",
          description: "Fan art of Lee Sin --> Character belonging to the League of Legends license",
          date: "2024-06-01"
        },
        {
          imagePath: patchouliImage,
          name: "Patchouli",
          description: "Illustration for a telephone art = challenge in which a first artist creates a drawing and then gives it to the next artist who does the same. As the drawing is passed down and redrawn, it is interpreted and changes naturally with different artistic styles.",
          date: "2024-07-01"
        },
        {
          imagePath: splatoonImage,
          name: "Splatoon",
          description: "Fan art of Number 3 --> Character belonging to the Splatoon license.",
          date: "2024-08-01"
        },
        {
          imagePath: originalcharacterImage,
          name: "Original Character",
          description: "An original character design concept.",
          date: "2024-09-01"
        },
        // {
        //   imagePath: exo1Image,
        //   name: 'Exo1',
        //   description: 'Exercising!',
        //   date: '2023-08-30',
        // },
        {
          imagePath: exo2Image,
          name: "Exo2",
          description: "Exercising",
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
  ssrRenderList(_ctx.artworks, (art, index2) => {
    _push(ssrRenderComponent(_component_Art, {
      key: index2,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CS8AVMyf.mjs.map
