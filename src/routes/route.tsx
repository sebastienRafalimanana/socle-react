import { createBrowserRouter } from 'react-router-dom'
import {ErrorPage,ExamplePage} from '@/pages'

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path:'example',
                element: <ExamplePage/>,
                index: true,
            },
       
        ],
        errorElement:<ErrorPage/>,
        
    },
    
])

export default router
