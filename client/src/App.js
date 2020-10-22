import React, { useState } from "react";
import * as style from "./App.module.scss";
import { Switch, Route } from "react-router-dom";
import { Collections } from "./pages/Collections";
import { BooksSearch } from "./pages/BooksSearch";
import { Header } from "./components/Header";
import { UserProvider } from "./Context";

const App = () => {
  //  const test = [{name:"test",bookname:"lord"},{name:"test2",bookname:"harry"}]
  const [collectionsName, setCollectionsName] = useState([]);
  const [collectionsBooks, setCollectionsBook] = useState([]);
  const providerOptions = {
    collectionsData: collectionsName,
    booksdata: collectionsBooks,
    changeCollectionData: (value) => {
      const list = {name:value,books:[],images:[]};
      collectionsName.push(list);
      setCollectionsName(collectionsName);
    },
    changeBooksData: (value) => {
      collectionsBooks.push(value);
      setCollectionsBook(collectionsBooks);
    },
  };

  return (
    <div className={style.app}>
      <UserProvider value={providerOptions}>
        <Header />
        <main>
          <Switch>
            <Route
              exact
              path="/search"
              render={(props) => <BooksSearch {...props} />}
            />
            <Route
              exact
              path="/collections"
              render={(props) => <Collections {...props} />}
            />
            <Route path="/" render={(props) => <BooksSearch {...props} />} />
          </Switch>
        </main>
      </UserProvider>
    </div>
  );
};

export default App;
