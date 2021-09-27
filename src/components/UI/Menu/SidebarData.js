
import IconPersonOrange from "../../../assets/icones/IconPersonOrange.svg";
import IconPersonWhite from "../../../assets/icones/IconPersonWhite.svg";
import IconListOrange from "../../../assets/icones/IconListOrange.svg";
import IconListWhite from "../../../assets/icones/IconListWhite.svg";

export const SidebarData = [
    {
        title:"Pedidos",
        key: "1",
        path: '/pedidos',
        icon: IconListWhite,
        iconSelected: IconListOrange,
        className: 'Item-menu',
        open: false,
        disabled: false,
        subNav : [
            {
                title:"EM ABERTO",
                key: "1.1",
                path: '/pedidos',
                open: false,
                disabled: false,
            }, {
                title:"ENCERRADOS",
                key: "1.2",
                path: '',
                open: false,
                disabled: true,
            }
            
        ]

    },
    {
        title:"Clientes",
        key: "2",
        path: '',
        icon:IconPersonWhite,
        iconSelected: IconPersonOrange,
        className: 'Item-menu',
        disabled: true,
        subNav : [
            
            
        ]
    },
]