
import { Message } from "./components/Message/Message"
import { NewUserForm } from "./components/NewUsers/NewUserForm"
import { Table } from "./components/Table/Table"
import "./App.css"


function App() {

  return (
    <div>
      <div id="new-user-form-container">
        <NewUserForm />
      </div>
      <div>
        <Message />
      </div>
      <div id="table-container">
        <Table />
      </div>
    </div>
  )
}

export default App
