import React from 'react';
import data from './featureddata.json'
import star from './assets/star.svg'
import cwc from './assets/cwc1.svg'

export default class Homepage extends React.Component {
  render(){
  return (
    <div className="my-auto w-100 container d-flex flex-row justify-content-around flex-wrap-reverse align-items-center">
        <div className="d-none d-md-inline text-right">
              <div id="homepage-title">
              <img src={cwc} height="200vh" alt=""/>
              </div>
        </div>


        <div className="card m-2 p-2 bg-light align-middle" style={{width: "25rem"}}>
          <div className="card-header">
            <img src={star} alt="" height="15vh" className="align-middle"/> <b>Featured</b>
          </div>
          <img className="card-img-top" src={data.img} alt={data.name}/>
          <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">{data.desc}</p>
              <a href={data.url} target="_blank" rel="noopener noreferrer" class="btn btn-info btn-block"><i class="fas fa-external-link-alt"></i>  View</a>
          </div>
        </div>
    </div>

  )}
}
