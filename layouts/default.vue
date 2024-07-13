<template>
    <div class="flex">
        <div id="sidebar" class="fixed h-screen w-[20rem] p-8 border-r-2 flex flex-col gap-2">
            <NuxtLink class="pb-4" to="/">
                <span class="cursor-pointer text-black text-3xl font-bold">Clara Garcia</span>
            </NuxtLink>

            <NuxtLink to="/digital-drawings">
                <span
                    :class="['cursor-pointer text-black text-lg font-thin', isActive('/digital-drawings') ? 'bg-yellow-300' : 'hover:bg-yellow-300', 'duration-150 ease-in-out']">digital
                    drawings</span>
            </NuxtLink>

            <NuxtLink to="/animations">
                <span
                    :class="['cursor-pointer text-black text-lg font-thin', isActive('/animations') ? 'bg-yellow-300' : 'hover:bg-yellow-300', 'duration-150 ease-in-out']">animations</span>
            </NuxtLink>

            <NuxtLink to="/studies">
                <span
                    :class="['cursor-pointer text-black text-lg font-thin', isActive('/studies') ? 'bg-yellow-300' : 'hover:bg-yellow-300', 'duration-150 ease-in-out']">studies</span>
            </NuxtLink>

            <NuxtLink to="/contact">
                <span
                    :class="['cursor-pointer text-black text-lg font-thin', isActive('/contact') ? 'bg-yellow-300' : 'hover:bg-yellow-300', 'duration-150 ease-in-out']">contact</span>
            </NuxtLink>


            <div class="mt-auto flex flex-col items-start">
                <div class="text-xs text-gray-400">Made with ❤️</div>
                <div class="flex gap-4 mt-2">
                    <a href="https://www.instagram.com/pudding._.3/" target="_blank" rel="noopener noreferrer"
                        class="flex items-center">
                        <img src="~/assets/img/instagram-logo.png" alt="Instagram" class="w-8 h-8 mr-2" />
                        <button class="py-2 pr-2">Insta</button>
                    </a>
                    <a href="https://www.redbubble.com/people/Puddiing3/shop" target="_blank" rel="noopener noreferrer"
                        class="flex items-center">
                        <img src="~/assets/img/redbubble-logo.png" alt="Shop" class="w-8 h-8 mr-2" />
                        <button class="py-2 pr-2">Shop</button>
                    </a>
                </div>

            </div>

        </div>
        <main id="content" class="ml-[22rem] w-full overflow-auto">
            <NuxtPage />
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'DefaultLayout',
    setup() {
        const route = useRoute();

        const isActive = (path: string) => {
            return route.path === path;
        };

        return {
            isActive,
        };
    },
});

</script>
