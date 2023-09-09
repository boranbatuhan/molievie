<template>
    <nuxt-link :to="`/movies/${movie?.id}`" :id="movie.id" class="">
        <div class="group relative flex items-center justify-start w-44 h-64  bg-red-950 box-border border-2 border-red-600 dark:border-blue-600 overflow-hidden">
            <!-- photo start -->
            <div class=" transition-all w-44 h-64 shrink-0  overflow-hidden  object-contain flex items-center justify-center ">
                <img class="w-full h-full" draggable="false" loading="lazy" :src="imgUrl" alt="img-logo-mini" >
            </div>
            <!-- photo end -->
            
            <span class="w-44 h-64 absolute  bg-gradient-to-t to-transparent from-red-950 dark:from-blue-950 transition-all -bottom-64 group-hover:bottom-0 left-0"></span>

            <!-- movie name start -->
            <div class=" absolute -bottom-16 group-hover:bottom-0 transition-all left-2 w-40 font-louscafe font-bold text-xl truncate text-red-200 dark:text-blue-200 ">
                
                <div class="flex items-center justify-start">
                    <p class="text-sm flex items-center justify-start stroke-teal-400 text-teal-400 fill-teal-500 gap-2">
                    <svg width="16" height="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z"></path>
                    <path d="M3 10h18"></path>
                    <path d="M16 2v4"></path>
                    <path d="M8 2v4"></path>
                    </svg>
                    {{ movie.release_date.slice(0, 4) }}
                </p>
                <p class="ml-auto text-sm flex items-center justify-start stroke-yellow-400 text-yellow-400 fill-yellow-500 gap-2">
                    <svg width="16" height="16" fill="inherit" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m12 2 2.36 7.265H22l-6.18 4.49 2.36 7.266-6.18-4.49-6.18 4.49 2.36-7.265L2 9.266h7.64L12 2Z"></path>
                    </svg>
                    {{ movie.vote_average.toFixed(1) }}
                </p>
                </div>
                <p class="truncate">{{ movie.title}}</p>
            </div>
            <!-- movie name end -->
        </div>
    </nuxt-link>
</template>

<script setup>

const props = defineProps({
    movie:Object
})



const config = useRuntimeConfig()

const imgUrl = computed(()=>{

    return props.movie?.poster_path !=null ? config.public.imgBaseUrl+props.movie?.poster_path  : "https://i.pinimg.com/736x/e1/9d/ce/e19dce48dde4b8eb9811d23060aaae74.jpg"
})

</script>
