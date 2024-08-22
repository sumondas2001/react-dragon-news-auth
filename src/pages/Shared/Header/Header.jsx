import logo from "../../../assets/logo.png";
import moment from 'moment';

const Header = () => {
     return (
          <div>
               <img className="" src={logo} alt="" />
               <p className="text-lg">Journalism Without Fear or Favour</p>
               <p className="text-lg">{moment().format("dddd, MMMM D, YYYY,")}</p>
          </div>
     );
};

export default Header;