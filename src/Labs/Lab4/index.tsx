import ClickEvent from "./ClickEvent"
import PassingDataOnEvent from "./PassingDataOnEvent"
import PassingFunctions from "./PassingFunctions"
import EventObject from "./EventObject"
import Counter from "./Counter"
import BooleanStateVariables from "./BooleanStateVariables"
import StringStateVariables from "./StringStateVariables"
import DateStateVariable from "./DateStateVariable"
import ArrayStateVariable from "./ArrayStateVariable"
import ObjectStateVariable from "./ObjectStateVariables"
import ParentStateComponent from "./ParentStateComponent"
import ReduxExamples from "./ReduxExamples";
import CounterRedux from "./ReduxExamples/CounterRedux"
import AddRedux from "./ReduxExamples/AddRedux"
import TodoList from "./ReduxExamples/todos/TodoList.tsx"


export default function Lab3() {
  console.log('Hello World!');
  function sayHello() {
    alert("Hello");
  }

  return(
    <div id="wd-lab4">
      <h3>Lab 4</h3>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello}/>
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ReduxExamples />
      <CounterRedux />
      <AddRedux />
      <TodoList />
    </div>
  );
}
