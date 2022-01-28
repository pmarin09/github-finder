import {createContext, useReducer} from 'react';
import { createRoutesFromChildren } from 'react-router-dom';
import githubReducer from './GithubReducer';


const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
        repos: [],
    }
    const [state, dispatch] =useReducer(githubReducer,initialState)
      return <GithubContext.Provider value = {{
          ... state,
          dispatch,
      }}>
          {children}
      </GithubContext.Provider>
}

export default GithubContext