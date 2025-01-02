import React, { Children, ReactNode } from "react";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";

  
 type TRoute= {
    path: string,
    element:ReactNode,
 }

export const adminRoutes =[
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <CreateAdmin/>
    },
    {
        name: 'User ManangeMent',
        children:[
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent/>
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty/>
            },
            {
                name: 'Create Admin',
                path: "create-admin",
                element: <CreateAdmin />,
              },
        ]
    },
    {
        name: 'Course Managment',
        children:[
            {
                name: 'Offered Course',
                path: 'offered-course',
                element: <CreateStudent/>
            },
          
        ]
    },

]





// programitaccaly way

type TSidebarItem={
    key:string,
    label:ReactNode,
    children?:TSidebarItem[]
}


export const adminSidebarItems = adminRoutes.reduce((acc:TSidebarItem[], item)=> {
    if(item.path && item.name){
        acc.push({
            key:item.name,
            label:<NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        })
    }
    if(item.children){       
        acc.push({
            key:item.name,
            label:item.name,
            children : item.children.map(child=>({
                key:child.name,
                label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
            }))
        });
     
    }
    return acc
},[])









export const adminPath = adminRoutes.reduce((acc:TRoute[], item)=> {
    if(item.name && item.element){
        acc.push({
            path:item.path,
            element:item.element
        })
    }
    if(item.children){
       item.children.filter((child)=>{
        acc.push({
            path:child.path,
            element:child.element,
        });
       });
    }
    return acc
},[])



// hard coded way

// export const adminPath = [
//   {
//     path: "dashboard",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-student",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
// ];
