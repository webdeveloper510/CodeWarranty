import Blog from '../page/blog';
import Home from '../page/home';

const routes = [
    { path: "/", element: <Home /> },
    { path: "/blog", element: <Blog /> },
];

export default routes;