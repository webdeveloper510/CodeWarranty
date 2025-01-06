import Blog from '../page/blog';
import Home from '../page/home';
import NotFound from '../page/notFound';
import SingleBlog from '../page/singleBlog';

const routes = [
    { path: "/", element: <Home /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/:title", element: <SingleBlog /> },
    { path: "*", element: <NotFound /> },
];

export default routes;