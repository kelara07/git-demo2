 import { defineStore } from 'pinia'
import { ref } from 'vue'


 export const useTagStore = defineStore(
    'cp-Tag',
    () => {
        const tag = ref<any>()
        const setTag = (u: any) => {
            tag.value = u
        }
        const delTag = () => {
            tag.value = null
        }

        return { tag, setTag, delTag }
    },
    {
      persist: true
    }
 )