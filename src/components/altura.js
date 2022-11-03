import React, { useState } from 'react'

export default function Altura(props) {
    return (
        <div class="d-flex justify-content-between p-1">
            <label class="p-1">Digite sua altura</label>
            <input type="number" required step="0.01" value={props.a} onChange={(e) => { props.setA(e.target.value) }} />
        </div>
    )
}
