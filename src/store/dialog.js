import { defineStore } from 'pinia'
export const useDialogStore = defineStore('dialog', {
  state: () => ({
    signUpDialogOpened: false,
  }),
})