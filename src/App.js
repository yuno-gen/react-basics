import './App.css';
// import Greet from './component/Greet';
// import Welcome from './component/Welcome'
// import Message from './component/Message';
// import Count from './component/Count';
// import Namelist from './component/Namelist';
// import PostList from './component/PostList';
// import LifeCycleA from './component/LifeCycleA';
// import Form from './component/Form';
// import Contact from './component/Contact';
// import FragmentDemo from './component/FragmentDemo';
// import ParentComp from './component/ParentComp';
// import ErrorBoundary from './component/ErrorBoundary';
// import Hero from './component/Hero';
// import PortalRoot from './component/PortalRoot';
// import { UserProvider } from './UserContext';
// import ComponentC from './component/ComponentC';
// import HookCounter from './component/HookCounter';
// import HookCounter2 from './component/HookCounter2';
// import HookCounter3 from './component/HookCounter3';
// import HookCounter4 from './component/HookCounter4';
// import HoverCounter2 from './component/HoverCounter2';

// import {Route, Link, Routes, BrowserRouter as Router} from 'react-router-dom'
// import Shop from './component/Shop'
// import About from './component/About'
// import Counter1 from './component/Counter1';
// import ClickCounter2 from './component/ClickCounter2';
import store from './redux/store';
import CakeContainer from '../src/redux/CakeContainer';
import IceCreamContainer from './redux/IceCreamContainer';
import ItemContainer from './redux/ItemContainer';
import { Provider } from 'react-redux';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">      
    //     {/* <Greet name="Clark" heroName="Superman">Children</Greet> */}
    //     {/* <Welcome name="tony" /> */}
    //     {/* <Message /> */}
    //     {/* <Count /> */}
    //     {/* <Namelist /> */}
    //     {/* <PostList /> */}
    //     {/* <LifeCycleA /> */}
    //     {/* <Form /> */}
    //     {/* <Contact primary={false} /> */}
    //     {/* <FragmentDemo /> */}
    //     {/* <ParentComp /> */}
    //     {/* <ErrorBoundary>
    //       <Hero heroName='Batman' />
    //     </ErrorBoundary>

    //     <ErrorBoundary>
    //       <Hero heroName='Superman' />
    //     </ErrorBoundary>

    //     <ErrorBoundary>
    //       <Hero heroName='Joker' />
    //     </ErrorBoundary>         */}
    //     {/* <PortalRoot /> */}

    //     {/* <UserProvider value={{firstName: 'Ayush', lastName: 'Solanki'}}>
    //       <ComponentC />
    //     </UserProvider> */}

    //     {/* <HookCounter /> */}
    //     {/* <HookCounter2 /> */}
    //     {/* <HookCounter3 /> */}
    //     {/* <HookCounter4/> */}

    //     {/* <Router>
    //         <div className='App'>
    //           <nav>
    //             <ul className='topnav'>
    //               <li><Link to="/">Home</Link></li>
    //               <li><Link to="/about">About Us</Link></li>
    //               <li><Link to="/contact">Contact</Link></li>
    //               <li><Link to="/shop">Shop</Link></li>
    //             </ul>
    //           </nav>
    //           <Routes>
    //             <Route exact path="/" element={<About/>}/>
    //             <Route exact path="/about" element={<About/>}/>
    //             <Route exact path="/contact" element={<Contact/>}/>
    //             <Route exact path="/shop" element={<Shop/>}/>
    //           </Routes>
    //         </div>
    //     </Router> */}
    //     <Counter1
    //       render = {(count, incrementCount)=>{
    //         return <ClickCounter2 count = {count} incrementCount = {incrementCount} />
    //       }}></Counter1>
    //     <Counter1
    //       render = {(count, incrementCount)=>{
    //         return <HoverCounter2 count = {count} incrementCount = {incrementCount} />
    //       }}></Counter1>
    //   </header>
    // </div>
    <Provider store={store}>
      <div className='App'>
        <CakeContainer cake/>
        <IceCreamContainer/>
        <ItemContainer cake/>
        <ItemContainer/>
      </div>
    </Provider>
  );
}

export default App;