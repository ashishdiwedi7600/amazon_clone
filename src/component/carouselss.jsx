import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react'
import './carouselss.css'
import data from '../books.json'


function Carouselss(props) {

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1470
  }

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1470
  }

  return (
    <>

      <div id="main-slider-container">
        <button className='left-slider-icon' style={{ opacity: '0.5', backgroundColor: '#fff', minHeight: '104px', minWidth: '47px' }}
          onClick={slideLeft} >
          <LeftOutlined />
        </button>
        <div id="slider">
          {
            data.map((val, id) => {
              if (id < 16)
                return (
                  <div className='slider-card' >
                    <h3>{val.title}</h3>
                    <img src={val.thumbnailUrl} alt="image1" style={{ height: 188 }} />
                  </div>
                );
            })
          }
        </div>
        <button className='right-slider-icon' style={{ opacity: '0.5', backgroundColor: '#fff', minHeight: '104px', minWidth: '47px' }}
          onClick={slideRight}>
          <RightOutlined />
        </button>
      </div>

    </>
  )
}
export default Carouselss;