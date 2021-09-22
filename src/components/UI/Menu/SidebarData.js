
import IconPerson from "../../../assets/icones/IconPerson.svg";
import IconList from "../../../assets/icones/IconList.svg";
export const SidebarData = [
    {
        title:"Pedidos",
        key: "1",
        path: '/pedidos',
        icon: IconList,
        className: 'Item-menu',
        open: true,
        disabled: false,
        subNav : [
            {
                title:"EM ABERTO",
                key: "1.1",
                path: '/pedidos',
                open: true
            }, {
                title:"ENCERRADOS",
                key: "1.2",
                path: '',
                open: false,
            }
            
        ]

    },
    {
        title:"Clientes",
        key: "2",
        path: '',
        icon: IconPerson,
        className: 'Item-menu',
        disabled: true,
        subNav : [
            
            
        ]
    },
]