import React, { useState } from "react";
import Carousel from "./CarouselComponent";

let id = 0;
const getId = () => {
  return id++;
}

const Dashboard = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputName, setInputName] = useState("");
    const [scoreVal, setScoreVal] = useState(""); //access recoil state
    console.log(scoreVal);

    
    const handleChange = (e) => {
      if(e.target.name === "name") {
        setInputName(e.target.value);
      } else if(e.target.name === "score") {
        setInputValue(e.target.value);
      }

      console.log(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue && inputName !== "") {
        setScoreVal((list) => 
        [
            ...list, {
                id: getId(),
                text: inputValue,
            }
        ]);

        setInputValue('');
        setInputName('');
        console.log(scoreVal);
        console.log(inputValue);
        console.log(id)
      
      }
    }
    return (
        <div style = {{backgroundColor: "black"}} className = "overflow-auto h-100">
          <Carousel/>
          <div className="container mb-4">
            <div className="row">
              <div className="col-12">
                <div className="card mt-5">
                  <div className="card-header">
                    <h3 className="text-center">Dashboard</h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input type="text" className="form-control mt-4 mb-4" name = "name" placeholder="Add Name" value={inputName} onChange = {handleChange}/>
                        <input type="number" className="form-control mb-4" name = "score" placeholder="Add Score" value={inputValue} onChange = {handleChange}/>
                      </div>
                      <button type="submit" className="btn btn-dark mt-3">
                        Add
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Dashboard;

