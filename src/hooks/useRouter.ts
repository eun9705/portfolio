import { useNavigate } from 'react-router-dom';

export const useRouter = () => {
    const router = useNavigate();

    return {
        currentUrl:window.location.pathname,
        routerTo: (path:string) => router(path),
        goBack: ()=> router(-1)
    }
}