import React from 'react'
import PropTypes from 'prop-types'
import { fetchPosts } from '../../redux/reducers/actions'

const SharedButton = (props) => {
    const {btnText,emitEvent} = props

    const submitEvent = ()=>{
        if (emitEvent) {
            emitEvent()
        }
    }
    return (
        <button onClick={submitEvent} data-test='buttonComponent'>
            {btnText}
        </button>
    )
}

export default SharedButton

SharedButton.propTypes= {

}