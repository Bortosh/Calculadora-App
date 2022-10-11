import React from "react";
import PropTypes from 'prop-types'
import RepeatNumbers from "./RepeatNumbers";

const Numbers = ({onClickNumber}) => {

    return (
        <section className='numbers'>
            {
                <RepeatNumbers onClickNumber={onClickNumber} />
            }
        </section>
    )
}

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers;