require("./bootstrap");

// Import modules...
import { createApp, h } from "vue";
import {
    App as InertiaApp,
    plugin as InertiaPlugin,
} from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import dayjs from "dayjs";

const el = document.getElementById("app");

const app = createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => require(`./Pages/${name}`).default,
        }),
})
    .mixin({ methods: { route } })
    .use(InertiaPlugin);

app.mount(el);

app.config.globalProperties.$filters = {
    formatDisplayDate(value) {
        return dayjs(value).format("MM-DD-YYY");
    },
    formatUrlDate(value) {
        return dayjs(value).format("YYYY-MM-DD");
    },
};

InertiaProgress.init({ color: "#4B5563" });
