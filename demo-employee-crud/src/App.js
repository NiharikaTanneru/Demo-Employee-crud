import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.js';
import EmployeeForm from './components/employee-form.js';
import EmployeeList from './components/employee-list.js';


function App() {
  return (
    <div className="App">
      <Header />
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}

export default App;
