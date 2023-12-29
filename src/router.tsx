import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import GeneralLayout from './layout/GeneralLayout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import CareerDescription from './pages/CareerDescription';
import ProjectDetail from './pages/ProjectDetail';
import PageNotFound from './pages/PageNotFound';

interface RouterElement {
    id:number,
    label:string,
    path:string,
    element?:React.ReactNode,
    isShowMenu?:boolean,
    openNewWindow?:boolean
}

const routerData:RouterElement[] = [
    {
        id:0,
        label:"HOME",
        path:"/",
        element:<Home />,
        isShowMenu:true
    },
    {
        id:1,
        label:"ABOUT",
        path:"/about",
        element:<AboutMe />,
        isShowMenu:true
    },
    {
        id:2,
        label:"CAREER",
        path:"/career",
        element:<CareerDescription />,
        isShowMenu:true
    },
    {
        id:3,
        label:"GITHUB",
        path:"https://github.com/eun9705",
        isShowMenu:true,
        openNewWindow:true
    },
    {
        id:4,
        label:"DETAIL",
        path:"/detail/:postId",
        element:<ProjectDetail />,
        isShowMenu:false
    },
    {
        id:5,
        label:"PAGENOTFOUND",
        path:"/error",
        element:<PageNotFound />,
        isShowMenu:false
    },
]

export const routers = createBrowserRouter(
    routerData.map((router)=>{
        return {
            path:router.path,
            element:<GeneralLayout>{router.element}</GeneralLayout>
        }
    })
)

export const menuListContent:RouterElement[] = routerData.reduce((prev,router) => {
    if(!router.isShowMenu) return prev;

    return [
        ...prev,
        {
            id:router.id,
            label:router.label,
            path:router.path,
            openNewWindow:router.openNewWindow
        }
    ]
}, [] as RouterElement[]);