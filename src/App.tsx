import axios from "axios";

import { useEffect, useState } from "react";
interface appType {
  _id: number;
  name: string;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<appType[]>([]);
  const [value, setValue] = useState("");
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://api-v2.elchocrud.pro/api/v1/36fca4adb32e41be1f26a1806f034389/product"
      );
      console.log(data);
      setIsLoading(false);
      setData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  const postData = async () => {
    try {
      const { data } = await axios.post(
        "https://api-v2.elchocrud.pro/api/v1/36fca4adb32e41be1f26a1806f034389/product",
        { name: value }
      );

      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <h1>loadding..</h1>
      ) : (
        <div>
          {data.map((el) => (
            <h2 key={el._id}>{el.name}</h2>
          ))}
        </div>
      )}
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={postData}>clicl</button>
      </div>
    </div>
  );
}

export default App;
