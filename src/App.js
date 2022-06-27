import './App.css';
import AddTsk from './Components/AddTsk';
import ListTask from './Components/ListTask';

function App() {
  return (
    <div className='affiche'>
      <h3 className='titre'>Add Your List Here</h3>
      <br/>
      <AddTsk/>
      <br/>
      <ListTask/>  
    </div>
  );
}

export default App;
