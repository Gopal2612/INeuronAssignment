import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "../data.json";

function VariableDetail() {
  const navigate = useNavigate();
  let { id, variableId, criteriaIndex } = useParams();

  const [variableIdData, setVariableIdData] = useState(
    Data.data.find((x) => x.id === Number(id))
  );
  const [data, setData] = useState<any>();
  const [input , setInput] = useState()

  useEffect(() => {
    if (variableId && variableIdData && criteriaIndex) {
      const data: any = { ...variableIdData };
      const variable: any = data.criteria[criteriaIndex].variable[variableId];
      if(variable.type === 'indicator') setInput(data.default_value)
      setData(variable);
    }
  });

  return (
    <div>
      <main className="md:max-w-7xl mx-auto max-w-full flex justify-center items-center h-screen">
        <div>
          <button
            className="inline-flex gap-2 items-center my-3"
            onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
            </svg>
            Go back
          </button>
          <div className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw] px-4 py-5 sm:px-6 w-full">
            <h3 className="text-2xl font-medium leading-6 text-gray-900">
              Variable params
            </h3>
            <hr className="w-full border-[0.1px] border-gray-200 mt-5" />
            <ul role="list" className="divide-y divide-gray-200">
              {data && (
               data.type === "value" ? (
                data.values.map((value: any,index:string) => (
                  <li className="flex py-4" key={index}>
                    <p className="font-medium text-gray-900">{value}</p>
                  </li>
                ))
              ) : (
                <div>
                  <h3 className="text-lg font-medium leading-6 my-4 text-gray-900 uppercase">
                    {data.study_type}
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {data.parameter_name}
                    </label>
                    <div className="mt-1.5">
                      <input
                        data-testid="indicator-input"
                        type="tel"
                        name="param_value"
                        id="param_value"
                        max="99"
                        min="1"
                        className="block w-full rounded-md border-[0.1px] border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-3"
                        placeholder="period value"
                        onChange={(e:any)=>setInput(e.target.value)}
                        value={input}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default VariableDetail;
