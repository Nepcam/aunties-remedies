import React from 'react'

const OilList = (props) => {
    return (
        <div className='listing'>
            <div className='oillist'>
                {props.oils.map(oil => {
                    return (
                        <OillistItem key={oil.id} oil={oil} addTocart={props.addTocart} />
                    )
                })}
            </div>
        </div>
    )
}

export default OilList