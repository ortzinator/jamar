<template>
    <div>
        <jet-banner />

        <div class="md:flex md:flex-col bg-cool-grey-50 md:h-screen">
            <div class="md:flex md:flex-shrink-0">
                <div
                    class="
                        bg-light-blue-vivid-800
                        flex
                        items-center
                        justify-between
                        md:flex-shrink-0 md:justify-center md:w-56
                        px-6
                        py-4
                        text-white
                    "
                >
                    <Disclosure as="nav" v-slot="{ open }" class="w-full">
                        <div class="flex md:justify-center justify-between">
                            <div>Jamar Logo</div>
                            <div class="md:hidden">
                                <DisclosureButton>
                                    <MenuIcon
                                        v-if="!open"
                                        class="block h-6 w-6"
                                        aria-hidden="true"
                                    />
                                    <XIcon
                                        v-else
                                        class="block h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </DisclosureButton>
                            </div>
                        </div>

                        <DisclosurePanel class="flex justify-end w-full">
                            <ul
                                class="
                                    text-light-blue-vivid-300
                                    space-y-5
                                    md:hidden
                                    text-right
                                "
                            >
                                <NavLink
                                    v-for="nav in navigation"
                                    :key="nav.name"
                                    :href="nav.href"
                                    :active="nav.current"
                                >
                                    {{ nav.name }}
                                </NavLink>
                            </ul>
                        </DisclosurePanel>
                    </Disclosure>
                </div>
                <div
                    class="
                        bg-white
                        flex
                        justify-end
                        md:px-12 md:py-5
                        px-6
                        py-4
                        w-full
                    "
                >
                    <div>Jamar</div>
                    <Menu as="div" class="relative">
                        <div>
                            <MenuButton class="inline-flex items-center">
                                {{ $page.props.user.name }}
                                <ChevronDownIcon class="h-5 w-5 ml-2" />
                            </MenuButton>
                        </div>

                        <MenuItems
                            as="div"
                            class="
                                absolute
                                right-0
                                w-56
                                mt-2
                                origin-top-right
                                bg-white
                                divide-y divide-gray-100
                                rounded-md
                                shadow-lg
                                ring-1 ring-black ring-opacity-5
                                focus:outline-none
                            "
                        >
                            <div class="py-1">
                                <div
                                    class="
                                        block
                                        px-4
                                        py-2
                                        text-xs text-gray-400
                                    "
                                >
                                    Manage Account
                                </div>
                            </div>

                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <inertia-link
                                        :href="route('profile.show')"
                                        :class="[
                                            active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                            'block px-4 py-2 text-sm',
                                        ]"
                                    >
                                        <UserCircleIcon
                                            class="w-5 h-5 inline mr-2"
                                        />
                                        Profile
                                    </inertia-link>
                                </MenuItem>

                                <MenuItem
                                    v-if="$page.props.jetstream.hasApiFeatures"
                                    v-slot="{ active }"
                                >
                                    <inertia-link
                                        :href="route('api-tokens.index')"
                                        :class="[
                                            active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                            'block px-4 py-2 text-sm',
                                        ]"
                                    >
                                        API Tokens
                                    </inertia-link>
                                </MenuItem>
                            </div>

                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <form
                                        @submit.prevent="logout"
                                        :class="[
                                            active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                            'block px-4 py-2 text-sm',
                                        ]"
                                    >
                                        <button type="submit flex">
                                            <LogoutIcon
                                                class="h-5 w-5 mr-2 inline"
                                            />
                                            Log Out
                                        </button>
                                    </form>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </div>
            </div>
            <div class="md:flex md:flex-grow md:overflow-hidden">
                <nav
                    class="
                        bg-cool-grey-100
                        overflow-y-auto
                        hidden
                        md:flex md:flex-shrink-0 md:justify-center md:w-56
                    "
                >
                    <ul
                        class="mt-12 space-y-3 text-light-blue-vivid-900 w-full"
                    >
                        <NavLink
                            v-for="nav in navigation"
                            :key="nav.name"
                            :href="nav.href"
                            :active="nav.current"
                        >
                            {{ nav.name }}
                        </NavLink>
                    </ul>
                </nav>
                <div
                    scroll-region
                    class="
                        md:overflow-y-auto md:p-10
                        p-5
                        space-y-5
                        w-full
                        shadow-inner
                    "
                >
                    <header class="py-5" v-if="$slots.header">
                        <div class="font-bold">
                            <slot name="header" />
                        </div>
                    </header>
                    <main>
                        <slot />
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
import JetApplicationMark from "@/Jetstream/ApplicationMark";
import JetBanner from "@/Jetstream/Banner";
import JetDropdown from "@/Jetstream/Dropdown";
import JetDropdownLink from "@/Jetstream/DropdownLink";
import NavLink from "@/Shared/NavLink";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
    MenuIcon,
    XIcon,
    ChevronDownIcon,
    LogoutIcon,
    UserCircleIcon,
    PresentationChartBarIcon,
    UsersIcon,
    DocumentTextIcon,
} from "@heroicons/vue/outline";

export default {
    components: {
        JetApplicationMark,
        JetBanner,
        JetDropdown,
        JetDropdownLink,
        NavLink,
        JetResponsiveNavLink,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        MenuIcon,
        XIcon,
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
        ChevronDownIcon,
        LogoutIcon,
        UserCircleIcon,
        PresentationChartBarIcon,
        UsersIcon,
        DocumentTextIcon,
    },

    setup() {
        const showingNavigationDropdown = ref(false);
        const navOpen = ref(false);
        const navigation = ref([
            {
                name: "Dashboard",
                href: route("dashboard"),
                current: route().current("dashboard"),
            },
            {
                name: "Policies",
                href: route("policies"),
                current: route().current("policies"),
            },
            {
                name: "Polcyholder",
                href: route("holders"),
                current: route().current("holders"),
            },
        ]);

        function logout() {
            this.$inertia.post(route("logout"));
        }

        return { showingNavigationDropdown, logout, navOpen, navigation };
    },
};
</script>

<style>
:root {
    --popper-theme-background-color: #333333;
    --popper-theme-background-color-hover: #333333;
    --popper-theme-text-color: #ffffff;
    --popper-theme-border-width: 0px;
    --popper-theme-border-style: solid;
    --popper-theme-border-radius: 6px;
    --popper-theme-padding: 0.5rem;
    --popper-theme-box-shadow: 0 10px 8px rgba(0, 0, 0, 0.04),
        0 4px 3px rgba(0, 0, 0, 0.1);
}
</style>
