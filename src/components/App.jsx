import React, { useState } from "react";

function App() {
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");

  // function updateFName(event) {
  //   const firstName = event.target.value;
  //   setFName(firstName);
  // }

  // function updateLName(event) {
  //   const lastName = event.target.value;
  //   setLName(lastName);
  // }

  //   return (
  //     <div className="container">
  //       <h1>
  //         Hello {fName} {lName}
  //       </h1>

  //       <form>
  //         <input
  //           name="fName"
  //           onChange={updateFName}
  //           placeholder="First Name"
  //           value={fName}
  //         />

  //         <input
  //           name="lName"
  //           onChange={updateLName}
  //           placeholder="Last Name"
  //           value={lName}
  //         />

  //         <button>Submit</button>
  //       </form>
  //     </div>
  //   );
  // }

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  // function handleChange(event) {
  //   event.target.value;
  // }

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>

      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          // value={fullName.fName}
        />

        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          // value={fullName.lName}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
