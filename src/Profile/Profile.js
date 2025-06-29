import React from "react";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { ListData } from "../ListData/ListData";
import Typography from "@mui/material/Typography";

export function Profile() {
  return (
    <React.Fragment>
      <Card sx={{ paddingTop: 2}}>
        <Typography variant="h5" component="div" sx={{ textAlign: 'center'}}>
          RAMIRO DE LA CRUZ NAVARRO
        </Typography>
        <CardContent>
          <Box>
            <ListData />
          </Box>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
