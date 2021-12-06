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
        beforeEach(()=>{
            const props = {
                btnText: 'Example Button Text',
                emitEvent: () =>{

                }
            }
            wrapper=shallow(<SharedButton {...props}/>)
        })

        it('Should render a button', ()=>{
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1)
        })
    })
})