import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FaGripLinesVertical } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div
        className={`bg-my-normal-green text-white md:flex hidden justify-between items-center px-8 py-6 h-10 w-screen `}>
        <div>
          <h1 className="text-sm">
            Welcome to EengSF !!! 15% offer running now upon each order !!!
          </h1>
        </div>
        <div className="flex justify-around lg:w-1/6 md:w-1/5">
          <FaFacebookF
            size={15}
            className="cursor-pointer hover:text-my-light-green"
          />
          <FaTwitter
            size={15}
            className="cursor-pointer hover:text-my-light-green"
          />
          <FaTiktok
            size={15}
            className="cursor-pointer hover:text-my-light-green"
          />
          <RiInstagramFill
            size={15}
            className="cursor-pointer hover:text-my-light-green"
          />
          <FaGripLinesVertical size={15} />
          <IoBagHandle
            size={15}
            className="cursor-pointer hover:text-my-light-green"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
