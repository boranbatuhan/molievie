<template>
    <div>
        <div class="flex items-center justify-end gap-5 bg-ml-white px-4">

                    <!-- back button start -->
        <div @click.prevent="goBack" class=" shrink-0  cursor-pointer bg-zinc-50  stroke-red-600 dark:stroke-blue-600    hover:stroke-white dark:hover:stroke-white transition-all relative group w-10 h-10 flex items-center justify-center !rounded-lg overflow-hidden  ">
            <span class="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 dark:bg-blue-600 group-hover:h-full "></span>
            <svg class="relative" width="24" height="24" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12H3m0 0 7-7m-7 7 7 7"></path>
            </svg>
        </div>
        <!-- back button end -->
                    <!-- dark button start -->
        <div @click="toggleDarkMode" class=" shrink-0  cursor-pointer bg-zinc-50 mr-auto stroke-red-600 dark:stroke-blue-600  hover:stroke-white dark:hover:stroke-white transition-all relative group w-10 h-10 flex items-center justify-center !rounded-lg overflow-hidden  ">
            <span class="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 dark:bg-blue-600 group-hover:h-full "></span>
            <svg v-if="isDark" class="relative" width="24" height="24" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 17.5 19 19m1-7h2M6.5 6.5 5 5m12.5 1.5L19 5M6.5 17.5 5 19m-3-7h2m8-10v2m0 16v2m4-10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
            </svg>

            <svg v-if="!isDark" class="relative" width="24" height="24" fill="none" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.381 2.043H9.38h.001Zm0 0c-.462 1.725-.305 3.499.157 5.224a10.17 10.17 0 0 0 2.635 4.56 10.168 10.168 0 0 0 4.56 2.635c1.725.462 3.509.589 5.234.126a10.126 10.126 0 0 1-2.6 4.432c-3.973 3.973-10.414 3.973-14.387 0-3.972-3.972-3.972-10.413 0-14.386a10.127 10.127 0 0 1 4.401-2.591Z"></path>
            </svg>
        </div>
        <!-- dark button end -->
        <!-- sign up button start -->
        <div class="px-5 py-2.5 shrink-0  cursor-pointer relative rounded-lg group overflow-hidden font-medium bg-zinc-50 text-red-600 dark:text-blue-600  stroke-red-600 dark:stroke-blue-600  hover:stroke-white dark:hover:stroke-white transition-all">
            <span class="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 dark:bg-blue-600 group-hover:h-full "></span>
            <span class="relative group-hover:text-white select-none flex items-center justify-center gap-3">
                <svg width="24" height="24" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.015 13.656a5.001 5.001 0 1 0-2.828-2.829m2.81 2.847-6.169 6.168-2.592-.235L4 17.014l6.168-6.168m5.381-2.53v-.023"></path>
                </svg>
                <p class="hidden md:inline">Sign Up</p>
            </span>
          </div>
          <!-- sign up button end -->
          <!-- sign in button start -->
          <div class="px-5 py-2.5 shrink-0  cursor-pointer relative rounded-lg group overflow-hidden font-medium bg-zinc-50 text-red-600 dark:text-blue-600  stroke-red-600 dark:stroke-blue-600  hover:stroke-white dark:hover:stroke-white transition-all">
              <span class="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 dark:bg-blue-600 group-hover:h-full "></span>
              <span class="relative group-hover:text-white select-none flex items-center justify-center gap-3">
                <svg width="24" height="24" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect width="18" height="11" x="3" y="11" rx="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v4"></path>
                </svg>
                <p class="hidden md:inline">Sign In</p>
            </span>
            </div>
        <!-- sign in button end -->

        

        <!-- profile button start -->
        <nuxt-link to="/profile" class=" shrink-0  bg-zinc-50 stroke-red-600 dark:stroke-blue-600  hover:stroke-white dark:hover:stroke-white transition-all relative group w-10 h-10 flex items-center justify-center !rounded-lg overflow-hidden  ">
            <span class="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 dark:bg-blue-600 group-hover:h-full "></span>
            <svg class="relative" width="24" height="24" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8z"></path>
                <path d="M4 21v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path>
            </svg>
        </nuxt-link>
        <!-- profile button end -->


        </div>

    </div>
</template>

<script setup>
const isDark = ref(false)
const toggleDarkMode=()=>{
    isDark.value= !isDark.value
    if ( isDark.value)
    document.querySelector("html").setAttribute("class","dark")
    else
    document.querySelector("html").setAttribute("class","")
} 

const router = useRouter()
const goBack =()=>{
    router.back()
}

</script>
