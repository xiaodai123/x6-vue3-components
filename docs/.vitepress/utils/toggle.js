import { isRef, ref } from 'vue'
import { isBoolean } from '@vueuse/core'

export const useToggle = (getToggled) => {
    const val = isRef(getToggled)
        ? getToggled
        : ref(isBoolean(getToggled) ? getToggled : false)

    return [
        val,
        (toggle) => {
            val.value = isBoolean(toggle) ? toggle : !val.value
        },
    ]
}
