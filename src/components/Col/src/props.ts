export const props = {
  span: {
    type: [Number, String],
    default: 0,
    validator(val: number): boolean {
      return val < 24
    }
  },
  offset: {
    type: [Number, String],
    default: 0
  }
}
