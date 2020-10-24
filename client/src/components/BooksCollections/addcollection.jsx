import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../../Context";
import { TextField, Button } from "@material-ui/core";
import { useEffect } from "react";
import ShowCollections from "./ShowCollections";

function AddCollection() {
  // const collections = useContext(UserContext).data;
  const changeData = useContext(UserContext).changeCollectionData;
  // const [collection, setCollection] = useState(data);
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    try {
      setInput(e.target.value);
    } catch (error) {
      console.log(error);
    }
  };
  const clickHandler = () => {
    try {
      changeData(input);
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [input]);
  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="create new collection"
        size="small"
        value={input}
        onChange={onInputChange}
      ></TextField>
      &nbsp;
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={clickHandler}
      >
        create new
      </Button>
      <ShowCollections />
    </div>
  );
}
export default AddCollection;
