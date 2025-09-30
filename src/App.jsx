
// components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Landing from "./pages/Landing";


function App() {

  return (
    <>
    <div className="min-h-screen bg-[#fefcfb]">
     
     {/* Header */}
     <Header />
      <Landing />
      {/* Footer */}
     <Footer />
    </div>
    </>
  )
}

export default App
