import React from 'react'
import { course } from "../course.js";
const FullStackDevelopment = () => {
  return (
    <div>
      <div className="row">
        {course.filter(item => item.category === "Full Stack development").map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <img src={item.img} alt={item.title} />
                <h4>{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FullStackDevelopment
