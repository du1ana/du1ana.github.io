import React from 'react';
import data from './featureddata.json'
import StarIcon from './assets/star.jsx'
import Cwc1Icon from './assets/cwc1.jsx'

export default class Homepage extends React.Component {
  render(){
  return (
    <div className="my-auto w-100 container d-flex flex-row justify-content-around flex-wrap-reverse align-items-center">
        <div className="d-none d-md-inline text-right">
              <div id="homepage-title">
              <Cwc1Icon/>
              </div>
        </div>


        <div className="card m-2 p-2 bg-light align-middle" style={{width: "25rem"}}>
          <div className="card-header">
          <StarIcon/> <b>&nbsp;Featured</b>
          </div>

          <div style={{overflow: 'hidden'}}>
          <img className="card-img-top" src={data.img} alt={data.name} maxHeight='190px'/>
          </div>
          <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text text-muted">{data.desc}</p>
              <a href={data.url} target="_blank" rel="noopener noreferrer" className="btn btn-info btn-block"><i className="fas fa-external-link-alt"></i>  View</a>
          </div>
        </div>
    </div>

  )}
}