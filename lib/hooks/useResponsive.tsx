'use client'
import { useMediaQuery } from "@mui/material";

const useResponsive = () => {
    return {
        isMobile: useMediaQuery('(max-width: 1224px)'),
    }
}

export default useResponsive;
