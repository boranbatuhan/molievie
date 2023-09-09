<template>
    <div>
        <nuxt-link to="/" class="flex items-center justify-center gap-5 my-4">
                <div class="w-20 h-20  relative group">
                    <span class="w-0 group-hover:w-24 transition-all duration-1000 aspect-square rounded-full absolute bg-white blur-md top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></span>
                    <img class="w-full relative h-full hover:rotate-[820deg] scale-100 group-hover:scale-125 duration-1000 transition-all invert-0 dark:invert" src="~assets/imgs/molievielogo1.png" alt="molievie-logo">
                </div>
                <div class="relative brandName group ">
                    <h1 id="brandName" class="text-6xl absolute top-0 left-0 font-bold font-boldfashion mt-3  flex items-center justify-center "> Molievie</h1>
                    <h1 id="brandNameMain" class="text-6xl text-outline-white-thin group-hover:text-white transition-all delay-150 duration-300 font-bold font-boldfashion pointer-events-none mt-3 relative flex items-center justify-center  text-zinc-950 dark:text-zinc-100"> Molievie</h1>
                </div>
            </nuxt-link>
    </div>
</template>

<script setup>

onMounted(()=>{
    let text = document.querySelector("#brandName");
text.innerHTML = text.innerText.split("").map((letters,i) => `<p style="transition-delay:${i * 40}ms;filter:hue-rotate(${i * 30}deg)">${letters}</ p>`).join('')
    let textMain = document.querySelector("#brandNameMain");
textMain.innerHTML = textMain.innerText.split("").map((letters) => `<p >${letters}</ p>`).join('')

})
</script>


<style>
.brandName #brandName p{

    color: #555;
    transition: 0.25s;
}
.brandName #brandName:hover p{
    color: #0f0;
    text-shadow: 0 0 5px#0f0,
    0 0 15px #0f0,
    0 0 30px #0f0;
}
.brandName:hover{
    transition-delay:1000ms;
    animation: huerotate 3s linear infinite alternate both;
}
@keyframes huerotate {
    0%{
        filter: hue-rotate(0turn);

    }
    50%{
        filter: hue-rotate(1turn);
    }
    100%{
        filter: hue-rotate(2turn);

    }
}



</style>