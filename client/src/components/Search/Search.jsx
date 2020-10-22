import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { searchBooks, getBookCoverByOLID } from "../../BooksApi/index";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { CardHeader, CardMedia, CardContent } from "@material-ui/core";
import Options from "./options";

function Search() {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      border: "solid",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    Options: {
      display: "inline-block",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  }));
  const classes = useStyles();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pending, setPending] = useState("");

  const onInputChange = (e) => {
    try {
      setSearchTerm(e.target.value);
    } catch (error) {
      console.log(error);
    }
  };
  async function onSubmit() {
    try {
      setPending("searching...");
      const result = await searchBooks(searchTerm);
      setBooks(result.docs);
      setPending("");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
      <TextField
        variant="outlined"
        placeholder="search book by name"
        size="small"
        value={searchTerm}
        onChange={onInputChange}
      />{" "}
      &nbsp;
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={onSubmit}
      >
        search
      </Button>
      <div>{pending}</div>
      {books.map((book) => (
        <div>
          <br />
          <br />
          <Card className={classes.root}>
            <CardHeader title={book.title}></CardHeader>
            <CardMedia
              className={classes.media}
              title={book.title}
              image={getBookCoverByOLID(book.cover_edition_key)}
            ></CardMedia>
            <CardContent>
              {book.first_publish_year}
              <br />
              {book.author_name}
            </CardContent>
          </Card>
          <div className="options">
            <Options title={book.title} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Search;
