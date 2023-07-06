import React from 'react'
import {Link} from 'react-router-dom';

const Blog = () => {

  const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
    return (
      <>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
          <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded">
              <img src={image} alt="" className="w-full rounded-2xl"
                style={{ width: '500px', height: '350px' }}
                />
            </div>
            <div>
              {date && (
                <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                  {date}
                </span>
              )}
              <h3>
                <a
                  href="/#"
                  className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  {CardTitle}
                </a>
              </h3>
              <p className="text-base text-body-color">{CardDescription}</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
<>
  {/* Section: Design Block */}
  <section >

    {/* Jumbotron */}
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundPosition: "50%",
        backgroundImage:
          'url("https://img.freepik.com/free-vector/log-bridge-mountains-edges-cliff_107791-6280.jpg?w=1380&t=st=1688552528~exp=1688553128~hmac=3db332515909880b5436f8513efac42550a57adbf83cf8fd9a46a00016a1f752")',
        height: 600
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.25)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl heroblog">
              The best offer on the market <br />
              <span>for your business</span>
            </h1>
            {/* <button
              type="button"
              className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              Get started
            </button> */}
                            <button
  type="button"
  className="text-white  bg-gradient-to-br   from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
>
Get started
</button>
          </div>
        </div>
      </div>
    </div>
    {/* Jumbotron */}
  </section>
  {/* Section: Design Block */}
  <section 
  
  className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="block mb-2 text-white text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-white text-dark sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-white text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap text-white -mx-4">
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://img.freepik.com/free-vector/gradient-lo-fi-illustration_23-2149375747.jpg?w=740&t=st=1688554099~exp=1688554699~hmac=31649ad40e9b62aa6c8c31ab08b26c27bf71b1cfa7f51537e3b677a7572db8a3"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://img.freepik.com/free-vector/cartoon-midnight-city-with-moonlit-public-garden_107791-15230.jpg?w=1380&t=st=1688554039~exp=1688554639~hmac=92ffa28fb78580738b633af50d7a64ce482d47d89be21065ed9402cee39e5219"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://img.freepik.com/free-vector/mountain-landscape-with-waterfall-night_107791-7316.jpg?w=1380&t=st=1688554450~exp=1688555050~hmac=c366fa9f76c3760daf81ccc65e1cc7c927e72afbba9fd3400fc5d36f6ca78874"
            />
              <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://img.freepik.com/free-vector/gradient-lo-fi-illustration_23-2149375747.jpg?w=740&t=st=1688554099~exp=1688554699~hmac=31649ad40e9b62aa6c8c31ab08b26c27bf71b1cfa7f51537e3b677a7572db8a3"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://img.freepik.com/free-vector/cartoon-midnight-city-with-moonlit-public-garden_107791-15230.jpg?w=1380&t=st=1688554039~exp=1688554639~hmac=92ffa28fb78580738b633af50d7a64ce482d47d89be21065ed9402cee39e5219"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://img.freepik.com/free-vector/mountain-landscape-with-waterfall-night_107791-7316.jpg?w=1380&t=st=1688554450~exp=1688555050~hmac=c366fa9f76c3760daf81ccc65e1cc7c927e72afbba9fd3400fc5d36f6ca78874"
            />
          </div>
        </div>
      </section>
      <>



      {/* add post  */}


{/* <div className='w-full bg-white p-10'> */}
  <div className="heading text-center font-bold text-2xl m-5 text-white">
    New Post
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html: "\n  body {background:white !important;}\n"
    }}
  />
  <div className="editor mx-auto w-10/12 flex flex-col text-gray-800  p-4  max-w-2xl shadow-2xl">
    <input
      className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
      spellCheck="false"
      placeholder="Title"
      type="text"
    />
    <textarea
      className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
      spellCheck="false"
      placeholder="Describe everything about this post here"
      defaultValue={""}
    />
    {/* icons */}
    <div className="icons flex text-gray-500 m-2">
      <svg
        className="mr-2 cursor-pointer bg-white hover:text-gray-700 border rounded-full p-1 h-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <svg
        className="mr-2 cursor-pointer bg-white hover:text-gray-700 border rounded-full p-1 h-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <svg
        className="mr-2 cursor-pointer bg-white hover:text-gray-700 border rounded-full p-1 h-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
        />
      </svg>
      <div className="count ml-auto text-gray-400 text-xs font-semibold">
        0/300
      </div>
    </div>
    {/* buttons */}
    <div className="buttons flex">
      <div className="btn border bg-white border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
        Cancel
      </div>
      <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
        Post
      </div>
    </div>
  </div>
  {/* </div> */}
</>

      {/* //////////////////////////////// */}
      <div  className="container mx-auto flex justify-center items-center  ">
  <div className=" py-16 w-9/12">
    <div className=" relative flex items-center justify-center">
      <img
        src="https://img.freepik.com/free-vector/old-stone-well-with-drinking-water-hill-summer-night-landscape-with-full-moon-light-vintage-rural-well-with-wooden-roof-pulley-bucket-rope-farm-village-cartoon-illustration_107791-5967.jpg?w=1380&t=st=1688556678~exp=1688557278~hmac=3b2870f1558f1a37c0b561e87f1c9859b8be9c651f8cea3bdcf9e80113275978"
        alt="dining"
        className="w-full h-full absolute z-1   xl:block rounded-3xl"
      />
      <div className="bg-white bg-opacity-30 rounded-3xl lg:py-36 py-60 md:px-20  px-10 sm:px-4 flex flex-col items-center justify-center relative z-1">
        <h1 className="text-4xl font-semibold leading-9 text-white text-center">
        CONNECT WITH US
FOR GAMING UPDATE.       </h1>
        <p className="text-base leading-normal text-center text-white border-l-2 text-lg mt-6">
        Online gaming websites offer a vast selection of games, catering to various genres and preferences.
Players can connect and compete with gamers from around the world, fostering a vibrant and diverse gaming community.
These websites provide continuous updates and expansions, ensuring a dynamic and engaging gaming experience.
        
        </p>
        <br/>
        <Link to="/Contact">
        <button
  type="button"
  className="text-white bg-gradient-to-br  from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
>
  Connect Now
</button>
</Link>
      </div>
    </div>
  </div>
</div>

</>

    </div>
  )
}

export default Blog