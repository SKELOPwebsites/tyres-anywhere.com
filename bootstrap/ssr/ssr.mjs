import { mergeProps, useSSRContext, ref, computed, onMounted, onUnmounted, unref, withCtx, createTextVNode, createVNode, watch, withModifiers, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, vModelText, createCommentVNode, reactive, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { Link, usePage, useForm, router, Head, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import FloatingVue from "floating-vue";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$l = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-screen 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-xl lg:px-0 px-2" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Container.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const Container = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$3]]);
const CustomerRating_vue_vue_type_style_index_0_scoped_66814047_lang = "";
const _sfc_main$k = {
  __name: "CustomerRating",
  __ssrInlineRender: true,
  setup(__props) {
    const reviews = [
      {
        rating: 5,
        author: "Tracy Wong",
        message: "I initially phoned Malik on his mobile and then sent him my car tyre details, my location including photo on WhstsApp. He stuck to the ball park costs..."
      },
      {
        rating: 5,
        author: "Catherine",
        message: "Speedy response to phone call, and call out.  Very efficient, fair price - job done!  Would recommend."
      },
      {
        rating: 5,
        author: "Gavin Hoh",
        message: "Excellent customer services and job well done !  Highly recommended"
      },
      {
        rating: 5,
        author: "Paul",
        message: "Excellent prompt & professional service. Highly recommended"
      },
      {
        rating: 5,
        author: "Jasmin Freeman",
        message: "I am so grateful for the service that was provided! I called whilst broken down on a dual carriage way, 120 miles away from home with two flat tyres!!..."
      },
      {
        rating: 5,
        author: "Rebecca Cooper",
        message: "Tyres Anywhere LTD came out today to sort my tyre out after a bad blowout, they gave me a quote straight away and were with me within the hour even though I was..."
      },
      {
        rating: 5,
        author: "Christopher Arkell",
        message: "Superb service, great price came to help in no time highly recommended"
      },
      {
        rating: 5,
        author: "Darren Smith",
        message: "I called at 3am on a Saturday night/Sunday morning due to a puncture and no spare in my model of car.  Just over an hour later I was back on the road..."
      },
      {
        rating: 5,
        author: "Waleed Humayun",
        message: "Great service, arrived and changed our tyre within 35 mins of our call."
      },
      {
        rating: 5,
        author: "Aaron Filmer",
        message: "Fantastic service!!! Out 3 companies I called at 7:30am they were the only ones who answered! They ordered 2 tyres there and then with a promise of fi..."
      },
      {
        rating: 5,
        author: "Joseph Alleyne",
        message: "Great service! Gave them a call and we’re out to me within half hr!"
      },
      {
        rating: 5,
        author: "Ben Chappell",
        message: "Just phone the number - problem solved. Very helpful chap came within 40 mins of phoning, sorted it all out for us. Price they charged was pretty reas..."
      },
      {
        rating: 5,
        author: "上燕梁",
        message: "Very good service！My car broke down near Bicester! AA is so expensive so I call them! And it help! The price is reasonable and provide good service"
      },
      {
        rating: 5,
        author: "Steve Jones",
        message: "Lifesaver! Had a blown tyre on the M40 and they came out in 30 minutes and fitted the tyre perfectly allowing us to get on with our weekend!"
      },
      {
        rating: 5,
        author: "Hugo French",
        message: "Excellent service from Malik, especially given he came out at 6:30pm on a Saturday. Efficiently fitted new tyre to wheel and was great value too. Woul..."
      },
      {
        rating: 5,
        author: "Austin Yandoon",
        message: "Very quick on coming to me. Changed my flat tyre fast. 10/10 thanks"
      },
      {
        rating: 5,
        author: "Fleur Brading",
        message: "Amazing service - thank you Malek! Only place open on bank holiday, rapid and professional service, fair price. Highly recommend"
      },
      {
        rating: 5,
        author: "Hamed Izadpanah",
        message: "Amazing service, Malek was with us in 30 minutes with the correct spare tire and we were back on the road in 15 minutes!"
      },
      {
        rating: 5,
        author: "Agata Kajzer",
        message: "Very quick response, professional service, very good after care support service, I would highly recommend."
      },
      {
        rating: 5,
        author: "Paula Nowlan",
        message: "Absolutely amazing service and got me out of a jam that the RAC could not help me out with thank you guys so so much"
      },
      {
        rating: 5,
        author: "Tom Lawson",
        message: "Highly recommended. Got me out of a tricky situation in good time. Serves London-end of M40 corridor. Very happy to pay a premium for this level of ser..."
      },
      {
        rating: 5,
        author: "Charlotte Pontin",
        message: "Brilliant service and very efficient! They were out to us within half an hour and had replaced two flat tyres within one hour of the call! Definitely r..."
      }
    ];
    shuffle(reviews);
    const translate = ref(0);
    const index = ref(0);
    ref(null);
    const reviewsPerSlide = ref(0);
    computed(() => {
      return Math.ceil(reviews.length / reviewsPerSlide.value);
    });
    onMounted(() => {
      window.addEventListener("resize", setReviewsPerSlide);
      setReviewsPerSlide();
    });
    onUnmounted(() => {
      window.removeEventListener("resize", setReviewsPerSlide);
    });
    function setReviewsPerSlide() {
      reviewsPerSlide.value = getReviewsPerSlide();
      translate.value = 0;
      index.value = 0;
    }
    function getReviewsPerSlide() {
      let width = window.innerWidth;
      if (width >= 1024) {
        return 3;
      } else if (width < 1024 && width >= 768) {
        return 2;
      } else {
        return 1;
      }
    }
    function shuffle(array) {
      let currentIndex = array.length, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex]
        ];
      }
      return array;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-66814047><h2 class="text-center font-montserrat sm:text-3xl text-2xl font-bold mb-2" data-v-66814047>See what our customers think</h2><p class="text-center md:text-xl sm:text-lg text-sm font-light mb-4" data-v-66814047>Browse through our customers testimonials.</p><div class="flex items-center justify-center" data-v-66814047><div class="rating flex items-center justify-center bg-gray-100" data-v-66814047><span class="font-montserrat font-extrabold text-sm mr-2.5" data-v-66814047>RATED SUPERB</span><span class="flex items-center text-yellow-400" data-v-66814047><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-66814047><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-66814047></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-66814047><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-66814047></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-66814047><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-66814047></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-66814047><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-66814047></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-66814047><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-66814047></path></svg></span></div></div><div class="w-full md:h-[300px] h-auto pb-8 md:mt-0 sn:mt-12 mt-6 relative select-none" data-v-66814047><div class="review-wrapper mx-auto md:h-full flex items-center justify-center overflow-hidden" data-v-66814047><div class="flex items-start justify-start flex-nowrap w-full transition-transform duration-700 ease-in-out" style="${ssrRenderStyle(`transform: translateX(${translate.value}px)`)}" data-v-66814047><!--[-->`);
      ssrRenderList(reviews, (review) => {
        _push(`<div class="lg:w-1/3 md:w-1/2 w-full md:p-7 p-5 shrink-0 grow-0" data-v-66814047><span class="flex items-center justify-center text-yellow-400" data-v-66814047><!--[-->`);
        ssrRenderList(review.rating, (rating) => {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-66814047><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-66814047></path></svg>`);
        });
        _push(`<!--]--></span><span class="block text-center text-sm my-4" data-v-66814047>${ssrInterpolate(review.message)}</span><span class="block text-center text-wheelfit-600 font-montserrat uppercase font-bold md:text-xl text-lg" data-v-66814047>${ssrInterpolate(review.author)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="md:hidden flex items-center justify-center flex-row space-x-3" data-v-66814047><button class="bg-gray-800 text-white w-10 h-10 outline-0 border-0 text-3xl" type="button" name="button" data-v-66814047>&lt;</button><button class="bg-gray-800 text-white w-10 h-10 outline-0 border-0 text-3xl" type="button" name="button" data-v-66814047>&gt;</button></div><button class="md:block hidden absolute top-1/2 left-0 -translate-y-1/2 bg-gray-800 text-white w-10 h-10 m-1 outline-0 border-0 text-3xl" type="button" name="button" data-v-66814047>&lt;</button><button class="md:block hidden absolute top-1/2 right-0 -translate-y-1/2 bg-gray-800 text-white w-10 h-10 m-1 outline-0 border-0 text-3xl" type="button" name="button" data-v-66814047>&gt;</button></div></div>`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Misc/CustomerRating.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const CustomerRating = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-66814047"]]);
const _sfc_main$j = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 py-12 px-3" }, _attrs))}><h3 class="text-center font-montserrat mb-2 md:text-3xl text-2xl font-bold">Popular Tyre Brands Avaliable</h3><p class="text-center lg:text-xl text-lg font-light mb-4">We supply &amp; fit new, high-quality and branded tyres for all major vehicles</p><div class="w-full overflow-hidden grid md:grid-cols-9 grid-cols-3 md:gap-x-3 md:gap-y-0 sm:gap-x-6 gap-x-2 sm:gap-y-6 gap-y-2 items-center"><img class="col-span-1" src="/images/tyres/logo/bridgestone.webp" alt="Bridgestone Logo"><img class="col-span-1" src="/images/tyres/logo/continental.webp" alt="Continental Logo"><img class="col-span-1" src="/images/tyres/logo/pirelli.webp" alt="Pirelli Logo"><img class="col-span-1" src="/images/tyres/logo/goodyear.webp" alt="Goodyear Logo"><img class="col-span-1" src="/images/tyres/logo/hankook.webp" alt="Hankook Logo"><img class="col-span-1" src="/images/tyres/logo/yokohama.webp" alt="Yokohama Logo"><img class="col-span-1" src="/images/tyres/logo/dunlop.webp" alt="Dunlop Logo"><img class="col-span-1" src="/images/tyres/logo/avon.webp" alt="Avon Logo"><img class="col-span-1" src="/images/tyres/logo/michelin.webp" alt="Michelin Logo"></div></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Misc/PopularTyreBrands.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const PopularTyreBrands = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$i = {
  __name: "AreasWeCover",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[330px] relative select-none" }, _attrs))}><img src="/images/showcase/gallary/mobile-tyre-fitting-7.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,
                    /images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,
                    /images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw" class="absolute inset-0 object-center object-cover h-full w-full brightness-[0.4]" alt="Tyres Anywhere LTD Mobile Tyres Van"><div class="absolute md:right-[15%] md:left-[15%] right-[5%] left-[5%] top-5 sm:pt-8 pb-5 text-white text-center"><div class="mb-2 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg></div><h3 class="text-center sm:text-3xl text-2xl font-extrabold font-montserrat">Areas We Cover</h3><div class="mt-6 text-base"><p>We cover the majority of England and are able to send one of our tyre fitters to your location promptly</p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/sitemap",
        class: "block mt-4 underline hover:text-cyan-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`See all areas`);
          } else {
            return [
              createTextVNode("See all areas")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Misc/AreasWeCover.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  __name: "OurServices",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-x border-t border-gray-300 pt-8 pb-16" }, _attrs))}><p class="text-center text-3xl font-montserrat font-bold mb-8">Our Emergency Services</p><div class="sm:w-full w-64 mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:px-8 md:px-28 sm:px-8 px-0 xl:gap-x-4 lg:gap-x-3 gap-x-4 lg:gap-y-0 gap-y-4 items-center justify-center">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "col-span-1",
        href: "/mobile-tyre-fitting",
        title: "Mobile Tyre Fitting"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out"${_scopeId}><img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/images/services/mobile-tyre-fitting-emergency.webp" alt="Mobile Tyre Fitting"${_scopeId}><div class="z-10"${_scopeId}><h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase"${_scopeId}>Mobile Tyre Fitting</h2></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out" }, [
                createVNode("img", {
                  class: "absolute inset-0 w-full h-full brightness-50 object-cover",
                  src: "/images/services/mobile-tyre-fitting-emergency.webp",
                  alt: "Mobile Tyre Fitting"
                }),
                createVNode("div", { class: "z-10" }, [
                  createVNode("h2", { class: "xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase" }, "Mobile Tyre Fitting")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        class: "col-span-1",
        href: "/breakdown-recovery",
        title: "Breakdown Recovery"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out"${_scopeId}><img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/images/services/recovery.webp" alt="Breakdown Recovery"${_scopeId}><div class="z-10"${_scopeId}><h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase"${_scopeId}>Breakdown Recovery</h2></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out" }, [
                createVNode("img", {
                  class: "absolute inset-0 w-full h-full brightness-50 object-cover",
                  src: "/images/services/recovery.webp",
                  alt: "Breakdown Recovery"
                }),
                createVNode("div", { class: "z-10" }, [
                  createVNode("h2", { class: "xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase" }, "Breakdown Recovery")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="col-span-1"><div class="relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out"><img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/images/services/jump-start.webp" alt="Jump Starts"><div class="z-10"><h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase">Jump Starts</h2></div></div></div><div class="col-span-1"><div class="relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out"><img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/images/services/battery-fitting.webp" alt="Battery"><div class="z-10"><h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase">Battery</h2></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Misc/OurServices.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const SearchTyres_vue_vue_type_style_index_0_scoped_6dadd139_lang = "";
const _sfc_main$g = {
  __name: "SearchTyres",
  __ssrInlineRender: true,
  setup(__props) {
    const tyre_sizes = computed(() => usePage().props.tyre_sizes);
    const profiles = ref(null);
    const rims = ref(null);
    const valid = computed(() => {
      return typeof form.width === "number" && typeof form.profile === "number" && typeof form.rim === "number" && form.postcode;
    });
    const form = useForm({
      width: "- Select -",
      profile: "- Select -",
      rim: "- Select -",
      postcode: null
    });
    watch(() => form.width, (width, prevWidth) => {
      if (width !== prevWidth) {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
      }
      if (typeof width === "number") {
        profiles.value = [...new Set(tyre_sizes.value.filter((size) => size.width === width).map((size) => size.profile))].sort();
      } else {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
      }
    });
    watch(() => form.profile, (profile, prevProfile) => {
      if (profile !== prevProfile) {
        form.reset("rim");
        rims.value = null;
      }
      if (typeof form.width !== "number") {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
        return;
      }
      if (typeof profile === "number") {
        rims.value = [...new Set(tyre_sizes.value.filter((size) => size.width === form.width && size.profile === profile).map((size) => size.rim))].sort();
      } else {
        form.reset("profile", "rim");
        rims.value = null;
      }
    });
    const commonWidths = [175, 185, 195, 205, 215, 225, 235, 245, 255];
    function getCommonWidths() {
      return [...new Set(tyre_sizes.value.map((size) => size.width))].filter((width) => {
        return commonWidths.includes(width);
      });
    }
    function getOtherWidths() {
      return [...new Set(tyre_sizes.value.map((size) => size.width))].filter((width) => {
        return !commonWidths.includes(width);
      });
    }
    function submit() {
      if (valid.value) {
        let url = "/tyre/" + form.width + form.profile + form.rim + "?postcode=" + form.postcode;
        router.get(url);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Container, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-6 sm:pb-8 pb-6 shadow-red bg-white" data-v-6dadd139${_scopeId}><form class="grid lg:grid-cols-8 grid-cols-12 items-end gap-x-2 gap-y-4 xl:px-24 sm:px-4 px-3 w-full" data-v-6dadd139${_scopeId}><div class="lg:col-span-1 sm:col-span-3 col-span-6" data-v-6dadd139${_scopeId}><label for="width_size" class="block font-bold text-center text-sm mb-1" data-v-6dadd139${_scopeId}>Width</label><select id="width_size" class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none" data-v-6dadd139${_scopeId}><option data-v-6dadd139${ssrIncludeBooleanAttr(Array.isArray(unref(form).width) ? ssrLooseContain(unref(form).width, null) : ssrLooseEqual(unref(form).width, null)) ? " selected" : ""}${_scopeId}>- Select -</option><optgroup label="Common" data-v-6dadd139${_scopeId}><!--[-->`);
            ssrRenderList(getCommonWidths(), (width) => {
              _push2(`<option${ssrRenderAttr("value", width)} data-v-6dadd139${_scopeId}>${ssrInterpolate(width)}</option>`);
            });
            _push2(`<!--]--></optgroup><optgroup label="Other" data-v-6dadd139${_scopeId}><!--[-->`);
            ssrRenderList(getOtherWidths(), (width) => {
              _push2(`<option${ssrRenderAttr("value", width)} data-v-6dadd139${_scopeId}>${ssrInterpolate(width)}</option>`);
            });
            _push2(`<!--]--></optgroup></select></div><div class="lg:col-span-1 sm:col-span-3 col-span-6" data-v-6dadd139${_scopeId}><label for="profile_size" class="block font-bold text-center text-sm mb-1" data-v-6dadd139${_scopeId}>Profile</label><select id="profile_size"${ssrIncludeBooleanAttr(!profiles.value) ? " disabled" : ""} class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none" data-v-6dadd139${_scopeId}><option data-v-6dadd139${ssrIncludeBooleanAttr(Array.isArray(unref(form).profile) ? ssrLooseContain(unref(form).profile, null) : ssrLooseEqual(unref(form).profile, null)) ? " selected" : ""}${_scopeId}>- Select -</option><!--[-->`);
            ssrRenderList(profiles.value, (profile) => {
              _push2(`<option${ssrRenderAttr("value", profile)} data-v-6dadd139${_scopeId}>${ssrInterpolate(profile)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="lg:col-span-1 sm:col-span-3 col-span-6" data-v-6dadd139${_scopeId}><label for="rim_size" class="block font-bold text-center text-sm mb-1" data-v-6dadd139${_scopeId}>Rim</label><select id="rim_size"${ssrIncludeBooleanAttr(!rims.value) ? " disabled" : ""} class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none" data-v-6dadd139${_scopeId}><option data-v-6dadd139${ssrIncludeBooleanAttr(Array.isArray(unref(form).rim) ? ssrLooseContain(unref(form).rim, null) : ssrLooseEqual(unref(form).rim, null)) ? " selected" : ""}${_scopeId}>- Select -</option><!--[-->`);
            ssrRenderList(rims.value, (rim) => {
              _push2(`<option${ssrRenderAttr("value", rim)} data-v-6dadd139${_scopeId}>${ssrInterpolate(rim)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="lg:col-span-1 sm:col-span-3 col-span-6" data-v-6dadd139${_scopeId}><label for="speed" class="block font-bold text-center text-sm mb-1" data-v-6dadd139${_scopeId}>Speed</label><select id="speed" class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none" data-v-6dadd139${_scopeId}><option selected data-v-6dadd139${_scopeId}>Any</option></select></div><div class="lg:col-span-2 sm:col-span-6 col-span-12 relative" data-v-6dadd139${_scopeId}><label for="postcode" class="block font-bold text-center text-sm mb-1" data-v-6dadd139${_scopeId}>Postcode</label><div class="relative" data-v-6dadd139${_scopeId}><input type="text"${ssrRenderAttr("value", unref(form).postcode)} id="postcode" name="postcode" autocomplete="postal-code" class="${ssrRenderClass({ "block uppercase text-sm w-full py-1.5 px-3 bg-white border rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none": true, "border-red-500": _ctx.$page.props.flash.errors.postcode, "border-gray-300": !_ctx.$page.props.flash.errors.postcode })}" data-v-6dadd139${_scopeId}>`);
            if (_ctx.$page.props.flash.errors.postcode) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-6dadd139${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-6dadd139${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (_ctx.$page.props.flash.errors.postcode) {
              _push2(`<span class="w-full absolute left-1/2 -translate-x-1/2 block text-center text-xs text-red-500" data-v-6dadd139${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.errors.postcode)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="lg:col-span-2 sm:col-span-6 col-span-12 sm:mt-0 mt-4" data-v-6dadd139${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing || !valid.value) ? " disabled" : ""} class="${ssrRenderClass({ "relative w-full rounded outline-0 h-[2.125rem] text-white text-lg text-center uppercase transition duration-150 ease-in-out": true, "bg-wheelfit-600 cursor-pointer hover:bg-wheelfit-500 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600": valid.value, "bg-wheelfit-600/30 cursor-not-allowed": !valid.value, "button--loading": unref(form).processing })}" data-v-6dadd139${_scopeId}>`);
            if (!unref(form).processing) {
              _push2(`<span class="flex items-center justify-center" data-v-6dadd139${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-6dadd139${_scopeId}><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" data-v-6dadd139${_scopeId}></path></svg> FIND </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "pt-6 sm:pb-8 pb-6 shadow-red bg-white" }, [
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"]),
                  class: "grid lg:grid-cols-8 grid-cols-12 items-end gap-x-2 gap-y-4 xl:px-24 sm:px-4 px-3 w-full"
                }, [
                  createVNode("div", { class: "lg:col-span-1 sm:col-span-3 col-span-6" }, [
                    createVNode("label", {
                      for: "width_size",
                      class: "block font-bold text-center text-sm mb-1"
                    }, "Width"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => unref(form).width = $event,
                      id: "width_size",
                      class: "block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none"
                    }, [
                      createVNode("option", null, "- Select -"),
                      createVNode("optgroup", { label: "Common" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(getCommonWidths(), (width) => {
                          return openBlock(), createBlock("option", {
                            value: width,
                            textContent: toDisplayString(width)
                          }, null, 8, ["value", "textContent"]);
                        }), 256))
                      ]),
                      createVNode("optgroup", { label: "Other" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(getOtherWidths(), (width) => {
                          return openBlock(), createBlock("option", {
                            value: width,
                            textContent: toDisplayString(width)
                          }, null, 8, ["value", "textContent"]);
                        }), 256))
                      ])
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, unref(form).width]
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-1 sm:col-span-3 col-span-6" }, [
                    createVNode("label", {
                      for: "profile_size",
                      class: "block font-bold text-center text-sm mb-1"
                    }, "Profile"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => unref(form).profile = $event,
                      id: "profile_size",
                      disabled: !profiles.value,
                      class: "block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none"
                    }, [
                      createVNode("option", null, "- Select -"),
                      (openBlock(true), createBlock(Fragment, null, renderList(profiles.value, (profile) => {
                        return openBlock(), createBlock("option", {
                          value: profile,
                          textContent: toDisplayString(profile)
                        }, null, 8, ["value", "textContent"]);
                      }), 256))
                    ], 8, ["onUpdate:modelValue", "disabled"]), [
                      [vModelSelect, unref(form).profile]
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-1 sm:col-span-3 col-span-6" }, [
                    createVNode("label", {
                      for: "rim_size",
                      class: "block font-bold text-center text-sm mb-1"
                    }, "Rim"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => unref(form).rim = $event,
                      id: "rim_size",
                      disabled: !rims.value,
                      class: "block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none"
                    }, [
                      createVNode("option", null, "- Select -"),
                      (openBlock(true), createBlock(Fragment, null, renderList(rims.value, (rim) => {
                        return openBlock(), createBlock("option", {
                          value: rim,
                          textContent: toDisplayString(rim)
                        }, null, 8, ["value", "textContent"]);
                      }), 256))
                    ], 8, ["onUpdate:modelValue", "disabled"]), [
                      [vModelSelect, unref(form).rim]
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-1 sm:col-span-3 col-span-6" }, [
                    createVNode("label", {
                      for: "speed",
                      class: "block font-bold text-center text-sm mb-1"
                    }, "Speed"),
                    createVNode("select", {
                      id: "speed",
                      class: "block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none"
                    }, [
                      createVNode("option", { selected: "" }, "Any")
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-2 sm:col-span-6 col-span-12 relative" }, [
                    createVNode("label", {
                      for: "postcode",
                      class: "block font-bold text-center text-sm mb-1"
                    }, "Postcode"),
                    createVNode("div", { class: "relative" }, [
                      withDirectives(createVNode("input", {
                        type: "text",
                        "onUpdate:modelValue": ($event) => unref(form).postcode = $event,
                        id: "postcode",
                        name: "postcode",
                        autocomplete: "postal-code",
                        class: { "block uppercase text-sm w-full py-1.5 px-3 bg-white border rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none": true, "border-red-500": _ctx.$page.props.flash.errors.postcode, "border-gray-300": !_ctx.$page.props.flash.errors.postcode }
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).postcode]
                      ]),
                      _ctx.$page.props.flash.errors.postcode ? (openBlock(), createBlock("svg", {
                        key: 0,
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 stroke-red-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      ])) : createCommentVNode("", true)
                    ]),
                    _ctx.$page.props.flash.errors.postcode ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "w-full absolute left-1/2 -translate-x-1/2 block text-center text-xs text-red-500",
                      textContent: toDisplayString(_ctx.$page.props.flash.errors.postcode)
                    }, null, 8, ["textContent"])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "lg:col-span-2 sm:col-span-6 col-span-12 sm:mt-0 mt-4" }, [
                    createVNode("button", {
                      type: "submit",
                      disabled: unref(form).processing || !valid.value,
                      class: { "relative w-full rounded outline-0 h-[2.125rem] text-white text-lg text-center uppercase transition duration-150 ease-in-out": true, "bg-wheelfit-600 cursor-pointer hover:bg-wheelfit-500 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600": valid.value, "bg-wheelfit-600/30 cursor-not-allowed": !valid.value, "button--loading": unref(form).processing }
                    }, [
                      !unref(form).processing ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "flex items-center justify-center"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-1",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                            "clip-rule": "evenodd"
                          })
                        ])),
                        createTextVNode(" FIND ")
                      ])) : createCommentVNode("", true)
                    ], 10, ["disabled"])
                  ])
                ], 32)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Misc/SearchTyres.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const SearchTyres = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-6dadd139"]]);
const _sfc_main$f = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-gray-300 pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Content.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Content = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$e = {
  __name: "BreakdownRecovery",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>24Hr Breakdown Recovery &amp; Assistance | Tyres Anywhere LTD</title><meta name="description" content="Broken down? Need vehicle recovery? Call us now, we&#39;re here to help 24/7"${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/breakdown-recovery"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "24Hr Breakdown Recovery & Assistance | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Broken down? Need vehicle recovery? Call us now, we're here to help 24/7"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/breakdown-recovery"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-black">`);
      _push(ssrRenderComponent(Container, { class: "relative lg:h-[340px] md:h-[250px] h-[200px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/showcase/breakdown-recovery.webp" srcset="/images/showcase/breakdown-recovery.webp 1200w,
                                /images/showcase/breakdown-recovery-500.webp 500w,
                                /images/showcase/breakdown-recovery.webp 300w" class="object-cover object-center w-full h-full brightness-50" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Breakdown Recovery</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/showcase/breakdown-recovery.webp",
                srcset: "/images/showcase/breakdown-recovery.webp 1200w,\n                                /images/showcase/breakdown-recovery-500.webp 500w,\n                                /images/showcase/breakdown-recovery.webp 300w",
                class: "object-cover object-center w-full h-full brightness-50",
                sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw",
                alt: "Mobile Tyre Fitting"
              }),
              createVNode("div", { class: "absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Breakdown Recovery"),
                createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Breakdown Recovery</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>If you&#39;re broken down at the side of the road, we&#39;re here to help!</h2><div class="lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4"${_scopeId2}><div class="col-span-12"${_scopeId2}><p class="text-sm"${_scopeId2}> At TyresAnywhere, we understand that unexpected vehicle breakdowns can be stressful and inconvenient. That&#39;s why we&#39;re here to offer you reliable and efficient breakdown recovery services for your cars and vans. Whether you&#39;re stranded on the side of the road or stuck in your driveway, our team of skilled professionals is ready to come to your aid. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl"${_scopeId2}>Why choose Tyres Anywhere LTD?</h3><ol class="text-sm space-y-3 mt-4"${_scopeId2}><li${_scopeId2}><b${_scopeId2}>Swift Response Time:</b> We know that time is of the essence when you&#39;re facing a breakdown situation. Our dedicated team operates around the clock, ensuring that we&#39;re just a phone call away whenever you need us. Our rapid response time means you won&#39;t be left waiting for hours. </li><li${_scopeId2}><b${_scopeId2}>24/7 Emergency Assistance:</b> Breakdowns rarely happen at convenient times. That&#39;s why we provide 24/7 emergency assistance, 365 days a year. No matter if it&#39;s the dead of night or a public holiday, we&#39;re committed to helping you get back on the road as quickly as possible. </li><li${_scopeId2}><b${_scopeId2}>Expert Technicians:</b> Our skilled technicians are highly trained professionals with years of experience in the automotive industry. They possess the knowledge and expertise to diagnose and fix a wide range of breakdown issues on the spot. Rest assured, your vehicle will be in capable hands. </li><li${_scopeId2}><b${_scopeId2}>Comprehensive Coverage:</b> We offer breakdown recovery services for all types of cars and vans, regardless of make or model. Whether you&#39;re driving a compact car, a luxury SUV, or a commercial van, we have the equipment and expertise to assist you. </li><li${_scopeId2}><b${_scopeId2}>Towing and On-Site Repairs:</b> Depending on the severity of the breakdown, we provide both towing services and on-site repairs. Our fleet of specialized vehicles can safely transport your vehicle to a repair shop if necessary. Alternatively, if it&#39;s a minor issue that can be resolved on-site, our technicians will work diligently to get you back on the road swiftly. </li><li${_scopeId2}><b${_scopeId2}>Transparent Pricing:</b> We believe in transparent pricing, so you&#39;ll never have to worry about hidden costs or surprises. Our breakdown recovery services are competitively priced, and we&#39;ll provide you with a clear breakdown of the charges before any work is carried out. Your satisfaction is our priority. </li><li${_scopeId2}><b${_scopeId2}>Customer Satisfaction:</b> Customer satisfaction is at the core of our business. We strive to provide exceptional service, ensuring that each customer&#39;s experience with TyresAnywhere is a positive one. Don&#39;t just take our word for it—check out the glowing testimonials from our satisfied clients. </li></ol></div><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-full" src="/images/showcase/gallary/mobile-tyre-fitting-6.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w" sizes="(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)" alt="Breakdown rescue"${_scopeId2}></div><div class="col-span-12"${_scopeId2}><p class="text-sm"${_scopeId2}> When it comes to breakdown recovery, you need a service you can trust. TyresAnywhere LTD is your go-to partner for fast, reliable, and professional assistance. Save our number in your contacts or bookmark our website, so you&#39;ll be prepared for any unexpected breakdowns. Remember, we&#39;re just a phone call away, ready to help you get back on the road with minimal disruption. </p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Breakdown Recovery"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "If you're broken down at the side of the road, we're here to help!"),
                      createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode("p", { class: "text-sm" }, " At TyresAnywhere, we understand that unexpected vehicle breakdowns can be stressful and inconvenient. That's why we're here to offer you reliable and efficient breakdown recovery services for your cars and vans. Whether you're stranded on the side of the road or stuck in your driveway, our team of skilled professionals is ready to come to your aid. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Why choose Tyres Anywhere LTD?"),
                          createVNode("ol", { class: "text-sm space-y-3 mt-4" }, [
                            createVNode("li", null, [
                              createVNode("b", null, "Swift Response Time:"),
                              createTextVNode(" We know that time is of the essence when you're facing a breakdown situation. Our dedicated team operates around the clock, ensuring that we're just a phone call away whenever you need us. Our rapid response time means you won't be left waiting for hours. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "24/7 Emergency Assistance:"),
                              createTextVNode(" Breakdowns rarely happen at convenient times. That's why we provide 24/7 emergency assistance, 365 days a year. No matter if it's the dead of night or a public holiday, we're committed to helping you get back on the road as quickly as possible. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Expert Technicians:"),
                              createTextVNode(" Our skilled technicians are highly trained professionals with years of experience in the automotive industry. They possess the knowledge and expertise to diagnose and fix a wide range of breakdown issues on the spot. Rest assured, your vehicle will be in capable hands. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Comprehensive Coverage:"),
                              createTextVNode(" We offer breakdown recovery services for all types of cars and vans, regardless of make or model. Whether you're driving a compact car, a luxury SUV, or a commercial van, we have the equipment and expertise to assist you. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Towing and On-Site Repairs:"),
                              createTextVNode(" Depending on the severity of the breakdown, we provide both towing services and on-site repairs. Our fleet of specialized vehicles can safely transport your vehicle to a repair shop if necessary. Alternatively, if it's a minor issue that can be resolved on-site, our technicians will work diligently to get you back on the road swiftly. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Transparent Pricing:"),
                              createTextVNode(" We believe in transparent pricing, so you'll never have to worry about hidden costs or surprises. Our breakdown recovery services are competitively priced, and we'll provide you with a clear breakdown of the charges before any work is carried out. Your satisfaction is our priority. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Customer Satisfaction:"),
                              createTextVNode(" Customer satisfaction is at the core of our business. We strive to provide exceptional service, ensuring that each customer's experience with TyresAnywhere is a positive one. Don't just take our word for it—check out the glowing testimonials from our satisfied clients. ")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: "/images/showcase/gallary/mobile-tyre-fitting-6.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w",
                            sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                            alt: "Breakdown rescue"
                          })
                        ]),
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode("p", { class: "text-sm" }, " When it comes to breakdown recovery, you need a service you can trust. TyresAnywhere LTD is your go-to partner for fast, reliable, and professional assistance. Save our number in your contacts or bookmark our website, so you'll be prepared for any unexpected breakdowns. Remember, we're just a phone call away, ready to help you get back on the road with minimal disruption. ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Breakdown Recovery"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "If you're broken down at the side of the road, we're here to help!"),
                    createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode("p", { class: "text-sm" }, " At TyresAnywhere, we understand that unexpected vehicle breakdowns can be stressful and inconvenient. That's why we're here to offer you reliable and efficient breakdown recovery services for your cars and vans. Whether you're stranded on the side of the road or stuck in your driveway, our team of skilled professionals is ready to come to your aid. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Why choose Tyres Anywhere LTD?"),
                        createVNode("ol", { class: "text-sm space-y-3 mt-4" }, [
                          createVNode("li", null, [
                            createVNode("b", null, "Swift Response Time:"),
                            createTextVNode(" We know that time is of the essence when you're facing a breakdown situation. Our dedicated team operates around the clock, ensuring that we're just a phone call away whenever you need us. Our rapid response time means you won't be left waiting for hours. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "24/7 Emergency Assistance:"),
                            createTextVNode(" Breakdowns rarely happen at convenient times. That's why we provide 24/7 emergency assistance, 365 days a year. No matter if it's the dead of night or a public holiday, we're committed to helping you get back on the road as quickly as possible. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Expert Technicians:"),
                            createTextVNode(" Our skilled technicians are highly trained professionals with years of experience in the automotive industry. They possess the knowledge and expertise to diagnose and fix a wide range of breakdown issues on the spot. Rest assured, your vehicle will be in capable hands. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Comprehensive Coverage:"),
                            createTextVNode(" We offer breakdown recovery services for all types of cars and vans, regardless of make or model. Whether you're driving a compact car, a luxury SUV, or a commercial van, we have the equipment and expertise to assist you. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Towing and On-Site Repairs:"),
                            createTextVNode(" Depending on the severity of the breakdown, we provide both towing services and on-site repairs. Our fleet of specialized vehicles can safely transport your vehicle to a repair shop if necessary. Alternatively, if it's a minor issue that can be resolved on-site, our technicians will work diligently to get you back on the road swiftly. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Transparent Pricing:"),
                            createTextVNode(" We believe in transparent pricing, so you'll never have to worry about hidden costs or surprises. Our breakdown recovery services are competitively priced, and we'll provide you with a clear breakdown of the charges before any work is carried out. Your satisfaction is our priority. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Customer Satisfaction:"),
                            createTextVNode(" Customer satisfaction is at the core of our business. We strive to provide exceptional service, ensuring that each customer's experience with TyresAnywhere is a positive one. Don't just take our word for it—check out the glowing testimonials from our satisfied clients. ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: "/images/showcase/gallary/mobile-tyre-fitting-6.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w",
                          sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                          alt: "Breakdown rescue"
                        })
                      ]),
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode("p", { class: "text-sm" }, " When it comes to breakdown recovery, you need a service you can trust. TyresAnywhere LTD is your go-to partner for fast, reliable, and professional assistance. Save our number in your contacts or bookmark our website, so you'll be prepared for any unexpected breakdowns. Remember, we're just a phone call away, ready to help you get back on the road with minimal disruption. ")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$h, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$i, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularTyreBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomerRating, { class: "px-3 pt-12" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$h),
              createVNode(_sfc_main$i),
              createVNode(PopularTyreBrands),
              createVNode(CustomerRating, { class: "px-3 pt-12" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/BreakdownRecovery.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  __name: "CommercialTyres",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Commercial Mobile Tyre Fitting - Van Tyres Fitted at Home or Work | Tyres Anywhere LTD</title><meta name="description" content="Our commercial mobile tyre fitting provides and fits high quality cheap tyres for your van, at your convenience."${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/commercial-tyres"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Commercial Mobile Tyre Fitting - Van Tyres Fitted at Home or Work | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Our commercial mobile tyre fitting provides and fits high quality cheap tyres for your van, at your convenience."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/commercial-tyres"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-black">`);
      _push(ssrRenderComponent(Container, { class: "relative lg:h-[340px] md:h-[250px] h-[200px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/showcase/commercial-tyres.webp" srcset="/images/showcase/commercial-tyres.webp 1000w,
                                /images/showcase/commercial-tyres-500.webp 500w,
                                /images/showcase/commercial-tyres.webp 300w" class="object-cover object-center w-full h-full brightness-75" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Commercial Tyres</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/showcase/commercial-tyres.webp",
                srcset: "/images/showcase/commercial-tyres.webp 1000w,\n                                /images/showcase/commercial-tyres-500.webp 500w,\n                                /images/showcase/commercial-tyres.webp 300w",
                class: "object-cover object-center w-full h-full brightness-75",
                sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw",
                alt: "Mobile Tyre Fitting"
              }),
              createVNode("div", { class: "absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Commercial Tyres"),
                createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(SearchTyres, null, null, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Commercial Mobile Tyre Fitting</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>Yes, we also provide &amp; fit commercial tyres alongside normal passenger tyres.</h2><div class="lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4"${_scopeId2}><div class="col-span-12"${_scopeId2}><p class="text-sm"${_scopeId2}> Why not take advantage of our convenient commercial mobile tyre fitting service? </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> Our services comes to your desired fitting location to fit your new commercial tyre so you don&#39;t have to waste your time to get your tyres fitted at a garage, and best of all, we operate every day of the week and can fit your tyre on the same day of your call so you and your commercial vehicle are safe on the road. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Commercial Mobile Tyre Fitting"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Yes, we also provide & fit commercial tyres alongside normal passenger tyres."),
                      createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode("p", { class: "text-sm" }, " Why not take advantage of our convenient commercial mobile tyre fitting service? "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Our services comes to your desired fitting location to fit your new commercial tyre so you don't have to waste your time to get your tyres fitted at a garage, and best of all, we operate every day of the week and can fit your tyre on the same day of your call so you and your commercial vehicle are safe on the road. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Commercial Mobile Tyre Fitting"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Yes, we also provide & fit commercial tyres alongside normal passenger tyres."),
                    createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode("p", { class: "text-sm" }, " Why not take advantage of our convenient commercial mobile tyre fitting service? "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Our services comes to your desired fitting location to fit your new commercial tyre so you don't have to waste your time to get your tyres fitted at a garage, and best of all, we operate every day of the week and can fit your tyre on the same day of your call so you and your commercial vehicle are safe on the road. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$h, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$i, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularTyreBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomerRating, { class: "px-3 pt-12" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$h),
              createVNode(_sfc_main$i),
              createVNode(PopularTyreBrands),
              createVNode(CustomerRating, { class: "px-3 pt-12" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/CommercialTyres.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  __name: "ContactUs",
  __ssrInlineRender: true,
  props: {
    errors: Object
  },
  setup(__props) {
    const form = reactive({
      name: null,
      phone: null,
      email: null,
      postcode: null,
      subject: null,
      body: null
    });
    function submit() {
      router.post("/contact-us", form, {
        preserveScroll: (page) => Object.keys(page.props.errors).length
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Contact Us | Tyres Anywhere LTD</title><meta name="description" content="Contact Tyres Anywhere LTD easily. Get mobile tyre fitting quotes or any other assistance you seek here!"${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/contact-us"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Contact Us | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Contact Tyres Anywhere LTD easily. Get mobile tyre fitting quotes or any other assistance you seek here!"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/contact-us"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-black">`);
      _push(ssrRenderComponent(Container, { class: "relative lg:h-[340px] md:h-[250px] h-[200px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/showcase/contact.webp" srcset="/images/showcase/contact.webp 1000w,
                        /images/showcase/contact-500.webp 500w,
                        /images/showcase/contact.webp 300w" class="object-cover object-center w-full h-full brightness-50" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw" alt="Contact Tyres Anywhere, Mobile Tyre Fitting"${_scopeId}><div class="absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Contact Us</h1></div>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/showcase/contact.webp",
                srcset: "/images/showcase/contact.webp 1000w,\n                        /images/showcase/contact-500.webp 500w,\n                        /images/showcase/contact.webp 300w",
                class: "object-cover object-center w-full h-full brightness-50",
                sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw",
                alt: "Contact Tyres Anywhere, Mobile Tyre Fitting"
              }),
              createVNode("div", { class: "absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Contact Us")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Container, { class: "pt-10 pb-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-3"${_scopeId}>`);
            if (_ctx.$page.props.success) {
              _push2(`<div${_scopeId}></div>`);
            } else {
              _push2(`<div${_scopeId}></div>`);
            }
            if (!_ctx.$page.props.success) {
              _push2(`<div class="mb-6"${_scopeId}><p class="text-4xl font-light mb-2"${_scopeId}>Contact Us</p><p class="text-sm"${_scopeId}>Contact us by giving us a call on <a class="underline font-semibold" href="tel:07442980101"${_scopeId}>07442 980101</a>, or by filling out the form below.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="w-full md:grid md:grid-cols-12 flex flex-col-reverse"${_scopeId}><div class="lg:col-span-6 md:col-span-7 md:mt-0 mt-8"${_scopeId}>`);
            if (_ctx.$page.props.success) {
              _push2(`<div${_scopeId}><p class="font-montserrat uppercase tracking-wide font-semibold"${_scopeId}>Message sent successfully</p><span class="text-sm"${_scopeId}>We&#39;ve received your message! Hold tight for our reply soon.</span>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: "/",
                class: "block bg-gray-200 w-fit px-4 py-1.5 border border-gray-300 text-gray-600 mt-4 rounded-md text-sm uppercase hover:text-gray-800 hover:border-gray-800 transition duration-150"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Back to home `);
                  } else {
                    return [
                      createTextVNode(" Back to home ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<form class="w-full space-y-4"${_scopeId}><div class="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 items-start w-full"${_scopeId}><div class="sm:w-1/2 w-full"${_scopeId}><label for="name" class="text-sm"${_scopeId}>Name <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", form.name)} type="text" id="name" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.name) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.name)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="sm:w-1/2 w-full"${_scopeId}><label for="phone" class="text-sm"${_scopeId}>Phone Number <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", form.phone)} type="text" id="phone" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.phone) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.phone)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 items-start w-full"${_scopeId}><div class="sm:w-1/2 w-full"${_scopeId}><label for="email" class="text-sm"${_scopeId}>E-mail <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", form.email)} type="text" id="email" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.email) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.email)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="sm:w-1/2 w-full"${_scopeId}><label for="postcode" class="text-sm"${_scopeId}><span${_scopeId}>Postcode</span><span class="text-gray-400 text-xs ml-2"${_scopeId}>Optional</span></label><input${ssrRenderAttr("value", form.postcode)} type="text" id="postcode" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.postcode) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.postcode)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div${_scopeId}><label for="subject" class="text-sm"${_scopeId}>What are you looking for? <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", form.subject)} type="text" id="subject" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.subject) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.subject)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div${_scopeId}><label for="body" class="text-sm"${_scopeId}>Details <span class="text-red-500"${_scopeId}>*</span></label><textarea type="text" id="body" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>${ssrInterpolate(form.body)}</textarea>`);
              if (__props.errors.body) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.body)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center justify-end"${_scopeId}><button type="submit" class="bg-blue-500 py-1.5 px-4 font-semibold text-white rounded uppercase hover:bg-blue-600 active:ring-2 transition duration-150 ease-in-out"${_scopeId}> Send message </button></div></form>`);
            }
            _push2(`</div><div class="lg:col-span-6 md:col-span-5 xl:pl-24 lg:pl-16 md:pl-4"${_scopeId}><p class="xl:text-3xl lg:text-2xl text-xl text-gray-600 md:mb-6 mb-2"${_scopeId}>Tel: <a class="text-blue-700 hover:text-cyan-500 transition duration-300 ease-in-out" href="tel:07442980101"${_scopeId}>07442 980101</a></p><p class="xl:text-3xl lg:text-2xl text-xl text-gray-600"${_scopeId}>Email: <a class="text-blue-700 hover:text-cyan-500 transition duration-300 ease-in-out" href="mailto:info@tyresanywhere.com"${_scopeId}>info@tyresanywhere.com</a></p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "px-3" }, [
                _ctx.$page.props.success ? (openBlock(), createBlock("div", { key: 0 })) : (openBlock(), createBlock("div", { key: 1 })),
                !_ctx.$page.props.success ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "mb-6"
                }, [
                  createVNode("p", { class: "text-4xl font-light mb-2" }, "Contact Us"),
                  createVNode("p", { class: "text-sm" }, [
                    createTextVNode("Contact us by giving us a call on "),
                    createVNode("a", {
                      class: "underline font-semibold",
                      href: "tel:07442980101"
                    }, "07442 980101"),
                    createTextVNode(", or by filling out the form below.")
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "w-full md:grid md:grid-cols-12 flex flex-col-reverse" }, [
                  createVNode("div", { class: "lg:col-span-6 md:col-span-7 md:mt-0 mt-8" }, [
                    _ctx.$page.props.success ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("p", { class: "font-montserrat uppercase tracking-wide font-semibold" }, "Message sent successfully"),
                      createVNode("span", { class: "text-sm" }, "We've received your message! Hold tight for our reply soon."),
                      createVNode(unref(Link), {
                        href: "/",
                        class: "block bg-gray-200 w-fit px-4 py-1.5 border border-gray-300 text-gray-600 mt-4 rounded-md text-sm uppercase hover:text-gray-800 hover:border-gray-800 transition duration-150"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Back to home ")
                        ]),
                        _: 1
                      })
                    ])) : (openBlock(), createBlock("form", {
                      key: 1,
                      class: "w-full space-y-4",
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("div", { class: "flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 items-start w-full" }, [
                        createVNode("div", { class: "sm:w-1/2 w-full" }, [
                          createVNode("label", {
                            for: "name",
                            class: "text-sm"
                          }, [
                            createTextVNode("Name "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.name = $event,
                            type: "text",
                            id: "name",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.name]
                          ]),
                          __props.errors.name ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.name), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "sm:w-1/2 w-full" }, [
                          createVNode("label", {
                            for: "phone",
                            class: "text-sm"
                          }, [
                            createTextVNode("Phone Number "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.phone = $event,
                            type: "text",
                            id: "phone",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.phone]
                          ]),
                          __props.errors.phone ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.phone), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 items-start w-full" }, [
                        createVNode("div", { class: "sm:w-1/2 w-full" }, [
                          createVNode("label", {
                            for: "email",
                            class: "text-sm"
                          }, [
                            createTextVNode("E-mail "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.email = $event,
                            type: "text",
                            id: "email",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.email]
                          ]),
                          __props.errors.email ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.email), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "sm:w-1/2 w-full" }, [
                          createVNode("label", {
                            for: "postcode",
                            class: "text-sm"
                          }, [
                            createVNode("span", null, "Postcode"),
                            createVNode("span", { class: "text-gray-400 text-xs ml-2" }, "Optional")
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.postcode = $event,
                            type: "text",
                            id: "postcode",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.postcode]
                          ]),
                          __props.errors.postcode ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.postcode), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "subject",
                          class: "text-sm"
                        }, [
                          createTextVNode("What are you looking for? "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.subject = $event,
                          type: "text",
                          id: "subject",
                          class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.subject]
                        ]),
                        __props.errors.subject ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-xs text-red-500"
                        }, toDisplayString(__props.errors.subject), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "body",
                          class: "text-sm"
                        }, [
                          createTextVNode("Details "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => form.body = $event,
                          type: "text",
                          id: "body",
                          class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.body]
                        ]),
                        __props.errors.body ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-xs text-red-500"
                        }, toDisplayString(__props.errors.body), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex items-center justify-end" }, [
                        createVNode("button", {
                          type: "submit",
                          class: "bg-blue-500 py-1.5 px-4 font-semibold text-white rounded uppercase hover:bg-blue-600 active:ring-2 transition duration-150 ease-in-out"
                        }, " Send message ")
                      ])
                    ], 32))
                  ]),
                  createVNode("div", { class: "lg:col-span-6 md:col-span-5 xl:pl-24 lg:pl-16 md:pl-4" }, [
                    createVNode("p", { class: "xl:text-3xl lg:text-2xl text-xl text-gray-600 md:mb-6 mb-2" }, [
                      createTextVNode("Tel: "),
                      createVNode("a", {
                        class: "text-blue-700 hover:text-cyan-500 transition duration-300 ease-in-out",
                        href: "tel:07442980101"
                      }, "07442 980101")
                    ]),
                    createVNode("p", { class: "xl:text-3xl lg:text-2xl text-xl text-gray-600" }, [
                      createTextVNode("Email: "),
                      createVNode("a", {
                        class: "text-blue-700 hover:text-cyan-500 transition duration-300 ease-in-out",
                        href: "mailto:info@tyresanywhere.com"
                      }, "info@tyresanywhere.com")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/ContactUs.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative xl:h-[32rem] lg:h-[28rem] sm:h-[300px] h-[200px] md:w-full overflow-hidden" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<button class="absolute top-0 bottom-0 right-0 z-10 flex items-center justify-center w-[15%] p-0 text-white text-center bg-none border-0 outline-0 opacity-50 hover:opacity-100 transition duration-150 ease"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button><button class="absolute top-0 bottom-0 left-0 z-10 flex items-center justify-center w-[15%] p-0 text-white text-center bg-none border-0 outline-0 opacity-50 hover:opacity-100 transition duration-150 ease"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></button></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Carousel/Carousel.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender]]);
const CarouselSlide_vue_vue_type_style_index_0_scoped_1d88a252_lang = "";
const _sfc_main$a = {
  __name: "CarouselSlide",
  __ssrInlineRender: true,
  props: {
    visibleSlide: Number,
    index: Number,
    direction: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.visibleSlide === __props.index ? null : { display: "none" },
        class: "absolute inset-0"
      }, _attrs))} data-v-1d88a252>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Carousel/CarouselSlide.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const CarouselSlide = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-1d88a252"]]);
const MainCarouselSearchTyres_vue_vue_type_style_index_0_scoped_77f5ec93_lang = "";
const _sfc_main$9 = {
  __name: "MainCarouselSearchTyres",
  __ssrInlineRender: true,
  setup(__props) {
    const tyre_sizes = computed(() => usePage().props.tyre_sizes);
    const profiles = ref(null);
    const rims = ref(null);
    const formOpen = ref(false);
    const valid = computed(() => {
      return typeof form.width === "number" && typeof form.profile === "number" && typeof form.rim === "number" && form.postcode;
    });
    const form = useForm({
      width: "- Select -",
      profile: "- Select -",
      rim: "- Select -",
      postcode: null
    });
    watch(() => form.width, (width, prevWidth) => {
      if (width !== prevWidth) {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
      }
      if (typeof width === "number") {
        profiles.value = [...new Set(tyre_sizes.value.filter((size) => size.width === width).map((size) => size.profile))].sort();
      } else {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
      }
    });
    watch(() => form.profile, (profile, prevProfile) => {
      if (profile !== prevProfile) {
        form.reset("rim");
        rims.value = null;
      }
      if (typeof form.width !== "number") {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
        return;
      }
      if (typeof profile === "number") {
        rims.value = [...new Set(tyre_sizes.value.filter((size) => size.width === form.width && size.profile === profile).map((size) => size.rim))].sort();
      } else {
        form.reset("profile", "rim");
        rims.value = null;
      }
    });
    const commonWidths = [175, 185, 195, 205, 215, 225, 235, 245, 255];
    function getCommonWidths() {
      return [...new Set(tyre_sizes.value.map((size) => size.width))].filter((width) => {
        return commonWidths.includes(width);
      });
    }
    function getOtherWidths() {
      return [...new Set(tyre_sizes.value.map((size) => size.width))].filter((width) => {
        return !commonWidths.includes(width);
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:absolute bottom-0 left-1/2 lg:-translate-x-1/2 md:flex hidden items-center justify-center flex-col pt-4 lg:mt-0 mt-4" }, _attrs))} data-v-77f5ec93><p class="cursor-pointer flex items-center justify-center space-x-4 text-shadow-red block xl:text-5xl sm:text-4xl text-2xl font-bold uppercase lg:text-white text-gray-800 mb-3" data-v-77f5ec93><span class="lg:block hidden" data-v-77f5ec93>`);
      if (!formOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 anim" data-v-77f5ec93><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" data-v-77f5ec93></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (formOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 anim" data-v-77f5ec93><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" data-v-77f5ec93></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span><span data-v-77f5ec93>SEARCH TYRES</span><span class="lg:block hidden" data-v-77f5ec93>`);
      if (!formOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 anim" data-v-77f5ec93><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" data-v-77f5ec93></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (formOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 anim" data-v-77f5ec93><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" data-v-77f5ec93></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></p><div class="${ssrRenderClass([{ "lg:h-0": !formOpen.value, "lg:h-36": formOpen.value }, "overflow-hidden transition-all"])}" data-v-77f5ec93><div class="md:grid md:grid-cols-12 md:gap-x-6 flex flex-col-reverse items-center sm:bg-white bg-transparent lg:shadow-none sm:shadow-[0_5px_15px_rgba(255,102,102,0.35)] py-3 sm:px-5 px-2 rounded-t-lg lg:mb-4 xl:w-[50rem] lg:w-[44rem] w-full" data-v-77f5ec93><form class="md:col-span-8 w-full" data-v-77f5ec93><div class="grid grid-cols-12 items-start gap-x-2 gap-y-2" data-v-77f5ec93><div class="col-span-4" data-v-77f5ec93><label for="width_size" class="block font-bold text-center text-sm" data-v-77f5ec93>Width</label><select id="width_size" class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none" data-v-77f5ec93><option data-v-77f5ec93${ssrIncludeBooleanAttr(Array.isArray(unref(form).width) ? ssrLooseContain(unref(form).width, null) : ssrLooseEqual(unref(form).width, null)) ? " selected" : ""}>- Select -</option><optgroup label="Common" data-v-77f5ec93><!--[-->`);
      ssrRenderList(getCommonWidths(), (width) => {
        _push(`<option${ssrRenderAttr("value", width)} data-v-77f5ec93>${ssrInterpolate(width)}</option>`);
      });
      _push(`<!--]--></optgroup><optgroup label="Other" data-v-77f5ec93><!--[-->`);
      ssrRenderList(getOtherWidths(), (width) => {
        _push(`<option${ssrRenderAttr("value", width)} data-v-77f5ec93>${ssrInterpolate(width)}</option>`);
      });
      _push(`<!--]--></optgroup></select></div><div class="col-span-4" data-v-77f5ec93><label for="profile_size" class="block font-bold text-center text-sm" data-v-77f5ec93>Profile</label><select id="profile_size"${ssrIncludeBooleanAttr(!profiles.value) ? " disabled" : ""} class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none" data-v-77f5ec93><option data-v-77f5ec93${ssrIncludeBooleanAttr(Array.isArray(unref(form).profile) ? ssrLooseContain(unref(form).profile, null) : ssrLooseEqual(unref(form).profile, null)) ? " selected" : ""}>- Select -</option><!--[-->`);
      ssrRenderList(profiles.value, (profile) => {
        _push(`<option${ssrRenderAttr("value", profile)} data-v-77f5ec93>${ssrInterpolate(profile)}</option>`);
      });
      _push(`<!--]--></select></div><div class="col-span-4" data-v-77f5ec93><label for="rim_size" class="block font-bold text-center text-sm" data-v-77f5ec93>Rim Size</label><select id="rim_size"${ssrIncludeBooleanAttr(!rims.value) ? " disabled" : ""} class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none" data-v-77f5ec93><option data-v-77f5ec93${ssrIncludeBooleanAttr(Array.isArray(unref(form).rim) ? ssrLooseContain(unref(form).rim, null) : ssrLooseEqual(unref(form).rim, null)) ? " selected" : ""}>- Select -</option><!--[-->`);
      ssrRenderList(rims.value, (rim) => {
        _push(`<option${ssrRenderAttr("value", rim)} data-v-77f5ec93>${ssrInterpolate(rim)}</option>`);
      });
      _push(`<!--]--></select></div><div class="sm:col-span-6 col-span-12" data-v-77f5ec93><div class="relative" data-v-77f5ec93><input type="text"${ssrRenderAttr("value", unref(form).postcode)} id="postcode" name="postcode" autocomplete="postal-code" placeholder="Postcode" class="${ssrRenderClass({ "block uppercase text-sm w-full h-10 px-3 bg-white border rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none": true, "border-red-500": _ctx.$page.props.flash.errors.postcode, "border-gray-300": !_ctx.$page.props.flash.errors.postcode })}" data-v-77f5ec93>`);
      if (_ctx.$page.props.flash.errors.postcode) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-77f5ec93><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-77f5ec93></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.$page.props.flash.errors.postcode) {
        _push(`<span class="w-full block text-center text-xs text-red-500" data-v-77f5ec93>${ssrInterpolate(_ctx.$page.props.flash.errors.postcode)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sm:col-span-6 col-span-12" data-v-77f5ec93><button type="submit" class="${ssrRenderClass({ "flex items-center justify-center bg-wheelfit-500 text-white w-full rounded outline-0 h-10 text-lg text-center uppercase": true, "focus:ring-4 focus:ring-wheelfit-600/30 focus:border-wheelfit-600/30 hover:bg-wheelfit-400 transition duration-150 ease-in-out": valid.value, "opacity-50 cursor-not-allowed": !valid.value, "button--loading": unref(form).processing })}" data-v-77f5ec93><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-77f5ec93><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" data-v-77f5ec93></path></svg> FIND </button></div></div></form><div class="md:col-span-4 md:mb-0 mb-6 w-full" data-v-77f5ec93><img src="/images/main/tyre-size-guide.webp" srcset="/images/main/tyre-size-guide.webp 720w,
                            /images/main/tyre-size-guide-500.webp 500w,
                            /images/main/tyre-size-guide-300.webp 300w,
                            /images/main/tyre-size-guide-150.webp 150w" alt="Tyre Size Guide" sizes="(min-width: 1280px) 237px, (min-width:1024px) 205px, (min-width: 768px) 221px, (min-width: 640px) 520px, (min-width: 576px) 544px, 100vw" data-v-77f5ec93></div></div></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Carousel/MainCarouselSearchTyres.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const slidesLen = 9;
const interval = 400;
const _sfc_main$8 = {
  __name: "MainCarousel",
  __ssrInlineRender: true,
  props: {
    location: {
      type: String,
      required: false,
      default: null
    }
  },
  setup(__props) {
    const isSliding = ref(false);
    const visibleSlide = ref(0);
    const direction = ref("left");
    const slideTimer = ref(interval);
    const isPaused = ref(false);
    watch(slideTimer, () => {
      if (slideTimer.value <= 0) {
        slideTimer.value = interval;
        next();
      } else if (!isPaused.value) {
        setTimeout(() => {
          slideTimer.value--;
        }, 1);
      }
    }, { immediate: true });
    function next() {
      if (isSliding.value)
        return;
      if (visibleSlide.value >= slidesLen - 1) {
        visibleSlide.value = 0;
      } else {
        visibleSlide.value += 1;
      }
      direction.value = "left";
      setSliding();
    }
    function prev() {
      if (isSliding.value)
        return;
      if (visibleSlide.value <= 0) {
        visibleSlide.value = slidesLen - 1;
      } else {
        visibleSlide.value--;
      }
      direction.value = "right";
      setSliding();
    }
    function setSliding() {
      isSliding.value = true;
      setTimeout(() => {
        isSliding.value = false;
      }, 600);
    }
    function pause() {
      isPaused.value = true;
    }
    function unpause() {
      isPaused.value = false;
      slideTimer.value--;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="bg-black">`);
      _push(ssrRenderComponent(Container, { class: "md:max-w-none sm:max-w-none mx-auto px-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Carousel, {
              onNext: next,
              onPrev: prev,
              onMouseenter: pause,
              onMouseleave: unpause
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 0,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-1.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-1.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-1-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-1-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Tyres Anywhere LTD Mobile Tyres Van"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>We Come To You!</h1><p class="sm:text-sm text-xs text-center"${_scopeId3}>Our mobile tyre fitting service is your convenient solution</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-1.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-1.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-1-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-1-300.webp 300w",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                            alt: "Tyres Anywhere LTD Mobile Tyres Van"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 1,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-2.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Mobile Tyre Fitting"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}>`);
                        if (!__props.location) {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Fitting</h1>`);
                        } else {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Fitting in ${ssrInterpolate(__props.location)}</h1>`);
                        }
                        _push4(`<p class="sm:text-sm text-xs text-center"${_scopeId3}>Same day service for emergencies &amp; non-emergencies.</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-2.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                            alt: "Mobile Tyre Fitting"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            !__props.location ? (openBlock(), createBlock("h1", {
                              key: 0,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                              key: 1,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 2,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-3.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-3.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-3-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-3-300.webp 300w" alt="Mobile tyre puncture repair" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" class="object-cover object-center w-full h-full brightness-[0.6]"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}>`);
                        if (!__props.location) {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>30-60 Minute Response</h1>`);
                        } else {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Repair in ${ssrInterpolate(__props.location)}</h1>`);
                        }
                        _push4(`<p class="sm:text-sm text-xs text-center"${_scopeId3}>Maximum 30-60 minute response for emergencies.</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-3.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-3.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-3-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-3-300.webp 300w",
                            alt: "Mobile tyre puncture repair",
                            sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                            class: "object-cover object-center w-full h-full brightness-[0.6]"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            !__props.location ? (openBlock(), createBlock("h1", {
                              key: 0,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                              key: 1,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 3,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-4.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-4.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-4-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-4-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Tyres Anywhere LTD Mobile Tyres Van"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>We Come To You!</h1><p class="sm:text-sm text-xs text-center"${_scopeId3}>Our mobile tyre fitting service is your convenient solution</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-4.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-4.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-4-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-4-300.webp 300w",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                            alt: "Tyres Anywhere LTD Mobile Tyres Van"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 4,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-5.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-5.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-5-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-5-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Mobile Tyre Fitting"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}>`);
                        if (!__props.location) {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Fitting</h1>`);
                        } else {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Fitting in ${ssrInterpolate(__props.location)}</h1>`);
                        }
                        _push4(`<p class="sm:text-sm text-xs text-center"${_scopeId3}>Same day service for emergencies &amp; non-emergencies.</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-5.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-5.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-5-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-5-300.webp 300w",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                            alt: "Mobile Tyre Fitting"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            !__props.location ? (openBlock(), createBlock("h1", {
                              key: 0,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                              key: 1,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 5,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-6.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w" alt="Mobile tyre puncture repair" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" class="object-cover object-center w-full h-full brightness-[0.6]"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}>`);
                        if (!__props.location) {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>30-60 Minute Response</h1>`);
                        } else {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Repair in ${ssrInterpolate(__props.location)}</h1>`);
                        }
                        _push4(`<p class="sm:text-sm text-xs text-center"${_scopeId3}>Maximum 30-60 minute response for emergencies.</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-6.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w",
                            alt: "Mobile tyre puncture repair",
                            sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                            class: "object-cover object-center w-full h-full brightness-[0.6]"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            !__props.location ? (openBlock(), createBlock("h1", {
                              key: 0,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                              key: 1,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 6,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-7.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Tyres Anywhere LTD Mobile Tyres Van"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>We Come To You!</h1><p class="sm:text-sm text-xs text-center"${_scopeId3}>Our mobile tyre fitting service is your convenient solution</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-7.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                            alt: "Tyres Anywhere LTD Mobile Tyres Van"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 7,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-8.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-8.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-8-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-8-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Mobile Tyre Fitting"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}>`);
                        if (!__props.location) {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Fitting</h1>`);
                        } else {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Fitting in ${ssrInterpolate(__props.location)}</h1>`);
                        }
                        _push4(`<p class="sm:text-sm text-xs text-center"${_scopeId3}>Same day service for emergencies &amp; non-emergencies.</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-8.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-8.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-8-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-8-300.webp 300w",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                            alt: "Mobile Tyre Fitting"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            !__props.location ? (openBlock(), createBlock("h1", {
                              key: 0,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                              key: 1,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 8,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-9.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-9.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-9-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-9-300.webp 300w" alt="Mobile tyre puncture repair" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" class="object-cover object-center w-full h-full brightness-[0.6]"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}>`);
                        if (!__props.location) {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>30-60 Minute Response</h1>`);
                        } else {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Repair in ${ssrInterpolate(__props.location)}</h1>`);
                        }
                        _push4(`<p class="sm:text-sm text-xs text-center"${_scopeId3}>Maximum 30-60 minute response for emergencies.</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-9.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-9.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-9-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-9-300.webp 300w",
                            alt: "Mobile tyre puncture repair",
                            sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                            class: "object-cover object-center w-full h-full brightness-[0.6]"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            !__props.location ? (openBlock(), createBlock("h1", {
                              key: 0,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                              key: 1,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CarouselSlide, {
                      index: 0,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-1.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-1.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-1-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-1-300.webp 300w",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                          alt: "Tyres Anywhere LTD Mobile Tyres Van"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 1,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-2.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                          alt: "Mobile Tyre Fitting"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          !__props.location ? (openBlock(), createBlock("h1", {
                            key: 0,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                            key: 1,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 2,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-3.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-3.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-3-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-3-300.webp 300w",
                          alt: "Mobile tyre puncture repair",
                          sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                          class: "object-cover object-center w-full h-full brightness-[0.6]"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          !__props.location ? (openBlock(), createBlock("h1", {
                            key: 0,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                            key: 1,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 3,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-4.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-4.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-4-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-4-300.webp 300w",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                          alt: "Tyres Anywhere LTD Mobile Tyres Van"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 4,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-5.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-5.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-5-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-5-300.webp 300w",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                          alt: "Mobile Tyre Fitting"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          !__props.location ? (openBlock(), createBlock("h1", {
                            key: 0,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                            key: 1,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 5,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-6.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w",
                          alt: "Mobile tyre puncture repair",
                          sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                          class: "object-cover object-center w-full h-full brightness-[0.6]"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          !__props.location ? (openBlock(), createBlock("h1", {
                            key: 0,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                            key: 1,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 6,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-7.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                          alt: "Tyres Anywhere LTD Mobile Tyres Van"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 7,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-8.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-8.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-8-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-8-300.webp 300w",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                          alt: "Mobile Tyre Fitting"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          !__props.location ? (openBlock(), createBlock("h1", {
                            key: 0,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                            key: 1,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 8,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-9.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-9.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-9-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-9-300.webp 300w",
                          alt: "Mobile tyre puncture repair",
                          sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                          class: "object-cover object-center w-full h-full brightness-[0.6]"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          !__props.location ? (openBlock(), createBlock("h1", {
                            key: 0,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                            key: 1,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Carousel, {
                onNext: next,
                onPrev: prev,
                onMouseenter: pause,
                onMouseleave: unpause
              }, {
                default: withCtx(() => [
                  createVNode(CarouselSlide, {
                    index: 0,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-1.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-1.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-1-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-1-300.webp 300w",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                        alt: "Tyres Anywhere LTD Mobile Tyres Van"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 1,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-2.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                        alt: "Mobile Tyre Fitting"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        !__props.location ? (openBlock(), createBlock("h1", {
                          key: 0,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                          key: 1,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 2,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-3.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-3.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-3-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-3-300.webp 300w",
                        alt: "Mobile tyre puncture repair",
                        sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                        class: "object-cover object-center w-full h-full brightness-[0.6]"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        !__props.location ? (openBlock(), createBlock("h1", {
                          key: 0,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                          key: 1,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 3,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-4.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-4.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-4-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-4-300.webp 300w",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                        alt: "Tyres Anywhere LTD Mobile Tyres Van"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 4,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-5.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-5.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-5-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-5-300.webp 300w",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                        alt: "Mobile Tyre Fitting"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        !__props.location ? (openBlock(), createBlock("h1", {
                          key: 0,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                          key: 1,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 5,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-6.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w",
                        alt: "Mobile tyre puncture repair",
                        sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                        class: "object-cover object-center w-full h-full brightness-[0.6]"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        !__props.location ? (openBlock(), createBlock("h1", {
                          key: 0,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                          key: 1,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 6,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-7.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                        alt: "Tyres Anywhere LTD Mobile Tyres Van"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 7,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-8.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-8.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-8-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-8-300.webp 300w",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                        alt: "Mobile Tyre Fitting"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        !__props.location ? (openBlock(), createBlock("h1", {
                          key: 0,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                          key: 1,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 8,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-9.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-9.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-9-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-9-300.webp 300w",
                        alt: "Mobile tyre puncture repair",
                        sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                        class: "object-cover object-center w-full h-full brightness-[0.6]"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        !__props.location ? (openBlock(), createBlock("h1", {
                          key: 0,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                          key: 1,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Carousel/MainCarousel.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Fitting - Car &amp; Van Tyres Fitted At Home Or Work | Tyres Anywhere LTD</title><meta name="description" content="We provide round-the-clock same day, 7 days a week mobile tyre fitting. Get our tyres fitted at home, work or roadside. We provide cheap &amp; high quality tyres."${_scopeId}><link rel="canonical" href="https://tyresanywhere.com"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Fitting - Car & Van Tyres Fitted At Home Or Work | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "We provide round-the-clock same day, 7 days a week mobile tyre fitting. Get our tyres fitted at home, work or roadside. We provide cheap & high quality tyres."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$h, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$i, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularTyreBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomerRating, { class: "px-3 pt-12" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$h),
              createVNode(_sfc_main$i),
              createVNode(PopularTyreBrands),
              createVNode(CustomerRating, { class: "px-3 pt-12" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Welcome to <span class="text-wheelfit-300"${_scopeId2}>Tyres Anywhere</span>, Mobile Tyre Fitting</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>We bring our mobile tyre fitting service to your desired location.</h2><p class="text-sm"${_scopeId2}><b${_scopeId2}>Tyres Anywhere LTD</b> is a well-rounded and a prominent mobile tyre services business in United Kingdom. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder.</p><br${_scopeId2}><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId2}><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>24 Hour Mobile Tyre Fitting</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> At <b${_scopeId2}>Tyres Anywhere, Mobile Tyre Fitting</b>, we offer our customers 24 hour mobile tyre fitting service. When you&#39;re in need of an emergency tyre repair or change, we have you covered. We know that you don&#39;t choose the day or time of your next tyre service needs, that&#39;s why we offer our service 24 hours. We want to make sure that you have access to emergency mobile tyre fitting help when you need it. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}>We will come out to you as soon as possible and fit or repair your tyre so you can be back to your own business quicker.</p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Mobile Tyre Repair - Your Mobile Tyre Fitters</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Mobile tyres can offer you the security you need to confidently operate your vehicle. Whether you need emergency service from our mobile service team in the early hours of the morning on your way to work, or in the middle of the night, at an inconvenient roadside emergency. We are here to help you with all of your tyre repair needs. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> During normal hours, we can send hour day mobile tyre team to come help you out. Don&#39;t worry, we also have a night team on standby every night, as well as on holidays. We know that your mobile tyre repair needs don&#39;t take holidays, so we don&#39;t either! </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold mb-2"${_scopeId2}>Night and Day Mobile Tyre Services</h2><h2 class="text-xl"${_scopeId2}>We can meet you anywhere, anytime</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}>We can help you out with all of your services, whether you need a particular piece of equipment, like a <a class="text-blue-600 underline" target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Locknut"${_scopeId2}>locking wheel nut</a> or just need a general tyre fitting mobile service, we&#39;re happy to provide our help and support. Fitting mobile tyre to your vehicle is what we do, and we&#39;re proud to offer this important service to our communities. Whenever someone is in need of services mobile tyre, we can be there to help them out - all they need to do is call!</p><br${_scopeId2}><p class="text-sm"${_scopeId2}>Whether you&#39;re stuck on the roadside or motorway, day or night, high or low, just call us! We can assist large size vehicles, medium size vehicles and small size vehicles.  If you&#39;re deserted on the side of the road, our team will search for you to help provide you with great services day or night.</p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Commercial Tyre Fitting</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Yes, you heard right! Alongside your normal passenger tyres, we also provide tyre services for commercial vehicles, such as mini-vans, vans, minibus. We provide mobile tyre fitting to all van sizes, from SWB vans all the way to LWB vans. We fit commercial tyres during day &amp; night, 7 days a week, so the next time your commercial tyre has a blowout, call us for a quick and easy solution! </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl"${_scopeId2}>Why choose Tyres Anywhere LTD?</h3><br${_scopeId2}><p class="text-sm"${_scopeId2}> We&#39;ve provided mobile tyre services to thousands of our customers and helped them get back onto their journeys as safely as possible, be it on their garage, a roadside or even on the motorway. No one wants or knows when their tyres may have a blowout. It&#39;s an inconvenient event, so we believe it is our duty to replace or repair your tyres as quickly and safely as possible, so you can have more to do and less to worry about. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> At <b${_scopeId2}>Tyres Anywhere, Mobile Tyre Fitting</b> we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. </p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl"${_scopeId2}>Tyre brands we supply</h3><br${_scopeId2}><b class="text-sm"${_scopeId2}>Budget/Mid-range Brands</b><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Farroad</li><li${_scopeId2}>Hifly</li><li${_scopeId2}>Churchill</li><li${_scopeId2}>RoadX</li><li${_scopeId2}>Infinity</li></ul><br${_scopeId2}><b class="text-sm"${_scopeId2}>Premium Brands</b><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Michelin</li><li${_scopeId2}>Pirelli</li><li${_scopeId2}>Bridgestone</li><li${_scopeId2}>Goodyear</li><li${_scopeId2}>Continental</li></ul><br${_scopeId2}><p class="text-sm"${_scopeId2}>If you require any specific brands, you can <a href="tel:07442980101" class="text-blue-600 underline"${_scopeId2}>call us</a> and ask our operator to book it for you.</p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                        createTextVNode("Welcome to "),
                        createVNode("span", { class: "text-wheelfit-300" }, "Tyres Anywhere"),
                        createTextVNode(", Mobile Tyre Fitting")
                      ]),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring our mobile tyre fitting service to your desired location."),
                      createVNode("p", { class: "text-sm" }, [
                        createVNode("b", null, "Tyres Anywhere LTD"),
                        createTextVNode(" is a well-rounded and a prominent mobile tyre services business in United Kingdom. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder.")
                      ]),
                      createVNode("br"),
                      createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "24 Hour Mobile Tyre Fitting"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" At "),
                            createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                            createTextVNode(", we offer our customers 24 hour mobile tyre fitting service. When you're in need of an emergency tyre repair or change, we have you covered. We know that you don't choose the day or time of your next tyre service needs, that's why we offer our service 24 hours. We want to make sure that you have access to emergency mobile tyre fitting help when you need it. ")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "We will come out to you as soon as possible and fit or repair your tyre so you can be back to your own business quicker."),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Mobile Tyre Repair - Your Mobile Tyre Fitters"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Mobile tyres can offer you the security you need to confidently operate your vehicle. Whether you need emergency service from our mobile service team in the early hours of the morning on your way to work, or in the middle of the night, at an inconvenient roadside emergency. We are here to help you with all of your tyre repair needs. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " During normal hours, we can send hour day mobile tyre team to come help you out. Don't worry, we also have a night team on standby every night, as well as on holidays. We know that your mobile tyre repair needs don't take holidays, so we don't either! "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold mb-2" }, "Night and Day Mobile Tyre Services"),
                          createVNode("h2", { class: "text-xl" }, "We can meet you anywhere, anytime"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode("We can help you out with all of your services, whether you need a particular piece of equipment, like a "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              target: "_blank",
                              rel: "noreferrer",
                              href: "https://en.wikipedia.org/wiki/Locknut"
                            }, "locking wheel nut"),
                            createTextVNode(" or just need a general tyre fitting mobile service, we're happy to provide our help and support. Fitting mobile tyre to your vehicle is what we do, and we're proud to offer this important service to our communities. Whenever someone is in need of services mobile tyre, we can be there to help them out - all they need to do is call!")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "Whether you're stuck on the roadside or motorway, day or night, high or low, just call us! We can assist large size vehicles, medium size vehicles and small size vehicles.  If you're deserted on the side of the road, our team will search for you to help provide you with great services day or night."),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Commercial Tyre Fitting"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Yes, you heard right! Alongside your normal passenger tyres, we also provide tyre services for commercial vehicles, such as mini-vans, vans, minibus. We provide mobile tyre fitting to all van sizes, from SWB vans all the way to LWB vans. We fit commercial tyres during day & night, 7 days a week, so the next time your commercial tyre has a blowout, call us for a quick and easy solution! "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Why choose Tyres Anywhere LTD?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " We've provided mobile tyre services to thousands of our customers and helped them get back onto their journeys as safely as possible, be it on their garage, a roadside or even on the motorway. No one wants or knows when their tyres may have a blowout. It's an inconvenient event, so we believe it is our duty to replace or repair your tyres as quickly and safely as possible, so you can have more to do and less to worry about. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" At "),
                            createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                            createTextVNode(" we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. ")
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Tyre brands we supply"),
                          createVNode("br"),
                          createVNode("b", { class: "text-sm" }, "Budget/Mid-range Brands"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Farroad"),
                            createVNode("li", null, "Hifly"),
                            createVNode("li", null, "Churchill"),
                            createVNode("li", null, "RoadX"),
                            createVNode("li", null, "Infinity")
                          ]),
                          createVNode("br"),
                          createVNode("b", { class: "text-sm" }, "Premium Brands"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Michelin"),
                            createVNode("li", null, "Pirelli"),
                            createVNode("li", null, "Bridgestone"),
                            createVNode("li", null, "Goodyear"),
                            createVNode("li", null, "Continental")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode("If you require any specific brands, you can "),
                            createVNode("a", {
                              href: "tel:07442980101",
                              class: "text-blue-600 underline"
                            }, "call us"),
                            createTextVNode(" and ask our operator to book it for you.")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                      createTextVNode("Welcome to "),
                      createVNode("span", { class: "text-wheelfit-300" }, "Tyres Anywhere"),
                      createTextVNode(", Mobile Tyre Fitting")
                    ]),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring our mobile tyre fitting service to your desired location."),
                    createVNode("p", { class: "text-sm" }, [
                      createVNode("b", null, "Tyres Anywhere LTD"),
                      createTextVNode(" is a well-rounded and a prominent mobile tyre services business in United Kingdom. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder.")
                    ]),
                    createVNode("br"),
                    createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "24 Hour Mobile Tyre Fitting"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" At "),
                          createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                          createTextVNode(", we offer our customers 24 hour mobile tyre fitting service. When you're in need of an emergency tyre repair or change, we have you covered. We know that you don't choose the day or time of your next tyre service needs, that's why we offer our service 24 hours. We want to make sure that you have access to emergency mobile tyre fitting help when you need it. ")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "We will come out to you as soon as possible and fit or repair your tyre so you can be back to your own business quicker."),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Mobile Tyre Repair - Your Mobile Tyre Fitters"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Mobile tyres can offer you the security you need to confidently operate your vehicle. Whether you need emergency service from our mobile service team in the early hours of the morning on your way to work, or in the middle of the night, at an inconvenient roadside emergency. We are here to help you with all of your tyre repair needs. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " During normal hours, we can send hour day mobile tyre team to come help you out. Don't worry, we also have a night team on standby every night, as well as on holidays. We know that your mobile tyre repair needs don't take holidays, so we don't either! "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold mb-2" }, "Night and Day Mobile Tyre Services"),
                        createVNode("h2", { class: "text-xl" }, "We can meet you anywhere, anytime"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode("We can help you out with all of your services, whether you need a particular piece of equipment, like a "),
                          createVNode("a", {
                            class: "text-blue-600 underline",
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://en.wikipedia.org/wiki/Locknut"
                          }, "locking wheel nut"),
                          createTextVNode(" or just need a general tyre fitting mobile service, we're happy to provide our help and support. Fitting mobile tyre to your vehicle is what we do, and we're proud to offer this important service to our communities. Whenever someone is in need of services mobile tyre, we can be there to help them out - all they need to do is call!")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "Whether you're stuck on the roadside or motorway, day or night, high or low, just call us! We can assist large size vehicles, medium size vehicles and small size vehicles.  If you're deserted on the side of the road, our team will search for you to help provide you with great services day or night."),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Commercial Tyre Fitting"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Yes, you heard right! Alongside your normal passenger tyres, we also provide tyre services for commercial vehicles, such as mini-vans, vans, minibus. We provide mobile tyre fitting to all van sizes, from SWB vans all the way to LWB vans. We fit commercial tyres during day & night, 7 days a week, so the next time your commercial tyre has a blowout, call us for a quick and easy solution! "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Why choose Tyres Anywhere LTD?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " We've provided mobile tyre services to thousands of our customers and helped them get back onto their journeys as safely as possible, be it on their garage, a roadside or even on the motorway. No one wants or knows when their tyres may have a blowout. It's an inconvenient event, so we believe it is our duty to replace or repair your tyres as quickly and safely as possible, so you can have more to do and less to worry about. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" At "),
                          createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                          createTextVNode(" we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. ")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Tyre brands we supply"),
                        createVNode("br"),
                        createVNode("b", { class: "text-sm" }, "Budget/Mid-range Brands"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Farroad"),
                          createVNode("li", null, "Hifly"),
                          createVNode("li", null, "Churchill"),
                          createVNode("li", null, "RoadX"),
                          createVNode("li", null, "Infinity")
                        ]),
                        createVNode("br"),
                        createVNode("b", { class: "text-sm" }, "Premium Brands"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Michelin"),
                          createVNode("li", null, "Pirelli"),
                          createVNode("li", null, "Bridgestone"),
                          createVNode("li", null, "Goodyear"),
                          createVNode("li", null, "Continental")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode("If you require any specific brands, you can "),
                          createVNode("a", {
                            href: "tel:07442980101",
                            class: "text-blue-600 underline"
                          }, "call us"),
                          createTextVNode(" and ask our operator to book it for you.")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/Index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "Location",
  __ssrInlineRender: true,
  props: {
    location: String,
    slug: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Fitting in ${ssrInterpolate(__props.location)} | Tyres Anywhere LTD</title><meta name="description"${ssrRenderAttr("content", `We provide same day, 7 days a week mobile tyre fitting in ${__props.location}. Get our high quality & cheap tyres fitted in & around ${__props.location}.`)}${_scopeId}><link rel="canonical"${ssrRenderAttr("href", "https://tyresanywhere.com/locations/" + __props.slug)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Fitting in " + toDisplayString(__props.location) + " | Tyres Anywhere LTD", 1),
              createVNode("meta", {
                name: "description",
                content: `We provide same day, 7 days a week mobile tyre fitting in ${__props.location}. Get our high quality & cheap tyres fitted in & around ${__props.location}.`
              }, null, 8, ["content"]),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/locations/" + __props.slug
              }, null, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$8, { location: __props.location }, null, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$h, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$i, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularTyreBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomerRating, { class: "px-3 pt-12" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$h),
              createVNode(_sfc_main$i),
              createVNode(PopularTyreBrands),
              createVNode(CustomerRating, { class: "px-3 pt-12" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Mobile Tyre Fitting &amp; Services in ${ssrInterpolate(__props.location)}</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>We bring our mobile tyre fitting service to your desired location.</h2><p class="text-sm"${_scopeId2}><b${_scopeId2}>Tyres Anywhere LTD</b> is a well-rounded and a prominent mobile tyre services business in United Kingdom. We carry out 24/7 mobile tyre services in <b${_scopeId2}>${ssrInterpolate(__props.location)}</b> and surrounding areas. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder.</p><br${_scopeId2}><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId2}><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Same day mobile tyre fitting &amp; puncture repair in ${ssrInterpolate(__props.location)}</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> We offer same day mobile tyre fitting or mobile tyre repair in &amp; around ${ssrInterpolate(__props.location)}. Our services operate 7 days a week and are open 24 hours a day, giving you a reliable mobile tyre service you can depend on every day of the week in ${ssrInterpolate(__props.location)}. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}>We will come out to you as soon as possible and fit or repair your tyre so you can be back to your own business quicker.</p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Motorway or roadside mobile tyre fitting</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> If your tyre has failed you, and you&#39;re stranded on the roadside in or near ${ssrInterpolate(__props.location)} - look no further </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> Our mobile tyre technician will come to you wherever you are and fit or repair your tyre so you can be back to your own business quicker and safer. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold mb-2"${_scopeId2}>What do you require from me?</h2><h2 class="text-xl"${_scopeId2}>Please have your locking wheel nut key available for our tyre fitter, if your wheels are fitted with a locking wheel nut. We require the key in order to remove the wheel in question from your car.</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}>The locking wheel nut key can usually be found in the glove box or under the boot carpet with the spare tyre.</p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl"${_scopeId2}>Why choose Tyres Anywhere LTD?</h3><br${_scopeId2}><p class="text-sm"${_scopeId2}> We&#39;ve provided mobile tyre services to thousands of our customers and helped them get back onto their journeys as safely as possible, be it on their garage, a roadside or even on the motorway. No one wants or knows when their tyres may have a blowout. It&#39;s an inconvenient event, so we believe it is our duty to replace or repair your tyres as quickly and safely as possible, so you can have more to do and less to worry about. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> At <b${_scopeId2}>Tyres Anywhere, Mobile Tyre Fitting</b> we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. </p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl"${_scopeId2}>Tyre brands we supply</h3><br${_scopeId2}><b class="text-sm"${_scopeId2}>Budget/Mid-range Brands</b><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Farroad</li><li${_scopeId2}>Hifly</li><li${_scopeId2}>Churchill</li><li${_scopeId2}>RoadX</li><li${_scopeId2}>Infinity</li></ul><br${_scopeId2}><b class="text-sm"${_scopeId2}>Premium Brands</b><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Michelin</li><li${_scopeId2}>Pirelli</li><li${_scopeId2}>Bridgestone</li><li${_scopeId2}>Goodyear</li><li${_scopeId2}>Continental</li></ul><br${_scopeId2}><p class="text-sm"${_scopeId2}>If you require any specific brands, you can <a href="tel:07442980101" class="text-blue-600 underline"${_scopeId2}>call us</a> and ask our operator to book it for you.</p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Fitting & Services in " + toDisplayString(__props.location), 1),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring our mobile tyre fitting service to your desired location."),
                      createVNode("p", { class: "text-sm" }, [
                        createVNode("b", null, "Tyres Anywhere LTD"),
                        createTextVNode(" is a well-rounded and a prominent mobile tyre services business in United Kingdom. We carry out 24/7 mobile tyre services in "),
                        createVNode("b", null, toDisplayString(__props.location), 1),
                        createTextVNode(" and surrounding areas. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder.")
                      ]),
                      createVNode("br"),
                      createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Same day mobile tyre fitting & puncture repair in " + toDisplayString(__props.location), 1),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " We offer same day mobile tyre fitting or mobile tyre repair in & around " + toDisplayString(__props.location) + ". Our services operate 7 days a week and are open 24 hours a day, giving you a reliable mobile tyre service you can depend on every day of the week in " + toDisplayString(__props.location) + ". ", 1),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "We will come out to you as soon as possible and fit or repair your tyre so you can be back to your own business quicker."),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Motorway or roadside mobile tyre fitting"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " If your tyre has failed you, and you're stranded on the roadside in or near " + toDisplayString(__props.location) + " - look no further ", 1),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Our mobile tyre technician will come to you wherever you are and fit or repair your tyre so you can be back to your own business quicker and safer. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold mb-2" }, "What do you require from me?"),
                          createVNode("h2", { class: "text-xl" }, "Please have your locking wheel nut key available for our tyre fitter, if your wheels are fitted with a locking wheel nut. We require the key in order to remove the wheel in question from your car."),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "The locking wheel nut key can usually be found in the glove box or under the boot carpet with the spare tyre.")
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Why choose Tyres Anywhere LTD?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " We've provided mobile tyre services to thousands of our customers and helped them get back onto their journeys as safely as possible, be it on their garage, a roadside or even on the motorway. No one wants or knows when their tyres may have a blowout. It's an inconvenient event, so we believe it is our duty to replace or repair your tyres as quickly and safely as possible, so you can have more to do and less to worry about. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" At "),
                            createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                            createTextVNode(" we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. ")
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Tyre brands we supply"),
                          createVNode("br"),
                          createVNode("b", { class: "text-sm" }, "Budget/Mid-range Brands"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Farroad"),
                            createVNode("li", null, "Hifly"),
                            createVNode("li", null, "Churchill"),
                            createVNode("li", null, "RoadX"),
                            createVNode("li", null, "Infinity")
                          ]),
                          createVNode("br"),
                          createVNode("b", { class: "text-sm" }, "Premium Brands"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Michelin"),
                            createVNode("li", null, "Pirelli"),
                            createVNode("li", null, "Bridgestone"),
                            createVNode("li", null, "Goodyear"),
                            createVNode("li", null, "Continental")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode("If you require any specific brands, you can "),
                            createVNode("a", {
                              href: "tel:07442980101",
                              class: "text-blue-600 underline"
                            }, "call us"),
                            createTextVNode(" and ask our operator to book it for you.")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Fitting & Services in " + toDisplayString(__props.location), 1),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring our mobile tyre fitting service to your desired location."),
                    createVNode("p", { class: "text-sm" }, [
                      createVNode("b", null, "Tyres Anywhere LTD"),
                      createTextVNode(" is a well-rounded and a prominent mobile tyre services business in United Kingdom. We carry out 24/7 mobile tyre services in "),
                      createVNode("b", null, toDisplayString(__props.location), 1),
                      createTextVNode(" and surrounding areas. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder.")
                    ]),
                    createVNode("br"),
                    createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Same day mobile tyre fitting & puncture repair in " + toDisplayString(__props.location), 1),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " We offer same day mobile tyre fitting or mobile tyre repair in & around " + toDisplayString(__props.location) + ". Our services operate 7 days a week and are open 24 hours a day, giving you a reliable mobile tyre service you can depend on every day of the week in " + toDisplayString(__props.location) + ". ", 1),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "We will come out to you as soon as possible and fit or repair your tyre so you can be back to your own business quicker."),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Motorway or roadside mobile tyre fitting"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " If your tyre has failed you, and you're stranded on the roadside in or near " + toDisplayString(__props.location) + " - look no further ", 1),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Our mobile tyre technician will come to you wherever you are and fit or repair your tyre so you can be back to your own business quicker and safer. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold mb-2" }, "What do you require from me?"),
                        createVNode("h2", { class: "text-xl" }, "Please have your locking wheel nut key available for our tyre fitter, if your wheels are fitted with a locking wheel nut. We require the key in order to remove the wheel in question from your car."),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "The locking wheel nut key can usually be found in the glove box or under the boot carpet with the spare tyre.")
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Why choose Tyres Anywhere LTD?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " We've provided mobile tyre services to thousands of our customers and helped them get back onto their journeys as safely as possible, be it on their garage, a roadside or even on the motorway. No one wants or knows when their tyres may have a blowout. It's an inconvenient event, so we believe it is our duty to replace or repair your tyres as quickly and safely as possible, so you can have more to do and less to worry about. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" At "),
                          createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                          createTextVNode(" we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. ")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Tyre brands we supply"),
                        createVNode("br"),
                        createVNode("b", { class: "text-sm" }, "Budget/Mid-range Brands"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Farroad"),
                          createVNode("li", null, "Hifly"),
                          createVNode("li", null, "Churchill"),
                          createVNode("li", null, "RoadX"),
                          createVNode("li", null, "Infinity")
                        ]),
                        createVNode("br"),
                        createVNode("b", { class: "text-sm" }, "Premium Brands"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Michelin"),
                          createVNode("li", null, "Pirelli"),
                          createVNode("li", null, "Bridgestone"),
                          createVNode("li", null, "Goodyear"),
                          createVNode("li", null, "Continental")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode("If you require any specific brands, you can "),
                          createVNode("a", {
                            href: "tel:07442980101",
                            class: "text-blue-600 underline"
                          }, "call us"),
                          createTextVNode(" and ask our operator to book it for you.")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/Location.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "MobileTyreFitting",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Fitting - Same Day, 7 Days A Week | Tyres Anywhere LTD</title><meta name="description" content="We provide same day mobile tyre fitting for your convenience. Tyres Anywhere LTD supplies and fits car or van tyres at your home, work or roadside."${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/mobile-tyre-fitting"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Fitting - Same Day, 7 Days A Week | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "We provide same day mobile tyre fitting for your convenience. Tyres Anywhere LTD supplies and fits car or van tyres at your home, work or roadside."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/mobile-tyre-fitting"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-black">`);
      _push(ssrRenderComponent(Container, { class: "relative lg:h-[340px] md:h-[250px] h-[200px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/showcase/mobile-tyre-fitting.webp" srcset="/images/showcase/mobile-tyre-fitting.webp 1000w,
                        /images/showcase/mobile-tyre-fitting-500.webp 500w,
                        /images/showcase/mobile-tyre-fitting.webp 300w" class="object-cover object-center w-full h-full" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Mobile Tyre Fitting</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/showcase/mobile-tyre-fitting.webp",
                srcset: "/images/showcase/mobile-tyre-fitting.webp 1000w,\n                        /images/showcase/mobile-tyre-fitting-500.webp 500w,\n                        /images/showcase/mobile-tyre-fitting.webp 300w",
                class: "object-cover object-center w-full h-full",
                sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw",
                alt: "Mobile Tyre Fitting"
              }),
              createVNode("div", { class: "absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Mobile Tyre Fitting"),
                createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Mobile Tyre Fitting Services</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>Your brand new tyre fitted safely at your desired location.</h2><div class="lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4"${_scopeId2}><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Why choose mobile tyre fitting?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Taking your vehicle to a garage can take up valuable time, and it can be difficult to fit into your busy day. At <b${_scopeId2}>Tyres Anywhere, Mobile Tyre Fitting</b>, we provide 24/7 mobile tyre fitting, so you can have your tyres fitted at anytime and anyplace, without the need of driving to an auto center. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> Our mobile tyre fitting service comes to you within minutes of your call, whether your at home, work, roadside or on the hard-shoulder of a motorway! Our tyre fitters are equipped with years of experience and knowledge, and will efficiently fit your new tyres at your convenience. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> We provide high-quality, cheap tyres from well-known brands, so if you&#39;re looking to change your tyres without giving up your day -our mobile tyre fitting is your convenient solution. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-full" src="/images/main/mobile-tyre-fitting.webp" srcset="/images/main/mobile-tyre-fitting.webp 1024w,
                                    /images/main/mobile-tyre-fitting-500.webp 500w,
                                    /images/main/mobile-tyre-fitting-300.webp 300w,
                                    /images/main/mobile-tyre-fitting-150.webp 150w" sizes="(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)" alt="Wheel being secured to vehicle"${_scopeId2}></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Can I get my tyres fitted on a roadside or motorway?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> You may be surprised, but 9 out of 10 times we can fit your tyre on the roadside or motorway. As long as the vehicle is parked in a safe spot, our tyre fitters are completely able to fit your tyre as they would normally, on any road or under any weather conditions. Safety is our top priority, so if the tyre fitter sees any danger, they may decide to move you to another spot. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Mobile Tyre Fitting</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Our mobile tyre fitting service operates 24/7 and we bring our service to you, whether you&#39;re parked in your driveway, at work or stuck on the roadside. Our experienced tyre fitters are one fingertip away from heading to your location. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Sidewall Damage?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Damages or punctures on the sidewall of your tyre cannot be repaired - you will have to get a new tyre. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> This is because the sidewall sustains the most load when the tyre is in use, and weakening the sidewall&#39;s structure might be bad news. In this circumstance, any repairs made on the sidewalls is highly likely to fall off as the repair patch applied to the sidewall can flex when travelling, leading to tyre failure. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> If you require new high-quality tyres urgently, our mobile tyre fitting service is the most convenient and simple solution. </p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Emergency Mobile Tyre Fitting</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> If you need a new tyre within minutes, look no further <br${_scopeId2}> A punctured tyre on the middle of a motorway or road can leave you with a massive headache and waste a large portion of your day, preventing you from getting to where you need to be. <br${_scopeId2}> We aim to fit you a new tyre as soon as possible so you can be back on the road quicker and safer. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}>Before you call, have ready your:</p><br${_scopeId2}><ul class="list-disc text-sm pl-6"${_scopeId2}><li${_scopeId2}>Tyre Size</li><li${_scopeId2}>Exact location, or send us your live location via WhatsApp / Waze / Google Maps.</li></ul></div><div class="col-span-6 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Mobile Tyre Fitting at Home</h3><br${_scopeId2}><p class="text-sm"${_scopeId2}> You and your vehicle&#39;s safety is our top priority at <b${_scopeId2}>Tyres Anywhere, Mobile Tyre Fitting</b>. <br${_scopeId2}> If your vehicle is sitting on your driveway with worn or damaged tyres, it is incredibly dangerous to drive as it increases a risk of an accident to occur, not even mentioning that it&#39;s illegal once the tyre treads are less than 1.6mm. <br${_scopeId2}> We provide our mobile tyre fitting service so you can have new tyres of your choice safely fitted on the same day of your call. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl font-light"${_scopeId2}>When should I get a new tyre?</h3><br${_scopeId2}><p class="text-sm"${_scopeId2}> You should get your tyres changed if you experience any of the following signs of damage: </p><br${_scopeId2}><ul class="list-disc text-sm pl-6"${_scopeId2}><li${_scopeId2}>Once the tyre tread has worn to the legal limit of 1.6mm.</li><li${_scopeId2}>If you hear a squeaky humming sound caused by a chopped tread.</li><li${_scopeId2}>A puncture on the side of the tyre.</li><li${_scopeId2}>You can notice the lack of traction in your tyres due to tread wear.</li><li${_scopeId2}>If your tyre shows signs of ageing.</li><li${_scopeId2}>If the tyre is not suited for your vehicle.</li><li${_scopeId2}>Other reasons.</li></ul></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Fitting Services"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Your brand new tyre fitted safely at your desired location."),
                      createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Why choose mobile tyre fitting?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" Taking your vehicle to a garage can take up valuable time, and it can be difficult to fit into your busy day. At "),
                            createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                            createTextVNode(", we provide 24/7 mobile tyre fitting, so you can have your tyres fitted at anytime and anyplace, without the need of driving to an auto center. ")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Our mobile tyre fitting service comes to you within minutes of your call, whether your at home, work, roadside or on the hard-shoulder of a motorway! Our tyre fitters are equipped with years of experience and knowledge, and will efficiently fit your new tyres at your convenience. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " We provide high-quality, cheap tyres from well-known brands, so if you're looking to change your tyres without giving up your day -our mobile tyre fitting is your convenient solution. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: "/images/main/mobile-tyre-fitting.webp",
                            srcset: "/images/main/mobile-tyre-fitting.webp 1024w,\n                                    /images/main/mobile-tyre-fitting-500.webp 500w,\n                                    /images/main/mobile-tyre-fitting-300.webp 300w,\n                                    /images/main/mobile-tyre-fitting-150.webp 150w",
                            sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                            alt: "Wheel being secured to vehicle"
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Can I get my tyres fitted on a roadside or motorway?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " You may be surprised, but 9 out of 10 times we can fit your tyre on the roadside or motorway. As long as the vehicle is parked in a safe spot, our tyre fitters are completely able to fit your tyre as they would normally, on any road or under any weather conditions. Safety is our top priority, so if the tyre fitter sees any danger, they may decide to move you to another spot. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Mobile Tyre Fitting"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Our mobile tyre fitting service operates 24/7 and we bring our service to you, whether you're parked in your driveway, at work or stuck on the roadside. Our experienced tyre fitters are one fingertip away from heading to your location. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Sidewall Damage?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Damages or punctures on the sidewall of your tyre cannot be repaired - you will have to get a new tyre. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " This is because the sidewall sustains the most load when the tyre is in use, and weakening the sidewall's structure might be bad news. In this circumstance, any repairs made on the sidewalls is highly likely to fall off as the repair patch applied to the sidewall can flex when travelling, leading to tyre failure. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " If you require new high-quality tyres urgently, our mobile tyre fitting service is the most convenient and simple solution. ")
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Emergency Mobile Tyre Fitting"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" If you need a new tyre within minutes, look no further "),
                            createVNode("br"),
                            createTextVNode(" A punctured tyre on the middle of a motorway or road can leave you with a massive headache and waste a large portion of your day, preventing you from getting to where you need to be. "),
                            createVNode("br"),
                            createTextVNode(" We aim to fit you a new tyre as soon as possible so you can be back on the road quicker and safer. ")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "Before you call, have ready your:"),
                          createVNode("br"),
                          createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                            createVNode("li", null, "Tyre Size"),
                            createVNode("li", null, "Exact location, or send us your live location via WhatsApp / Waze / Google Maps.")
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "Mobile Tyre Fitting at Home"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" You and your vehicle's safety is our top priority at "),
                            createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                            createTextVNode(". "),
                            createVNode("br"),
                            createTextVNode(" If your vehicle is sitting on your driveway with worn or damaged tyres, it is incredibly dangerous to drive as it increases a risk of an accident to occur, not even mentioning that it's illegal once the tyre treads are less than 1.6mm. "),
                            createVNode("br"),
                            createTextVNode(" We provide our mobile tyre fitting service so you can have new tyres of your choice safely fitted on the same day of your call. ")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "When should I get a new tyre?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " You should get your tyres changed if you experience any of the following signs of damage: "),
                          createVNode("br"),
                          createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                            createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                            createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                            createVNode("li", null, "A puncture on the side of the tyre."),
                            createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                            createVNode("li", null, "If your tyre shows signs of ageing."),
                            createVNode("li", null, "If the tyre is not suited for your vehicle."),
                            createVNode("li", null, "Other reasons.")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Fitting Services"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Your brand new tyre fitted safely at your desired location."),
                    createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Why choose mobile tyre fitting?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" Taking your vehicle to a garage can take up valuable time, and it can be difficult to fit into your busy day. At "),
                          createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                          createTextVNode(", we provide 24/7 mobile tyre fitting, so you can have your tyres fitted at anytime and anyplace, without the need of driving to an auto center. ")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Our mobile tyre fitting service comes to you within minutes of your call, whether your at home, work, roadside or on the hard-shoulder of a motorway! Our tyre fitters are equipped with years of experience and knowledge, and will efficiently fit your new tyres at your convenience. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " We provide high-quality, cheap tyres from well-known brands, so if you're looking to change your tyres without giving up your day -our mobile tyre fitting is your convenient solution. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: "/images/main/mobile-tyre-fitting.webp",
                          srcset: "/images/main/mobile-tyre-fitting.webp 1024w,\n                                    /images/main/mobile-tyre-fitting-500.webp 500w,\n                                    /images/main/mobile-tyre-fitting-300.webp 300w,\n                                    /images/main/mobile-tyre-fitting-150.webp 150w",
                          sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                          alt: "Wheel being secured to vehicle"
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Can I get my tyres fitted on a roadside or motorway?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " You may be surprised, but 9 out of 10 times we can fit your tyre on the roadside or motorway. As long as the vehicle is parked in a safe spot, our tyre fitters are completely able to fit your tyre as they would normally, on any road or under any weather conditions. Safety is our top priority, so if the tyre fitter sees any danger, they may decide to move you to another spot. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Mobile Tyre Fitting"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Our mobile tyre fitting service operates 24/7 and we bring our service to you, whether you're parked in your driveway, at work or stuck on the roadside. Our experienced tyre fitters are one fingertip away from heading to your location. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Sidewall Damage?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Damages or punctures on the sidewall of your tyre cannot be repaired - you will have to get a new tyre. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " This is because the sidewall sustains the most load when the tyre is in use, and weakening the sidewall's structure might be bad news. In this circumstance, any repairs made on the sidewalls is highly likely to fall off as the repair patch applied to the sidewall can flex when travelling, leading to tyre failure. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " If you require new high-quality tyres urgently, our mobile tyre fitting service is the most convenient and simple solution. ")
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Emergency Mobile Tyre Fitting"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" If you need a new tyre within minutes, look no further "),
                          createVNode("br"),
                          createTextVNode(" A punctured tyre on the middle of a motorway or road can leave you with a massive headache and waste a large portion of your day, preventing you from getting to where you need to be. "),
                          createVNode("br"),
                          createTextVNode(" We aim to fit you a new tyre as soon as possible so you can be back on the road quicker and safer. ")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "Before you call, have ready your:"),
                        createVNode("br"),
                        createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                          createVNode("li", null, "Tyre Size"),
                          createVNode("li", null, "Exact location, or send us your live location via WhatsApp / Waze / Google Maps.")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "Mobile Tyre Fitting at Home"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" You and your vehicle's safety is our top priority at "),
                          createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                          createTextVNode(". "),
                          createVNode("br"),
                          createTextVNode(" If your vehicle is sitting on your driveway with worn or damaged tyres, it is incredibly dangerous to drive as it increases a risk of an accident to occur, not even mentioning that it's illegal once the tyre treads are less than 1.6mm. "),
                          createVNode("br"),
                          createTextVNode(" We provide our mobile tyre fitting service so you can have new tyres of your choice safely fitted on the same day of your call. ")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "When should I get a new tyre?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " You should get your tyres changed if you experience any of the following signs of damage: "),
                        createVNode("br"),
                        createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                          createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                          createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                          createVNode("li", null, "A puncture on the side of the tyre."),
                          createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                          createVNode("li", null, "If your tyre shows signs of ageing."),
                          createVNode("li", null, "If the tyre is not suited for your vehicle."),
                          createVNode("li", null, "Other reasons.")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$h, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$i, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularTyreBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomerRating, { class: "px-3 pt-12" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$h),
              createVNode(_sfc_main$i),
              createVNode(PopularTyreBrands),
              createVNode(CustomerRating, { class: "px-3 pt-12" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/MobileTyreFitting.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "MobileTyreRepair",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Repair - Same Day Emergency Tyre Repair | Tyres Anywhere LTD</title><meta name="description" content="Tyres Anywhere LTD offer mobile tyre repairs to ensures your punctured tyre is taken care of at your convenience, whether your at home, work or roadside"${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/mobile-tyre-repair"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Repair - Same Day Emergency Tyre Repair | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Tyres Anywhere LTD offer mobile tyre repairs to ensures your punctured tyre is taken care of at your convenience, whether your at home, work or roadside"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/mobile-tyre-repair"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-black">`);
      _push(ssrRenderComponent(Container, { class: "relative lg:h-[340px] md:h-[250px] h-[200px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/showcase/mobile-puncture-repair.webp" srcset="/images/showcase/mobile-puncture-repair.webp 1000w,
                                /images/showcase/mobile-puncture-repair-500.webp 500w,
                                /images/showcase/mobile-puncture-repair.webp 300w" class="object-cover object-center w-full h-full" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Mobile Tyre Fitting</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/showcase/mobile-puncture-repair.webp",
                srcset: "/images/showcase/mobile-puncture-repair.webp 1000w,\n                                /images/showcase/mobile-puncture-repair-500.webp 500w,\n                                /images/showcase/mobile-puncture-repair.webp 300w",
                class: "object-cover object-center w-full h-full",
                sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw",
                alt: "Mobile Tyre Fitting"
              }),
              createVNode("div", { class: "absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Mobile Tyre Fitting"),
                createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Mobile Tyre Repair Services</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>We seal your punctured tyre securely at your desired location.</h2><div class="lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4"${_scopeId2}><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Is your punctured tyre repairable?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> It&#39;s actually quite complicated... Whether the tyre is repairable depends on many factors, such as: </p><br${_scopeId2}><ul class="list-disc text-sm pl-6 space-y-2"${_scopeId2}><li${_scopeId2}>The location of the puncture</li><li${_scopeId2}>The size of the puncture</li><li${_scopeId2}>The condition &amp; age of the tyre</li><li${_scopeId2}>Whether the tyre is a run-flat tyre</li></ul><br${_scopeId2}><p class="text-sm"${_scopeId2}> A tyre can only be repaired if the diameter of the damaged area is less than 6mm and located in the central ¾ of the tyre. If the puncture is outside of the central ¾ it is deemed too close to the sidewall to promise a safe and long-lasting repair. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> If your tyre is repairable, make sure that you do not drive on that flat tyre to maximise the chance of repairing it. This is because there is no air pressure to keep the tyre shaped correctly and the tyre sidewall will be pinched between the wheel rim and the road which can gravely damage it. </p><br${_scopeId2}><ul class="list-disc text-sm pl-6"${_scopeId2}><li${_scopeId2}>If the puncture is located on the sidewall of the tyre.</li><li${_scopeId2}>Run-flat tyres cannot be repaired.</li><li${_scopeId2}>If the diameter of the damaged area is larger than 6mm.</li><li${_scopeId2}>If your tyre treads are worn less than 1.6mm.</li><li${_scopeId2}>If your tyre shows signs of ageing.</li></ul><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-full" src="/images/main/puncture-repair-guide.webp" srcset="/images/main/puncture-repair-guide.webp 1024w,
                                    /images/main/puncture-repair-guide-500.webp 500w,
                                    /images/main/puncture-repair-guide-300.webp 300w,
                                    /images/main/puncture-repair-guide-150.webp 150w" sizes="(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)" alt="Mobile puncture repair guide"${_scopeId2}></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Sometimes it&#39;s better to go for a new tyre</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Puncture repairs are only a temporary solution - there is still a chance that your tyre may start to leak air again, especially if you&#39;ve repaired the same tyre once before. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> It can be more cost-efficient to go for a brand new tyre as it will most likely last longer than the old tyre and give you better performance depending on the tyre quality. </p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>When should I get a new tyre?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> You should get your tyres changed if you experience any of the following signs of damage: </p><br${_scopeId2}><ul class="list-disc text-sm pl-6"${_scopeId2}><li${_scopeId2}>Once the tyre tread has worn to the legal limit of 1.6mm.</li><li${_scopeId2}>If you hear a squeaky humming sound caused by a chopped tread.</li><li${_scopeId2}>A puncture on the side of the tyre.</li><li${_scopeId2}>You can notice the lack of traction in your tyres due to tread wear.</li><li${_scopeId2}>If your tyre shows signs of ageing.</li><li${_scopeId2}>If the tyre is not suited for your vehicle.</li><li${_scopeId2}>Other reasons.</li></ul></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Repair Services"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We seal your punctured tyre securely at your desired location."),
                      createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Is your punctured tyre repairable?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " It's actually quite complicated... Whether the tyre is repairable depends on many factors, such as: "),
                          createVNode("br"),
                          createVNode("ul", { class: "list-disc text-sm pl-6 space-y-2" }, [
                            createVNode("li", null, "The location of the puncture"),
                            createVNode("li", null, "The size of the puncture"),
                            createVNode("li", null, "The condition & age of the tyre"),
                            createVNode("li", null, "Whether the tyre is a run-flat tyre")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " A tyre can only be repaired if the diameter of the damaged area is less than 6mm and located in the central ¾ of the tyre. If the puncture is outside of the central ¾ it is deemed too close to the sidewall to promise a safe and long-lasting repair. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " If your tyre is repairable, make sure that you do not drive on that flat tyre to maximise the chance of repairing it. This is because there is no air pressure to keep the tyre shaped correctly and the tyre sidewall will be pinched between the wheel rim and the road which can gravely damage it. "),
                          createVNode("br"),
                          createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                            createVNode("li", null, "If the puncture is located on the sidewall of the tyre."),
                            createVNode("li", null, "Run-flat tyres cannot be repaired."),
                            createVNode("li", null, "If the diameter of the damaged area is larger than 6mm."),
                            createVNode("li", null, "If your tyre treads are worn less than 1.6mm."),
                            createVNode("li", null, "If your tyre shows signs of ageing.")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: "/images/main/puncture-repair-guide.webp",
                            srcset: "/images/main/puncture-repair-guide.webp 1024w,\n                                    /images/main/puncture-repair-guide-500.webp 500w,\n                                    /images/main/puncture-repair-guide-300.webp 300w,\n                                    /images/main/puncture-repair-guide-150.webp 150w",
                            sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                            alt: "Mobile puncture repair guide"
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Sometimes it's better to go for a new tyre"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Puncture repairs are only a temporary solution - there is still a chance that your tyre may start to leak air again, especially if you've repaired the same tyre once before. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " It can be more cost-efficient to go for a brand new tyre as it will most likely last longer than the old tyre and give you better performance depending on the tyre quality. ")
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "When should I get a new tyre?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " You should get your tyres changed if you experience any of the following signs of damage: "),
                          createVNode("br"),
                          createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                            createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                            createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                            createVNode("li", null, "A puncture on the side of the tyre."),
                            createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                            createVNode("li", null, "If your tyre shows signs of ageing."),
                            createVNode("li", null, "If the tyre is not suited for your vehicle."),
                            createVNode("li", null, "Other reasons.")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Repair Services"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We seal your punctured tyre securely at your desired location."),
                    createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Is your punctured tyre repairable?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " It's actually quite complicated... Whether the tyre is repairable depends on many factors, such as: "),
                        createVNode("br"),
                        createVNode("ul", { class: "list-disc text-sm pl-6 space-y-2" }, [
                          createVNode("li", null, "The location of the puncture"),
                          createVNode("li", null, "The size of the puncture"),
                          createVNode("li", null, "The condition & age of the tyre"),
                          createVNode("li", null, "Whether the tyre is a run-flat tyre")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " A tyre can only be repaired if the diameter of the damaged area is less than 6mm and located in the central ¾ of the tyre. If the puncture is outside of the central ¾ it is deemed too close to the sidewall to promise a safe and long-lasting repair. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " If your tyre is repairable, make sure that you do not drive on that flat tyre to maximise the chance of repairing it. This is because there is no air pressure to keep the tyre shaped correctly and the tyre sidewall will be pinched between the wheel rim and the road which can gravely damage it. "),
                        createVNode("br"),
                        createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                          createVNode("li", null, "If the puncture is located on the sidewall of the tyre."),
                          createVNode("li", null, "Run-flat tyres cannot be repaired."),
                          createVNode("li", null, "If the diameter of the damaged area is larger than 6mm."),
                          createVNode("li", null, "If your tyre treads are worn less than 1.6mm."),
                          createVNode("li", null, "If your tyre shows signs of ageing.")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: "/images/main/puncture-repair-guide.webp",
                          srcset: "/images/main/puncture-repair-guide.webp 1024w,\n                                    /images/main/puncture-repair-guide-500.webp 500w,\n                                    /images/main/puncture-repair-guide-300.webp 300w,\n                                    /images/main/puncture-repair-guide-150.webp 150w",
                          sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                          alt: "Mobile puncture repair guide"
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Sometimes it's better to go for a new tyre"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Puncture repairs are only a temporary solution - there is still a chance that your tyre may start to leak air again, especially if you've repaired the same tyre once before. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " It can be more cost-efficient to go for a brand new tyre as it will most likely last longer than the old tyre and give you better performance depending on the tyre quality. ")
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "When should I get a new tyre?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " You should get your tyres changed if you experience any of the following signs of damage: "),
                        createVNode("br"),
                        createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                          createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                          createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                          createVNode("li", null, "A puncture on the side of the tyre."),
                          createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                          createVNode("li", null, "If your tyre shows signs of ageing."),
                          createVNode("li", null, "If the tyre is not suited for your vehicle."),
                          createVNode("li", null, "Other reasons.")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$h, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$i, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularTyreBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomerRating, { class: "px-3 pt-12" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$h),
              createVNode(_sfc_main$i),
              createVNode(PopularTyreBrands),
              createVNode(CustomerRating, { class: "px-3 pt-12" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/MobileTyreRepair.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Privacy Policy | Tyres Anywhere LTD</title><meta name="description" content="Tyres Anywhere LTD&#39;s Privacy Policy"${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/privacy-policy"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Privacy Policy | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Tyres Anywhere LTD's Privacy Policy"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/privacy-policy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-x border-gray-300 sm:px-8 px-4 pt-8 pb-8"${_scopeId}><h1 class="sm:text-4xl text-3xl sm:mb-12 mb-6"${_scopeId}>Privacy Policy</h1><p class="text-sm"${_scopeId}> Tyres Anywhere LTD respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about what personal data is collected and processed when you visit our website and tell you about the privacy rights you have regarding your data. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Controller</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Tyres Anywhere LTD is the controller and responsible for your personal data. </p><br${_scopeId}><p class="text-sm"${_scopeId}> If you have any questions about this privacy notice, please contact the data privacy manager here <a href="mailto:info@tyresanywhere.com"${_scopeId}>info@tyresanywhere.com</a>. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Third-party links</h3><br${_scopeId}><p class="text-sm"${_scopeId}> This website may include links to third-party websites. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Cookies</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Cookies are set by the services that we use: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc space-y-2"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Google Analytics</span> we use Google Analytics to get performance data and tracking our website traffic. For more information, please visit <a class="text-blue-600 underline" href="https://policies.google.com/technologies/cookies?hl=en-US" target="_blank" rel="noreferrer"${_scopeId}> https://policies.google.com/technologies/cookies?hl=en-US </a></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Google Advertising</span> We use Google Adsense to place adverts on our site. Google&#39;s use of advertising cookies enables it and its partners to serve ads based on your visit to Tyres Anywhere LTD and/or other sites on the Internet. You can opt out of personalised ads by visiting <a class="text-blue-600 underline" href="https://myaccount.google.com/data-and-privacy" target="_blank" rel="noreferrer"${_scopeId}> https://myaccount.google.com/data-and-privacy </a></li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>The type of personal information we collect</h3><br${_scopeId}><p class="text-sm"${_scopeId}> We currently collect and process the following information: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Identity data</span> (for example first name, last name, title, date of birth)</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Contact data</span> (for example address, email address, mobile number)</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>How is the personal information collected?</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Most of the personal information we process is directly provided by you for the following reasons: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>apply for services</li><li${_scopeId}>make an enquiry</li><li${_scopeId}>book an appointment</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>How we use your personal data</h3><br${_scopeId}><p class="text-sm"${_scopeId}> We only use your personal data when the law allows us to. We will mostly use your personal data in the following circumstances. </p><br${_scopeId}><b class="text-sm"${_scopeId}>Information provided by you:</b><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>to provide you with information/services that you request from us</li><li${_scopeId}>to comply with a legal or regulatory obligation</li></ul><br${_scopeId}><b class="text-sm"${_scopeId}>Information we automatically collect:</b><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>to administer our site including troubleshooting, testing, research and statistical purposes</li><li${_scopeId}>to improve our site to ensure that content is presented in the most effective manner for you and your computer</li><li${_scopeId}>to keep our site safe and secure</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Where is your data stored?</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Your information is securely stored in our database </p><br${_scopeId}><p class="text-sm"${_scopeId}> We keep personal data that you provide us, such as contact details, for as long as it is compulsory for us to do. We will then safely dispose your information by deleting the records from our database. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Your data protection rights</h3><br${_scopeId}><p class="text-sm"${_scopeId}> For details, see our `);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-blue-600 underline",
              href: "/privacy-policy"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`privacy policy`);
                } else {
                  return [
                    createTextVNode("privacy policy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` page. </p><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right of access</span> - You have the right to ask us for copies of your personal information.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to rectification</span> - You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to erasure</span> - You have the right to ask us to erase your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to restriction of processing</span> - You have the right to ask us to restrict the processing of your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to object to processing</span> - You have the the right to object to the processing of your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to data portability</span> - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.</li></ul><br${_scopeId}><p class="text-sm"${_scopeId}> You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "border-x border-gray-300 sm:px-8 px-4 pt-8 pb-8" }, [
                createVNode("h1", { class: "sm:text-4xl text-3xl sm:mb-12 mb-6" }, "Privacy Policy"),
                createVNode("p", { class: "text-sm" }, " Tyres Anywhere LTD respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about what personal data is collected and processed when you visit our website and tell you about the privacy rights you have regarding your data. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Controller"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Tyres Anywhere LTD is the controller and responsible for your personal data. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" If you have any questions about this privacy notice, please contact the data privacy manager here "),
                  createVNode("a", { href: "mailto:info@tyresanywhere.com" }, "info@tyresanywhere.com"),
                  createTextVNode(". ")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Third-party links"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " This website may include links to third-party websites. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Cookies"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Cookies are set by the services that we use: "),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc space-y-2" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Google Analytics"),
                    createTextVNode(" we use Google Analytics to get performance data and tracking our website traffic. For more information, please visit "),
                    createVNode("a", {
                      class: "text-blue-600 underline",
                      href: "https://policies.google.com/technologies/cookies?hl=en-US",
                      target: "_blank",
                      rel: "noreferrer"
                    }, " https://policies.google.com/technologies/cookies?hl=en-US ")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Google Advertising"),
                    createTextVNode(" We use Google Adsense to place adverts on our site. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to Tyres Anywhere LTD and/or other sites on the Internet. You can opt out of personalised ads by visiting "),
                    createVNode("a", {
                      class: "text-blue-600 underline",
                      href: "https://myaccount.google.com/data-and-privacy",
                      target: "_blank",
                      rel: "noreferrer"
                    }, " https://myaccount.google.com/data-and-privacy ")
                  ])
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "The type of personal information we collect"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We currently collect and process the following information: "),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Identity data"),
                    createTextVNode(" (for example first name, last name, title, date of birth)")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Contact data"),
                    createTextVNode(" (for example address, email address, mobile number)")
                  ])
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "How is the personal information collected?"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Most of the personal information we process is directly provided by you for the following reasons: "),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, "apply for services"),
                  createVNode("li", null, "make an enquiry"),
                  createVNode("li", null, "book an appointment")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "How we use your personal data"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We only use your personal data when the law allows us to. We will mostly use your personal data in the following circumstances. "),
                createVNode("br"),
                createVNode("b", { class: "text-sm" }, "Information provided by you:"),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, "to provide you with information/services that you request from us"),
                  createVNode("li", null, "to comply with a legal or regulatory obligation")
                ]),
                createVNode("br"),
                createVNode("b", { class: "text-sm" }, "Information we automatically collect:"),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, "to administer our site including troubleshooting, testing, research and statistical purposes"),
                  createVNode("li", null, "to improve our site to ensure that content is presented in the most effective manner for you and your computer"),
                  createVNode("li", null, "to keep our site safe and secure")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Where is your data stored?"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Your information is securely stored in our database "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We keep personal data that you provide us, such as contact details, for as long as it is compulsory for us to do. We will then safely dispose your information by deleting the records from our database. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Your data protection rights"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" For details, see our "),
                  createVNode(unref(Link), {
                    class: "text-blue-600 underline",
                    href: "/privacy-policy"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("privacy policy")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" page. ")
                ]),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right of access"),
                    createTextVNode(" - You have the right to ask us for copies of your personal information.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to rectification"),
                    createTextVNode(" - You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to erasure"),
                    createTextVNode(" - You have the right to ask us to erase your personal information in certain circumstances.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to restriction of processing"),
                    createTextVNode(" - You have the right to ask us to restrict the processing of your personal information in certain circumstances.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to object to processing"),
                    createTextVNode(" - You have the the right to object to the processing of your personal information in certain circumstances.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to data portability"),
                    createTextVNode(" - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.")
                  ])
                ]),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/PrivacyPolicy.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "Sitemap",
  __ssrInlineRender: true,
  props: {
    areas: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Sitemap | Tyres Anywhere LTD</title><meta name="description" content="Sitemap of our site tyresanywhere.com. This includes a list of all the pages in Tyres Anywhere LTD&#39;s website."${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/sitemap"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Sitemap | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Sitemap of our site tyresanywhere.com. This includes a list of all the pages in Tyres Anywhere LTD's website."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/sitemap"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-x border-gray-300 sm:px-8 px-2 pt-8 pb-8"${_scopeId}><h1 class="sm:text-3xl text-2xl sm:mb-12 mb-6"${_scopeId}>Tyres Anywhere LTD Site Map</h1><div class="grid grid-cols-12 items-start justify-start sm:gap-x-4 gap-x-2 gap-y-8"${_scopeId}><div class="xl:col-span-3 col-span-6"${_scopeId}><p class="md:text-lg text-base font-semibold"${_scopeId}>Tyres Anywhere LTD</p><div class="flex flex-col items-start mt-4 space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Home`);
                } else {
                  return [
                    createTextVNode("Home")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/mobile-tyre-fitting",
              class: "md:text-base text-sm text-blue-500 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Fitting`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Fitting")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/mobile-tyre-repair",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Repair`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Repair")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/commercial-tyres",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Commercial Tyres`);
                } else {
                  return [
                    createTextVNode("Commercial Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/tyres",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tyres`);
                } else {
                  return [
                    createTextVNode("Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/contact-us",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact Us`);
                } else {
                  return [
                    createTextVNode("Contact Us")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/our-terms-and-conditions",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Terms &amp; Conditions`);
                } else {
                  return [
                    createTextVNode("Terms & Conditions")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/privacy-policy",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Privacy Policy`);
                } else {
                  return [
                    createTextVNode("Privacy Policy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="xl:col-span-3 col-span-6"${_scopeId}><p class="md:text-lg text-base font-semibold"${_scopeId}>Service</p><div class="flex flex-col items-start mt-4 space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/search-tyres",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Search Tyres`);
                } else {
                  return [
                    createTextVNode("Search Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/checkout/basket",
              class: "md:text-base text-sm text-blue-500 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Basket`);
                } else {
                  return [
                    createTextVNode("Basket")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="xl:col-span-6 col-span-12"${_scopeId}><p class="md:text-lg text-base font-semibold"${_scopeId}>Coverage</p><div class="grid grid-cols-12 gap-2 items-start mt-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.areas, (area) => {
              _push2(`<div class="col-span-4"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: "/locations/" + area.slug,
                class: "md:text-base text-sm text-blue-600 hover: capitalize"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "border-x border-gray-300 sm:px-8 px-2 pt-8 pb-8" }, [
                createVNode("h1", { class: "sm:text-3xl text-2xl sm:mb-12 mb-6" }, "Tyres Anywhere LTD Site Map"),
                createVNode("div", { class: "grid grid-cols-12 items-start justify-start sm:gap-x-4 gap-x-2 gap-y-8" }, [
                  createVNode("div", { class: "xl:col-span-3 col-span-6" }, [
                    createVNode("p", { class: "md:text-lg text-base font-semibold" }, "Tyres Anywhere LTD"),
                    createVNode("div", { class: "flex flex-col items-start mt-4 space-y-2" }, [
                      createVNode(unref(Link), {
                        href: "/",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Home")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/mobile-tyre-fitting",
                        class: "md:text-base text-sm text-blue-500 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mobile Tyre Fitting")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/mobile-tyre-repair",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mobile Tyre Repair")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/commercial-tyres",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Commercial Tyres")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/tyres",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Tyres")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/contact-us",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Contact Us")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/our-terms-and-conditions",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Terms & Conditions")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/privacy-policy",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Privacy Policy")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "xl:col-span-3 col-span-6" }, [
                    createVNode("p", { class: "md:text-lg text-base font-semibold" }, "Service"),
                    createVNode("div", { class: "flex flex-col items-start mt-4 space-y-2" }, [
                      createVNode(unref(Link), {
                        href: "/search-tyres",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Search Tyres")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/checkout/basket",
                        class: "md:text-base text-sm text-blue-500 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Basket")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "xl:col-span-6 col-span-12" }, [
                    createVNode("p", { class: "md:text-lg text-base font-semibold" }, "Coverage"),
                    createVNode("div", { class: "grid grid-cols-12 gap-2 items-start mt-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.areas, (area) => {
                        return openBlock(), createBlock("div", { class: "col-span-4" }, [
                          createVNode(unref(Link), {
                            href: "/locations/" + area.slug,
                            class: "md:text-base text-sm text-blue-600 hover: capitalize",
                            textContent: toDisplayString(area.area)
                          }, null, 8, ["href", "textContent"])
                        ]);
                      }), 256))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/Sitemap.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "TermsAndConditions",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Terms &amp; Conditions | Tyres Anywhere LTD</title><meta name="description" content="Tyres Anywhere LTD&#39;s Terms &amp; Conditions"${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/our-terms-and-conditions"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Terms & Conditions | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Tyres Anywhere LTD's Terms & Conditions"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/our-terms-and-conditions"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-x border-gray-300 sm:px-8 px-4 pt-8 pb-8"${_scopeId}><h1 class="sm:text-4xl text-3xl sm:mb-12 mb-6"${_scopeId}>Terms &amp; Conditions</h1><p class="text-sm"${_scopeId}> Tyres Anywhere LTD is a mobile tyre fitting business in the UK that provides emergency or non-emergency tyre fitting or repairs. Contact information is as followed: telephone: (07442 980101), email: (info@tyresanywhere.com) </p><br${_scopeId}><p class="text-sm"${_scopeId}> The terms and conditions declared on this page control the bond within the company Tyres Anywhere LTD and the visitors. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Henceforth, </p><br${_scopeId}><p class="text-sm"${_scopeId}> &quot;We&quot;, &quot;Our&quot;, or &quot;Us&quot; represents the company Tyres Anywhere LTD </p><br${_scopeId}><p class="text-sm"${_scopeId}> &quot;Our website&quot; represents the website of https://www.tyresanywhere.com </p><br${_scopeId}><p class="text-sm"${_scopeId}> &quot;You&quot; represents our customers or visitors/users of this website </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>1. How to contact us</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Call us on 07442 980101 </p><br${_scopeId}><p class="text-sm"${_scopeId}> Email at info@tyresanywhere.com </p><br${_scopeId}><p class="text-sm"${_scopeId}> Contact us through our website&#39;s `);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-blue-600 underline",
              href: "/contact-us"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`contact page`);
                } else {
                  return [
                    createTextVNode("contact page")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>2. Online Prices and Booking</h3><br${_scopeId}><p class="text-sm"${_scopeId}> The price of all the products that we offer is in GBP (£), with cost of labour and parts. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Online purchases and transactions does not put you in any binding contracts with us. There is only a one-time charge either on the website or in-person. </p><br${_scopeId}><p class="text-sm"${_scopeId}> We have the right to postpone or cancel the order (even after the order confirmation), if we are unable to carry out the order. We may be unable to carry out the order if the purchased product is out of stock in our local stock &amp; our products provider&#39;s stock or if the information about the purchased product is incorrect. In this situation, we will offer you an alternative product or reschedule the arrangement. If you have already paid for this product and we cannot come to an agreement, then you may cancel the order and acquire a full refund - this only applies to online payment or deposits. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>3. Products</h3><br${_scopeId}><p class="text-sm"${_scopeId}> The products may also vary from their online pictures. The images of the products on our website are for illustrative purposes only, so your product may not be the exact product as the image. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Customers ordering tyres online for mobile fitting should confirm the tyre size with the tyre size currently fitted to the vehicle before placing the order. If incorrect tyres are ordered on our website, we may reschedule your fitting appointment for either later on in the day or any approaching days. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>4. Orders and delivery</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Ordered products that are unavailable in our local stock will be delivered from our wholesale providers. We cannot guarantee delivery times for our providers and therefore in this situation we may be required to reschedule your fitting appointment. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>5. Order Cancellations</h3><br${_scopeId}><p class="text-sm"${_scopeId}> For online orders/deposits only, the cancellation request must be made within 24 hours of when the order was placed to claim a refund. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>6. Copyright</h3><br${_scopeId}><p class="text-sm"${_scopeId}> All the materials present on our website is copyrighted to us. Any unauthorised use of our material for commercial use is strictly disallowed and considered as copyright infringement. Threats will be taken seriously, and we will be forced to take actions such as site restriction, financial compensation and legal proceedings. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>7. Privacy Policy</h3><br${_scopeId}><p class="text-sm"${_scopeId}> For details, see our `);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-blue-600 underline",
              href: "/privacy-policy"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`privacy policy`);
                } else {
                  return [
                    createTextVNode("privacy policy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` page. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>8. Guarantees</h3><br${_scopeId}><p class="text-sm"${_scopeId}> The products we sell on our site are covered by the manufacturer&#39;s guarantee. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Any guarantee claims should be notified to us immediately. You will need to present an invoice that provides us with proof of purchase. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Your guarantee claim may be rejected if: </p><br${_scopeId}><p class="text-sm"${_scopeId}> The product in question has been damaged due to failure of commitment to the manufacturer&#39;s instructions </p><br${_scopeId}><p class="text-sm"${_scopeId}> The product in question has been damaged due to natural causes, theft, wear or improper driving. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>9. Third-party website links</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Links to third-party websites are provided for your information only </p><br${_scopeId}><p class="text-sm"${_scopeId}> We have no control over those websites so we request you examine the privacy policy and terms &amp; conditions of these websites before using their services. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>10. Updating terms &amp; conditions</h3><br${_scopeId}><p class="text-sm"${_scopeId}> We have the right to alter the terms and conditions on this page when required. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "border-x border-gray-300 sm:px-8 px-4 pt-8 pb-8" }, [
                createVNode("h1", { class: "sm:text-4xl text-3xl sm:mb-12 mb-6" }, "Terms & Conditions"),
                createVNode("p", { class: "text-sm" }, " Tyres Anywhere LTD is a mobile tyre fitting business in the UK that provides emergency or non-emergency tyre fitting or repairs. Contact information is as followed: telephone: (07442 980101), email: (info@tyresanywhere.com) "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The terms and conditions declared on this page control the bond within the company Tyres Anywhere LTD and the visitors. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Henceforth, "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, ' "We", "Our", or "Us" represents the company Tyres Anywhere LTD '),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, ' "Our website" represents the website of https://www.tyresanywhere.com '),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, ' "You" represents our customers or visitors/users of this website '),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "1. How to contact us"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Call us on 07442 980101 "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Email at info@tyresanywhere.com "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" Contact us through our website's "),
                  createVNode(unref(Link), {
                    class: "text-blue-600 underline",
                    href: "/contact-us"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("contact page")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "2. Online Prices and Booking"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The price of all the products that we offer is in GBP (£), with cost of labour and parts. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Online purchases and transactions does not put you in any binding contracts with us. There is only a one-time charge either on the website or in-person. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We have the right to postpone or cancel the order (even after the order confirmation), if we are unable to carry out the order. We may be unable to carry out the order if the purchased product is out of stock in our local stock & our products provider's stock or if the information about the purchased product is incorrect. In this situation, we will offer you an alternative product or reschedule the arrangement. If you have already paid for this product and we cannot come to an agreement, then you may cancel the order and acquire a full refund - this only applies to online payment or deposits. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "3. Products"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The products may also vary from their online pictures. The images of the products on our website are for illustrative purposes only, so your product may not be the exact product as the image. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Customers ordering tyres online for mobile fitting should confirm the tyre size with the tyre size currently fitted to the vehicle before placing the order. If incorrect tyres are ordered on our website, we may reschedule your fitting appointment for either later on in the day or any approaching days. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "4. Orders and delivery"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Ordered products that are unavailable in our local stock will be delivered from our wholesale providers. We cannot guarantee delivery times for our providers and therefore in this situation we may be required to reschedule your fitting appointment. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "5. Order Cancellations"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " For online orders/deposits only, the cancellation request must be made within 24 hours of when the order was placed to claim a refund. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "6. Copyright"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " All the materials present on our website is copyrighted to us. Any unauthorised use of our material for commercial use is strictly disallowed and considered as copyright infringement. Threats will be taken seriously, and we will be forced to take actions such as site restriction, financial compensation and legal proceedings. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "7. Privacy Policy"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" For details, see our "),
                  createVNode(unref(Link), {
                    class: "text-blue-600 underline",
                    href: "/privacy-policy"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("privacy policy")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" page. ")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "8. Guarantees"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The products we sell on our site are covered by the manufacturer's guarantee. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Any guarantee claims should be notified to us immediately. You will need to present an invoice that provides us with proof of purchase. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Your guarantee claim may be rejected if: "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The product in question has been damaged due to failure of commitment to the manufacturer's instructions "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The product in question has been damaged due to natural causes, theft, wear or improper driving. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "9. Third-party website links"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Links to third-party websites are provided for your information only "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We have no control over those websites so we request you examine the privacy policy and terms & conditions of these websites before using their services. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "10. Updating terms & conditions"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We have the right to alter the terms and conditions on this page when required. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/TermsAndConditions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Tyres",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Tyres | Tyres Anywhere LTD</title><meta name="description" content="High quality &amp; cheap tyres at Tyres Anywhere LTD. We have high performance tyres ready to be on your vehicle by our mobile tyre fitting service."${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/tyres"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Tyres | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "High quality & cheap tyres at Tyres Anywhere LTD. We have high performance tyres ready to be on your vehicle by our mobile tyre fitting service."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/tyres"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="md:flex hidden flex-row flex-wrap space-x-4 items-center justify-center"${_scopeId2}><div class="lg:p-4 p-2 border border-gray-300"${_scopeId2}><img class="xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/bridgestone-118.webp" alt="Bridgestone Tyre"${_scopeId2}></div><div class="lg:p-4 p-2 border border-gray-300"${_scopeId2}><img class="xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/dunlop-118.webp" alt="Dunlop Tyre"${_scopeId2}></div><div class="lg:p-4 p-2 border border-gray-300"${_scopeId2}><img class="xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/michelin-118.webp" alt="Michelin Tyre"${_scopeId2}></div><div class="lg:p-4 p-2 border border-gray-300"${_scopeId2}><img class="xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/pirelli-118.webp" alt="Pirelli Tyre"${_scopeId2}></div><div class="lg:p-4 p-2 border border-gray-300"${_scopeId2}><img class="xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/continental-118.webp" alt="Continental Tyre"${_scopeId2}></div><div class="lg:p-4 p-2 border border-gray-300"${_scopeId2}><img class="xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/goodyear-118.webp" alt="Goodyear Tyre"${_scopeId2}></div></div><div class="md:hidden flex flex-col px-2 sm:space-y-4 space-y-2 items-center justify-center"${_scopeId2}><div class="flex flex-row sm:space-x-4 space-x-2 items-center justify-center"${_scopeId2}><div class="p-2 border border-gray-300"${_scopeId2}><img class="w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/bridgestone-118.webp" alt="Bridgestone Tyre"${_scopeId2}></div><div class="p-2 border border-gray-300"${_scopeId2}><img class="w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/dunlop-118.webp" alt="Dunlop Tyre"${_scopeId2}></div><div class="p-2 border border-gray-300"${_scopeId2}><img class="w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/michelin-118.webp" alt="Michelin Tyre"${_scopeId2}></div></div><div class="flex flex-row sm:space-x-4 space-x-2 items-center justify-center"${_scopeId2}><div class="p-2 border border-gray-300"${_scopeId2}><img class="w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/pirelli-118.webp" alt="Pirelli Tyre"${_scopeId2}></div><div class="p-2 border border-gray-300"${_scopeId2}><img class="w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/continental-118.webp" alt="Continental Tyre"${_scopeId2}></div><div class="p-2 border border-gray-300"${_scopeId2}><img class="w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/goodyear-118.webp" alt="Goodyear Tyre"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "md:flex hidden flex-row flex-wrap space-x-4 items-center justify-center" }, [
                      createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/bridgestone-118.webp",
                          alt: "Bridgestone Tyre"
                        })
                      ]),
                      createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/dunlop-118.webp",
                          alt: "Dunlop Tyre"
                        })
                      ]),
                      createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/michelin-118.webp",
                          alt: "Michelin Tyre"
                        })
                      ]),
                      createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/pirelli-118.webp",
                          alt: "Pirelli Tyre"
                        })
                      ]),
                      createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/continental-118.webp",
                          alt: "Continental Tyre"
                        })
                      ]),
                      createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/goodyear-118.webp",
                          alt: "Goodyear Tyre"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "md:hidden flex flex-col px-2 sm:space-y-4 space-y-2 items-center justify-center" }, [
                      createVNode("div", { class: "flex flex-row sm:space-x-4 space-x-2 items-center justify-center" }, [
                        createVNode("div", { class: "p-2 border border-gray-300" }, [
                          createVNode("img", {
                            class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                            src: "/images/tyres/tyre_logo/bridgestone-118.webp",
                            alt: "Bridgestone Tyre"
                          })
                        ]),
                        createVNode("div", { class: "p-2 border border-gray-300" }, [
                          createVNode("img", {
                            class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                            src: "/images/tyres/tyre_logo/dunlop-118.webp",
                            alt: "Dunlop Tyre"
                          })
                        ]),
                        createVNode("div", { class: "p-2 border border-gray-300" }, [
                          createVNode("img", {
                            class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                            src: "/images/tyres/tyre_logo/michelin-118.webp",
                            alt: "Michelin Tyre"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-row sm:space-x-4 space-x-2 items-center justify-center" }, [
                        createVNode("div", { class: "p-2 border border-gray-300" }, [
                          createVNode("img", {
                            class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                            src: "/images/tyres/tyre_logo/pirelli-118.webp",
                            alt: "Pirelli Tyre"
                          })
                        ]),
                        createVNode("div", { class: "p-2 border border-gray-300" }, [
                          createVNode("img", {
                            class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                            src: "/images/tyres/tyre_logo/continental-118.webp",
                            alt: "Continental Tyre"
                          })
                        ]),
                        createVNode("div", { class: "p-2 border border-gray-300" }, [
                          createVNode("img", {
                            class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                            src: "/images/tyres/tyre_logo/goodyear-118.webp",
                            alt: "Goodyear Tyre"
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "md:flex hidden flex-row flex-wrap space-x-4 items-center justify-center" }, [
                    createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                      createVNode("img", {
                        class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                        src: "/images/tyres/tyre_logo/bridgestone-118.webp",
                        alt: "Bridgestone Tyre"
                      })
                    ]),
                    createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                      createVNode("img", {
                        class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                        src: "/images/tyres/tyre_logo/dunlop-118.webp",
                        alt: "Dunlop Tyre"
                      })
                    ]),
                    createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                      createVNode("img", {
                        class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                        src: "/images/tyres/tyre_logo/michelin-118.webp",
                        alt: "Michelin Tyre"
                      })
                    ]),
                    createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                      createVNode("img", {
                        class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                        src: "/images/tyres/tyre_logo/pirelli-118.webp",
                        alt: "Pirelli Tyre"
                      })
                    ]),
                    createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                      createVNode("img", {
                        class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                        src: "/images/tyres/tyre_logo/continental-118.webp",
                        alt: "Continental Tyre"
                      })
                    ]),
                    createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                      createVNode("img", {
                        class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                        src: "/images/tyres/tyre_logo/goodyear-118.webp",
                        alt: "Goodyear Tyre"
                      })
                    ])
                  ]),
                  createVNode("div", { class: "md:hidden flex flex-col px-2 sm:space-y-4 space-y-2 items-center justify-center" }, [
                    createVNode("div", { class: "flex flex-row sm:space-x-4 space-x-2 items-center justify-center" }, [
                      createVNode("div", { class: "p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/bridgestone-118.webp",
                          alt: "Bridgestone Tyre"
                        })
                      ]),
                      createVNode("div", { class: "p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/dunlop-118.webp",
                          alt: "Dunlop Tyre"
                        })
                      ]),
                      createVNode("div", { class: "p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/michelin-118.webp",
                          alt: "Michelin Tyre"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-row sm:space-x-4 space-x-2 items-center justify-center" }, [
                      createVNode("div", { class: "p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/pirelli-118.webp",
                          alt: "Pirelli Tyre"
                        })
                      ]),
                      createVNode("div", { class: "p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/continental-118.webp",
                          alt: "Continental Tyre"
                        })
                      ]),
                      createVNode("div", { class: "p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/goodyear-118.webp",
                          alt: "Goodyear Tyre"
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-light md:text-3xl sm:text-2xl text-xl mb-2"${_scopeId2}>We provide and fit high quality <b class="font-semibold"${_scopeId2}>Tyres</b> for you in no time!</h1><div class="lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4"${_scopeId2}><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-full" src="/images/main/mobile-tyre-fitting-tyres-500.webp" srcset="/images/main/mobile-tyre-fitting-tyres.webp 2560w,
                                    /images/main/mobile-tyre-fitting-tyres-500.webp 500w,
                                    /images/main/mobile-tyre-fitting-tyres-300.webp 300w,
                                    /images/main/mobile-tyre-fitting-tyres-150.webp 150w" sizes="(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)" alt="Mobile tyre fitting jack"${_scopeId2}></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><p class="text-sm"${_scopeId2}> Tyres are an essential part of your vehicle. It is the only part of the car in-contact with the ground, so it must always be in the best condition to ensure your safety. The condition depends on many things, such as the driver, wheel alignment and pressure, and the road. In the UK, the minimum tyre tread depth is 1.6mm. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> The depth of the tyre treads can be tested using the &#39;20p Check&#39;, a 20p coin should fit enough so it hides the outer edges, otherwise your tyre may be illegal. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> Regardless of the vehicle you drive, here at <b${_scopeId2}>Tyres Anywhere, Mobile Tyre Fitting</b>, we have the right tyres for you, whether it&#39;s Run-flats, 4x4, all-season or just regular tyres, our specialists always choose the most appropriate and best-suited tyre for your car. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl font-light"${_scopeId2}>How can I find my tyre size?</h3><br${_scopeId2}><p class="text-sm"${_scopeId2}> The best option would be to check the tyre itself. On the sidewall of the tyre, there are a few numbers printed on it that show the size of the tyre. The number before the forward slash is the width in mm. The number after the forward slash is height of the tyre sidewall as a percentage of the width. The number after the ‘R’ is the diameter of the tyre’s inner rim size in inches. You will need these when purchasing a tyre for your vehicle as every vehicle requires different sizes of tyres to be fitted onto them. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> Another way to find the size of your tyres is by using a vehicle registration lookup tool online, but it can be less accurate so it&#39;s recommended to double check against the size on the tyre. </p></div><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-full" src="/images/main/tyre-size-guide.webp" srcset="/images/main/tyre-size-guide.webp 720w,
                                    /images/main/tyre-size-guide-500.webp 500w,
                                    /images/main/tyre-size-guide-300.webp 300w,
                                    /images/main/tyre-size-guide-150.webp 150w" sizes="(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)" alt="Tyre Size Guide"${_scopeId2}></div><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-full" src="/images/main/tyre-changing-500.webp" srcset="/images/main/tyre-changing.webp 5472w,
                                    /images/main/tyre-changing-500.webp 500w,
                                    /images/main/tyre-changing-300.webp 300w,
                                    /images/main/tyre-changing-150.webp 150w" sizes="(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)" alt="Tyre Changing"${_scopeId2}></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl font-light"${_scopeId2}>When should I get my tyres changed?</h3><br${_scopeId2}><p class="text-sm"${_scopeId2}> You should get your tyres changed if you experience any of the following signs of damage: </p><br${_scopeId2}><ul class="list-disc text-sm pl-6 space-y-2"${_scopeId2}><li${_scopeId2}>Once the tyre tread has worn to the legal limit of 1.6mm.</li><li${_scopeId2}>If you hear a squeaky humming sound caused by a chopped tread.</li><li${_scopeId2}>A puncture on the side of the tyre.</li><li${_scopeId2}>You can notice the lack of traction in your tyres due to tread wear.</li><li${_scopeId2}>If your tyre shows signs of ageing.</li><li${_scopeId2}>If the tyre is not suited for your vehicle.</li><li${_scopeId2}>Other reasons.</li></ul><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-light md:text-3xl sm:text-2xl text-xl mb-2" }, [
                        createTextVNode("We provide and fit high quality "),
                        createVNode("b", { class: "font-semibold" }, "Tyres"),
                        createTextVNode(" for you in no time!")
                      ]),
                      createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: "/images/main/mobile-tyre-fitting-tyres-500.webp",
                            srcset: "/images/main/mobile-tyre-fitting-tyres.webp 2560w,\n                                    /images/main/mobile-tyre-fitting-tyres-500.webp 500w,\n                                    /images/main/mobile-tyre-fitting-tyres-300.webp 300w,\n                                    /images/main/mobile-tyre-fitting-tyres-150.webp 150w",
                            sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                            alt: "Mobile tyre fitting jack"
                          })
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("p", { class: "text-sm" }, " Tyres are an essential part of your vehicle. It is the only part of the car in-contact with the ground, so it must always be in the best condition to ensure your safety. The condition depends on many things, such as the driver, wheel alignment and pressure, and the road. In the UK, the minimum tyre tread depth is 1.6mm. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " The depth of the tyre treads can be tested using the '20p Check', a 20p coin should fit enough so it hides the outer edges, otherwise your tyre may be illegal. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" Regardless of the vehicle you drive, here at "),
                            createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                            createTextVNode(", we have the right tyres for you, whether it's Run-flats, 4x4, all-season or just regular tyres, our specialists always choose the most appropriate and best-suited tyre for your car. ")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "How can I find my tyre size?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " The best option would be to check the tyre itself. On the sidewall of the tyre, there are a few numbers printed on it that show the size of the tyre. The number before the forward slash is the width in mm. The number after the forward slash is height of the tyre sidewall as a percentage of the width. The number after the ‘R’ is the diameter of the tyre’s inner rim size in inches. You will need these when purchasing a tyre for your vehicle as every vehicle requires different sizes of tyres to be fitted onto them. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Another way to find the size of your tyres is by using a vehicle registration lookup tool online, but it can be less accurate so it's recommended to double check against the size on the tyre. ")
                        ]),
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: "/images/main/tyre-size-guide.webp",
                            srcset: "/images/main/tyre-size-guide.webp 720w,\n                                    /images/main/tyre-size-guide-500.webp 500w,\n                                    /images/main/tyre-size-guide-300.webp 300w,\n                                    /images/main/tyre-size-guide-150.webp 150w",
                            sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                            alt: "Tyre Size Guide"
                          })
                        ]),
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: "/images/main/tyre-changing-500.webp",
                            srcset: "/images/main/tyre-changing.webp 5472w,\n                                    /images/main/tyre-changing-500.webp 500w,\n                                    /images/main/tyre-changing-300.webp 300w,\n                                    /images/main/tyre-changing-150.webp 150w",
                            sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                            alt: "Tyre Changing"
                          })
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "When should I get my tyres changed?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " You should get your tyres changed if you experience any of the following signs of damage: "),
                          createVNode("br"),
                          createVNode("ul", { class: "list-disc text-sm pl-6 space-y-2" }, [
                            createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                            createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                            createVNode("li", null, "A puncture on the side of the tyre."),
                            createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                            createVNode("li", null, "If your tyre shows signs of ageing."),
                            createVNode("li", null, "If the tyre is not suited for your vehicle."),
                            createVNode("li", null, "Other reasons.")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-light md:text-3xl sm:text-2xl text-xl mb-2" }, [
                      createTextVNode("We provide and fit high quality "),
                      createVNode("b", { class: "font-semibold" }, "Tyres"),
                      createTextVNode(" for you in no time!")
                    ]),
                    createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: "/images/main/mobile-tyre-fitting-tyres-500.webp",
                          srcset: "/images/main/mobile-tyre-fitting-tyres.webp 2560w,\n                                    /images/main/mobile-tyre-fitting-tyres-500.webp 500w,\n                                    /images/main/mobile-tyre-fitting-tyres-300.webp 300w,\n                                    /images/main/mobile-tyre-fitting-tyres-150.webp 150w",
                          sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                          alt: "Mobile tyre fitting jack"
                        })
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("p", { class: "text-sm" }, " Tyres are an essential part of your vehicle. It is the only part of the car in-contact with the ground, so it must always be in the best condition to ensure your safety. The condition depends on many things, such as the driver, wheel alignment and pressure, and the road. In the UK, the minimum tyre tread depth is 1.6mm. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " The depth of the tyre treads can be tested using the '20p Check', a 20p coin should fit enough so it hides the outer edges, otherwise your tyre may be illegal. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" Regardless of the vehicle you drive, here at "),
                          createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                          createTextVNode(", we have the right tyres for you, whether it's Run-flats, 4x4, all-season or just regular tyres, our specialists always choose the most appropriate and best-suited tyre for your car. ")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "How can I find my tyre size?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " The best option would be to check the tyre itself. On the sidewall of the tyre, there are a few numbers printed on it that show the size of the tyre. The number before the forward slash is the width in mm. The number after the forward slash is height of the tyre sidewall as a percentage of the width. The number after the ‘R’ is the diameter of the tyre’s inner rim size in inches. You will need these when purchasing a tyre for your vehicle as every vehicle requires different sizes of tyres to be fitted onto them. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Another way to find the size of your tyres is by using a vehicle registration lookup tool online, but it can be less accurate so it's recommended to double check against the size on the tyre. ")
                      ]),
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: "/images/main/tyre-size-guide.webp",
                          srcset: "/images/main/tyre-size-guide.webp 720w,\n                                    /images/main/tyre-size-guide-500.webp 500w,\n                                    /images/main/tyre-size-guide-300.webp 300w,\n                                    /images/main/tyre-size-guide-150.webp 150w",
                          sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                          alt: "Tyre Size Guide"
                        })
                      ]),
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: "/images/main/tyre-changing-500.webp",
                          srcset: "/images/main/tyre-changing.webp 5472w,\n                                    /images/main/tyre-changing-500.webp 500w,\n                                    /images/main/tyre-changing-300.webp 300w,\n                                    /images/main/tyre-changing-150.webp 150w",
                          sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                          alt: "Tyre Changing"
                        })
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "When should I get my tyres changed?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " You should get your tyres changed if you experience any of the following signs of damage: "),
                        createVNode("br"),
                        createVNode("ul", { class: "list-disc text-sm pl-6 space-y-2" }, [
                          createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                          createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                          createVNode("li", null, "A puncture on the side of the tyre."),
                          createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                          createVNode("li", null, "If your tyre shows signs of ageing."),
                          createVNode("li", null, "If the tyre is not suited for your vehicle."),
                          createVNode("li", null, "Other reasons.")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$h, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$i, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularTyreBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomerRating, { class: "px-3 pt-12" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$h),
              createVNode(_sfc_main$i),
              createVNode(PopularTyreBrands),
              createVNode(CustomerRating, { class: "px-3 pt-12" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/Tyres.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const app = "";
const style = "";
FloatingVue.options.themes.tooltip.delay.show = 50;
const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: (el) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  }
};
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Main/BreakdownRecovery.vue": __vite_glob_0_0, "./Pages/Main/CommercialTyres.vue": __vite_glob_0_1, "./Pages/Main/ContactUs.vue": __vite_glob_0_2, "./Pages/Main/Index.vue": __vite_glob_0_3, "./Pages/Main/Location.vue": __vite_glob_0_4, "./Pages/Main/MobileTyreFitting.vue": __vite_glob_0_5, "./Pages/Main/MobileTyreRepair.vue": __vite_glob_0_6, "./Pages/Main/PrivacyPolicy.vue": __vite_glob_0_7, "./Pages/Main/Sitemap.vue": __vite_glob_0_8, "./Pages/Main/TermsAndConditions.vue": __vite_glob_0_9, "./Pages/Main/Tyres.vue": __vite_glob_0_10 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).directive("click-outside", clickOutside).use(plugin).use(FloatingVue);
    }
  }),
  13715
);
