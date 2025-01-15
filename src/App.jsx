import cards from "./const/data";

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-blue-700">Hi, Dipesh</h1>
        <p className="text-gray-500">Empower Your Influence, Captivate Your Audience</p>
      </div>
      <div className="flex gap-4 items-center">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

const TabBar = () => {
  return (
    <div className="flex justify-center gap-4 my-4">
      <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full">All (11)</button>
      <button className="px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-200 rounded-full">Applied (0)</button>
      <button className="px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-200 rounded-full">Hired (0)</button>
      <button className="px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-200 rounded-full">Closed (0)</button>
    </div>
  );
};

const CampaignCard = ({ image, icon, title, barterWorth, hired, totalHiring }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />

        <div className="z-20 absolute top-2 right-2 px-3 py-1 bg-red-600 text-white text-xs font-medium rounded">Profile Pending</div>

        <div className="absolute bottom-4 left-8 flex items-center gap-2 text-white z-20">
          <img src={icon} alt="" className="h-6 rounded-full border border-gray-700" />
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold text-gray-800">Barter Worth: ₹{barterWorth}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-full bg-gray-300 rounded">
            <div className="h-2 bg-blue-500 rounded" style={{ width: `${hired}%` }} />
          </div>
          <span className="text-sm text-nowrap text-gray-500">{hired}/{totalHiring} Hired</span>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-between">
      <button className="flex flex-col items-center text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-xs">Campaigns</span>
      </button>
      <button className="flex flex-col items-center text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12h3m0 0h-3m0 0H6m3 4H6m6-4H6" />
        </svg>
        <span className="text-xs">Wobble</span>
      </button>
      <button className="flex flex-col items-center text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12h-6m0 0H5m0 4H4" />
        </svg>
        <span className="text-xs">Messages</span>
      </button>
      <button className="flex flex-col items-center text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m0 4H5m0-4H4" />
        </svg>
        <span className="text-xs">Profile</span>
      </button>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <TabBar />
      <main className="p-4 space-y-6">
        <h2 className="text-xl font-semibold">Today&apos;s Recommendation</h2>
        <p className="text-gray-500 mb-4">11 featured campaigns</p>
        {cards.map((card) =>
          <CampaignCard
            key={card.title}
            image={card.cardImg}
            icon={card.icon}
            title={card.title}
            barterWorth={card.barterWorth}
            hired={card.hired}
            totalHiring={card.totalHiring}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
