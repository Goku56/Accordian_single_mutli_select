import { useState } from "react";
import data from "./dummyData";
import "./style.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [mutlisection, setMultiSeletion] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const handleSelection = (id) => {
    console.log(id);
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    let cpyMulti = [...mutlisection];
    const findIndexOfCurrentId = cpyMulti.indexOf(id);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMulti.push(id);
    else cpyMulti.splice(findIndexOfCurrentId, 1);

    setMultiSeletion(cpyMulti);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Section
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? mutlisection.indexOf(item.id) !== -1 && (
                    <div className="content ">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="content ">{item.answer}</div>
                  )}
              {/* {selected === item.id ? (
                <div className="content ">{item.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
}
