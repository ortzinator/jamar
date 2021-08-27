<template>
    <div>
        <jet-banner />

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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1425.8 353.74"
                                    class="h-8 fill-current text-white"
                                >
                                    <defs>
                                        <linearGradient
                                            id="a"
                                            x1="-467.57"
                                            x2="-469.87"
                                            y1="-68.97"
                                            y2="488.43"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop
                                                offset="0"
                                                stop-color="#2294fe"
                                            />
                                            <stop
                                                offset="1"
                                                stop-color="#014f96"
                                            />
                                        </linearGradient>
                                    </defs>
                                    <g fill="currentColor">
                                        <path
                                            d="M495.5 179.52v19.1a77.16 77.16 0 00-17.44-7.11 64.33 64.33 0 00-17.54-2.45c-13.24 0-23.53 4.22-30.86 12.66-7.33 8.36-11 20.13-11 35.3 0 15.18 3.67 26.98 11 35.42 7.33 8.36 17.61 12.54 30.86 12.54 5.92 0 11.77-.77 17.54-2.33a81.25 81.25 0 0017.43-7.21v18.87a83.7 83.7 0 01-17.76 6 90.48 90.48 0 01-19.43 2c-18.72 0-33.6-5.9-44.63-17.66s-16.54-27.64-16.54-47.63c0-20.28 5.55-36.23 16.66-47.85 11.17-11.62 26.45-17.43 45.85-17.43 6.29 0 12.43.67 18.42 2 6 1.26 11.8 3.19 17.43 5.78M578.98 189.07c-10.95 0-19.6 4.29-25.97 12.87-6.37 8.52-9.55 20.2-9.55 35.09 0 14.87 3.14 26.6 9.44 35.19 6.36 8.51 15.06 12.77 26.08 12.77 10.88 0 19.5-4.3 25.87-12.88 6.37-8.59 9.55-20.28 9.55-35.08 0-14.73-3.18-26.39-9.55-34.97-6.36-8.66-14.99-13-25.87-13m0-17.31c17.77 0 31.72 5.77 41.86 17.32s15.2 27.53 15.2 47.96c0 20.35-5.06 36.34-15.2 47.96-10.14 11.54-24.1 17.32-41.86 17.32-17.83 0-31.82-5.78-41.96-17.32-10.07-11.62-15.1-27.61-15.1-47.96 0-20.43 5.03-36.42 15.1-47.96 10.14-11.55 24.13-17.32 41.96-17.32M766.6 198.6c5.11-9.17 11.22-15.94 18.32-20.31 7.1-4.37 15.47-6.55 25.1-6.55 12.94 0 22.94 4.55 29.97 13.66 7.03 9.02 10.54 21.9 10.54 38.63v75.05H830V224.7c0-11.92-2.11-20.76-6.33-26.54-4.22-5.77-10.66-8.66-19.32-8.66-10.58 0-18.95 3.52-25.09 10.55-6.14 7.03-9.21 16.62-9.21 28.75v70.28H749.5V224.7c0-12-2.11-20.84-6.33-26.54-4.22-5.77-10.73-8.66-19.54-8.66-10.43 0-18.72 3.56-24.87 10.66-6.14 7.03-9.21 16.58-9.21 28.64v70.28h-20.54V174.74h20.54v19.32c4.66-7.63 10.25-13.25 16.76-16.88 6.52-3.63 14.25-5.44 23.2-5.44 9.04 0 16.7 2.3 22.99 6.88 6.36 4.6 11.06 11.25 14.1 19.99M910.7 280.43v65.94h-20.53V174.74h20.53v18.87c4.3-7.4 9.7-12.87 16.21-16.43 6.59-3.62 14.44-5.44 23.54-5.44 15.1 0 27.35 6 36.75 17.99 9.47 11.99 14.2 27.75 14.2 47.3 0 19.53-4.73 35.3-14.2 47.29-9.4 11.99-21.65 17.98-36.75 17.98-9.1 0-16.95-1.77-23.54-5.33-6.51-3.62-11.91-9.14-16.2-16.54m69.5-43.4c0-15.03-3.12-26.8-9.33-35.31-6.15-8.59-14.62-12.88-25.43-12.88-10.8 0-19.31 4.3-25.53 12.88-6.14 8.51-9.22 20.28-9.22 35.3 0 15.03 3.08 26.83 9.22 35.42 6.22 8.5 14.73 12.76 25.53 12.76s19.28-4.25 25.43-12.76c6.21-8.59 9.32-20.4 9.32-35.42M1091.77 236.58c-16.5 0-27.94 1.88-34.3 5.66-6.37 3.77-9.55 10.21-9.55 19.32 0 7.25 2.37 13.02 7.1 17.31 4.82 4.22 11.33 6.33 19.55 6.33 11.32 0 20.39-4 27.2-11.99 6.88-8.06 10.32-18.76 10.32-32.08v-4.55h-20.32m40.75-8.44v70.94h-20.43V280.2c-4.66 7.55-10.47 13.13-17.43 16.76-6.96 3.55-15.47 5.33-25.53 5.33-12.73 0-22.87-3.55-30.42-10.66-7.48-7.18-11.21-16.76-11.21-28.75 0-14 4.66-24.54 13.98-31.64 9.4-7.1 23.4-10.66 41.97-10.66h28.64v-2c0-9.4-3.1-16.65-9.32-21.76-6.15-5.18-14.8-7.77-25.98-7.77-7.1 0-14.03.85-20.76 2.55a82.3 82.3 0 00-19.43 7.66V180.4a132.87 132.87 0 0121.76-6.44 99.6 99.6 0 0120.54-2.22c17.98 0 31.42 4.66 40.3 13.99 8.88 9.33 13.32 23.46 13.32 42.4M1278.5 224.04v75.04h-20.42V224.7c0-11.77-2.3-20.57-6.89-26.42-4.58-5.85-11.47-8.77-20.65-8.77-11.02 0-19.72 3.52-26.08 10.55-6.37 7.03-9.55 16.61-9.55 28.75v70.27h-20.54V174.74h20.54v19.32c4.88-7.47 10.62-13.06 17.2-16.76 6.67-3.7 14.33-5.55 22.99-5.55 14.28 0 25.09 4.44 32.41 13.32 7.33 8.8 11 21.8 11 38.97M1371.2 310.63c-5.77 14.8-11.4 24.46-16.87 28.97-5.48 4.52-12.8 6.77-21.98 6.77h-16.32v-17.1h11.99c5.62 0 9.99-1.32 13.1-3.99s6.55-8.95 10.32-18.87l3.67-9.33-50.3-122.34h21.65l38.86 97.25 38.86-97.25h21.64l-54.62 135.9"
                                        />
                                    </g>
                                    <g fill="currentColor">
                                        <path
                                            d="M438.04 102.2c0-6.67-1.39-11.84-4.16-15.51-2.73-3.67-6.59-5.51-11.56-5.51-4.94 0-8.8 1.84-11.56 5.5-2.74 3.68-4.1 8.85-4.1 15.53 0 6.64 1.36 11.8 4.1 15.47 2.77 3.67 6.62 5.5 11.56 5.5 4.97 0 8.83-1.83 11.56-5.5 2.77-3.68 4.16-8.83 4.16-15.47m9.21 21.72c0 9.55-2.12 16.64-6.36 21.28-4.24 4.67-10.73 7-19.47 7-3.24 0-6.3-.24-9.16-.74a44.69 44.69 0 01-8.36-2.2v-8.97a36.4 36.4 0 008 3.26c2.64.7 5.33 1.05 8.07 1.05 6.04 0 10.56-1.59 13.56-4.76 3-3.13 4.51-7.89 4.51-14.27v-4.55a19.03 19.03 0 01-7.3 7.4c-2.98 1.64-6.53 2.46-10.67 2.46-6.88 0-12.42-2.62-16.62-7.86-4.2-5.24-6.31-12.18-6.31-20.82 0-8.68 2.1-15.64 6.3-20.88 4.21-5.24 9.75-7.86 16.63-7.86 4.14 0 7.7.82 10.66 2.45 2.97 1.64 5.4 4.1 7.31 7.41v-8.5h9.21v49.1M514.18 100.56v4.5h-42.35c.4 6.34 2.3 11.18 5.7 14.52 3.44 3.3 8.22 4.96 14.32 4.96 3.54 0 6.96-.44 10.27-1.3a45.63 45.63 0 009.9-3.91v8.71c-3.3 1.4-6.68 2.47-10.15 3.2-3.48.74-7 1.1-10.57 1.1-8.94 0-16.03-2.6-21.27-7.8-5.21-5.21-7.81-12.25-7.81-21.13 0-9.18 2.47-16.45 7.4-21.83 4.98-5.4 11.67-8.1 20.08-8.1 7.54 0 13.5 2.43 17.87 7.3 4.4 4.84 6.61 11.43 6.61 19.78m-9.21-2.7c-.07-5.05-1.49-9.07-4.26-12.07-2.73-3-6.37-4.5-10.91-4.5-5.14 0-9.26 1.44-12.36 4.35-3.08 2.9-4.84 6.99-5.31 12.26l32.84-.05M575.71 97.05v33.84h-9.21V97.35c0-5.3-1.04-9.28-3.1-11.92-2.07-2.63-5.18-3.95-9.32-3.95-4.97 0-8.9 1.58-11.76 4.75-2.87 3.17-4.3 7.5-4.3 12.97v31.69h-9.27V74.82h9.26v8.71c2.2-3.37 4.8-5.89 7.76-7.56 3-1.67 6.46-2.5 10.37-2.5 6.44 0 11.31 2 14.61 6 3.3 3.98 4.96 9.83 4.96 17.58M642.14 100.56v4.5h-42.35c.4 6.34 2.3 11.18 5.7 14.52 3.44 3.3 8.22 4.96 14.32 4.96 3.54 0 6.96-.44 10.27-1.3a45.63 45.63 0 009.9-3.91v8.71c-3.3 1.4-6.68 2.47-10.15 3.2-3.48.74-7 1.1-10.57 1.1-8.94 0-16.03-2.6-21.27-7.8-5.21-5.21-7.81-12.25-7.81-21.13 0-9.18 2.47-16.45 7.4-21.83 4.98-5.4 11.67-8.1 20.08-8.1 7.54 0 13.5 2.43 17.87 7.3 4.4 4.84 6.61 11.43 6.61 19.78m-9.21-2.7c-.07-5.05-1.49-9.07-4.26-12.07-2.73-3-6.37-4.5-10.9-4.5-5.15 0-9.27 1.44-12.37 4.35-3.07 2.9-4.84 6.99-5.31 12.26l32.84-.05M689.55 83.43a11.62 11.62 0 00-3.4-1.3c-1.2-.3-2.54-.45-4-.45-5.22 0-9.22 1.7-12.02 5.1-2.77 3.38-4.16 8.23-4.16 14.57v29.54h-9.26V74.82h9.26v8.71a18.72 18.72 0 017.56-7.56c3.1-1.66 6.88-2.5 11.31-2.5.64 0 1.34.05 2.1.15.77.07 1.63.18 2.56.35l.05 9.46M699.31 74.82h9.21v56.07h-9.21V74.82m0-21.82h9.21v11.66h-9.21V53M768.1 76.97v8.61a34.8 34.8 0 00-7.86-3.2c-2.6-.73-5.24-1.1-7.9-1.1-5.98 0-10.62 1.9-13.93 5.7-3.3 3.78-4.95 9.08-4.95 15.93 0 6.84 1.65 12.16 4.95 15.97 3.3 3.77 7.95 5.65 13.92 5.65 2.67 0 5.3-.35 7.91-1.05a36.64 36.64 0 007.86-3.25v8.5a37.74 37.74 0 01-8.01 2.71c-2.74.6-5.66.9-8.76.9-8.44 0-15.15-2.65-20.13-7.96-4.97-5.3-7.45-12.46-7.45-21.47 0-9.15 2.5-16.34 7.5-21.58 5.04-5.24 11.94-7.86 20.68-7.86 2.84 0 5.6.3 8.31.9 2.7.57 5.32 1.44 7.86 2.6M816.66 53h9.21v77.9h-9.21V53M866.82 81.28c-4.94 0-8.84 1.94-11.71 5.8-2.87 3.85-4.3 9.12-4.3 15.83 0 6.7 1.4 12 4.25 15.87 2.87 3.84 6.79 5.75 11.76 5.75 4.9 0 8.8-1.93 11.66-5.8 2.88-3.87 4.31-9.15 4.31-15.82 0-6.64-1.43-11.9-4.3-15.77a13.72 13.72 0 00-11.67-5.86m0-7.8c8.01 0 14.3 2.6 18.87 7.8 4.58 5.2 6.86 12.42 6.86 21.63 0 9.18-2.28 16.39-6.86 21.63-4.57 5.2-10.86 7.8-18.87 7.8-8.04 0-14.35-2.6-18.92-7.8-4.54-5.24-6.81-12.45-6.81-21.63 0-9.21 2.27-16.42 6.8-21.63 4.58-5.2 10.89-7.8 18.93-7.8M944.67 102.2c0-6.67-1.39-11.84-4.16-15.51-2.73-3.67-6.59-5.51-11.56-5.51-4.94 0-8.8 1.84-11.56 5.5-2.74 3.68-4.1 8.85-4.1 15.53 0 6.64 1.36 11.8 4.1 15.47 2.77 3.67 6.62 5.5 11.56 5.5 4.97 0 8.83-1.83 11.56-5.5 2.77-3.68 4.16-8.83 4.16-15.47m9.21 21.72c0 9.55-2.12 16.64-6.36 21.28-4.24 4.67-10.73 7-19.47 7-3.24 0-6.3-.24-9.16-.74a44.69 44.69 0 01-8.36-2.2v-8.97a36.4 36.4 0 008 3.26c2.64.7 5.33 1.05 8.07 1.05 6.04 0 10.56-1.59 13.56-4.76 3-3.13 4.51-7.89 4.51-14.27v-4.55a19.03 19.03 0 01-7.3 7.4c-2.98 1.64-6.53 2.46-10.67 2.46-6.88 0-12.42-2.62-16.62-7.86-4.2-5.24-6.31-12.18-6.31-20.82 0-8.68 2.1-15.64 6.3-20.88 4.21-5.24 9.75-7.86 16.63-7.86 4.14 0 7.7.82 10.66 2.45 2.97 1.64 5.4 4.1 7.31 7.41v-8.5h9.21v49.1M994.59 81.28c-4.94 0-8.84 1.94-11.71 5.8-2.87 3.85-4.3 9.12-4.3 15.83 0 6.7 1.4 12 4.25 15.87 2.87 3.84 6.79 5.75 11.76 5.75 4.9 0 8.8-1.93 11.66-5.8 2.88-3.87 4.31-9.15 4.31-15.82 0-6.64-1.43-11.9-4.3-15.77a13.72 13.72 0 00-11.67-5.86m0-7.8c8.01 0 14.3 2.6 18.87 7.8 4.58 5.2 6.86 12.42 6.86 21.63 0 9.18-2.28 16.39-6.86 21.63-4.57 5.2-10.86 7.8-18.87 7.8-8.04 0-14.35-2.6-18.92-7.8-4.54-5.24-6.81-12.45-6.81-21.63 0-9.21 2.27-16.42 6.8-21.63 4.58-5.2 10.89-7.8 18.93-7.8"
                                        />
                                    </g>
                                    <path
                                        fill="url(#a)"
                                        d="M-184.26 202.82c0 157.74-127.87 285.61-285.61 285.61s-285.61-127.87-285.61-285.61S-627.61-82.79-469.87-82.79s285.61 127.87 285.61 285.61z"
                                        transform="rotate(-45 4.82 -413.54) scale(.61927)"
                                    />
                                    <path
                                        fill="#eee"
                                        d="M302.82 150.5c42.06 42.06 42.06 110.24 0 152.3s-110.24 42.06-152.3 0-42.05-110.24 0-152.3 110.25-42.05 152.3 0z"
                                    />
                                </svg>
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
                                    <form
                                        @submit.prevent="logout"
                                        :class="[
                                            active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
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
                            <template
                                v-if="$page.props.jetstream.hasTeamFeatures"
                            >
                                <div class="py-1">
                                    <div
                                        class="
                                            px-4
                                            py-2
                                            text-xs text-gray-400
                                            flex
                                            items-center
                                        "
                                    >
                                        <UserGroupIcon class="w-5 h-5 mr-2" />
                                        Manage Teams
                                    </div>
                                </div>
                                <!-- Team Settings -->
                                <div class="py-1">
                                    <MenuItem v-slot="{ active }">
                                        <inertia-link
                                            :href="
                                                route(
                                                    'teams.show',
                                                    $page.props.user
                                                        .current_team
                                                )
                                            "
                                            :class="[
                                                active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            ]"
                                        >
                                            Team Settings
                                        </inertia-link>
                                    </MenuItem>

                                    <MenuItem
                                        v-slot="{ active }"
                                        v-if="
                                            $page.props.jetstream.canCreateTeams
                                        "
                                    >
                                        <inertia-link
                                            :href="route('teams.create')"
                                            :class="[
                                                active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            ]"
                                        >
                                            Create New Team
                                        </inertia-link>
                                    </MenuItem>
                                </div>
                            </template>
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
    </div>
</template>

<script>
import { ref } from 'vue';
import JetApplicationMark from '@/Jetstream/ApplicationMark';
import JetBanner from '@/Jetstream/Banner';
import JetDropdown from '@/Jetstream/Dropdown';
import JetDropdownLink from '@/Jetstream/DropdownLink';
import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink';

import NavLink from '@/Shared/NavLink';

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
        UserGroupIcon
    },

    setup() {
        const showingNavigationDropdown = ref(false);
        const navOpen = ref(false);
        const navigation = ref([
            {
                name: 'Dashboard',
                href: route('dashboard'),
                current: route().current('dashboard')
            },
            {
                name: 'Policies',
                href: route('policies'),
                current: route().current('policies')
            },
            {
                name: 'Contacts',
                href: route('contacts'),
                current: route().current('contacts')
            }
        ]);

        function logout() {
            this.$inertia.post(route('logout'));
        }

        return { showingNavigationDropdown, logout, navOpen, navigation };
    }
};
</script>
