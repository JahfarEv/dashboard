import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { RiSettingsFill } from "react-icons/ri";
import { TbMinusVertical } from "react-icons/tb";
import { TfiUser } from "react-icons/tfi";

const Header = () => {
  return (
    <nav className="fixed top-3 right-3 z-50 w-[91%] max-w-[1200px] bg-white border border-gray-200  rounded-3xl">
      <div className="px-3 py-3 lg:px-5 lg-pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button className="block sm:hidden">
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>
            <a href="#" className="flex ms-2 md:me-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Overview
              </span>
            </a>
          </div>
          <div className="flex">
            <div className="flex items-center">
              <input
                type="search"
                className="hidden md:block  border text-black rounded-3xl mr-3 p-1 "
                placeholder="search"
              />
            </div>
            <button className="mx-2">
              <RiSettingsFill />
            </button>
            <button className="mx-2">
              <IoIosNotifications />
            </button>
            <button className="mx-2">
              <TbMinusVertical />
            </button>
            <button>
              <TfiUser />
            </button>
            <span className="py-1">Jahfar</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
