import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome'
import Message from './component/Message';
import Count from './component/Count';
import Namelist from './component/Namelist';
import PostList from './component/PostList';
import LifeCycleA from './component/LifeCycleA';
import Form from './component/Form';
import Contact from './component/Contact';
import FragmentDemo from './component/FragmentDemo';
import ParentComp from './component/ParentComp';
import ErrorBoundary from './component/ErrorBoundary';
import Hero from './component/Hero';
import PortalRoot from './component/PortalRoot';
import { UserProvider } from './UserContext';
import ComponentC from './component/ComponentC';
import HookCounter from './component/HookCounter';
import HookCounter2 from './component/HookCounter2';
import HookCounter3 from './component/HookCounter3';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">      
        {/* <Greet name="Clark" heroName="Superman">Children</Greet> */}
        {/* <Welcome name="tony" /> */}
        {/* <Message /> */}
        {/* <Count /> */}
        {/* <Namelist /> */}
        {/* <PostList /> */}
        {/* <LifeCycleA /> */}
        {/* <Form /> */}
        {/* <Contact primary={false} /> */}
        {/* <FragmentDemo /> */}
        {/* <ParentComp /> */}
        {/* <ErrorBoundary>
          <Hero heroName='Batman' />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName='Superman' />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName='Joker' />
        </ErrorBoundary>         */}
        {/* <PortalRoot /> */}

        {/* <UserProvider value={{firstName: 'Ayush', lastName: 'Solanki'}}>
          <ComponentC />
        </UserProvider> */}

        {/* <HookCounter /> */}
        {/* <HookCounter2 /> */}
        {/* <HookCounter3 /> */}
        <Router>
          <div classsName="App">
            <nav>
              <ul classsName="topnav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/shop">Shop</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route exact path="/" element={<Message />} />
              <Route exact path="/about" element={<Greet />} />
              <Route exact path="/contact" element={<Welcome />} />
              <Route exact path="/shop" element={<Count />} />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;