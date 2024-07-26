import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Input() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        navigate("/weather/" + input);

        window.location.reload();
    };

    return (
        <div className="justify-center items-center my-5">


            <form className="max-w-md mx-auto" onSubmit={submitHandler}>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onChange={(e) => setInput(e.target.value)} type="text" value={input} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Weather by Zip Code..." required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-gray-500 hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </form>

        </div>

    );
}

export default Input;