import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome'
import Message from './component/Message';
import Count from './component/Count';
import Namelist from './component/Namelist';
import PostList from './component/PostList';
import LifeCycleA from './component/LifeCycleA';
import Form from './component/Form';
import Contact from './component/Contact'
import Shop from './component/Shop';
import About from './component/About';


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
        {/* <LifeCycleA />
        <Form/> */}
        <Contact primary={true}/>
        <Shop/>
        <About/>
      </header>
    </div>
  );
}

export default App;
