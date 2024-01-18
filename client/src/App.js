import { useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import TableComponent from './components/TableComponent';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const [updateData, setUpdateData] = useState({
    name: '',
    email: '',
  });
  return (
    <div className="App">
      <FormComponent
        currentId={currentId}
        setCurrentId={setCurrentId}
        updateData={updateData}
        setUpdateData={setUpdateData}
      />
      <TableComponent
        currentId={currentId}
        setCurrentId={setCurrentId}
        setUpdateData={setUpdateData}
      />
    </div>
  );
}

export default App;
