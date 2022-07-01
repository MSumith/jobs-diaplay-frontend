import React from 'react'
import Job from './Job';
const Jobs = ({data}) => {
    console.log(data);
  return (
    <>
    
    <div className="jobs">

    {data.map(d=>{
        return <Job data={d} />;
    })}
    
    </div>
    <footer className="footer">

                <p>© 2022 Technocolabs.com. All Rights Reserved</p>
                {/* for copyright symbol press and hold Alt while typing 0169 */}

            </footer>
    </>
    
  );
}

export default Jobs