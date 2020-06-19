import Home from "./components/Home";
import User from "./components/user/User";
import UserStart from "./components/user/UserStart"
import UserDetail from "./components/user/UserDetail"
import UserEdit from "./components/user/UserEdit"
import Header from "./components/Header"

export const routes = [
    { path : '',component : Home, name : 'indexPage',}, // '' boş ise proje başlangıcı
    { path : '/user/', component : User, name : 'userPage',
        children : [
            { path : '', component : UserStart }, //user
            { path : ':id', component : UserDetail, beforeEnter : (to, from, next) => {
                console.log("control");
                next();
            }}, //user/1
            { path : ':id/edit', component : UserEdit, name : "userEdit"} //user/1/edit
        ]
    
    },
    { path : "/redirect", redirect : "/user"},
    {path : "*", redirect : '/' }
    //yukarıdan aşağıya geliyor
]