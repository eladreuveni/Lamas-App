'use client'
import React from 'react'
import GraphCard from './GraphCard'
import { useAppContext } from '../context/AppContext'
import useResponsive from '@/lib/hooks/useResponsive'


const GraphsPool = () => {
    const { filteredCards } = useAppContext()
    const { isMobile } = useResponsive()

    return (
        <div className={`flex pb-10 gap-10 m-auto flex-wrap ${isMobile ? 'justify-center' : 'pt-10'}`}>
            {filteredCards.map(c => <GraphCard key={c.graph_id} data={c} />)}
        </div>
    )
}

export default GraphsPool