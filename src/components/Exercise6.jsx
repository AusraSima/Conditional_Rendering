// ### **Exercise 6: Styling Based on Conditions**
// **Task:**  
// Create a `Notification` component that:
// - Displays a green background if `type` is `"success"`.
// - Displays a red background if `type` is `"error"`.
// - Displays a yellow background if `type` is `"warning"`.

// **Hints:**  
// - Use inline conditional styles or class names.

import { useState } from "react";

const Exercise6 = () => {
  const [notification, setNotification] = useState("success");

  const changeNotification = () => {
    setNotification((prev) => {
        if (prev === "success") return "error";
        if (prev === "error") return "warning";
        return "success";
    });
  };

  return (
    <div className="p-4">
      {notification === "success" && (
        <div>
          <h1 className="p-4 bg-green-500 text-yellow-300 mt-5 mb-5 w-full text-5xl font-bold">
            success
          </h1>
        </div>
      )}
      {notification === "error" && (
        <div>
          <h1 className="p-4 bg-red-700 text-green-200 mt-5 mb-5 w-full text-5xl font-bold">
            error
          </h1>
          ;
        </div>
      )}
      {notification === "warning" && (
        <div>
          <h1 className="p-4 bg-yellow-300 text-blue-500 mt-5 mb-5 w-full text-5xl font-bold">
            warning
          </h1>
        </div>
      )}

      <button onClick={changeNotification} className="border p-4 bg-red-300 mt-5 mb-5">
        Change notification
      </button>

      <hr className="w-full text-amber-900" />
    </div>
  );
};

export default Exercise6;
