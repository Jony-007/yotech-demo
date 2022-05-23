import React from "react";

const Main = () => {
  return (
    <main className="heroContianer w-full flex md:h-[100vh] h-[400px] bg-lime-800 justify-center items-center">
      <div className="hero  max-w-[1320px]   flex  justify-center items-center">
        <div className="heroTitleContainer">
          <h1 className="heroTitle text-2xl  p-7 text-bold text-white  md:text-5xl max-w-[25ch] text-center">
            We're Changing Lives With Smart E-Commerce Tech.
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Main;
