import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineSupportAgent, MdNotifications } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-white p-4 shadow-md flex justify-between items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold text-blue-700">Hi, Dipesh</h1>
        <p className="text-gray-500 text-[14px] sm:text-[10px] leading-4">Empower Your Influence, Captivate Your Audience</p>
      </div>
      <div className="flex gap-4 sm:gap-2 items-center">
          <FaQuestionCircle className="w-6 h-auto" />
          <MdOutlineSupportAgent className="w-6 h-auto" />
          <MdNotifications className="w-6 h-auto text-gray-700" />
      </div>
    </header>
  );
};
