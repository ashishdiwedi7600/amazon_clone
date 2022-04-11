import React from 'react'
import { Link } from "react-router-dom";
import data from '../books.json';
import { Card } from 'antd';
import Adventure from "../images/adventure.png";
import Dictionaries from "../images/dictionaries.png";
import Fantasy from "../images/fantasy.png";
import Horror from "../images/horror.png";

const catCard = [Adventure, Fantasy, Horror, Dictionaries];

function Cardview() {
  return (
    <>
      <div className="cards">
        {data.map((val, key) => {
          return (
            <>
              <Card className="card">
                <h1>{val.title}</h1>
                <img src={val.thumbnailUrl} alt="Comics Category" className="card-content" />
                <br />
                <Link to="/categories" state={"Comics"} className="link">
                  Shop Now
                </Link>
              </Card>
            </>
          );
        })}

        <Card className="card">
          <h1>Shop By Category</h1>
          <div className="card-content">
            {catCard.map((e) => {
              return (
                <img
                  src={e}
                  alt="category"
                  className="card-category"
                  onClick={() => console.log("beauty")}
                />
              );
            })}
            <br />
            <Link to="/" className="link">
              Shop All
            </Link>
          </div>
        </Card>

      </div>
    </>
  )
}
export default Cardview;