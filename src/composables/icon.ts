import { h, VNode, computed } from 'vue'

export const useIcon = function (
  name: string | undefined,
  loading?: Boolean
): VNode | null {
  const classes = computed(() => ['icon', `${loading ? 'loading' : null}`])

  return h(
    'span',
    { class: classes.value },
    loading && !name ? 'autorenew' : name
  )
}
