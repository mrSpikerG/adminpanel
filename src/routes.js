//  Icons can be finded in https://themewagon.github.io/connect-plus/pages/icons/mdi.html
//

import AdminACL from "./pages/AdminACL";

const routes = [
  {
    categoryName: "Основное",
    sort: 1,
    links: [{
      type: "default",
      name: "Главная панель",
      key: "dashboard",
      icon: "mdi-cube-outline",
      route: "/main/dashboard",
    }]
  },
  {
    categoryName: "Менеджмент",
    sort: 3,
    links: [
      {
        type: "collapse",
        name: "Магазин",
        key: "shopitems",
        icon: "mdi-shopping",
      
        links: [{
          name: "Категории", 
          route: "/manager/category",
        },
        {
          name: "Товары", 
          route: "/manager/items",
        }]
      },
      {
        type: "default",
        name: "Хранилище",
        key: "storage",
        icon: "mdi-cloud-upload",
        route: "/manager/storage",
      },
    ]
  },
  {
    categoryName: "Администрирование",
    sort: 2,
    links: [
      {
        type: "default",
        name: "ACL",
        key: "acl",
        icon: "mdi-account-alert",
        route: "/admin/acl",
      },
      {
        type: "collapse",
        name: "Скидки",
        key: "special",
        icon: "mdi-code-string",
       
        links: [{
          name: "Купоны", 
          route: "/admin/specialoffer",
        },
        {
          name: "Активированые купоны", 
          route: "/admin/useroffers",
        }
      ]
      }
    ]
  }
];

export default routes;

