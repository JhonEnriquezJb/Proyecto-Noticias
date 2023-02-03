import axios from "axios";
import { useEffect, useState } from "react";
import "./CallApi.scss";

export const CallApi = () => {
  const [data, setData] = useState("");

  const CallApi = async () => {
    await axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2faea200b6af4acc8e7eb6e2a557ff0e"
      )
      .then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    CallApi();
  }, []);

  return (
    <>
      <h1 className="Noticia-titulo">ACTUALIDAD</h1>
      <div className="Noticia">
        {data
          ? data.map((items) => (
              <div key={items.title}>
                <h1 className="Noticia-h1">{items.title}</h1>
                <a href={items.url}>
                  <img className="Noticia-img" src={items.urlToImage} alt="/" />
                </a>
                <a href={items.url} className="Noticia-descripcion">
                  {items.description}
                </a>
                <span className="Noticia-span">{items.publishedAt}</span>
              </div>
            ))
          : "loading..."}
      </div>
    </>
  );
};
