import React from 'react'
import { shallow } from "enzyme";
import {findByTestAtrr} from './../../../Utils/index';
import SharedButton from './SharedButton';

describe('SharedButton Componet',()=>{
    // describe('Checking Proptypes', ()=>{
    //     it('Should not throw a warning', ()=>{
            
    //     })
    // })
    describe('Renders',()=>{
        let wrapper;
        let mockFunc;
        beforeEach(()=>{
            mockFunc = jest.fn();
            const props = {
                btnText: 'Example Button Text',
                emitEvent: mockFunc
            }
            wrapper=shallow(<SharedButton {...props}/>)

        })

        it('Should render a button', ()=>{
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1)
        })

        it('Should emit callback on click event', ()=>{
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            button.simulate('click')
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1)
        })
    })
})