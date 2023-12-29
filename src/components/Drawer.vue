<script setup>
    const emit = defineEmits(['closeDrawer']);
</script>


<template>
    <div v-auto-animate class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-60"></div>
    <div v-auto-animate class=" bg-white w-2/5 h-full fixed right-0 top-0 z-20 p-10">
        
    <div class ="flex items-center">
        <h2 class="text-2xl font-bold">Добавить преступление</h2>
        <div @click="() => emit('closeDrawer')" class="mr-3 ml-auto right-0 cursor-pointer shadow-md w-7 h-7 items-center justify-center text-center rounded-md hover:bg-slate-200"> 
            <b class="m-auto p-auto"> X </b>
        </div>
    </div>

        <div class="mt-14">
            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                    placeholder="Раздел..." 
                    type="text" 
                    name="section" 
                    list="sectionName"/>
                <datalist id="sectionName">
                    <option value="7. Преступления против личности"></option>
                    <option value="8. Преступления с сфере экономики"></option>
                </datalist>
        </div>
        <div class="mt-14">
            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                    placeholder="Глава..." 
                    type="text" 
                    name="chapter" 
                    list="chapterName"/>
                <datalist id="chapterName">
                    <option value="16. Преступления против жизни и здоровья"></option>
                    <option value="21. Преступления против собственности"></option>
                </datalist>
        </div>
        <div class="mt-14">
            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                    placeholder="Статья..." 
                    type="text" 
                    name="number" 
                    list="numberName"/>
                <datalist id="numberName">
                    <option value="105. Убийство"></option>
                    <option value="158. Кража"></option>
                </datalist>
        </div>
        <div class="mt-14">
            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                    placeholder="Часть..." 
                    type="text" 
                    name="part" 
                    ist="partName"/>
                <datalist id="partName">
                    <option value="1"></option>
                    <option value="2"></option>
                </datalist>
        </div>

        <div class="bg-orange-100 flex m-auto p-auto mt-20 items-center cursor-pointer rounded-xl shadow-xl w-48 h-10 hover:bg-slate-200 hover:text-gray-500">
            <h3 class="m-auto p-auto">Добавить</h3>
        </div>
    </div>
</template>