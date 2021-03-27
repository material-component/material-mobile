import { h, VNode } from 'vue'

export const useIcon = function (name: string | undefined): VNode | null {
  if (!name) return null
  return h('span', { class: 'icon' }, name)
}
