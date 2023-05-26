import { createStore } from 'storken'

export const [Storken, { useStorken }] = createStore({
  storkenOptions: {},
  initialValues: {
   accountAdress: ""
  },
})

export default { Storken, useStorken }