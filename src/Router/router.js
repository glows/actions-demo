import About from '../components/About'
import Inbox from '../components/Inbox';


let router = [

    {
        path: '/',
    },
    {
        path: '/about',
        componentName: About
    },
    {
        path: '/about',
        componentName: Inbox
    }
]

export default router