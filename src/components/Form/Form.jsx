import { useState } from "react";
import { storage } from "../../firebase";
import { usefirebaseApp } from "reactfire";

export const Form = () => {
  const firebase = usefirebaseApp();
  
  const [input, setInput] = useState({ task: "" });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const sendData = async () => {
    // console.log(db);
    // .doc().set(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData();
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col w-100 mt-5 gap-2 justify-center "
      >
        <input
          onChange={(e) => handleChange(e)}
          className="w-60 m-auto border-solid border-2 border-indigo-600 rounded-sm"
          placeholder="Task..."
          type="text"
          name="task"
        />
        <input
          // onClick={(e) => handleClick(e)}
          className="cursor-pointer border-solid border-2 w-20 m-auto"
          type="submit"
          value="Agregar"
        />
      </form>
    </>
  );
};
