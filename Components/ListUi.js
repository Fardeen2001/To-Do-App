import React from "react";

const ListUi = () => {
  return (
    <>
      {" "}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              To-Do.com
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Add your all todays reserved tasks and events here - Today
              To-Do.com
            </p>
          </div>
          <div className="today flex ">
            <h2>Today</h2>
            <p>20/12/2023</p>
          </div>
          <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Completed Tasks
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Add Task
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListUi;
