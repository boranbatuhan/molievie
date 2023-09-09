<template>
    <div>
        <div class="w-full h-[50dvh] overflow-hidden relative  ">
            <p class="relative z-50 text-zinc-950 dark:text-zinc-50 font-mogula uppercase bg-transparent mt-7 text-5xl mx-5 drop-shadow-md">{{ data.title }}</p>
            <p class="relative z-50 text-zinc-600 dark:text-zinc-300 font-mogula uppercase bg-transparent mb-7 mt-0 text-xl mx-5 drop-shadow-md">{{ data.tagline }}</p>
            <p class="relative z-50 text-zinc-950 dark:text-zinc-50 font-louscafe  bg-transparent my-7 text-sm mx-5 w-full md:w-1/3 drop-shadow-md">{{ data.overview }}</p>
            <img :src="imgUrl" alt="movie-poster"  draggable="false" loading="eager" class="select-none object-cover object-center w-full h-full  absolute top-0 left-0">
            <div class="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-zinc-200 via-transparent to-zinc-200 dark:from-zinc-950 dark:to-zinc-950 dark:via-transparent"></div>
            <div class="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-zinc-200 via-transparent to-zinc-200 dark:from-zinc-950 dark:to-zinc-950 dark:via-transparent"></div>
            <div class="w-fit h-fit absolute bottom-2 right-4 text-zinc-950 dark:text-zinc-50 flex items-center justify-center gap-1 stroke-zinc-950 dark:stroke-zinc-50 fill-zinc-950 dark:fill-zinc-50">
                <svg width="16" height="16" fill="inherit" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m12 2 2.36 7.265H22l-6.18 4.49 2.36 7.266-6.18-4.49-6.18 4.49 2.36-7.265L2 9.266h7.64L12 2Z"></path>
                    </svg>
                {{ data.vote_average.toFixed(1) }}
            </div>
        </div>
        <div class="flex items-start justify-start gap-4 flex-wrap">
            <!-- production_companies" -->
            <div class="my-7 mx-5 text-zinc-950 dark:text-zinc-50  font-louscafe">
            <p class=" font-bold bg-transparent text-2xl drop-shadow-md">Production Companies</p>
                <ul>
                   <li v-for="company in data.production_companies" :key="company.id">{{ company.name }}</li> 
                </ul>
            </div>

            <!-- release_date" -->
            <div class="my-7 mx-5 text-zinc-950 dark:text-zinc-50  font-louscafe">
            <p class=" font-bold bg-transparent text-2xl drop-shadow-md">Release Date</p>
            <p>{{ data.release_date }}</p>
            </div>
            <!-- runtime" -->
            <div class="my-7 mx-5 text-zinc-950 dark:text-zinc-50  font-louscafe">
            <p class=" font-bold bg-transparent text-2xl drop-shadow-md">Runtime</p>
            <p>{{ data.runtime }}</p>
            </div>
            <!-- budget" -->
            <div  v-show="data.budget>0" class="my-7 mx-5 text-zinc-950 dark:text-zinc-50  font-louscafe">
            <p class=" font-bold bg-transparent text-2xl drop-shadow-md">Budget</p>
            <p class="before:content-['$']">{{ formatValue(data.budget) }}</p>
            </div>
            <!-- revenue" -->
            <div  v-show="data.revenue>0" class="my-7 mx-5 text-zinc-950 dark:text-zinc-50  font-louscafe">
            <p class=" font-bold bg-transparent text-2xl drop-shadow-md">Revenue</p>
            <p class="before:content-['$']">{{ formatValue(data.revenue) }}</p>
            </div>
            <!-- Profit" -->
            <div v-show="data.revenue>0 && data.budget>0" class="my-7 mx-5 text-zinc-950 dark:text-zinc-50  font-louscafe">
            <p class=" font-bold bg-transparent text-2xl drop-shadow-md">Profit</p>
            <p class="before:content-['$']" :class="{'text-green-500':data.revenue-data.budget>0,'text-red-500':data.revenue-data.budget<0}">{{ formatValue(data.revenue-data.budget) }}</p>
            </div>

        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()


const movieId=computed(()=> route.params.id)

const url = `/api/movies/${movieId.value}`
const {data} = await useFetch(url).then()

const imgUrl=computed(()=>data.value?.poster_path ? `${config.public.imgBaseUrl}/${data.value.poster_path}`: "https://i.pinimg.com/736x/e1/9d/ce/e19dce48dde4b8eb9811d23060aaae74.jpg")
const formatValue =(number)=>{

    const tempnumber=number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return tempnumber
}

useHead({
title:`Molievie | ${data.value.title}`,
meta:[
	{ name:"description",content:`${data.value.overview}` }
]
})
</script>

<style  scoped>

</style>