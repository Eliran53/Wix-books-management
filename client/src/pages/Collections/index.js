import React from "react";
import * as style from "./Collections.module.scss";
import AddCollection from '../../components/BooksCollections/addcollection'

export const Collections = (props) => {
  return (
    <section>
      <h1>Books collections</h1>
      <AddCollection/>
    </section>
  );
};
