import "./App.module.scss";
import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import Layout from "./components";


export const ThemeContext = createContext();
function App() {
  const [darkTheme, setDarkTheme] = useState(() => {
    const storageTheme = JSON.parse(localStorage.getItem('theme')) // get giá trị và chuyển sang kiểu Js(.parse)
    return storageTheme ??  false 
  });

  // lưu Theme vào localStorage 
  const theme = JSON.stringify(darkTheme) // chuyển thành kiểu String để localStorage hiểu
  localStorage.setItem('theme', theme)  // set giá trị

  return (
    <Router>
      
      <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
        <div className={darkTheme ? "dark" : " "}>
          <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-900 min-h-screen">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout >
                        <Page/>
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
