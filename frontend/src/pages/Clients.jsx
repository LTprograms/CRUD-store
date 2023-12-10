import { useState, useEffect } from "react";
import axios from "axios";

import { calculateAge } from "../helpers";
import FormClient from "../components/FormClient";

const url = "http://192.168.1.17:8000";

export default function Clients({}) {

    const [clients, setClients] = useState([]);
    const [modal, setModal] = useState(false);
    const [clientEdit, setClientEdit] = useState({});

    useEffect(()=>{
        const getData = async () => {
            const data = await axios.get(`${url}/api/clients/`);
            setClients(data.data);
        }
        getData();  
    }, []);

    const deleteClient = (id) => {
        const api = async () => {
            const data = await axios.delete(`${url}/api/client/${id}`);
            console.log(data);
        }
        api();
        setClients(clients.filter((client) => client.id !== id));
    }

    return (
        <div>
            <h2 className="text-4xl font-bold">Clients panel</h2>
            <div className="flex justify-end px-10">
                <button className="text-green-500 font-bold text-5xl hover:text-green-600"
                onClick={()=>setModal(true)}>
                    +
                </button>
            </div>
            {clients.length!==0 && 
            <div className="-mx-4 p-10 overflow-x-auto">
                <table className="min-w-full bg-zinc-800 border border-zinc-900 rounded-md">
                    <thead className="text-left">
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Age</th>
                            <th className="py-2 px-4 border-b">Phone</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>   
                        {clients.map((client) => {
                            return <tr key={client.id}>
                                <td className="py-2 px-4 border-b">{client.id}</td>
                                <td className="py-2 px-4 border-b">{client.name} {client.surname}</td>
                                <td className="py-2 px-4 border-b">{calculateAge(client.birth)}</td>
                                <td className="py-2 px-4 border-b">{client.phone}</td> 
                                <td className="flex py-2 px-4 border-b items-center h-full">
                                    <button className="rounded-md text-white p-1 flex-1 bg-sky-700 hover:bg-sky-600"
                                    onClick={()=>{setClientEdit(client); setModal(true)}}>EDIT</button>
                                    <button className="rounded-md text-white p-1 flex-1 bg-red-700 hover:bg-red-600" onClick={() => {deleteClient(client.id)}}>DELETE</button>
                                </td>
                            </tr>
                        })}                     
                        
                    </tbody>
                </table>
            </div>
            }
            {modal && <FormClient setModal={setModal} clients={clients} setClients={setClients} clientEdit={clientEdit} setClientEdit={setClientEdit}/>}
        </div>
    );
}