import React from 'react'

export default function Pile({ children }) {
    const fill = 'grey'
    return <div style={{
        backgroundColor: fill,
        borderStyle: "solid",
        width: '100%',
        height: '100%',
    }}>
        {children}
    </div>
}