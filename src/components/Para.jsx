import axios from 'axios';
import { useState } from 'react';

export default function Para({ data, setData }) {

    const [inpu, setInpu] = useState("");
    function clickHandler() {

        axios.get("http://localhost:4141/para?n=" + inpu)
            .then((res) => {
                console.log(res.data.msg);
                setData(res.data.msg);
            })
    }
    return <div className="flex flex-col items-center mt-20 w-full h-screen0">


        <div className="mb-10 w-full text-center text-6xl font-semibold">
            Para Generator
        </div>
        <div className="flex w-full text-center h-16 justify-center gap-8">
            <input type="text" className="h-full p-6 rounded w-3/6 border border-gray-300" placeholder="Enter Number of Words" onChange={(e) => {
                setInpu(e.target.value);
            }}></input>
            <button className="h-full px-6 bg-black text-white rounded-2xl" onClick={clickHandler}>Generate</button>

        </div>
        {data != "" ? <div>

            {data}

        </div> : null}

    </div>
}