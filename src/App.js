import logo from "./logo.svg";
import "./App.css";
import {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useContext,
} from "react";
import Header from "./Header";
import { ThemeContext } from "./ThemeContext/ThemeContext";

//arr[1,2,2,3] => set [1, 2, 3]
//arr[{} (101), {} (102), {} (101)] => set //arr[{} (101), {} (102)] (address is unique)
var functions = new Set();

function App() {
  var [count1, setCount1] = useState(1);
  var [count2, setCount2] = useState(1);
  const [toggle, setToggle] = useState(true);
  const inputRef = useRef(null);

  var incOne = useCallback(() => setCount1(count1 + 1), [count1]); //state 1 (101) - state 2 (105)
  var incTwo = useCallback(() => setCount2(count2 + 1), [count2]); //state 1 (208) - state 2 (686)
  var complexComputation = useMemo(() => {
    console.log("computing....");
    return ((count1 * count2 * 10000 * 239 - 21) / 20) * 99;
  }, [count1, count2]);

  functions.add(incOne);
  functions.add(incTwo);
  console.log(functions);

  useEffect(() => {
    //cdm
    console.log(inputRef);
    // inputRef.current.style.background = "green"
    inputRef.current.focus();
  }, []);
  var { themeState, themeActions } = useContext(ThemeContext);
  console.log(themeState);
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ background: themeState.background, color: themeState.color }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick = {themeActions.setLightTheme}>Light Theme</button>
        <button onClick = {themeActions.setDarkTheme}>Dark Theme</button>
        <button onClick = {() => themeActions.setCustomTheme({background:"#a3b0d1", color:"#e9ebf0"})}>Custom Theme</button>


        <input type="text" ref={inputRef} placeholder="Enter your name" />
        <button onClick={incOne}>+ count 01</button>
        <h2>counter 01 ---{count1}</h2>

        <button onClick={incTwo}>+ count 02</button>
        <h2>counter 02 ---{count2}</h2>

        <button onClick={() => setToggle(!toggle)}>Toggle Header</button>
        {toggle && <Header content="My Header" />}

        <h2>Computation - {complexComputation}</h2>
      </header>
    </div>
  );
}

export default App;
