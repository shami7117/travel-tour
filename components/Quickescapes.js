import React from 'react'
import Quickescapescards from './Quickescapescards'

export default function Quickescapes() {
    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-0   '>
            {/* order 1 on small screen */}
            <Quickescapescards headingha="Mumbai" quick="true" hideonbig="hidden" />
            <Quickescapescards headingha="Mumbai" />
            {/* order 2 on big screen */}
            <Quickescapescards headingha="Mumbai" quick="true" hideonsmall="hidden" />
            <Quickescapescards headingha="Bangalore" />
            <Quickescapescards headingha="Dehli" />
            <Quickescapescards headingha="Chennai" />
            <Quickescapescards headingha="Kochi" />
        </div>
    )
}
