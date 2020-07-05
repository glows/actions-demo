import About from './components/About'
import Inbox from './components/Inbox';
import Home from './pages/Home';
import MyCanvas from './pages/MyCanvas'

const routes = [

    {
        path: '/',
        component: Home,
        exact: true //是否为严格模式
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/inbox',
        component: Inbox
    },
    {
        path: '/my-canvas',
        component: MyCanvas
    },
    
]

export default routes