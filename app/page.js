import LandingPage from "./components/LandingPage";
import LinenArrivals from "./components/linenArrivals";
import LinenInfo from "./components/LinenInfo";
import LinenSarees from "./components/linenSarees";
import ProductType from "./components/productType";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <LandingPage />
      <ProductType />
      {/* <LinenInfo /> */}
      <LinenSarees/>
      <LinenArrivals/>
      <LinenSarees/>
      <Footer />
    </>
  );
}
