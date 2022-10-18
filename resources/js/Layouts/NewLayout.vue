<template>
    <div>
        <div class="md:flex md:flex-col bg-cool-grey-50 md:h-screen">
            <div class="bg-white md:flex md:shrink-0">
                <div
                    class="flex items-center justify-between px-6 py-4 text-white bg-cool-grey-800 md:shrink-0 md:justify-center md:w-56"
                >
                    <Disclosure v-slot="{ open }" as="nav" class="w-full">
                        <div class="flex justify-between md:justify-center">
                            <div>
                                <AppLogo class="h-8 text-white fill-current" />
                            </div>
                            <div class="md:hidden">
                                <DisclosureButton>
                                    <MenuIcon
                                        v-if="!open"
                                        class="block w-6 h-6"
                                        aria-hidden="true"
                                    />
                                    <XIcon v-else class="block w-6 h-6" aria-hidden="true" />
                                </DisclosureButton>
                            </div>
                        </div>

                        <DisclosurePanel class="flex justify-end w-full">
                            <ul class="space-y-5 text-right text-light-blue-vivid-300 md:hidden">
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
                    class="flex justify-between w-full px-6 py-4 bg-white md:px-12 md:py-5 max-w-screen-2xl"
                >
                    <div>Jamar</div>
                    <Menu as="div" class="relative">
                        <div>
                            <MenuButton class="inline-flex items-center">
                                {{ $page.props.user.name }}
                                <ChevronDownIcon class="w-5 h-5 ml-2" />
                            </MenuButton>
                        </div>

                        <MenuItems
                            as="div"
                            class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y rounded-md shadow-lg divide-cool-grey-100 ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                            <div class="py-1">
                                <div class="block px-4 py-2 text-xs text-cool-grey-400">
                                    Manage Account
                                </div>
                            </div>

                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <InertiaLink
                                        :href="route('profile.show')"
                                        :class="[
                                            active
                                                ? 'bg-cool-grey-100 text-cool-grey-900'
                                                : 'text-cool-grey-700',
                                            'block px-4 py-2 text-sm',
                                        ]"
                                    >
                                        <UserCircleIcon class="inline w-5 h-5 mr-2" />
                                        Profile
                                    </InertiaLink>
                                </MenuItem>

                                <MenuItem
                                    v-if="$page.props.jetstream.hasApiFeatures"
                                    v-slot="{ active }"
                                >
                                    <InertiaLink
                                        :href="route('api-tokens.index')"
                                        :class="[
                                            active
                                                ? 'bg-cool-grey-100 text-cool-grey-900'
                                                : 'text-cool-grey-700',
                                            'block px-4 py-2 text-sm',
                                        ]"
                                    >
                                        API Tokens
                                    </InertiaLink>
                                </MenuItem>
                            </div>

                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <div
                                        :class="[
                                            active
                                                ? 'bg-cool-grey-100 text-cool-grey-900'
                                                : 'text-cool-grey-700',
                                            'block px-4 py-2 text-sm',
                                        ]"
                                    >
                                        <button type="submit flex" @click="logout">
                                            <LogoutIcon class="inline w-5 h-5 mr-2" />
                                            Log Out
                                        </button>
                                    </div>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </div>
            </div>
            <div class="md:flex md:grow md:overflow-hidden">
                <nav
                    class="hidden overflow-y-auto bg-cool-grey-900 md:flex md:shrink-0 md:justify-center md:w-56"
                >
                    <ul class="w-full mt-12 space-y-3 text-cool-grey-300">
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
                <div scroll-region class="w-full shadow-inner md:overflow-y-auto">
                    <div class="p-5 max-w-screen-2xl md:p-10">
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

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
} from '@headlessui/vue';
import {
    MenuIcon,
    XIcon,
    ChevronDownIcon,
    LogoutIcon,
    UserCircleIcon,
} from '@heroicons/vue/outline';
import AppLogo from '@/Shared/AppLogo.vue';
import NavLink from '@/Shared/NavLink.vue';

export default {
    components: {
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
        AppLogo,
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
                },
            },
            {
                name: 'Policies',
                get href() {
                    return route('policies');
                },
                get current() {
                    return route().current('policies');
                },
            },
            {
                name: 'Contacts',
                get href() {
                    return route('contacts.index');
                },
                get current() {
                    return route().current('contacts.index');
                },
            },
            {
                name: 'Employees',
                get href() {
                    return route('users.index');
                },
                get current() {
                    return route().current('users.index');
                },
            },
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
            toast,
        };
    },
};
</script>
