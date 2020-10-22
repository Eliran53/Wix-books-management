import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";
import UserContext from "../../Context";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    float: "none ",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const collections = useContext(UserContext).collectionsData;
  const [name, setName] = useState("");
  const classes = useStyles();
  const clickHandler = () => {
    try {
      collections.map((collection) => {
        if (collection.name === name) {
          collection.books.push(props.title);
        }
      });
      setName("");
      alert("book added");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel
          id="demo-simple-select-label"
          className={classes.formControl}
        >
          choose collection
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onClick={(event) => setName(event.target.value)}
          className={classes.formControl}
        >
          {collections.map((collection, index) => {
            return (
              <MenuItem
                id="select"
                value={collection.name}
                className={classes.formControl}
              >
                {collection.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Button
        className={classes.formControl}
        onClick={clickHandler}
        variant="contained"
        color="primary"
        size="Medium"
      >
        add to collection
      </Button>
    </div>
  );
}
