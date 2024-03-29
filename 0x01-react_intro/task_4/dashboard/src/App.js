import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="logo"/>
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <button>OK</button>
        </form>

      </div>
      <div className='App-footer'>
        <p>
        Copyright {getFullYear()} - {getFooterCopy()}
        </p>
        </div>
    </>
  );
}

export default App;
