import axios from "axios";
import { useEffect, useState } from "react";

const GetData = () => {
  const [data, setData] = useState([]);

  const getTodoData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodoData();
  }, []);

  const newData = data.filter((d) => d.title.includes("aut"));
  console.log(newData);

  return (
    <div>
      {newData.map((d) => (
        <div key={d.id}>
          userId: {d.userId} <br />
          id: {d.id} <br />
          title: <b>{d.title}</b> <br />
          completed: {d.completed} <br />
        </div>
      ))}
    </div>
  );
};

export default GetData;
