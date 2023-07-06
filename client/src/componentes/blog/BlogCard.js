import React from 'react'

const BlogCard = ({ image, name, date, CardTitle, CardDescription }) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                <div className="mx-auto mb-10 max-w-[370px]">
                    <div className="mb-8 overflow-hidden rounded">
                        <img
                            src={image}
                            alt=""
                            className="w-full rounded-2xl"
                            style={{ width: "500px", height: "350px" }}
                        />
                    </div>
                    <div>
                        {date && (
                            <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                                {date}
                                {name && (
                                    <span className="inline-block px-16 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                                        {name}
                                    </span>
                                )}
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
}

export default BlogCard