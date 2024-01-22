import { useState } from "react";
import Form from "./Form"
import Table from "./Table"
import EditModal from "./EditModal";



function App() {

  const [tableData,setTableData]=useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);


  const handleForm = (formData) => {
    setTableData((prevData) => [...prevData, formData]);
  };

  const handleEdit=(row)=>{
    setSelectedRow(row);
    setModalOpen(true);
  }

  const handleEditSave=(editedData)=>{
    setTableData((prevData)=>
    prevData.map((row)=>(
      row===selectedRow?editedData:row
    )))
    setModalOpen(false);
    setSelectedRow(null);
  }

  const handleDelete=(row)=>{
    setTableData((prevData)=>prevData.filter((r)=>r!==row));
  }

  const handleModalClose=()=>{
    setModalOpen(false);
    setSelectedRow(null);
  }

  return (
    <>
      <h1 className="text-sm sm:text-lg md:text-lg lg:text-2xl xl:text-3xl font-bold text-center pt-8">
        FORM AND TABLE ASSIGNMENT
      </h1>
      <Form onSubmit={handleForm} />
      <Table data={tableData} onEdit={handleEdit} onDelete={handleDelete}/>
      {
        isModalOpen && (
          <EditModal rowData={selectedRow} onSave={handleEditSave} onClose={handleModalClose}/>
        )
      }

    </>
  )
}

export default App
