import React from 'react';
import {AppBar, Button, Container, IconButton, Link, Toolbar, Typography, useTheme} from "@material-ui/core";

function MenuIcon() {
  return null;
}

const Home = () => {

  const theme = useTheme();
  return (
      <>
        <AppBar position={"sticky"}>
          <Container maxWidth={'lg'} className="home">
            <Toolbar>
              <Link href={'/'} color={"error"}>Home</Link>
              <Link href={'/novinky'}  color={"error"}>Novinky</Link>
            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth={'lg'} className="home">
          <Typography variant={"h1"}>Alza Tech Friday demo</Typography>
          <Typography variant={"body1"}>Demo site for Alza Tech Friday</Typography>
        </Container>
      </>

  );

}
export default Home;
