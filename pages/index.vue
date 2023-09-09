<template>
    <div>
     
        <div class="container mx-auto flex  flex-col items-center justify-start">
            <LogoName/>
            <div class="border-2 border-red-600 dark:border-blue-600 hover:bg-red-600/5 dark:hover:bg-blue-600/5 font-semibold text-red-800 dark:text-blue-800 bg-zinc-50 dark:bg-zinc-900 w-96 px-5 py-1 rounded-full stroke-red-600 dark:stroke-blue-600 flex items-center justify-start gap-2">
                <svg class="shrink-0" width="24" height="24" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m17 17 5 5m-2.5-11.25a8.75 8.75 0 1 1-17.5 0 8.75 8.75 0 0 1 17.5 0Z"></path>
                </svg>
                <input type="text" v-model.lazy="searchTerm" class="outline-none p-2 w-full bg-transparent">
                <svg @click="resetAll" class="cursor-pointer shrink-0" v-show="searchTerm.length > 0" width="24" height="24" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m5 5 14 14M5 19 19 5"></path>
                </svg>
            </div>
            <div @click="searchMovie" class="px-5 py-2.5 mt-7 cursor-pointer relative rounded-lg group overflow-hidden font-medium bg-zinc-50 dark:bg-zinc-900  text-red-600 dark:text-blue-600  stroke-red-600 dark:stroke-blue-600  hover:stroke-white dark:hover:stroke-white border-2 border-red-600 dark:border-blue-600 transition-all">
            <span class="absolute bottom-0 left-0 flex h-full w-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 dark:bg-blue-600 group-hover:w-full "></span>
            <span class="relative group-hover:text-white select-none flex items-center justify-center gap-3">

                Search in Molievie
            </span>
            <p class="absolute bottom-0 right-0 opacity-60 select-none text-xs scale-75">themoviedb</p>
          </div>

        </div>



        <!-- result start -->
        <ul v-if="moviesDB?.length>0" class="flex items-center justify-center gap-2 flex-wrap my-5">
            <li  v-for="(movie,index) in moviesDB" :key="index"  class="w-fit "> 
                <MovieCard :movie="movie"/>
            </li>
        <!-- result end -->
        <!-- pagenation Start -->
            <li class="w-full flex items-center justify-center my-10 select-none ">
            <div class="flex gap-10 text-red-700 dark:text-blue-500 font-bold mx-auto">
                <div @click="backPage"  :class="{'pointer-events-none opacity-30':disabledBack}" class="px-2 py-1  cursor-pointer">{{ page-1 }}</div>
                <div>{{ page }}</div>
                <div @click="forwardPage"  :class="{'pointer-events-none opacity-30':disabledForw}" class="px-2 py-1  cursor-pointer"> {{ page+1 }}</div>
            </div>
        </li>
        <!-- pagenation end -->
    </ul>

    </div>
</template>

<script setup>



const searchTerm = ref("")
const page = ref(1)
const pageCount = ref(0)
const moviesDB = ref(null)

const disabledBack = computed(()=>{
    return page.value -1 <=0 ? true : false 
})
const disabledForw = computed(()=>{
    return page.value +1 > pageCount.value ? true : false 
})


const backPage = ()=>{

    if(page.value -1 <1)
    {
        page.value=1
        searchMovie()
    }
    else{
        page.value -=1
        searchMovie()
    }
}
const forwardPage = ()=>{
    page.value +=1
    searchMovie()
}

watch(searchTerm,(newValue,oldValue)=>{

    if(newValue != oldValue){
        resetVariables()
    }
})


const resetVariables=()=>{
 page.value =1
 pageCount.value =0
 moviesDB.value =null
}

const resetAll=()=>{
 page.value =1
 pageCount.value =0
 moviesDB.value =null
 searchTerm.value=""
}

const searchMovie = async () => {
    const url = `api/movies/search?query=${searchTerm.value}&page=${page.value}`
    const { data : movies } = await useFetch(url)
    pageCount.value= movies.value.total_pages

    moviesDB.value=movies.value.results
}

</script>
