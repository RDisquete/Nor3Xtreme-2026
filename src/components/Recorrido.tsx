import React from 'react';
import RecorridoDesktop from './RecorridoDesktop';
import RecorridoMobile from './RecorridoMobile';

const Recorrido = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <RecorridoMobile /> : <RecorridoDesktop />;
};

export default Recorrido;