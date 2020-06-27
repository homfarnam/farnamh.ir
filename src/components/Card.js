import React from 'react'
import CardInfo from './CardInfo'
import '../index.css'

const Card = (props) => {
    return (
        <div className='d-inline-block g-card' onMouseEnter={e=> props.click(props.item) }>
            <img className='g-card-image' src={props.item.imgSrc} alt='pic'/>
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
        </div>
    )
}

export default Card