import React from 'react';

const SideBar = ({ subroutes }) => {
    return (
    <div className="sidebar">  
    
         {
                subroutes.map((item) => {
                    return (
                    <a key={item.link} href={item.link} >
                    {item.name}</a>
                 
                    );
                })
            }       
       </div>

    );
}




SideBar.propTypes = {
    subroutes: React.PropTypes.array.isRequired
}
export default SideBar;