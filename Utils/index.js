import {createStore,applyMiddleware} from 'redux'
import rootReducer from '../src/redux/reducers/rootReducer'
import {middlewares} from '../src/redux/createStore'
export const findByTestAtrr = (component,attr) =>{
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper
}

export const testStore = (initialState) =>{
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer,initialState)
}
