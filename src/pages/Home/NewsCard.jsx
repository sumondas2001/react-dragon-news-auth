import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { FaStar, FaBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";


const NewsCard = ({ news }) => {
     const { author, title, image_url, details, total_view, rating, _id } = news;

     return (
          <div className='mb-10  shadow-xl p-4 rounded-md'>
               <div className='flex justify-between'>
                    <div className='flex gap-5 '>
                         <img className='size-10 rounded-3xl' src={author.img} alt="" />
                         <div>
                              <h4 className='font-semibold'>{author.name}</h4>
                              <p className='font-normal mt-1 mb-4'> {author.published_date}</p>
                         </div>
                    </div>
                    <div className='flex gap-3 text-2xl '>
                         <CiShare2 />
                         <FaBookmark />
                    </div>
               </div>
               <h4 className='mb-5 text-xl font-bold'>{title}</h4>
               <img src={image_url} alt="" />
               <div className='mt-8 font-normal text-base'>
                    {
                         details.length > 190 ? <p>{details.slice(0, 190)} <Link
                              to={`/news/${_id}`}
                              className='font-bold underline ml-2 text-blue-600 '
                         >Read More.....
                         </Link></p>
                              :
                              <p>{details}</p>
                    }
               </div>

               <div className='flex gap-2 items-center mt-4 justify-between'>

                    <p className='flex gap-2 '>
                         <div className='flex gap-2 text-red-600'>
                              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                         </div>
                         <p>{rating.number}</p>
                    </p>


                    <div className='flex gap-2 items-center'>
                         <IoEyeSharp />
                         <p> {total_view}</p>
                    </div>

               </div>

          </div>
     );
};

export default NewsCard;
NewsCard.propTypes = {

     news: PropTypes.object,
}