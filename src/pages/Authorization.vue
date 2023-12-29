<template>
    <div class="text-center w-full font-bold text-xl mt-14">
        <h1>С возвращением!</h1>
    </div>

    <div>
        <div class="w-1/3 m-auto p-auto mt-20">
            <h2>E-mail</h2>
            <input class="peer placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                        placeholder="myEmail@mail.ru..." 
                        type="email" 
                        name="email" 
                        list="emailName"/>
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Пожалуйста, введите корректный почтовый адрес
            </p>
        </div>
        <div class="w-1/3 m-auto p-auto">
            <h2>Пароль</h2>
            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                        placeholder="********" 
                        type="password" 
                        name="pass" 
                        list="passName"/>
        </div>
        <div class="flex m-auto p-auto mt-10 items-center cursor-pointer rounded-xl shadow-xl w-48 h-10 bg-orange-100 hover:bg-slate-200 ">
            <h3 class="m-auto p-auto">Войти</h3>
        </div>
        <router-link to="/regis"><p class="text-gray-400 mt-5 text-center text-xs hover:text-black" >
            нет аккаунта? зарегистрироваться
        </p></router-link>
    </div>
</template>