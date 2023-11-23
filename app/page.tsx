import Content from "./components/Content";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import { AppContextProvider } from "./context/AppContext";
const fetch = require("node-fetch");
var myHeaders = new fetch.Headers();


export default function Home() {
  return (
    <AppContextProvider>
      <main>
        <TopBar />
        <Content />
        <Footer />
      </main>
    </AppContextProvider>
  )
}
