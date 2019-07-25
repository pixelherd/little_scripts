import React from 'react'

export const PuppetClock = ({className, time}) => {

    return <span className={className}> {new Date(time).toTimeString().slice(0,5)}</span>
};