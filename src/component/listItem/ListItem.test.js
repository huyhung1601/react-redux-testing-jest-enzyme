import React from "react";
import { shallow } from "enzyme";
import ListItem from "./ListItem";
import { findByTestAtrr } from "../../../Utils/index";

describe("ListItem Component", () => {
    describe('Renders',()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                title: 'Title 1',
                desc: 'Title Content'
            }
            wrapper=shallow(<ListItem {...props}/>)
        })

        it('Should render a button', ()=>{
            const ListItem = findByTestAtrr(wrapper, 'listItemComponent');
            expect(ListItem.length).toBe(1)
        })

        it('Should render a title',()=>{
            const title =findByTestAtrr(wrapper, 'componentTitle');
            expect(title.length).toBe(1)
        })
    })

    describe('SHould not render', ()=>{
        let wrapper
        beforeEach(()=>{
            const props = {
                desc: 'Some text'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it('Component is not rendered',()=>{
            const component= findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0)
        })
    })
});
