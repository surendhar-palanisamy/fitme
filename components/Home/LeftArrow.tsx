import React, { useContext } from 'react'
import LeftArrowImg from '../../public/icons/left-arrow.png'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import Image from 'next/image'
export const La = ()=>{
    const { scrollPrev } = useContext(VisibilityContext)
        return (<div onClick={() => { scrollPrev() }}>
            <Image height={20} width={20} src={LeftArrowImg} />
        </div>)
}

