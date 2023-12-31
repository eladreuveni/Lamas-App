'use client'
import useResponsive from '@/lib/hooks/useResponsive'
import React from 'react'

const TopBar = () => {
    const { isMobile } = useResponsive()
    return (
        <menu className='w-full h-16 px-10 flex justify-between items-center bg-sns-light-blue shadow-xl'>
            <span className={`${isMobile ? 'text-sm' : 'text-2xl'} font-bold no-select`}>אלעד משחק בנתונים של הלמ&quot;ס</span>
            <img src="assets/elad.svg" alt="me" className='h-full hover:animate-waves' />
        </menu>
    )
}

export default TopBar