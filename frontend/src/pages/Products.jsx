import { useState, useEffect } from "react";
import axios from "axios";

import { calculateAge } from "../helpers";
import FormProduct from "../components/FormProduct";

// const url = "http://192.168.1.17:8000";
const url = "http://localhost:8000";


export default function Products({}) {

    const [products, setProducts] = useState([]);
    const [modal, setModal] = useState(false);
    const [productEdit, setProductEdit] = useState({});

    useEffect(()=>{
        const getData = async () => {
            const data = await axios.get(`${url}/api/products/`);
            setProducts(data.data);
        }
        getData();  
    }, []);

    const deleteProduct = (id) => {
        const api = async () => {
            const data = await axios.delete(`${url}/api/product/${id}`);
        }
        api();
        setProducts(products.filter((product) => product.id !== id));
    }

    return (
        <div>
            <h2 className="text-4xl font-bold">Products panel</h2>
            <div className="flex justify-end px-10">
                <button className="text-green-500 font-bold text-5xl hover:text-green-600"
                onClick={()=>setModal(true)}>
                    +
                </button>
            </div>
            {products.length!==0 && 
            <div className="-mx-4 p-10 overflow-x-auto">
                <table className="min-w-full bg-zinc-800 border border-zinc-900 rounded-md">
                    <thead className="text-left">
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Price</th>
                            <th className="py-2 px-4 border-b">Stock</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>   
                        {products.map((product) => {
                            return <tr key={product.id}>
                                <td className="py-2 px-4 border-b">{product.id}</td>
                                <td className="py-2 px-4 border-b">{product.name}</td>
                                <td className="py-2 px-4 border-b">{product.price}</td>
                                {/* <td className="py-2 px-4 border-b">{calculateAge(client.birth)}</td> */}
                                <td className="py-2 px-4 border-b">{product.stock}</td> 
                                <td className="flex py-2 px-4 border-b items-center h-full">
                                    <button className="rounded-md text-white p-1 flex-1 bg-sky-700 hover:bg-sky-600"
                                    onClick={()=>{setProductEdit(product); setModal(true)}}>EDIT</button>
                                    <button className="rounded-md text-white p-1 flex-1 bg-red-700 hover:bg-red-600" onClick={() => {deleteProduct(product.id)}}>DELETE</button>
                                </td>
                            </tr>
                        })}                     
                        
                    </tbody>
                </table>
            </div>
            }
            {modal && <FormProduct setModal={setModal} products={products} setProducts={setProducts} productEdit={productEdit} setProductEdit={setProductEdit}/>}
        </div>
    );
}