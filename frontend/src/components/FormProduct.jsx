import { useForm } from "react-hook-form";
import axios from "axios";

// const url = "http://192.168.1.17:8000";
const url = "http://localhost:8000";


export default function FormProduct({ setModal, products, setProducts, productEdit, setProductEdit }) {
  const { handleSubmit, register, formState: { errors } } = useForm({defaultValues: productEdit});

  const onSubmit = (data) => {
    data.price = parseFloat(data.price);
    data.stock = parseInt(data.stock);
    const api = async () => {
        if (Object.keys(productEdit).length!==0) {
            const dataApi = await axios.put(`${url}/products/${productEdit.id}`, data);            
            console.log(dataApi)
        } else {
            const dataApi = await axios.post(`${url}/product`, data);
            console.log(dataApi)
        }
        //setClients([...clients, data]);
    }
    api();
    setModal(false);
    setProductEdit({});
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 p-10">
      <div className="flex justify-end">
        <button
          className="text-white font-bold text-5xl hover:text-gray-100"
          onClick={() => {setModal(false); setProductEdit({})}}
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
              Description
            </label>
            <input
              {...register("description", { required: "Description is required" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your descrpition"
            />
            {errors.descripton && (
              <p className="text-red-500 text-xs italic">{errors.descripton.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Price
            </label>
            <input
              {...register("price", { required: "Price is required" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Enter price"
            />
            {errors.price && (
              <p className="text-red-500 text-xs italic">{errors.price.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Stock
            </label>
            <input
              {...register("stock", { required: "Stock is required"})}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Enter your stock"
            />
            {errors.stock && (
              <p className="text-red-500 text-xs italic">{errors.stock.message}</p>
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
