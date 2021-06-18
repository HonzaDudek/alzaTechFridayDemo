import Head from 'next/head';

import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: 'calc(100vh - 640px)',
  },
}));

export default function Layout({ children, pageTitle, ...props }) {
  const classes = useStyles();

  return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{pageTitle}</title>
        </Head>
        <Container className={classes.root} maxWidth={'md'}>
          {children}
        </Container>
      </>
  );
}
