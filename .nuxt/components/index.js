export { default as Card } from '../..\\components\\card\\index.vue'
export { default as FormStep1 } from '../..\\components\\form\\step1.vue'
export { default as FormStep2 } from '../..\\components\\form\\step2.vue'
export { default as FormStep3 } from '../..\\components\\form\\step3.vue'
export { default as AboutSidebar } from '../..\\components\\about\\Sidebar.vue'
export { default as HomeAboutUniversity } from '../..\\components\\home\\AboutUniversity.vue'
export { default as HomeBanner } from '../..\\components\\home\\Banner.vue'
export { default as HomeContactUs } from '../..\\components\\home\\ContactUs.vue'
export { default as HomeEvents } from '../..\\components\\home\\Events.vue'
export { default as HomeFaculties } from '../..\\components\\home\\Faculties.vue'
export { default as HomeJourney } from '../..\\components\\home\\Journey.vue'
export { default as HomeNews } from '../..\\components\\home\\News.vue'
export { default as HomeRecursiveMenu } from '../..\\components\\home\\RecursiveMenu.vue'
export { default as LayoutsFooter } from '../..\\components\\layouts\\Footer.vue'
export { default as LayoutsHeader } from '../..\\components\\layouts\\Header.vue'
export { default as LayoutsPageHeader } from '../..\\components\\layouts\\PageHeader.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
