<template>
  <div
    v-show="tooltip"
    ref="tooltipRef"
    class="absolute z-50 flex flex-col border border-gray-700 divide-y divide-gray-900 bg-gray-950 rounded-lg shadow-lg transition-opacity"
    :style="state.tooltipStyle"
  >
    <div
      v-if="weaponClass"
      v-for="(bonusList, index) in weaponClass.bonuses"
      class="flex items-center gap-2 px-4 py-2"
    >
      <p class="w-5 font-semibold text-gray-400 text-sm">{{ index + 2 }}:</p>
      <p v-for="bonus in bonusList" class="text-sm" v-html="bonus" />
    </div>
  </div>
</template>

<script setup>
import { computePosition, flip, offset, shift } from '@floating-ui/dom'
import { weaponClasses } from '@/constants'

const store = useStore()

const tooltip = computed(() => store.state.weaponClasses.tooltip)
const weaponClass = computed(() =>
  tooltip.value ? weaponClasses[tooltip.value.name] : null
)

const tooltipRef = ref(null)

const state = reactive({
  tooltipStyle: {},
})

watch(
  () => tooltip.value?.hook,
  async (newHook) => {
    if (newHook) {
      const { x, y } = await computePosition(newHook, tooltipRef.value, {
        placement: 'bottom',
        middleware: [offset(5), flip(), shift({ padding: 16 })],
      })
      state.tooltipStyle = {
        left: x + 'px',
        top: y + 'px',
      }
    }
  }
)
</script>
