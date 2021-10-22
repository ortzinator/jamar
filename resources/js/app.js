// Import modules...
import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

require('./bootstrap');

createInertiaApp({
    title: (title) => (title ? `${title} - Jamar` : 'Jamar'),
    // eslint-disable-next-line import/no-dynamic-require,global-require
    resolve: (name) => require(`./Pages/${name}`),
    setup({
        el, App, props, plugin,
    }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(Toast)
            .component('InertiaHead', Head)
            .component('InertiaLink', Link)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
