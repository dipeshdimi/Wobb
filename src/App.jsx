import cards from "./const/data";
import { Header, Filter, CampaignCard, Footer } from "./components";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Filter />
      <main className="p-4">
        <h2 className="text-[32px] md:text-[28px] xs:text-[24px] font-bold">Today&apos;s Recommendation</h2>
        <p className="text-gray-500 xs:text-[14px] mb-4">{cards.length} Featured Campaigns</p>
        <div className="flex flex-wrap justify-between gap-y-4 pb-20">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
