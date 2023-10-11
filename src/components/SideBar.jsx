import React from 'react'

function sidebar() {
  return <>
   <ul className="navbar-nav bg-warning sidebar sidebar-dark accordion" id="accordionSidebar">
    
   <div className="text-bg-light p-3">
{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content" href="index.html">
    
    <div className="sidebar-brand-text-bs-primary mx-3">Notes App</div>
</a>

{/* <!-- Divider --> */}

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active ">
    <a className="nav-link " href="index.html">
    
        <span className="text-light">Notes<img className="mx" src="./src/assets/description.svg" alt="description" />
        </span></a>
</li>

</div>
</ul>
</>
}

export default sidebar