import './App.module.css';
import Header from "./Components/Header/Header";
import style from './App.module.css'
import Main from "./Components/Main/Main";


function App(props) {
  return (
    <div className={style.app}>
      <Header forHeader={props.state.header}/>
        <Main forMain={props.state.main}/>
    </div>
  );
}

export default App;
