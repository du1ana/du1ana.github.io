import React from 'react';
import data from './projectsdata.json'


export default class Projects extends React.Component {

  render(){
  const projCards= data.map(proj=>
    <ProjectCard
    key={proj.id}
    data={proj}
    />)
  return (
    <div>
    <h1 className="page-title text-center">
    Work
    </h1>
    <div id="cardContainer" className="container text-center">
    {projCards}
    </div>
    </div>
  )}
}

function ProjectCard(props) {
  return(
    <div className="card mx-2 my-3 p-1 align-top" style={{width: "20rem"}}>
      <img className="card-img-top" src={props.data.img} alt={props.data.name}/>
      <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text text-muted">{props.data.desc}</p>
          <a href={props.data.url} target="_blank" rel="noopener noreferrer" class="btn btn-info btn-block"><i class="fas fa-external-link-alt"></i>  View</a>
      </div>
      {(props.data.github||props.data.codepen)?
      //github
      <div className="card-footer text-center">
        {(props.data.github)?
          <a href={props.data.github} target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm mx-1"><i class="fab fa-github"></i> Github</a>
          :null
      }
      {(props.data.codepen)?
        <a href={props.data.codepen} target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm mx-1"><i class="fab fa-codepen"></i> Codepen</a>
        :null
      }

      </div>:null
    }
    </div>
  )
}
