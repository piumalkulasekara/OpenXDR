import React, { } from 'react';

import { Container, Grid, Paper } from '@mui/material';

import './Dashboard.css';
import PageToolbar from '../../components/PageToolbar';
import FlatPaper from '../../components/FlatPaper';

function Dashboard() {

  return (
    <div className="Dashboard">
      <PageToolbar title="Dashboard" />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <FlatPaper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              {/* <Chart /> */}
            </FlatPaper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <FlatPaper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              {/* <Deposits /> */}
            </FlatPaper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <FlatPaper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {/* <Orders /> */}
            </FlatPaper>
          </Grid>
        </Grid>
        {/* <Copyright sx={{ pt: 4 }} /> */}
      </Container>
    </div>
  );
}

export default Dashboard;
