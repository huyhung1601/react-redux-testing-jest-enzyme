import postReducer from './reducer'

describe('Posts Reducer', ()=>{
    it('Should return default state', ()=>{
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([])
    })

    it('SHould return new state if receiving type', ()=>{
        const posts = [{title: 'Test1'},{title: 'Test2'},{title: 'Test3'},]
        const newState = postReducer(undefined,{
            type: 'GET_POSTS',
            payload: posts
        })
        console.log(newState)
        expect(newState).toEqual(posts)
    })
})