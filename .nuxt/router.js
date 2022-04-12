import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _16082354 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _56f4a604 = () => interopDefault(import('..\\pages\\contacts\\index.vue' /* webpackChunkName: "pages/contacts/index" */))
const _3a12e771 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _53428926 = () => interopDefault(import('..\\pages\\form\\index.vue' /* webpackChunkName: "pages/form/index" */))
const _ad6da404 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _bf85a294 = () => interopDefault(import('..\\pages\\research\\index.vue' /* webpackChunkName: "pages/research/index" */))
const _32593372 = () => interopDefault(import('..\\pages\\about\\mission\\index.vue' /* webpackChunkName: "pages/about/mission/index" */))
const _8fbdd36a = () => interopDefault(import('..\\pages\\about\\partners\\index.vue' /* webpackChunkName: "pages/about/partners/index" */))
const _713df886 = () => interopDefault(import('..\\pages\\about\\policies\\index.vue' /* webpackChunkName: "pages/about/policies/index" */))
const _012275af = () => interopDefault(import('..\\pages\\about\\rector\\index.vue' /* webpackChunkName: "pages/about/rector/index" */))
const _d30667aa = () => interopDefault(import('..\\pages\\about\\structure\\index.vue' /* webpackChunkName: "pages/about/structure/index" */))
const _12fe794e = () => interopDefault(import('..\\pages\\about\\team\\index.vue' /* webpackChunkName: "pages/about/team/index" */))
const _5d44c370 = () => interopDefault(import('..\\pages\\academic\\faculties\\index.vue' /* webpackChunkName: "pages/academic/faculties/index" */))
const _af0daa94 = () => interopDefault(import('..\\pages\\contacts\\contact\\index.vue' /* webpackChunkName: "pages/contacts/contact/index" */))
const _bc8f398c = () => interopDefault(import('..\\pages\\contacts\\form\\index.vue' /* webpackChunkName: "pages/contacts/form/index" */))
const _38fca770 = () => interopDefault(import('..\\pages\\life\\academicCalendar\\index.vue' /* webpackChunkName: "pages/life/academicCalendar/index" */))
const _4015e622 = () => interopDefault(import('..\\pages\\life\\clubs\\index.vue' /* webpackChunkName: "pages/life/clubs/index" */))
const _657b6564 = () => interopDefault(import('..\\pages\\life\\gym\\index.vue' /* webpackChunkName: "pages/life/gym/index" */))
const _1d4d4038 = () => interopDefault(import('..\\pages\\life\\library\\index.vue' /* webpackChunkName: "pages/life/library/index" */))
const _61c26899 = () => interopDefault(import('..\\pages\\life\\studentConsole\\index.vue' /* webpackChunkName: "pages/life/studentConsole/index" */))
const _03d0245e = () => interopDefault(import('..\\pages\\reception\\entryRequirements\\index.vue' /* webpackChunkName: "pages/reception/entryRequirements/index" */))
const _78734eba = () => interopDefault(import('..\\pages\\reception\\internationalStudents\\index.vue' /* webpackChunkName: "pages/reception/internationalStudents/index" */))
const _16620089 = () => interopDefault(import('..\\pages\\reception\\transfer\\index.vue' /* webpackChunkName: "pages/reception/transfer/index" */))
const _d268106c = () => interopDefault(import('..\\pages\\reception\\tuitionFee\\index.vue' /* webpackChunkName: "pages/reception/tuitionFee/index" */))
const _4b0c6527 = () => interopDefault(import('..\\pages\\academic\\ourPrograms\\economy\\index.vue' /* webpackChunkName: "pages/academic/ourPrograms/economy/index" */))
const _84469e78 = () => interopDefault(import('..\\pages\\academic\\ourPrograms\\it\\index.vue' /* webpackChunkName: "pages/academic/ourPrograms/it/index" */))
const _d0045916 = () => interopDefault(import('..\\pages\\reception\\localStudents\\extramuralStudies\\index.vue' /* webpackChunkName: "pages/reception/localStudents/extramuralStudies/index" */))
const _2334d269 = () => interopDefault(import('..\\pages\\reception\\localStudents\\fulltimeStudents\\index.vue' /* webpackChunkName: "pages/reception/localStudents/fulltimeStudents/index" */))
const _932b15fa = () => interopDefault(import('..\\pages\\about\\partners\\_slug.vue' /* webpackChunkName: "pages/about/partners/_slug" */))
const _06f44e20 = () => interopDefault(import('..\\pages\\events\\_slug.vue' /* webpackChunkName: "pages/events/_slug" */))
const _b0dae694 = () => interopDefault(import('..\\pages\\news\\_slug.vue' /* webpackChunkName: "pages/news/_slug" */))
const _6894970a = () => interopDefault(import('..\\pages\\static\\_slug.vue' /* webpackChunkName: "pages/static/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _16082354,
    name: "about___uz"
  }, {
    path: "/contacts",
    component: _56f4a604,
    name: "contacts___uz"
  }, {
    path: "/en",
    component: _3a12e771,
    name: "index___en"
  }, {
    path: "/form",
    component: _53428926,
    name: "form___uz"
  }, {
    path: "/news",
    component: _ad6da404,
    name: "news___uz"
  }, {
    path: "/research",
    component: _bf85a294,
    name: "research___uz"
  }, {
    path: "/ru",
    component: _3a12e771,
    name: "index___ru"
  }, {
    path: "/about/mission",
    component: _32593372,
    name: "about-mission___uz"
  }, {
    path: "/about/partners",
    component: _8fbdd36a,
    name: "about-partners___uz"
  }, {
    path: "/about/policies",
    component: _713df886,
    name: "about-policies___uz"
  }, {
    path: "/about/rector",
    component: _012275af,
    name: "about-rector___uz"
  }, {
    path: "/about/structure",
    component: _d30667aa,
    name: "about-structure___uz"
  }, {
    path: "/about/team",
    component: _12fe794e,
    name: "about-team___uz"
  }, {
    path: "/academic/faculties",
    component: _5d44c370,
    name: "academic-faculties___uz"
  }, {
    path: "/contacts/contact",
    component: _af0daa94,
    name: "contacts-contact___uz"
  }, {
    path: "/contacts/form",
    component: _bc8f398c,
    name: "contacts-form___uz"
  }, {
    path: "/en/about",
    component: _16082354,
    name: "about___en"
  }, {
    path: "/en/contacts",
    component: _56f4a604,
    name: "contacts___en"
  }, {
    path: "/en/form",
    component: _53428926,
    name: "form___en"
  }, {
    path: "/en/news",
    component: _ad6da404,
    name: "news___en"
  }, {
    path: "/en/research",
    component: _bf85a294,
    name: "research___en"
  }, {
    path: "/life/academicCalendar",
    component: _38fca770,
    name: "life-academicCalendar___uz"
  }, {
    path: "/life/clubs",
    component: _4015e622,
    name: "life-clubs___uz"
  }, {
    path: "/life/gym",
    component: _657b6564,
    name: "life-gym___uz"
  }, {
    path: "/life/library",
    component: _1d4d4038,
    name: "life-library___uz"
  }, {
    path: "/life/studentConsole",
    component: _61c26899,
    name: "life-studentConsole___uz"
  }, {
    path: "/reception/entryRequirements",
    component: _03d0245e,
    name: "reception-entryRequirements___uz"
  }, {
    path: "/reception/internationalStudents",
    component: _78734eba,
    name: "reception-internationalStudents___uz"
  }, {
    path: "/reception/transfer",
    component: _16620089,
    name: "reception-transfer___uz"
  }, {
    path: "/reception/tuitionFee",
    component: _d268106c,
    name: "reception-tuitionFee___uz"
  }, {
    path: "/ru/about",
    component: _16082354,
    name: "about___ru"
  }, {
    path: "/ru/contacts",
    component: _56f4a604,
    name: "contacts___ru"
  }, {
    path: "/ru/form",
    component: _53428926,
    name: "form___ru"
  }, {
    path: "/ru/news",
    component: _ad6da404,
    name: "news___ru"
  }, {
    path: "/ru/research",
    component: _bf85a294,
    name: "research___ru"
  }, {
    path: "/academic/ourPrograms/economy",
    component: _4b0c6527,
    name: "academic-ourPrograms-economy___uz"
  }, {
    path: "/academic/ourPrograms/it",
    component: _84469e78,
    name: "academic-ourPrograms-it___uz"
  }, {
    path: "/en/about/mission",
    component: _32593372,
    name: "about-mission___en"
  }, {
    path: "/en/about/partners",
    component: _8fbdd36a,
    name: "about-partners___en"
  }, {
    path: "/en/about/policies",
    component: _713df886,
    name: "about-policies___en"
  }, {
    path: "/en/about/rector",
    component: _012275af,
    name: "about-rector___en"
  }, {
    path: "/en/about/structure",
    component: _d30667aa,
    name: "about-structure___en"
  }, {
    path: "/en/about/team",
    component: _12fe794e,
    name: "about-team___en"
  }, {
    path: "/en/academic/faculties",
    component: _5d44c370,
    name: "academic-faculties___en"
  }, {
    path: "/en/contacts/contact",
    component: _af0daa94,
    name: "contacts-contact___en"
  }, {
    path: "/en/contacts/form",
    component: _bc8f398c,
    name: "contacts-form___en"
  }, {
    path: "/en/life/academicCalendar",
    component: _38fca770,
    name: "life-academicCalendar___en"
  }, {
    path: "/en/life/clubs",
    component: _4015e622,
    name: "life-clubs___en"
  }, {
    path: "/en/life/gym",
    component: _657b6564,
    name: "life-gym___en"
  }, {
    path: "/en/life/library",
    component: _1d4d4038,
    name: "life-library___en"
  }, {
    path: "/en/life/studentConsole",
    component: _61c26899,
    name: "life-studentConsole___en"
  }, {
    path: "/en/reception/entryRequirements",
    component: _03d0245e,
    name: "reception-entryRequirements___en"
  }, {
    path: "/en/reception/internationalStudents",
    component: _78734eba,
    name: "reception-internationalStudents___en"
  }, {
    path: "/en/reception/transfer",
    component: _16620089,
    name: "reception-transfer___en"
  }, {
    path: "/en/reception/tuitionFee",
    component: _d268106c,
    name: "reception-tuitionFee___en"
  }, {
    path: "/reception/localStudents/extramuralStudies",
    component: _d0045916,
    name: "reception-localStudents-extramuralStudies___uz"
  }, {
    path: "/reception/localStudents/fulltimeStudents",
    component: _2334d269,
    name: "reception-localStudents-fulltimeStudents___uz"
  }, {
    path: "/ru/about/mission",
    component: _32593372,
    name: "about-mission___ru"
  }, {
    path: "/ru/about/partners",
    component: _8fbdd36a,
    name: "about-partners___ru"
  }, {
    path: "/ru/about/policies",
    component: _713df886,
    name: "about-policies___ru"
  }, {
    path: "/ru/about/rector",
    component: _012275af,
    name: "about-rector___ru"
  }, {
    path: "/ru/about/structure",
    component: _d30667aa,
    name: "about-structure___ru"
  }, {
    path: "/ru/about/team",
    component: _12fe794e,
    name: "about-team___ru"
  }, {
    path: "/ru/academic/faculties",
    component: _5d44c370,
    name: "academic-faculties___ru"
  }, {
    path: "/ru/contacts/contact",
    component: _af0daa94,
    name: "contacts-contact___ru"
  }, {
    path: "/ru/contacts/form",
    component: _bc8f398c,
    name: "contacts-form___ru"
  }, {
    path: "/ru/life/academicCalendar",
    component: _38fca770,
    name: "life-academicCalendar___ru"
  }, {
    path: "/ru/life/clubs",
    component: _4015e622,
    name: "life-clubs___ru"
  }, {
    path: "/ru/life/gym",
    component: _657b6564,
    name: "life-gym___ru"
  }, {
    path: "/ru/life/library",
    component: _1d4d4038,
    name: "life-library___ru"
  }, {
    path: "/ru/life/studentConsole",
    component: _61c26899,
    name: "life-studentConsole___ru"
  }, {
    path: "/ru/reception/entryRequirements",
    component: _03d0245e,
    name: "reception-entryRequirements___ru"
  }, {
    path: "/ru/reception/internationalStudents",
    component: _78734eba,
    name: "reception-internationalStudents___ru"
  }, {
    path: "/ru/reception/transfer",
    component: _16620089,
    name: "reception-transfer___ru"
  }, {
    path: "/ru/reception/tuitionFee",
    component: _d268106c,
    name: "reception-tuitionFee___ru"
  }, {
    path: "/en/academic/ourPrograms/economy",
    component: _4b0c6527,
    name: "academic-ourPrograms-economy___en"
  }, {
    path: "/en/academic/ourPrograms/it",
    component: _84469e78,
    name: "academic-ourPrograms-it___en"
  }, {
    path: "/en/reception/localStudents/extramuralStudies",
    component: _d0045916,
    name: "reception-localStudents-extramuralStudies___en"
  }, {
    path: "/en/reception/localStudents/fulltimeStudents",
    component: _2334d269,
    name: "reception-localStudents-fulltimeStudents___en"
  }, {
    path: "/ru/academic/ourPrograms/economy",
    component: _4b0c6527,
    name: "academic-ourPrograms-economy___ru"
  }, {
    path: "/ru/academic/ourPrograms/it",
    component: _84469e78,
    name: "academic-ourPrograms-it___ru"
  }, {
    path: "/ru/reception/localStudents/extramuralStudies",
    component: _d0045916,
    name: "reception-localStudents-extramuralStudies___ru"
  }, {
    path: "/ru/reception/localStudents/fulltimeStudents",
    component: _2334d269,
    name: "reception-localStudents-fulltimeStudents___ru"
  }, {
    path: "/en/about/partners/:slug",
    component: _932b15fa,
    name: "about-partners-slug___en"
  }, {
    path: "/ru/about/partners/:slug",
    component: _932b15fa,
    name: "about-partners-slug___ru"
  }, {
    path: "/about/partners/:slug",
    component: _932b15fa,
    name: "about-partners-slug___uz"
  }, {
    path: "/en/events/:slug?",
    component: _06f44e20,
    name: "events-slug___en"
  }, {
    path: "/en/news/:slug",
    component: _b0dae694,
    name: "news-slug___en"
  }, {
    path: "/en/static/:slug?",
    component: _6894970a,
    name: "static-slug___en"
  }, {
    path: "/ru/events/:slug?",
    component: _06f44e20,
    name: "events-slug___ru"
  }, {
    path: "/ru/news/:slug",
    component: _b0dae694,
    name: "news-slug___ru"
  }, {
    path: "/ru/static/:slug?",
    component: _6894970a,
    name: "static-slug___ru"
  }, {
    path: "/events/:slug?",
    component: _06f44e20,
    name: "events-slug___uz"
  }, {
    path: "/news/:slug",
    component: _b0dae694,
    name: "news-slug___uz"
  }, {
    path: "/static/:slug?",
    component: _6894970a,
    name: "static-slug___uz"
  }, {
    path: "/",
    component: _3a12e771,
    name: "index___uz"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
