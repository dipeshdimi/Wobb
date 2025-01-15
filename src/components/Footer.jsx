import { BsFillMegaphoneFill } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white p-4 xs:px-2 flex justify-around z-50 border-t border-gray-300">
      {[
        { icon: <BsFillMegaphoneFill />, label: 'Campaigns', color: 'text-blue-600' },
        { icon: <GoPeople />, label: 'Wobble', color: 'text-gray-600' },
        { icon: <LuMessageCircleMore />, label: 'Messages', color: 'text-gray-600' },
        { icon: <FaRegUser />, label: 'Profile', color: 'text-gray-600' },
      ].map(({ icon, label, color }, index) => (
        <button
          key={index}
          className={`flex flex-col items-center ${color} font-medium bg-none transition-all duration-200 hover:bg-gray-200 rounded-lg py-2 px-4 xs:py-1 xs:px-2`}
        >
          {icon}
          <span className="text-[14px] xs:text-[12px]">{label}</span>
        </button>
      ))}
    </footer>
  );
};