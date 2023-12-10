import { useForm } from "react-hook-form";
import axios from "axios";

const url = "http://192.168.1.17:8000";

export default function FormClient({ setModal, clients, setClients, clientEdit, setClientEdit }) {
  const { handleSubmit, register, formState: { errors } } = useForm({defaultValues: clientEdit});

  const onSubmit = (data) => {
    data.created_at = new Date();
    data.updated_at = new Date();
    const api = async () => {
        if (Object.keys(clientEdit).length!==0) {
            const dataApi = await axios.put(`${url}/client/${clientEdit.id}`, data);            
        } else {
            const dataApi = await axios.post(`${url}/client`, data);
        }
        //setClients([...clients, data]);
    }
    api();
    setModal(false);
    setClientEdit({});
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 p-10">
      <div className="flex justify-end">
        <button
          className="text-white font-bold text-5xl hover:text-gray-100"
          onClick={() => {setModal(false); setClientEdit({})}}
        >
          x
        </button>
      </div>
      <div className="flex justify-center py-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 bg-zinc-700 rounded-md p-5"
          >
            <h3 className="text-center text-2xl font-bold mb-4">Client's form data</h3>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your name"  
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Surname
            </label>
            <input
              {...register("surname", { required: "Surname is required" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your surname"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.surname.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Birth
            </label>
            <input
              {...register("birth", { required: "Birth is required" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.birth.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              {...register("phone", { required: "Phone number is required"})}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your phone number"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
