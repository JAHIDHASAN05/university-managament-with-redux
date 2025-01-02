import React, { Children, ReactNode } from "react";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";


 type TRoute= {
    path: string,
    element:ReactNode,
 }

export const adminRoutes =[
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        element: <CreateAdmin/>
    },
    {
        name: 'User ManangeMent',
        children:[
            {
                name: 'Create Student',
                path: '/admin/create-student',
                element: <CreateStudent/>
            },
            {
                name: 'Create Faculty',
                path: '/admin/create-faculty',
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
                path: '/admin/offered-course',
                element: <CreateStudent/>
            },
          
        ]
    },

]


// programitaccaly way

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
