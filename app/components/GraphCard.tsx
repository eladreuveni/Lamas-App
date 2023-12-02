'use client'
import { Card } from '@mui/material'
import GraphExplanation from './GraphExplanation'
import { useAppContext } from '../context/AppContext';
import useResponsive from '@/lib/hooks/useResponsive';

interface Props {
    fullSize?: boolean;
    data: GraphData;
}

const GraphCard = ({ fullSize, data }: Props) => {
    const { setSelectedCard } = useAppContext();
    const { isMobile } = useResponsive()

    const classes = {
        card: fullSize ? `flex ${isMobile ? 'flex-col max-h-90vh' : ''} overflow-scroll z-10 h-fit w-fit p-5 gap-5` : 'cursor-pointer w-80 h-80',
        imgCont: fullSize ? 'basis-3/5' : 'w-full h-1/2',
        expCont: fullSize ? 'basis-2/5' : 'px-1 pt-2',
    }

    return (
        <Card sx={{ boxShadow: 10 }} onClick={() => { !fullSize && setSelectedCard(data) }} className={classes.card}>
            {fullSize && <img onClick={() => { setSelectedCard(null) }}
                className='cursor-pointer fixed top-2 left-2 w-5 h-5'
                src='assets/x.svg' alt="x" />}
            <div className={` ${classes.imgCont}`}>
                <img src={data.img_path} alt='' className={'h-full w-full'} />
            </div>
            <div className={`flex flex-col gap-2 ${classes.expCont}`}>
                <GraphExplanation fullSize={fullSize} data={data} />
            </div>
        </Card>
    )
}

export default GraphCard