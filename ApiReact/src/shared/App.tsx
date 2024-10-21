import React, { useEffect, useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { CardsList } from "./CardsList";
import { Content } from "./Content";
import { Header } from "./Header";
import { Layout } from "./Layout";
import { PostsContextProvider } from "./context/postContext";
import {  applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {  rootReducer, setToken } from "../store/reducer";
import thunk  from "redux-thunk";
import { saveToken } from "../store/me/actions";
import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import { Post } from "./Post";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppComponent() {  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  })

  useEffect(() => {
    const token = localStorage.getItem("token") || window.__token__;
    store.dispatch(setToken(token));
    if (token) {
      localStorage.setItem("token", token);
    }
  }, []);
  
  
  useEffect(() => {
    store.dispatch(saveToken() as any);
  }, [])
  
  return (
    <div>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Header />
            <Content>
              <PostsContextProvider>
                <Routes>
                  <Route path="/posts/:postId" element={<Post />} />
                  <Route path="/posts" element={<CardsList />} />
                  <Route path="/auth" element={<Navigate to="/posts" replace />} />
                  <Route path="/" element={<Navigate to="/posts" replace />} />
                  <Route path="*" element={<h1>404 — страница не найдена</h1>} />
                </Routes>
              </PostsContextProvider>
            </Content>
          </Layout>
        </BrowserRouter>
      )}
    </div>
  );
}

export const App = hot(() => (
<Provider store={store}>
<AppComponent />
</Provider>
));
