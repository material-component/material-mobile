/**
 *
 * @description name为icon名字 地址为 https://material.io/resources/icons/
 * 当loading为ture时,会开启旋转动画
 */
import { h, VNode, computed } from 'vue'

export type iconProps = {
  icon?: string
  loading?: Boolean
  color?: string | undefined
  size?: number
  gutter?: number
}

export const useIcon = function (props: iconProps): VNode | null {
  const classes = computed(() => [
    'icon',
    `${props.loading ? 'loading' : null}`
  ])

  return h(
    'span',
    {
      class: classes.value,
      style: {
        padding: `${props.gutter === undefined ? 5 : props.gutter}px`,
        color: props.color,
        fontSize: `${props.size || 20}px`
      }
    },
    props.loading && !props.icon ? 'autorenew' : props.icon
  )
}
