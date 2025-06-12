<template>
    <footer class="text-center mt-20">
    <hr class="border-t-4 border-blue-500 w-4/5 mx-auto my-10">
    <div class="flex flex-col gap-10 pb-10">

        <div class="links flex flex-wrap justify-center gap-4 mb-4">
            <router-link to="/"
                class="relative text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500">Home</router-link>
            <router-link to="/list_relawan"
                class="relative text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500">Relawan</router-link>
            <router-link to="/list_donasi"
                class="relative text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500">Donasi</router-link>
            <router-link to="/artikel"
                class="relative text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500">Article</router-link>
            <router-link to="/forum-diskusi"
                class="relative text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500">Forum Diskusi</router-link>
            <router-link to="/profile"
                class="relative text-gray-800 font-medium hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500">Profile</router-link>
        </div>

        <div class="socials flex justify-center gap-6 text-xl mb-4 text-gray-800">
            <router-link to="#"><i class="fa-brands fa-instagram hover:text-pink-500"></i></router-link>
            <router-link to="#"><i class="fa-brands fa-tiktok hover:text-black"></i></router-link>
            <router-link to="#"><i class="fa-brands fa-x-twitter hover:text-black"></i></router-link>
            <router-link to="#"><i class="fa-brands fa-youtube hover:text-red-500"></i></router-link>
        </div>

        <div class="font-semibold text-sm text-gray-800">
            <p>Pijar Nusantara | &copy; AlopeAlpha 2025</p>
        </div>
    </div>
</footer>

</template>