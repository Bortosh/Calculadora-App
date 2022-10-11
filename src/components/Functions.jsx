import React from "react";
import Button from "./Button"
import PropTypes from 'prop-types'

const Functions = ({ OnContentClear, OnDelete}) => {

    return (
        <section className="functions">
            <Button type='button-long-text' text='clear' clickHandler={OnContentClear} />
            <Button text='&larr;' clickHandler={OnDelete} />
        </section>
    )
}

Functions.propTypes = {
    OnContentClear: PropTypes.func.isRequired,
    OnDelete: PropTypes.func.isRequired
}

export default Functions;