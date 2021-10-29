// Import modules...
import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import AppLayout from '@/Layouts/NewLayout';

require('./bootstrap');

createInertiaApp({
    title: (title) => (title ? `${title} - Jamar` : 'Jamar'),
    resolve: async (name) => {
        const page = (await import(`./Pages/${name}`)).default;
        page.Layout ??= AppLayout;
        return page;
    },
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
