import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import moment from 'moment';
import { CiCalendar } from "react-icons/ci";
import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'


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
               <div className="shadow-lg p-4">
                    <img src={img1} alt="" />
                    <p className="text-lg font-medium mt-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex justify-between mt-4">
                         <p className="font-medium">Sports</p>
                         <div className="flex gap-2 items-center">
                              <span className="text-xl"><CiCalendar /></span>
                              <p className="text-lg ">{moment().format(" MMM D, YYYY,")}</p>
                         </div>
                    </div>
               </div>
               <div className="shadow-lg p-4">
                    <img src={img2} alt="" />
                    <p className="text-lg font-medium mt-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex justify-between mt-4">
                         <p className="font-medium">Sports</p>
                         <div className="flex gap-2 items-center">
                              <span className="text-xl"><CiCalendar /></span>
                              <p className="text-lg ">{moment().format(" MMM D, YYYY,")}</p>
                         </div>
                    </div>
               </div>
               <div className="shadow-lg p-4">
                    <img src={img3} alt="" />
                    <p className="text-lg font-medium mt-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex justify-between mt-4">
                         <p className="font-medium">Sports</p>
                         <div className="flex gap-2 items-center">
                              <span className="text-xl"><CiCalendar /></span>
                              <p className="text-lg ">{moment().format(" MMM D, YYYY,")}</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default LeftSideNav;