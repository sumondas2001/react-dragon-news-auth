import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
     return (
          <div className="flex gap-6 mt-4">
               <button className="btn bg-red-600 hover:bg-red-700 ">Latest News</button>

               <Marquee className="bg-red-600  text-white rounded " pauseOnHover >
                    <Link className="mr-12">
                         Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Link>
                    <Link className="mr-12">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum tenetur perspiciatis! Exercitationem quas ?
                    </Link>
                    <Link className="mr-12">
                         Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Link>
               </Marquee>
          </div>
     );
};

export default LatestNews;