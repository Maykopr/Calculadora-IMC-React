import React, { useState } from 'react'

export default function Calcular(props) {
    const calc = () => {
        props.setR(props.p / (props.a * props.a))
    }
    return (
        <div class=" d-flex justify-content-center p-1">
            <button class="btn btn-primary" onClick={calc}>Calcular</button>
        </div>
    )
}

