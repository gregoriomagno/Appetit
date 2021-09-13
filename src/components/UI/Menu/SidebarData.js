import React from 'react';
import { FaRegListAlt } from 'react-icons/fa';


export const SidebarData = [
    {
        title:"Pedidos",
        key: "1",
        path: '/pedidos',
        icon: <FaRegListAlt size={24}/>,
        className: 'Item-menu',
        subNav : [
            {
                title:"EM ABERTO",
                key: "1.1",
                path: '/pedidos/emaberto',
                icon: <FaRegListAlt size={24}/>,
            }, {
                title:"ENCERRADOS",
                key: "1.2",
                path: '/pedidos/encerrados',
                icon: <FaRegListAlt size={24}/>,
            }
            
        ]

    },
    {
        title:"Clientes",
        key: "2",
        path: '',
        icon: <FaRegListAlt size={24}/>,
        className: 'Item-menu',
        subNav : [
            
            
        ]
    },
]