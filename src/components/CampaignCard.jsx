// eslint-disable-next-line react/prop-types
export default function CampaignCard({ image, icon, title, barterWorth, hired, totalHiring }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-[32.5%] lg:w-[49%] sm:!w-full transition-all duration-300 hover:-translate-y-[6px]">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-96 md:h-80 sm:!h-60 xs:!h-44 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-55 z-10" />

        <div className="z-20 absolute top-4 right-0 px-3 py-1 bg-red-600 text-white text-[12px] xs:text-[10px] font-medium rounded-l">Profile Pending</div>

        <div className="absolute bottom-2 left-4 flex items-center gap-2 text-white z-20">
          <img src={icon} alt="" className="h-6 rounded-full" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold text-gray-800 sm:text-[14px]">Barter Worth: ₹{barterWorth}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-full bg-gray-300 rounded">
            <div className="h-2 bg-blue-500 rounded" style={{ width: `${hired/totalHiring*100}%` }} />
          </div>
          <span className="text-[14px] sm:text-[12px] text-nowrap text-gray-500">{hired}/{totalHiring} Hired</span>
        </div>
      </div>
    </div>
  );
};
