"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Completed = () => {
  const completedTodoList = useSelector((state) => state.todo.completedTodo);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <>
      <section className="bg-gray-50 rounded h-full w-[100vw] md:w-[60vw] mx-auto my-10 p-10">
        <h1 className="text-center font-bold text-xl">To-Do</h1>
        <div className="listHead flex justify-between bg-indigo-400 p-2 rounded">
          <h2>Completed tasks</h2>
          <p>{date}</p>
        </div>
        <div className="list">
          <ol className="mt-5">
            {completedTodoList.length === 0 && (
              <p className="text-center font-extrabold text-lg">
                Nothing! Please Complete Some.
              </p>
            )}
            {completedTodoList &&
              completedTodoList.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-indigo-100 p-2 rounded-lg mt-2"
                >
                  <div className="inline-flex items-center space-x-3">
                    <h3 className="overflow-hidden  text-ellipsis">
                      {item.title}
                    </h3>
                    <h5 className="text-sm  items-center text-gray-500 overflow-hidden text-ellipsis">
                      {item.description}
                    </h5>
                  </div>
                </li>
              ))}
          </ol>
          <Link
            href={"/"}
            className="text-indigo-500 inline-flex items-center mt-2 md:mb-2 lg:mb-0 text-xs md:text-lg"
          >
            {" "}
            <AiOutlineArrowLeft />
            Add New Task
          </Link>
        </div>
      </section>
    </>
  );
};

export default Completed;
