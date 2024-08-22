import logo from "../../../assets/logo.png";
import moment from 'moment';

const Header = () => {
     return (
          <div className="text-center">
               <img className="mx-auto mt-10 " src={logo} alt="" />
               <p className="text-lg mt-5">Journalism Without Fear or Favour</p>
               <p className="text-lg mt-2">{moment().format("dddd, MMMM D, YYYY,")}</p>
          </div>
     );
};

export default Header;