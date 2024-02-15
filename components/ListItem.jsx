import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";

const ListItem = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col bg-image1 w-full md:h-[50vh] h-screen justify-around items-center mb-10">
        <div className="flex flex-col items-center z-10 gap-3">
          <GiHamburgerMenu size={40} className="text-my-dark-green" />
          <h1 className="text-2xl font-bold">16</h1>
          <p className="text-xl">MENU</p>
        </div>
        <div className="flex flex-col items-center z-10 gap-3">
          <FaHeart size={40} className="text-my-dark-green" />
          <h1 className="text-2xl font-bold">9</h1>
          <p className="text-xl">TOP RATED</p>
        </div>
        <div className="flex flex-col items-center z-10 gap-3">
          <GiHamburgerMenu size={40} className="text-my-dark-green" />
          <h1 className="text-2xl font-bold">9</h1>
          <p className="text-xl">HAPPY CUSTOMER</p>
        </div>
        <div className="flex flex-col items-center z-10 gap-3">
          <FaHouseChimney size={40} className="text-my-dark-green" />
          <h1 className="text-2xl font-bold">3</h1>
          <p className="text-xl">BRANCHES</p>
        </div>
      </div>
    </>
  );
};
export default ListItem;
