import React, { useEffect, useState } from "react";
import Data from "../data.json";
import { useNavigate, useParams } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [idData, setIdData] = useState(
    Data.data.find((x) => x.id === Number(id))
  );

  const rendervariableText = (text:string ,variable:any,criteriaIndex:Number) => {
    let modifiedArr:any[] = []
    const keys = Object.keys(variable)
    text.split(" ").map(word => {
      if (keys.includes(word)) modifiedArr.push(<span className="text-blue-700 cursor-pointer" onClick={()=> navigate(`/variable/${word}/${criteriaIndex}/${id}`)}>{word.replace('$', '')}</span>)
      else modifiedArr.push(<span> {word} </span>)
    })
    return modifiedArr
  }

  return (
    <div>
      <main className="md:max-w-7xl mx-auto max-w-full flex justify-center items-center h-screen">
        <div id="__next">
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
          {idData && (
            <div className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw] px-4 py-5 sm:px-4 w-4ull">
              <h3 className="text-2xl font-medium leading-6 text-gray-900">
                {idData.name}
                <p className="font-medium text-gray-900"></p>

              </h3>
              <div className="mt-3 flex flex-shrink-0">
                <p
                  className={`bg-${idData.color}-100 text-${idData.color}-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5`}>
                  {idData.tag}
                </p>
              </div>
              <hr className="w-full border-[0.1px] border-gray-200 mt-5" />
              <ul role="list" className="divide-y divide-gray-200">
                {idData.criteria.map((cri:any, index) => (
                  <li className="flex py-4" key={index}>
                    {cri.type == "plain_text" ? (
                      <p className="font-medium text-gray-900">{cri.text}</p>
                    ) : (
                      <p className="font-medium text-gray-900">{rendervariableText(cri.text , cri.variable,index)}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Details;
