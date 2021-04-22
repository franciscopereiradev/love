import { createContext } from 'react'

const LoveContext = createContext({
    token: null,
    setToken: () => {}
})

export default LoveContext;