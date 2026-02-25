// ### **Exercise 2: Conditional Rendering with Multiple States**
// **Task:**
// Build a component that displays:
// - "Loading..." if `isLoading` is true.
// - "Welcome, User!" if `isLoggedIn` is true and `isLoading` is false.
// - "Please log in" if `isLoggedIn` is false and `isLoading` is false.

// **Hints:**
// - Use multiple conditions with `if-else` or ternary operators.

import { useState } from "react";

const user = {
  name: "John",
  isloggedin: false,
  isLoading: true,
};

const Exercise2 = () => {
  const [isloggedin, setIsloggedin] = useState(false);
  const [isloading, setIsloading] = useState(true);

  const changeStatus = () => {
    setIsloggedin((prev) => !prev);
  };

  const changeLoadingStatus = () => {
    setIsloading((prev) => !prev);
  };

  let message;

  if (isloading === true) {
    message = (
      <h1 className="font-bold text-4xl bg-green-300 p-4">Loading...</h1>
    );
  } else {
    if (isloggedin === true && isloading === false) {
      message = (
        <h1 className="font-bold text-4xl bg-green-300 p-4">
          Welcome, {user.name}!
        </h1>
      );
    } else {
      message = (
        <h1 className="font-medium text-4xl bg-amber-600 p-4">
          Please log in!
        </h1>
      );
    }
  }

  return (
    <div className="p-4">
      {message}
      <button
        onClick={changeStatus}
        className="border p-4 bg-red-300 mt-5 mb-5"
      >
        Change log in status
      </button>
      <button
        onClick={changeLoadingStatus}
        className="border p-4 bg-red-600 mt-5 mb-5"
      >
        Change loading status
      </button>
      <hr className="w-full text-amber-900" />
    </div>
  );
};

export default Exercise2;
