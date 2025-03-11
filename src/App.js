import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import { Body } from './components/Body';
import ProgressBar from './components/ProgressBar';
import TicTacToe from './components/TicTacToe';
import Counter from './components/Counter';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import RestaurantMenu from './components/RestaurantMenu';

//const heading = React.createElement('h1', {'id': 'heading','className':'main-heading'}, 'Hello React using library from external file');
//const jsxHeading = (<h1 className='heading-container'>This is using JSX </h1>);
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(jsxHeading);
// const Title = () => {
//     return <h1 className='title'>This is the title of the page</h1>;
// }

// const ReactHeading = () => {
    
//     return (
//         <>
//             <Title/>
//             {Title()}
//             <h1 className='heading'>This is from functional componenent</h1>
//         </>
//     );
// }
// root.render(<ReactHeading/>);
const app = ReactDOM.createRoot(document.getElementById('app'));

const App = () => {
    
    return (<>
        <Header/>
        <Outlet />
    </>)
}
const appRouter = createBrowserRouter([
    {
        'path' : '/',
        'element':<App/>,   
        'children': [
            {
                'path' : '/',
                'element':<Body />,
            },
            {
                'path' : '/contactus',
                'element':<ContactUs />,
            },
            {
                'path' : '/aboutus',
                'element':<AboutUs />,
            },
            {
                'path' : '*',
                'element' : <ErrorPage />,
            },
            {
                'path' : '/restaurants/:resId',
                'element' : <RestaurantMenu />,
            },
            // other react components
            {
                'path' : '/counter',
                'element':<Counter />,
            },
            {
                'path' : '/progressbar',
                'element':<ProgressBar />,
            },
            {
                'path' : '/tictactoe',
                'element':<TicTacToe />,
            },
            {
                'path' : '/aboutus',
                'element':<AboutUs />,
            },
            
        ],
        'errorElement': <ErrorPage />,
    },
]);
app.render(<RouterProvider router={appRouter}/>);
