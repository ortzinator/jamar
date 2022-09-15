// Import modules...
import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import './bootstrap';

const App = {
    title: (title) => (title ? `${title} - Jamar` : 'Jamar'),
    resolve: (name) =>
        resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        window.App = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(Toast)
            .use(PrimeVue)
            .component('InertiaHead', Head)
            .component('InertiaLink', Link)
            .mixin({ methods: { route } })
            .mount(el);
    },
};

createInertiaApp(App);

InertiaProgress.init({ color: '#4B5563' });
