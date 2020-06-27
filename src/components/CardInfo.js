import React  from 'react'
import {useSpring,animated} from 'react-spring'

const CardInfo =(props) =>{
    const style = useSpring({opacity:1, from:{opacity:0}})

    return(
        <animated.div style={style} className='g-card-info'>
            <p className='g-card-title'>{props.title}</p>
            <p className='g-card-sub-title'>{props.subTitle}</p>
            <a href={props.link} target='_blank' rel='noopener noreferer'> View</a>
        </animated.div>
    )
}

export default CardInfo
