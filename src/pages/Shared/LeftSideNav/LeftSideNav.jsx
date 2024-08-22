import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
     const [categories, setCategories] = useState([]);
     useEffect(() => {
          fetch('categories.json')
               .then(res => res.json())
               .then(data => setCategories(data))
     }, []);
     return (
          <div className="space-y-6">
               <h1 className="text-xl font-semibold">All Category </h1>
               <h1 className="text-lg text-center p-3 mt-6 rounded-lg bg-slate-700 mx-7">National News</h1>
               {
                    categories.map(category => <NavLink to={`/category/${category.id}`}
                         className='block pl-9 text-lg font-medium'
                         key={category.id}>
                         {category.name}

                    </NavLink>
                    )
               }
          </div>
     );
};

export default LeftSideNav;