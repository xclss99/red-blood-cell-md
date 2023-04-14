interface RGBColor {
  r: number
  g: number
  b: number
}
interface Option {
  label: string
  value: number
}
interface Obj extends Object {
  [key: string]: any
}
type Size = 'tiny' | 'small' | 'medium' | 'large'
