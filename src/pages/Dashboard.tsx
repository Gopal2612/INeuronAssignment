import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../data.json";

function Dashboard() {
  const [jsonData, setJsonData] = useState(Data.data);

  return (
    <div>
      <main className="md:max-w-7xl mx-auto max-w-full flex justify-center items-center h-screen">
        <div id="__next">
          <div
            data-testid="container"
            className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw]">
            <ul role="list" className="divide-y divide-gray-200">
              {jsonData.map((x) => (
                <li key={x.id}>
                  <Link
                    className="block hover:bg-gray-50"
                    to={`/details/${x.id}`}>
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                        <div className="truncate">
                          <div className="flex">
                            <p className="truncate font-medium text-indigo-600">
                              {x.name}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-16 flex flex-shrink-0">
                        <p
                          className={`bg-${x.color}-100 text-${x.color}-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5`}>
                          {x.tag}
                        </p>
                      </div>
                      <div className="ml-5 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 text-gray-400">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
