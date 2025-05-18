import { AboutPage } from '@/pages/AboutPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import type { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRouters { 
	HOME = 'home',
	ABOUT = 'about',
    NOT_FOUND = 'not_found',
}
 
export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.HOME]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.NOT_FOUND]: '*'
};

export const routerConfig: Record<AppRouters, AppRoutesProps> = {
    [AppRouters.HOME] : {
        path: RoutePath.home,
        element: <HomePage/>
    },
    [AppRouters.ABOUT] : {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRouters.NOT_FOUND] : { 
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    },
};