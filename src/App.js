import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome'
import Message from './component/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">      
        <Greet name="Clark" heroName="Superman">Children</Greet>
        <Welcome name="tony" heroName="Iron Man"></Welcome>
        <Message />
      </header>
    </div>
  );
}

export default App;
