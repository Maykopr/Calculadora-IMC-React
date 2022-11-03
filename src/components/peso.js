import React, { useState } from 'react'

export default function Peso(props) {

    return (
        <div class="d-flex justify-content-between p-1">
            <label class="p-1">Digite seu peso</label>
            <input type="number" required step="0.1" value={props.p} onChange={(e) => { props.setP(e.target.value) }} />
        </div>
    )
}
