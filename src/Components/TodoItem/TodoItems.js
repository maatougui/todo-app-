import React from "react";
// import "./TodoItems.css";
const TodoItems = props => {
  const { items ,deletItem } = props;
  let length = items.lenth;
  const ListItems = items.map(item => {
    return (
      <div key={item.id}>
        <span>{item.name}</span>
        {/* <span>{item.age}</span> */}
        <span className="delet" onClick={()=>deletItem(item.id)}>&times;</span>


      </div>
    );
  });

  return (
    <div >
     
      {ListItems}
    </div>
  );
};

export default TodoItems;
