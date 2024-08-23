import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import moment from 'moment';
import { CiCalendar } from "react-icons/ci";
import editorsImg1 from "../../assets/editorsInsight1.png"
import editorsImg2 from "../../assets/editorsInsight2.png"
import editorsImg3 from "../../assets/editorsInsight3.png"

const News = () => {
     const { id } = useParams();
     const data = useLoaderData();

     const news = data.find(anews => anews._id === id);
     const { title, image_url, details, } = news;

     return (
          <div>
               <Header></Header>
               <Navbar></Navbar>
               <div className="grid md:grid-cols-4 ">
                    <div className="col-span-3 px-4 ">
                         <h1 className="text-xl font-semibold mb-14 px-10">Dragon News</h1>
                         <div className="px-10">
                              <img className="w-full" src={image_url} alt="" />
                              <h2 className="text-xl mt-6 mb-4 font-bold">{title}</h2>
                              <p className="">{details}</p>

                              <Link to={"/"}>
                                   <button className="btn mt-10 btn-accent">All news in this category</button>
                              </Link>
                         </div>
                         <div className="mt-20">
                              <h1 className="text-lg font-semibold mb-10">Editors Insight</h1>
                              <div className="flex mb-10 gap-6">
                                   <div>
                                        <img className=" mx-auto" src={editorsImg1} alt="" />
                                        <p className="text-lg font-medium mt-4">21 The Most Stylish Wedding Guest Dresses For Spring</p>
                                        <div className="flex gap-2 mt-4 items-center">
                                             <span className="text-xl"><CiCalendar /></span>
                                             <p className="text-lg ">{moment().format(" MMM D, YYYY,")}</p>
                                        </div>
                                   </div>
                                   <div>
                                        <img className=" mx-auto" src={editorsImg2} alt="" />
                                        <p className="text-lg font-medium mt-4">21 The Most Stylish Wedding Guest Dresses For Spring</p>
                                        <div className="flex gap-2 mt-4 items-center">
                                             <span className="text-xl"><CiCalendar /></span>
                                             <p className="text-lg ">{moment().format(" MMM D, YYYY,")}</p>
                                        </div>
                                   </div>
                                   <div>
                                        <img className=" w-80 mx-auto" src={editorsImg3} alt="" />
                                        <p className="text-lg font-medium mt-4">21 The Most Stylish Wedding Guest Dresses For Spring</p>
                                        <div className="flex gap-2 mt-4 items-center">
                                             <span className="text-xl"><CiCalendar /></span>
                                             <p className="text-lg ">{moment().format(" MMM D, YYYY,")}</p>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </div>
                    <div>
                         <RightSideNav></RightSideNav>
                    </div>
               </div>

          </div>
     );
};

export default News;