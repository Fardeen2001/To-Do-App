"use client";
import { todoSliceActions } from "@/ReduxStore/todo";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTaskForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const dispatch = useDispatch();
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const descChangeHandler = (e) => {
    setdescription(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(todoSliceActions.addTodo({ title, description }));
    props.closeAddTask(false);
  };
  return (
    <section>
      <h1 className="text-center">Add Your Task here</h1>
      <form onSubmit={submitHandler}>
        <div class="relative mb-2">
          <label for="Title" class="leading-7 text-sm text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="Title"
            required
            name="Title"
            onChange={titleChangeHandler}
            value={title}
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-2">
          <label for="desc" class="leading-7 text-sm text-gray-600 ">
            Description
          </label>
          <input
            type="text"
            id="desc"
            name="desc"
            onChange={descChangeHandler}
            value={description}
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          type="submit"
          class="text-white bg-indigo-500 border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default AddTaskForm;
