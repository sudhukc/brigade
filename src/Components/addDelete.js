import React, { useState } from "react";

export default function AddDelete() {
  const [movieName, setMovie] = useState("");
  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);

  const handleDelete = (e) => {
    // console.log('delete');
    const id = e.target.getAttribute("id");
    // console.log(id);
    setList(list.filter((item) => item.id != id));
  };

  return (
    <div className="App">
      Movie name : <input onChange={(e) => setMovie(e.target.value)} />
      Director : <input id='director' />
      <button
        onClick={() => {
          setList([...list, { id: count, name: movieName ,Director:document.getElementById('director').value}]);
          setCount(count + 1);
        }}
      >
        {" "}
        Submit
      </button>
      <div>
        {list.map((item) => {
          console.log(item, movieName);
          return (
            <div>
              <span>
                {item.name}- and {item.Director}
                <button id={item.id} onClick={(e) => handleDelete(e)}>
                  Delete
                </button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}