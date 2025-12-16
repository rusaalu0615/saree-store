import LandingPage from "./components/LandingPage";
import LinenInfo from "./components/LinenInfo";
import LinenSarees from "./components/linenSarees";
import ProductType from "./components/productType";

export default function Home() {
  return (
    <>
    <LandingPage />
    <ProductType />
    <LinenInfo />
    <LinenSarees/>
    </>
  );
}
