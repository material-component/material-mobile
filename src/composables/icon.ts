/**
 *
 * @description name为icon名字 地址为 https://material.io/resources/icons/
 * 当loading为ture时,会开启旋转动画
 */
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
