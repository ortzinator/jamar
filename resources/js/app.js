require('./bootstrap');

window.inertiaEventsCount = {
    navigateCount: 0,
    successCount: 0,
    errorCount: 0
};

// Import modules...
import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { Inertia } from '@inertiajs/inertia';

createInertiaApp({
    title: (title) => (title ? `${title} - Jamar` : 'Jamar'),
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('InertiaHead', Head)
            .component('InertiaLink', Link)
            .mixin({ methods: { route } })
            .mount(el);
    }
});

InertiaProgress.init({ color: '#4B5563' });

Inertia.on('navigate', (event) => {
    window.inertiaEventsCount.navigateCount++;
});

Inertia.on('success', (event) => {
    window.inertiaEventsCount.successCount++;
});

Inertia.on('error', (event) => {
    window.inertiaEventsCount.errorCount++;
});
