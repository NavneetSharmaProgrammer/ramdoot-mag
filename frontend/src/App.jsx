import { useState, useEffect } from "react";
import Nav from "@/components/nav";
import ErrorBoundary from "@/components/ErrorBoundary";
import Magazines from "./pages/magazines";
import Subscriptions from "./pages/subscriptions";
import Payments from "./pages/payments";
import Publications from "./pages/publications";
import Users from "./pages/users";
import InfluencerCampaigns from "./pages/influencer-campaigns";
import { useRazorpay } from "@/components/RazorpayButton";
import { BACKEND_URL } from "./config/constants";
import DUMMY_MAGAZINES from "./data/dummyMagazines";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import Security from "./pages/Security";
import Help from "./pages/Help";
import Footer from "./components/Footer";
function App() {
  const [activePage, setActivePage] = useState("home");
  const [magazines, setMagazines] = useState(DUMMY_MAGAZINES);
  const [message, setMessage] = useState("");
  const { pay, loading } = useRazorpay();

  useEffect(() => {
    fetch(`${BACKEND_URL}/magazines`)
      .then((res) => res.json())
      .then(setMagazines)
      .catch((err) => console.error("Failed to fetch magazines", err));
  }, []);

  function handleBuy(magazine) {
    pay({ magazineId: magazine.id });
  }

  function renderPage() {
    switch (activePage) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "support":
        return <Support />;
      case "security":
        return <Security />;
      case "settings":
        return <Settings />;
      case "help":
        return <Help />;
      case "subscriptions":
        return <Subscriptions />;
      case "payments":
        return <Payments />;
      case "publications":
        return <Publications />;
      case "users":
        return <Users />;
      case "influencer-campaigns":
        return <InfluencerCampaigns />;
      case "magazine":
        return (
          <Magazines
            magazines={magazines}
            handleBuy={handleBuy}
            loading={loading}
            message={message}
          />
        );
      default:
        return (
          <div className="flex items-center justify-center h-full text-slate-400">
            <p className="text-lg">{activePage.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} — Coming soon</p>
          </div>
        );
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen" style={{background:'#1a0f05'}}>
      <Nav activePage={activePage} onNavigate={setActivePage} />
      <main className="flex-1 flex flex-col overflow-auto" style={{
        background: 'linear-gradient(160deg, #fdf3e0 0%, #f5e6c8 50%, #fdf3e0 100%)',
        borderLeft: '2px solid rgba(212,160,23,0.2)'
      }}>
        <ErrorBoundary key={activePage}>
          {renderPage()}
        </ErrorBoundary>
        <Footer />
      </main>
    </div>
  );
}

export default App;
