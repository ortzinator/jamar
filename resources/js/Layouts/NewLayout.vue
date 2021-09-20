<template>
    <div>
        <div class="md:flex md:flex-col bg-cool-grey-50 md:h-screen">
            <div class="md:flex md:flex-shrink-0 bg-white">
                <div
                    class="
                        bg-cool-grey-800
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
                            <div>
                                <AppLogo class="h-8 fill-current text-white" />
                            </div>
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
                        justify-between
                        md:px-12 md:py-5
                        px-6
                        py-4
                        w-full
                        max-w-screen-2xl
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
                                z-10
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
                                            'block px-4 py-2 text-sm'
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
                                            'block px-4 py-2 text-sm'
                                        ]"
                                    >
                                        API Tokens
                                    </inertia-link>
                                </MenuItem>
                            </div>

                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <div
                                        :class="[
                                            active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        ]"
                                    >
                                        <button
                                            type="submit flex"
                                            @click="logout"
                                        >
                                            <LogoutIcon
                                                class="h-5 w-5 mr-2 inline"
                                            />
                                            Log Out
                                        </button>
                                    </div>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </div>
            </div>
            <div class="md:flex md:flex-grow md:overflow-hidden">
                <nav
                    class="
                        bg-cool-grey-900
                        overflow-y-auto
                        hidden
                        md:flex md:flex-shrink-0 md:justify-center md:w-56
                    "
                >
                    <ul class="mt-12 space-y-3 w-full text-cool-grey-300">
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
                    class="md:overflow-y-auto w-full shadow-inner"
                >
                    <div class="max-w-screen-2xl md:p-10 p-5">
                        <main>
                            <slot />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, watch } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-vue3';
import { useToast } from 'vue-toastification';

import JetBanner from '@/Jetstream/Banner';
import NavLink from '@/Shared/NavLink';
import AppLogo from '@/Shared/AppLogo';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import {
    MenuIcon,
    XIcon,
    ChevronDownIcon,
    LogoutIcon,
    UserCircleIcon,
    PresentationChartBarIcon,
    UsersIcon,
    DocumentTextIcon,
    UserGroupIcon
} from '@heroicons/vue/outline';

export default {
    components: {
        JetBanner,
        NavLink,
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
        UserGroupIcon,
        AppLogo
    },

    setup() {
        const showingNavigationDropdown = ref(false);
        const navOpen = ref(false);
        const navigation = ref([
            {
                name: 'Dashboard',
                get href() {
                    return route('dashboard');
                },
                get current() {
                    return route().current('dashboard');
                }
            },
            {
                name: 'Policies',
                get href() {
                    return route('policies');
                },
                get current() {
                    return route().current('policies');
                }
            },
            {
                name: 'Contacts',
                get href() {
                    return route('contacts');
                },
                get current() {
                    return route().current('contacts');
                }
            }
        ]);

        const toast = useToast();

        function logout() {
            Inertia.post(route('logout'));
        }

        const flash = computed(() => usePage().props.value.flash.message);
        watch(flash, (val) => {
            if (val) {
                toast(val);
            }
        });

        return {
            showingNavigationDropdown,
            logout,
            navOpen,
            navigation,
            toast
        };
    }
};
</script>
