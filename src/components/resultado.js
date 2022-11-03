import React from 'react'

export default function Resultado(props) {
    return (
        <div>
            <p class="display-6 text-center">Resultado:{" " + props.r.toFixed(2)}</p>
        </div>
    )
}