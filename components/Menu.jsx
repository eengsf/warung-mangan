import MenuNavigator from "./MenuNavigator";
import { Cookie } from "next/font/google";
const cookie = Cookie({ subsets: ["latin"], weight: "400" });

const Menu = () => {
  return (
    <>
      <div id="menu" className="flex flex-col items-center mb-10">
        <h1
          className={`${cookie.className} md:text-5xl text-3xl font-bold text-my-normal-green`}>
          Our Menu
        </h1>
        <h1 className="md:text-3xl text-2xl font-bold">FIND OUR MENU</h1>
      </div>
      <div className="bg-my-white-green transform -skew-y-3 ">
        <div className="flex flex-col md:items-center items-start md:px-3 px-[10vw] py-10 gap-5 lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-md m-auto bg-my-white skew-y-3 ">
          <MenuNavigator />
        </div>
      </div>
    </>
  );
};

export default Menu;
