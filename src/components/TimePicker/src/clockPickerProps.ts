export const props = {
  max: {
    default: 0,
    type: Number,
    required: true
  },
  min: {
    type: Number,
    default: 0,
    required: true
  },
  rotate: {
    type: Number,
    default: 0
  },
  value: {
    type: [Number],
    default: 0
  },
  step: {
    type: Number,
    default: 1
  },
  format: {
    type: Function,
    default: (val: string | number) => val
  },
  double: Boolean
}
