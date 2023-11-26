'use client'
import React, { useEffect } from 'react'
import HrefIcon from './HrefIcon'
import { useAppContext } from '../context/AppContext'
import usePageBottom from '@/lib/hooks/usePageBottom'

const Footer = () => {
    const { selectedCard } = useAppContext()
    const isBottom = usePageBottom();

    const menuCN = (selectedCard || isBottom) ? '-bottom-10' : 'bottom-0'

    return (
        <menu className={`${menuCN} transition-all duration-1000 fixed w-full h-10 px-10 flex justify-between items-center bg-sns-light-blue`}>
            <div className='h-full flex gap-5 items-center'>
                <span className='text-2xl font-bold no-select'>צרו איתי קשר: </span>
                <HrefIcon href='https://github.com/eladreuveni/Lamas' src='assets/github.svg' alt="github" />
                <HrefIcon href='https://twitter.com/elado_blanco' src='assets/x-twitter.svg' alt="twitter" />
                <HrefIcon href='mailto:elad.reuveni.7@gmail.com' src='assets/email.svg' alt="email" />
                <HrefIcon href='https://www.linkedin.com/in/elad-reuveni-124609189/' src='assets/linkedin.svg' alt="linkedin" />
            </div>
            <div className='flex flex-col justify-center items-center text-xs no-select'>
                <span>Ⓒ כל הזכויות שמורות לאלעד ראובני Ⓒ</span>
                <span>*הנתונים לקוחים מסקר הוצאות משקי בית בין השנים 2012-2021, הלמ&quot;ס*</span>
            </div>
        </menu>
    )
}

export default Footer