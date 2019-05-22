import React from "react";
import "../css/searchBar.css";
import { withStyles } from "@material-ui/core/styles";
import { Button, Input } from "@material-ui/core";

const styles = theme => ({
  button: {
    width: "100px",
    height: "50px"
  },
  input: {
    width: "500px",
    height: "50px",
    margin:"5px 30px 5px 5px",
    color:"black",
    backgroundColor:"white"
  }
});

const SearchBar = props => {
  const { classes } = props;

  return (
    <div id="searchBarEnclosingDiv">
      <form>
        <Input
          className={classes.input}
          type="text"
          placeholder="Search names"
          variant="outlined"
        />
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          type="submit"
          size="large"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(SearchBar);
