import { useState, useEffect } from "react";
import axios from "axios";

import { calculateAge } from "../helpers";

const url = "http://192.168.1.17:8000";

export default function Clients({}) {

    const [clients, setClients] = useState([]);

    useEffect(()=>{
        const getData = async () => {
            const data = await axios.get(`${url}/api/clients/`);
            setClients(data.data);
        }
        getData();  
    }, []);

    return (
        <div>
            <h2>Clients</h2>
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
                                    <button className="rounded-md text-white p-1 flex-1 bg-sky-700">EDIT</button>
                                    <button className="rounded-md text-white p-1 flex-1 bg-red-700">DELETE</button>
                                </td>
                            </tr>
                        })}                     
                        
                    </tbody>
                </table>
            </div>
            }
        </div>
    );
}