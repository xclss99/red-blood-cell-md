declare namespace Form {
  type ParamType = 'number' | 'string' | 'numberArray' | 'enum' | 'expression'
  interface Range {
    min: number
    max: number
  }
  interface Param {
    /** Param Name */
    name: string
    /** Param Explain */
    explain: string
    /** Type of param value, 'number' | 'string' | 'numberArray' | 'enum' | 'expression' */
    type: ParamType
    /** Default value */
    defaultValue?: number | string | number[]
    /** Regular expressions used for validation. */
    reg?: RegExp
    /** If type is 'number' or 'numberArray', represents how many values can be added or subtracted at each step of the add/subtract button in the InputNumber component. */
    step?: number
    /**
     * If the type is 'number' or 'numberArray', the range refers to the max and min values of the numerical value;
     * If the type is 'string', the range refers to the max and min length of the string.
     */
    range?: Range
    /** If type is 'enum'. */
    enum?: Set<string>
    /** If type is 'expression', the all param names of the dependent param required for this param. */
    dependencies?: string[]
    /** If type is 'expression', a mathematical function expression that can pass in multiple numeric params.*/
    expression?: (...params: number[]) => number
    /** Is it a constant, if undefined, it refers to false. */
    isConst?: boolean
  }
  interface Item extends Pick<Param, 'name' | 'explain'> {
    component?: import('vue').Component
  }
  interface Settings {
    /** Form Title */
    title: string
    /** All params */
    params: Param[]
  }
}
