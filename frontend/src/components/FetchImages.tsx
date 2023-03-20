import { useState } from "react";

type Item = {
  id: string;
  title: string;
  url: string;
};

export const FetchImages = () => {
  const [data, setData] = useState<Item[]>([]);

  const fetchImg = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const responseData = await response.json();
    setData(responseData.slice(0, 5));
  };

  return (
    <div>
      <h1>FetchImages</h1>
      <button onClick={fetchImg}>Show images</button>
      <div>
        {data.map((item) => (
          <ul key={item.id}>
            <p>{item.title}</p>
            <img src={item.url} alt="img" width={150} />
          </ul>
        ))}
      </div>
    </div>
  );
};

// useEffect variation:
/* 
  useEffect(() => {
    const fetchImg = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const responseData = await response.json();
      setData(responseData.slice(0, 5));
    };
    fetchImg()
  }, []);
*/