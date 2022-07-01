import React from 'react'

const Job = (props) => {

    const {
        company,
        contract,
        location,
        logo,
        position,
        postedAt,
        languages,
        level,
        role,
        tools
        
        
      } = props.data;

      let keywords = [role, level, ...languages, ...tools];
    
    
 
  return (
    <>
    
    <div className="job-container">
    <div className="logo2">
        <img src={logo}/>
    </div>
    <div className="part1">

        <div className="company">
        <span className="cname">{company}</span>
        </div>
        <div className="position">{position}</div>
        <div className="details">
            <span>{postedAt}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{contract}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{location}</span>
            
        </div>
        <div className="part11">
    {keywords.map((key, id) => (
      <span onClick={() => props.setkeywords(key)} key={id}>
        {key}
      </span>
    ))}
  </div>
    
    
    
    
    </div>
    <div className="part2">
    <div className="btn">
        <button>Apply</button>
    </div>
    </div>
    
    

</div>
    </>
    
  );
  
};

export default Job