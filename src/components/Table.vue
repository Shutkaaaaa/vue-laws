<template>
    <div class="w-full mt-10">
      <table class="w-full rounded-xl">
        <th class="px-5 w-1/4 border-b border-gray-200"> 
          Раздел
        </th>  
        <th class="px-5 w-1/4 border-b border-gray-200" > 
          Глава
        </th> 
        <th class="px-5 w-1/4 border-b border-gray-200">  
          Статья
        </th>  
        <th class="px-5 w-1/4 border-b border-gray-200">  
          Часть
        </th>    
        <th class="px-5 border-b border-gray-200">   
        </th>
        <th class="px-5 border-b border-gray-200">   
        </th>
        <tr>
        </tr>
        <td class="px-5"> раздел </td>
        <td>глава</td>
        <td>статья</td>
        <td>часть</td>
        <td class="cursor-pointer"><img src="/edit.png" alt="Edit" class="w-5 h-5"></td>
        <td class="cursor-pointer"><img src="/delete.png" alt="Delete" class="w-5 h-5"></td>
        
      </table>

    <div class="flex m-auto p-auto mt-10 items-center cursor-pointer rounded-xl shadow-xl w-48 hover:bg-slate-200 hover:text-gray-500">
            <img src="/add.png" alt="Add" class="w-5 h-5 m-3 p-auto">
            <h3 class="m-auto p-auto">Добавить</h3>
    </div>

    </div>
</template>