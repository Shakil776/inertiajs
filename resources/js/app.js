import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init()

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  title: title => `${title} || Intertia JS App`,
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .mixin({methods: {route: window.route}})
      .use(plugin)
      .mount(el)
  },
})