<template>
    <div>
        <div class="bg-cool-grey-50 md:flex md:h-screen md:flex-col">
            <div class="bg-white md:flex md:shrink-0">
                <div
                    class="bg-cool-grey-800 flex items-center justify-between px-6 py-4 text-white md:w-56 md:shrink-0 md:justify-center"
                >
                    <Disclosure v-slot="{ open }" as="nav" class="w-full">
                        <div class="flex justify-between md:justify-center">
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
                                    <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
                                </DisclosureButton>
                            </div>
                        </div>

                        <DisclosurePanel class="flex w-full justify-end">
                            <ul class="text-light-blue-vivid-300 space-y-5 text-right md:hidden">
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
                    class="flex w-full max-w-screen-2xl justify-between bg-white px-6 py-4 md:px-12 md:py-5"
                >
                    <div>Jamar</div>
                    <Menu as="div" class="relative">
                        <div>
                            <MenuButton class="inline-flex items-center">
                                {{ $page.props.user.name }}
                                <ChevronDownIcon class="ml-2 h-5 w-5" />
                            </MenuButton>
                        </div>

                        <MenuItems
                            as="div"
                            class="divide-cool-grey-100 ring-opacity-5 absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black focus:outline-none"
                        >
                            <div class="py-1">
                                <div class="text-cool-grey-400 block px-4 py-2 text-xs">
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
                                        <UserCircleIcon class="mr-2 inline h-5 w-5" />
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
                                            <LogoutIcon class="mr-2 inline h-5 w-5" />
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
                    class="bg-cool-grey-900 hidden overflow-y-auto md:flex md:w-56 md:shrink-0 md:justify-center"
                >
                    <ul class="text-cool-grey-300 mt-12 w-full space-y-3">
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
                    <div class="max-w-screen-2xl p-5 md:p-10">
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
import { router, usePage } from '@inertiajs/vue3';
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
            router.post(route('logout'));
        }

        const flash = computed(() => usePage().props.flash.message);
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
