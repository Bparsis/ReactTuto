import RemoveProductForm from "./../Components/ProductForm/RemoveProductForm"

import {useParams} from "react-router-dom";


const RemoveProductFormPage = () => {
    
    const {id} = useParams();
    
    return (
        <>
            <RemoveProductForm id={id}/>
        </>
    )
};

export default RemoveProductFormPage;