'use client'
import React from 'react'
import HrefIcon from './HrefIcon'
import { useAppContext } from '../context/AppContext'
import usePageBottom from '@/lib/hooks/usePageBottom'
import useResponsive from '@/lib/hooks/useResponsive'

const Footer = () => {
    const { selectedCard } = useAppContext()
    const isBottom = usePageBottom();
    const { isMobile } = useResponsive();

    const menuBottom = (selectedCard || isBottom) ? '-bottom-10' : 'bottom-0'
    const commonStyles = 'px-10 flex justify-between items-center bg-sns-light-blue'
    const deviceStyles = isMobile ? `h-1/4 flex-col gap-8` : `${menuBottom} transition-all duration-1000 fixed w-full h-10`

    return (
        <menu className={`${deviceStyles} ${commonStyles}`}>
            <div className={`h-full flex gap-5 items-center`}>
                <span className={`font-bold no-select ${isMobile ? 'text-lg' : 'text-2xl'}`}>צרו איתי קשר: </span>
                <HrefIcon href='https://twitter.com/elado_blanco' src='assets/x-twitter.svg' alt="twitter" />
                <HrefIcon href='mailto:elad.reuveni.7@gmail.com' src='assets/email.svg' alt="email" />
                <HrefIcon href='https://www.linkedin.com/in/elad-reuveni-124609189/' src='assets/linkedin.svg' alt="linkedin" />
            </div>
            <div className='h-full flex gap-5 items-center'>
                <span className={`font-bold no-select ${isMobile ? 'text-lg' : 'text-2xl'}`}>הקוד: </span>
                <HrefIcon href='https://github.com/eladreuveni/Lamas' src='assets/github.svg' alt="github" />
            </div>
            <div className={`flex flex-col justify-center items-center no-select text-center ${isMobile ? 'text-xs' : 'text-sm'}`}>
                <span>Ⓒ כל הזכויות שמורות לאלעד ראובני Ⓒ</span>
                <span>*הנתונים לקוחים מסקר הוצאות משקי בית בין השנים 2012-2021, הלמ&quot;ס*</span>
            </div>
        </menu>
    )
}

export default Footer