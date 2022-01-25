import logo from './logo.svg';
import './App.css';
import Semester from './components/Semester';
import Holidays from './components/Holidays';



function App() {
  // ReactDOM.render(<Holidays/>, document.getElementById('root'));
  return (
    <div>
    <Semester month="Feburary" isBegin= {false} ></Semester>
    <Holidays number="10"></Holidays>
    </div>
  );

}

export default App;
