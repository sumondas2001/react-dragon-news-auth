import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const Home = () => {
     return (
          <div>
               <Header></Header>
               <Navbar></Navbar>
               <div className="mt-10 grid md:grid-cols-4 grid-cols-1 gap-6">
                    <div className="border">
                         <LeftSideNav></LeftSideNav>
                    </div>
                    <div className="col-span-2 border">
                         <h1 className="text-3xl">News coming soon....</h1>
                    </div>
                    <div className="border">
                         <RightSideNav></RightSideNav>
                    </div>
               </div>
          </div>
     );
};

export default Home;