import Drag from '../view/drag'
import Home from '../view/home'
import Ohter from '../view/other'
 
const routers = [
    {
        path: '/',
        name: 'A页面',
        components: Home    // 引入pages文件下的页面
    },
    {
        path: '/drag',
        name: 'B页面',
        components: Drag
    },
    {
        path: '/other',
        name: '其他页面',
        components: Ohter
    }
]
export default routers