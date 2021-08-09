<template>
    <div>
        <jet-banner />

        <div class="md:flex md:flex-col bg-wild-blue-yonder-50 md:h-screen">
            <div class="md:flex md:flex-shrink-0">
                <div
                    class="
                        bg-wild-blue-yonder-900
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
                                    text-wild-blue-yonder-300
                                    space-y-5
                                    md:hidden
                                    text-right
                                "
                            >
                                <nav-link
                                    :href="route('dashboard')"
                                    :active="route().current('dashboard')"
                                >
                                    Dashboard
                                </nav-link>
                                <nav-link
                                    :href="route('policies')"
                                    :active="route().current('policies')"
                                >
                                    Policies
                                </nav-link>
                                <nav-link
                                    :href="route('holders')"
                                    :active="route().current('holders')"
                                >
                                    Policyholders
                                </nav-link>
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
                        bg-wild-blue-yonder-800
                        overflow-y-auto
                        hidden
                        md:flex md:flex-shrink-0 md:justify-center md:w-56
                    "
                >
                    <ul class="text-wild-blue-yonder-300 space-y-5 mt-12">
                        <nav-link
                            :href="route('dashboard')"
                            :active="route().current('dashboard')"
                        >
                            <PresentationChartBarIcon class="h-5 w-5 inline" />
                            Dashboard
                        </nav-link>
                        <nav-link
                            :href="route('policies')"
                            :active="route().current('policies')"
                        >
                            <DocumentTextIcon class="h-5 w-5 inline" />
                            Policies
                        </nav-link>
                        <nav-link
                            :href="route('holders')"
                            :active="route().current('holders')"
                        >
                            <UsersIcon class="h-5 w-5 inline" />
                            Policyholders
                        </nav-link>
                    </ul>
                </nav>
                <div
                    scroll-region
                    class="md:overflow-y-auto md:p-10 p-5 space-y-5 w-full"
                >
                    <header class="py-5" v-if="$slots.header">
                        <div class="text-3xl font-bold">
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
import Button from "../Jetstream/Button.vue";

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

        function logout() {
            this.$inertia.post(route("logout"));
        }

        return { showingNavigationDropdown, logout, navOpen };
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
