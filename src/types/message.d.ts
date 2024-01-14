export type MessageTag = 'RUN_CODE' | 'RUN_CODE_RESULT' | 'RUN_CODE_ERROR'

export type Interpreter = 'python' | 'pypy'

export type MessageData = {
  tag: MessageTag
  data: string | null
  interpreter?: Interpreter
}
