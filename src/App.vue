<script setup>
  import Header from './components/Header.vue';
  import List from './components/List.vue';
  import Table from './components/Table.vue';
  import Drawer from './components/Drawer.vue';


  const drawerOpen = ref(false);
</script>


<template>
  <!--<Drawer/>-->
  <div class="bg-white w-4/5 m-auto h-screen rounded-xl shadow-xl mt-14">
    <Header/>  
    <List/>
    <Table/>

  </div>
</template>


<style scoped>

</style>
