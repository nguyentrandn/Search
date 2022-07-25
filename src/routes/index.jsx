import Home from "../pages/Home"
import News from "../pages/News"
import Videos from "../pages/Videos"


//
const publicRoutes =[ 
    { path: '/', component: Home},
    { path: '/news', component: News},
    { path: '/videos', component: Videos},

]
// 
const privateRoutes = {

}
export {privateRoutes, publicRoutes}