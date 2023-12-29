<template>
    <header class = "flex justify-between border-b border-slate-100 px-10 py-8">
      
      
      <router-link to="/">
      <div class = "flex items-center">
        <img src="/logo.png" alt="Logo" class="gap-4"/>
        <div>
          <h2 class="text-xl font-bold uppercase">CalcSrok</h2>
          <p class="text-slate-400">Приложение для расчета сроков</p>
        </div>
      </div></router-link>


      <ul class="flex items-center gap-10">
        <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/loginout.png" alt="Cart">
          <router-link to="/auth"><span>Вход</span></router-link>
        </li>
        <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/call.png" alt="Cart">
          <router-link to="/callback"><span>Связаться с нами</span></router-link>
        </li>
        <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/about.png" alt="Cart">
          <router-link to="/about"><span>О нас</span></router-link>
        </li>
      </ul>
    </header>
</template>