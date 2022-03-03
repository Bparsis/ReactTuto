import EditProductForm from "./../Components/ProductForm/EditProductForm"

import {useParams} from "react-router-dom";


const EditProductFormPage = () => {
  
  const {id} = useParams();
  
  return (
    <>
      <EditProductForm id={id}/>
    </>
  )
};

export default EditProductFormPage;