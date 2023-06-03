import './App.css';
import { CustomHooksComponent } from './components/CustomHooksComponent';
import { FormComponent } from './components/FormComponent';
import { UseIdComponent } from './components/UseIdComponent';
import { UserApiComponent } from './components/UserApiComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseIdComponent />
        <br />
        <CustomHooksComponent />
        <br />
        <FormComponent />
        <br />
        <UserApiComponent />
      </header>
    </div>
  );
}

export default App;
