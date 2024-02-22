import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { SCContainer } from "./Container.styled";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
]);

function App() {
  return (
    <>
      <div className="App">
          <SCContainer>
            <ThemeProvider theme={theme}>
             <RouterProvider router={routerConfig} />
            </ThemeProvider>
          </SCContainer>    
      </div>
    </>
  );
}

export default App;
