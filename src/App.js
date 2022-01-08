import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome'
import Message from './component/Message';
import Count from './component/Count';
import Namelist from './component/Namelist';
import PostList from './component/PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">      
        {/* <Greet name="Clark" heroName="Superman">Children</Greet> */}
        {/* <Welcome name="tony" /> */}
        {/* <Message /> */}
        {/* <Count /> */}
        {/* <Namelist /> */}
        <PostList />
      </header>
    </div>
  );
}

export default App;
