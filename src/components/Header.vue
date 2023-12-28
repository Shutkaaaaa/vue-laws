<template>
    <header class = "flex justify-between border-b border-slate-100 px-10 py-8">
      <div class = "flex items-center">
        <img src="/logo.png" alt="Logo" class="gap-4"/>
        <div>
          <h2 class="text-xl font-bold uppercase">CalcSrok</h2>
          <p class="text-slate-400">Приложение для расчета сроков</p>
        </div>
      </div>


      <ul class="flex items-center gap-10">
        <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/loginout.png" alt="Cart">
          <span>Вход</span>
        </li>
        <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/call.png" alt="Cart">
          <span>Связаться с нами</span>
        </li>
        <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/about.png" alt="Cart">
          <span>О нас</span>
        </li>
      </ul>
    </header>
</template>