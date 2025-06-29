import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function TechCard(props) {
    const { img, title} = props;
  return (
    <React.Fragment>
      <Card sx={{ width: 250, display: 'inline-block'  }}>
        <CardMedia
          sx={{ height: 190 }}
          image={img + "?fit=crop&auto=format&dpr=2 2x"}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </Card>&nbsp;&nbsp;
    </React.Fragment>
  );
}