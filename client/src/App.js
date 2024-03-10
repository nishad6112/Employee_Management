import './App.css';
import Login from './component/login/Login';
import Dashboard from './component/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const auth = false;
  return (
    <div className="App">
      {
        (auth)?<Dashboard />:<Login/>
      }
      
      
    </div>
  );
}

export default App;
