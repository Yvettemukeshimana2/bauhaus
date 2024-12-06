 // Routes.tsx

import { createBrowserRouter, useParams, useNavigate } from "react-router-dom";
import AppLayout from "../layout.tsx/Applayout";
import Home from "../pages/Home";
import Ourteam from "../pages/Ourteam";
import AboutUs1 from "../pages/Aboutus1";
import VenuePage from "../pages/Venue";
import ServicesPage from "../pages/Venue"; 
import ServiceDetail from "../pages/ServiceDetail";
import Publication from "../pages/Publication";
import ContactPage from "../pages/Contact";
import InspirationPage from "../pages/Inspiration";
import HospitalityMaterials from "../pages/Material";
 
import CardDetailPage from "../pages/Carddetail";
import PlanYourEventPage from "../Event/Planevent";
export const Error404 = () => <div>Page not found</div>;

const ServiceDetailWrapper = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const onBookService = () => { alert("Booking initiated!"); };
  const onBackClick = () => {   navigate("/services"); };
 
  return (
    <ServiceDetail
      serviceId={parseInt(id || "0", 10)}
      onBookService={onBookService}
      onBackClick={onBackClick}
    />
  );
};
const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error404 />,
    children: [
      { path: "", element: <Home /> },
      { path: "ourteam", element: <Ourteam /> },
      { path: "aboutus1", element: <AboutUs1 /> },
      { path: "venue", element: <VenuePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "services/:id", element: <ServiceDetailWrapper /> },
      { path: "publication", element: <Publication /> },
      { path: "contactus", element: <ContactPage /> },
      { path: "insipirations", element: <InspirationPage /> },
      { path: "material", element: <HospitalityMaterials /> },
      { path: "/card-detail/:id", element: <CardDetailPage /> },
      {path:"planevent",element:<PlanYourEventPage/>}
    ],
  },
]);
export default routes;