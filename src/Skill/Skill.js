import { Box, Card, CardContent, Typography } from "@mui/material";

import React from "react";
export function Skill(props) {
  const { icon, title, sx } = props;
  return (
    <React.Fragment>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            maxWidth: 400,
          }}
        >
          <Box sx={sx}>{icon}</Box>
          <CardContent>
            <Typography variant="h6">{title}</Typography>
          </CardContent>
        </Card>
    </React.Fragment>
  );
}
