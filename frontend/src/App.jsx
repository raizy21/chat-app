import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";

import HomePage from "../src/pages/HomePage";
import SignUpPage from "../src/pages/SignUpPage";
import LoginPage from "../src/pages/LoginPage";
import SettingsPage from "../src/pages/SettingsPage";
import ProfilePage from "../src/pages/ProfilePage";
import NotFoundPage from "../src/pages/NotFoundPage";

import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
const App = () => {
  const { authUser, checkAuth } = useAuthStore((state) => ({
    authUser: state.authUser,
  }));

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("authUser in App:", authUser);

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
