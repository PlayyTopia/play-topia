import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ReportList({ oneComment }) {
  const user_id = useSelector((state) => state.userNew.data[0]?._id);
  return (
    <>
      {/* component */}
      <div className="group inline-block">
        <button className="bg-white rounded-sm mx-10">
          <span className="pr-1 flex-1 text-2xl font-bold">...</span>
        </button>
        <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
          {oneComment.user_id === user_id && (
            <>
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">Edit</li>
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">Delete</li>
            </>
          )}

          <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
              <span className="pr-1 flex-1">Report</span>
              <span className="mr-auto">
                <svg
                  className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Javascript</li>
              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Go</li>
              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Rust</li>
            </ul>
          </li>
        </ul>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  /* since nested groupes are not supported we have to use \n     regular css for the nested dropdowns \n  */\n  li>ul                 { transform: translatex(100%) scale(0) }\n  li:hover>ul           { transform: translatex(101%) scale(1) }\n  li > button svg       { transform: rotate(-90deg) }\n  li:hover > button svg { transform: rotate(-270deg) }\n\n  /* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n  .group:hover .group-hover\\:scale-100 { transform: scale(1) }\n  .group:hover .group-hover\\:-rotate-180 { transform: rotate(180deg) }\n  .scale-0 { transform: scale(0) }\n  .min-w-32 { min-width: 8rem }\n",
        }}
      />
    </>
  );
}

export default ReportList;
