// import React from "react";

// const BlogDetails = () => {
//   return (
//     <>
//       <div>
//         <section>
//           {/* Jumbotron */}
//           <div
//             className="relative overflow-hidden bg-cover bg-no-repeat"
//             style={{
//               backgroundPosition: "50%",
//               backgroundImage:
//                 'url("https://img.freepik.com/free-vector/log-bridge-mountains-edges-cliff_107791-6280.jpg?w=1380&t=st=1688552528~exp=1688553128~hmac=3db332515909880b5436f8513efac42550a57adbf83cf8fd9a46a00016a1f752")',
//               height: 600,
//             }}
//           >
//             <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.25)] bg-fixed">
//               <div className="flex h-full items-center justify-center">
//                 <div className="px-6 text-center text-white md:px-12">
//                   <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl heroblog">
//                     The best offer on the market <br />
//                     <span>for your business</span>
//                   </h1>
//                   {/* <button
//           type="button"
//           className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
//           data-te-ripple-init=""
//           data-te-ripple-color="light"
//         >
//           Get started
//         </button> */}
//                   <button
//                     type="button"
//                     className="text-white  bg-gradient-to-br   from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
//                   >
//                     Get started
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Jumbotron */}
//         </section>
//       </div>

//       <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
//         <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
//           <a
//             href="#"
//             className="max-w-3xl mx-auto text-xl text-white sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
//           >
//             The Best Activewear from the Nordstrom Anniversary Sale
//           </a>
//           <a href="#">
//             <img
//               className="w-full my-4"
//               src="https://img.freepik.com/free-vector/mountain-landscape-with-waterfall-night_107791-7316.jpg?w=1380&t=st=1688554450~exp=1688555050~hmac=c366fa9f76c3760daf81ccc65e1cc7c927e72afbba9fd3400fc5d36f6ca78874"
//               alt="Sunset in the mountains"
//             />
//           </a>
//           <p className="text-white text-base leading-8 max-w-4xl mx-auto">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s, when an unknown printer took a galley of type
//             and scrambled it to make a type specimen book. It has survived not
//             only five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s
//             with the release of Letraset sheets containing Lorem Ipsum passages,
//             and more recently with desktop publishing software like Aldus
//             PageMaker including versions of Lorem Ipsum.
//           </p>

//           <hr />
//         </div>
//       </div>

//       {/* ////////////////////////comment */}
//       <div className="flex justify-center">
//         <div className="w-9/12  rounded-lg  p-2 my-4 mx-6">
//           <h3 className="font-bold text-white pl-5">Discussion</h3>
//           <form>
//             <div className="w-full px-3 my-2">
//               <textarea
//                 className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
//                 name="body"
//                 placeholder="Type Your Comment"
//                 required=""
//                 defaultValue={""}
//               />
//             </div>

//             <div className="w-full flex justify-end px-3">
//               <button
//                 type="button"
//                 className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
//               >
//                 add comment
//               </button>
//             </div>
//             <div className="flex flex-col ">
//               <div className="border rounded-md bg-white p-3 ml-3 my-3">
//                 <div className="flex gap-3 items-center">
//                   <img
//                     src="https://avatars.githubusercontent.com/u/22263436?v=4"
//                     className="object-cover w-8 h-8 rounded-full 
//                       border-2 border-emerald-400  shadow-emerald-400
//                       "
//                   />
//                   <h3 className="font-bold">User name</h3>
//                 </div>
//                 <p className="text-gray-600 mt-2">this is sample commnent</p>
//               </div>

//               <div className="border rounded-md bg-white p-3 ml-3 my-3">
//                 <div className="flex gap-3 items-center">
//                   <img
//                     src="https://avatars.githubusercontent.com/u/22263436?v=4"
//                     className="object-cover w-8 h-8 rounded-full 
//                       border-2 border-emerald-400  shadow-emerald-400
//                       "
//                   />
//                   <h3 className="font-bold">User name</h3>
//                 </div>
//                 <p className="text-gray-600 mt-2">this is sample commnent</p>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogDetails;
