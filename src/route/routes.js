import Blog from '../page/blog';
import Home from '../page/home';
import SingleBlog from '../page/singleBlog';

const routes = [
    { path: "/", element: <Home /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/single-blog", element: <SingleBlog /> },
];

export default routes;