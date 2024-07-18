export * from './WnrAPI'


export interface UpdatePaylogMemoModel {
  guid?: string
  memo?: string | null
}
// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never

