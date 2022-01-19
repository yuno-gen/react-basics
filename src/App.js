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
        <HookCounter3 />
      </header>
    </div>
  );
}

export default App;
