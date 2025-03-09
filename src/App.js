import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import { Body } from './components/Body';
import ProgressBar from './components/ProgressBar';
import TicTacToe from './components/TicTacToe';
import Counter from './components/Counter';

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
        <Body/>
        {/* <Footer/> */}
        <h1>this is a test</h1>
        <ProgressBar/>
        <TicTacToe/>
        <Counter/>
    </>)
}
app.render(<App/>);
