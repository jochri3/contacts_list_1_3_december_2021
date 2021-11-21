import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header";
import Create from "./pages/contacts/create";
import Edit from "./pages/contacts/edit";
import Index from "./pages/contacts/index";
import Show from "./pages/contacts/show";
import Home from "./pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Index />} />
          <Route path="contact/new" element={<Create />} />
          <Route path="contact/:id" element={<Show />} />
          <Route path="contact/:id/edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
