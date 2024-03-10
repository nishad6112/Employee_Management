import './App.css';
import Login from './component/login/Login';
import Dashboard from './component/dashboard/Dashboard';
function App() {
  const auth = true;
  return (
    <div className="App">
      {
        (auth)?<Dashboard />:<Login/>
      }
      
      
    </div>
  );
}

export default App;
