import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { Browse } from "./pages/Browse";
import { SignUp } from "./pages/SignUp";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./utils/appStore";
import { Home } from "./pages/Home";

function App() {
  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
