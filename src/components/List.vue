<script setup>
const emit = defineEmits(['openTable ', 'closeTable']);
</script>


<template>
    <div v-auto-animate class="flex justify-between border-b border-slate-300 px-10 py-8 text-center">
      <div class="w-full place-content-center m-3 px-14">
        <ul class="flex items-center gap-10">
          <li  class="flex w-1/4 items-center text-center cursor-pointer gap-3 text-gray-500 hover:text-black ">
            <router-link to="/">Список преступлений</router-link>
          </li>
          <li class="flex w-1/4 items-center text-center cursor-pointer gap-3 text-gray-500 hover:text-black ">
            <router-link to="/pers">Личность обвиняемого</router-link>
          </li>
          <li class="flex w-1/4 items-center text-center cursor-pointer gap-3 text-gray-500 hover:text-black ">
            <router-link to="/easy">Облегчающие обстоятельства</router-link>
          </li>
          <li class="flex w-1/4 items-center text-center cursor-pointer gap-3 text-gray-500 hover:text-black ">
            <router-link to="/diff">Отягчающие обстоятельства</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>