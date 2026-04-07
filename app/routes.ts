import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import ProductDetailUSB from "./pages/ProductDetailUSB";
import ProductDetailResistor from "./pages/ProductDetailResistor";
import ProductDetailConnector from "./pages/ProductDetailConnector";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/search",
    Component: ProductList,
  },
  {
    path: "/product/mps751rlrag",
    Component: ProductDetail,
  },
  {
    path: "/product/usb2hab50cm",
    Component: ProductDetailUSB,
  },
  {
    path: "/product/mcwr08x4301ftl",
    Component: ProductDetailResistor,
  },
  {
    path: "/product/bm05b-achss",
    Component: ProductDetailConnector,
  },
]);