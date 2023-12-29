<script setup>
    import List from '../components/List.vue';
    import Table from '../components/Table.vue';

    import { ref, provide } from 'vue';

    import Header from '../components/Header.vue';
    import Drawer from '../components/Drawer.vue';


  const drawerOpen = ref(false);
  
  const openDrawer = () => {
    drawerOpen.value = true
  }

  const closeDrawer = () => {
    drawerOpen.value = false
  }

  const tableOpen = ref(true);

  const openTable = () => {
    tableOpen.value = true
  }

  const closeTable = () => {
    tableOpen.value = false
  }

  provide ('DrawerActions', {
    openDrawer,
    closeDrawer
  })

  provide ('TableActions', {
    openTable,
    closeTable
  })
</script>



<template>
    <Drawer v-if="drawerOpen" @close-drawer="closeDrawer"/>
    <List @open-table="openTable" @close-table="closeTable"/>
    <Table v-if="tableOpen" @open-drawer="openDrawer"/>
</template>