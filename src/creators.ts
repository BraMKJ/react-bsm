export const creatorSimpleStateManager = (
  defaultState: string | number | boolean | Array<unknown> | object | unknown | null
): object => {
  let state = defaultState
  const subscribers = new Map()
  let idCounter = 0

  const getState = () => state

  const subscribe = (callback: void) => {
    const id = idCounter++
    subscribers.set(id, callback)
    return () => subscribers.has(id) && subscribers.delete(id)
  }

  const updateState = (value: unknown) => {
    state = value
    subscribers.forEach((callback) => {
      callback(state)
    })
  }

  return {
    getState,
    subscribe,
    updateState,
  }
}
