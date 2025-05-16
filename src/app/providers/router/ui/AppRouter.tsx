import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {  type AppRoutesProps, routerConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';

const AppRouter = () => {

    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route 
                key={route.path} 
                path={route.path} 
                element={element}
            />
        );
    }, []);
    
    return (
        <Routes>
            {Object.values(routerConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);