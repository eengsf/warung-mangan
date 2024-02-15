import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="flex md:flex-row flex-col justify-between  min-h-[50vh] md:px-10 px-[20vw] py-28 gap-10">
        <div className="flex flex-col gap-4">
          <div className="border-b-2 border-my-dark-green">
            <h1 className="text-xl font-bold">ADDRESS</h1>
          </div>
          <div className="flex gap-1">
            <FaMapMarkerAlt size={20} />
            <p>Telang Indah, 75, BG 55</p>
          </div>
          <div className="flex gap-1">
            <FaPhoneAlt size={20} />
            <p>+628 123 456 789</p>
          </div>
          <div className="flex gap-1">
            <IoMailOpenOutline size={20} />
            <p>infoeengsf@example.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border-b-2 border-my-dark-green">
            <h1 className="text-xl font-bold">EENGSF</h1>
          </div>
          <div>
            <p>Monday - Friday: 08:00 - 22:00</p>
          </div>
          <div>
            <p>Saturday - Sunday: 10:00 - 23:00</p>
          </div>
          <div>
            <p>Booking Time: 24/7 Hours</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:max-w-[30vw] w-full">
          <div className="border-b-2 border-my-dark-green">
            <h1 className="text-xl font-bold">RESERVATION</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              perferendis quae modi necessitatibus aliquid
            </p>
          </div>
          <div className="flex rounded-full text-sm">
            <div className="lg:w-2/3 w-3/5 px-4 py-2 border-2 border-my-dark-green border-e-0 rounded-s-full">
              <input
                type="text"
                placeholder="Email Address"
                className="outline-none"
              />
            </div>
            <div className="px-4 py-2 border-2 border-my-dark-green bg-my-normal-green rounded-e-full hover:bg-my-dark-green hover:text-my-white-green">
              <button className="text-xs">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
