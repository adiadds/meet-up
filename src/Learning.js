import { useState } from "react";
import axios from "axios";

const Learning = () => {
  const [firstName, setFirstName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Submit values");
    console.log("firsname", firstName);

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/todos123", {
        userId: 1,
        title: firstName,
        completed: true,
      });

      console.log("asdasdbasd  ");
      console.log(response.data);
    } catch (err) {}
  };

  return (
    <form>
      <label>First Name</label>
      <input
        type="text"
        value={firstName}
        onChange={(event) => {
          console.log(event.target.value);
          setFirstName(event.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Learning;
