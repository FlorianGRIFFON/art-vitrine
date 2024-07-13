import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Duvjf_-f.mjs';
import { _ as _export_sfc, a as __nuxt_component_1 } from './server.mjs';
import { defineComponent, useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { useRoute } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = defineComponent({
  name: "DefaultLayout",
  setup() {
    const route = useRoute();
    const isActive = (path) => {
      return route.path === path;
    };
    return {
      isActive
    };
  }
});
const _imports_0 = "" + buildAssetsURL("instagram-logo.BODjoKo1.png");
const _imports_1 = "" + buildAssetsURL("redbubble-logo.TxhhuhIK.png");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}><div id="sidebar" class="fixed h-screen w-[20rem] p-8 border-r-2 flex flex-col gap-2">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "pb-4",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="cursor-pointer text-black text-3xl font-bold"${_scopeId}>Clara Garcia</span>`);
      } else {
        return [
          createVNode("span", { class: "cursor-pointer text-black text-3xl font-bold" }, "Clara Garcia")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/digital-drawings" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="${ssrRenderClass(["cursor-pointer text-black text-lg font-thin", _ctx.isActive("/digital-drawings") ? "bg-yellow-300" : "hover:bg-yellow-300", "duration-150 ease-in-out"])}"${_scopeId}>digital drawings</span>`);
      } else {
        return [
          createVNode("span", {
            class: ["cursor-pointer text-black text-lg font-thin", _ctx.isActive("/digital-drawings") ? "bg-yellow-300" : "hover:bg-yellow-300", "duration-150 ease-in-out"]
          }, "digital drawings", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/animations" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="${ssrRenderClass(["cursor-pointer text-black text-lg font-thin", _ctx.isActive("/animations") ? "bg-yellow-300" : "hover:bg-yellow-300", "duration-150 ease-in-out"])}"${_scopeId}>animations</span>`);
      } else {
        return [
          createVNode("span", {
            class: ["cursor-pointer text-black text-lg font-thin", _ctx.isActive("/animations") ? "bg-yellow-300" : "hover:bg-yellow-300", "duration-150 ease-in-out"]
          }, "animations", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/studies" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="${ssrRenderClass(["cursor-pointer text-black text-lg font-thin", _ctx.isActive("/studies") ? "bg-yellow-300" : "hover:bg-yellow-300", "duration-150 ease-in-out"])}"${_scopeId}>studies</span>`);
      } else {
        return [
          createVNode("span", {
            class: ["cursor-pointer text-black text-lg font-thin", _ctx.isActive("/studies") ? "bg-yellow-300" : "hover:bg-yellow-300", "duration-150 ease-in-out"]
          }, "studies", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="${ssrRenderClass(["cursor-pointer text-black text-lg font-thin", _ctx.isActive("/contact") ? "bg-yellow-300" : "hover:bg-yellow-300", "duration-150 ease-in-out"])}"${_scopeId}>contact</span>`);
      } else {
        return [
          createVNode("span", {
            class: ["cursor-pointer text-black text-lg font-thin", _ctx.isActive("/contact") ? "bg-yellow-300" : "hover:bg-yellow-300", "duration-150 ease-in-out"]
          }, "contact", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="mt-auto flex flex-col items-start"><div class="text-xs text-gray-400">Made with \u2764\uFE0F</div><div class="flex gap-4 mt-2"><a href="https://www.instagram.com/pudding._.3/" target="_blank" rel="noopener noreferrer" class="flex items-center"><img${ssrRenderAttr("src", _imports_0)} alt="Instagram" class="w-8 h-8 mr-2"><button class="py-2 pr-2">Insta</button></a><a href="https://www.redbubble.com/people/Puddiing3/shop" target="_blank" rel="noopener noreferrer" class="flex items-center"><img${ssrRenderAttr("src", _imports_1)} alt="Shop" class="w-8 h-8 mr-2"><button class="py-2 pr-2">Shop</button></a></div></div></div><main id="content" class="ml-[22rem] w-full overflow-auto">`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-ifX_iXl-.mjs.map
