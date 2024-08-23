import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LatestNews from "./LatestNews";
import NewsCard from "./NewsCard";


const Home = () => {
     const newsData = useLoaderData();

     return (
          <div>
               <Header></Header>
               <LatestNews></LatestNews>
               <Navbar></Navbar>
               <div className="mt-10 grid md:grid-cols-4 grid-cols-1 gap-6">
                    <div >
                         <LeftSideNav></LeftSideNav>
                    </div>
                    <div className="col-span-2  px-2">
                         <h1 className="text-xl font-semibold mb-10">Dragon News Home</h1>
                         <div>
                              {
                                   newsData.map(news =>
                                        <NewsCard
                                             key={news._id}
                                             news={news}

                                        ></NewsCard>)
                              }
                         </div>
                    </div>
                    <div className="">
                         <RightSideNav></RightSideNav>
                    </div>
               </div>
          </div>
     );
};

export default Home;