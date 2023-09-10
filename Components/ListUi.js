"use client";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import AddTaskForm from "./AddTaskForm";
import { useDispatch, useSelector } from "react-redux";
import { todoSliceActions } from "@/ReduxStore/todo";
import Link from "next/link";

const ListUi = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const dispatch = useDispatch();

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const todoList = useSelector((state) => state.todo.todoList);
  const addTaskHandler = () => {
    setShowAddTask((show) => !show);
  };

  return (
    <>
      <section className="bg-gray-50 rounded h-full w-[100vw] md:w-[60vw] mx-auto my-10 p-10">
        <h1 className="text-center font-bold text-xl">To-Do</h1>
        <div className="listHead flex justify-between bg-indigo-400 p-2 rounded">
          <h2>Today</h2>
          <p>{date}</p>
        </div>
        <div className="list">
          <ol className="mt-5">
            {todoList.length === 0 && (
              <p className="text-center font-extrabold text-lg">
                Nothing! Please Add Some.
              </p>
            )}
            {todoList &&
              todoList.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between text-center bg-indigo-100 p-2 rounded-lg mt-2"
                >
                  <input
                    type="checkbox"
                    name="list"
                    id="listId"
                    onChange={(e) => {
                      if (e.target.checked === true) {
                        dispatch(todoSliceActions.completedTodo(item.id));
                      }
                    }}
                  />
                  <div className="flex flex-col">
                    <h5 className="overflow-hidden text-ellipsis">
                      {item.title}
                    </h5>
                    <p className="text-sm text-gray-500 overflow-hidden text-ellipsis">
                      {item.description}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(todoSliceActions.deleteTodo(item.id));
                    }}
                  >
                    <AiFillDelete />
                  </button>
                </li>
              ))}
          </ol>
          <div className="flex pl-4 mt-4  w-full mx-auto">
            <Link
              href={"/completed"}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 text-xs md:text-lg"
            >
              Completed Tasks
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <button
              onClick={addTaskHandler}
              className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Add Task
            </button>
          </div>
          {showAddTask && <AddTaskForm closeAddTask={setShowAddTask} />}
        </div>
      </section>
    </>
  );
};

export default ListUi;
