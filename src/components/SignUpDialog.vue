<template>
  <ArrowDialog v-model="dialogStore.signUpDialogOpened">
    hi
  </ArrowDialog>
</template>
<script>
import { useDialogStore } from '../store/dialog'
export default {
  name: 'NavBar',
  setup() {
    const dialogStore = useDialogStore()
    return { dialogStore }
  },
}
</script>