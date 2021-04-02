/**
 *
 * @description name为icon名字 地址为 https://material.io/resources/icons/
 * 当loading为ture时,会开启旋转动画
 */
import { h, VNode, computed } from 'vue'

export type iconProps = {
  name: string | undefined
  loading?: Boolean
}

export const useIcon = function (props: iconProps): VNode | null {
  const classes = computed(() => [
    'icon',
    `${props.loading ? 'loading' : null}`
  ])

  return h(
    'span',
    { class: classes.value },
    props.loading && !props.name ? 'autorenew' : props.name
  )
}
