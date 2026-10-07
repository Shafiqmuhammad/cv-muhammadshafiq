import Navbar from "./components/site/navbar";
import Home from "./components/site/home";
import Footer from "./components/site/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
