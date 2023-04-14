declare namespace Form {
  type ParamType = 'number' | 'string' | 'array' | 'enum' | 'expression'
  interface Range {
    min: number
    max: number
  }
  interface Param {
    name: string
    explain: string
    type: ParamType
    defaultValue?: number | string | number[]
    reg?: RegExp
    step?: number
    range?: Range
    enum?: Set<string>
    expression?: (...params: number[]) => number
    isConst?: boolean
  }
  interface Settings {
    title: string
    params: Param[]
  }
}
