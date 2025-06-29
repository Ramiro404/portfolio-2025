import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import imgGlossary from "../assets/projects/glossary.jpeg";
import imgHotel from "../assets/projects/hotel.PNG";
import imgLego from "../assets/projects/lego.PNG";
import imgGym from "../assets/projects/gym.jpeg";
import { Chip, Paper } from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';
import Skeleton from '@mui/joy/Skeleton';

export function Portfolio() {
  const [loading, setLoading] = React.useState(true);
  const projects = [
    {
      id: 1,
      title: "Hotel App",
      description: "",
      link: "#",
      image: imgHotel,
      tech: ["C#", "Windows Forms", "SQL", "Git"],
    },
    {
      id: 2,
      title: "Lego Landing Page",
      description: "",
      link: "https://github.com/Ramiro404/Lego-Construction-Ideas",
      image: imgLego,
      tech: ["C#", "ASP.NET", "JavaScript", "Git"],
    },
    {
      id: 3,
      title: "Glossary & Questionary App",
      description: "",
      link: "https://github.com/Ramiro404/glossary-api",
      image: imgGlossary,
      tech: [
        "NodeJS",
        "PostgreSQL",
        "TypeScript",
        "Angular",
        "Git",
        "HTML",
        "CSS",
      ],
    },
    {
      id: 4,
      title: "Gym Management System",
      description: "",
      image: imgGym,
      link: "https://github.com/Ramiro404/gym-api",

      tech: [
        "Angular",
        "JavaScript",
        "Git",
        "TypeScript",
        "Jasmine",
        "CSS",
        "HTML",
      ],
    },
  ];
  return (
    <React.Fragment>
      <Typography variant="h3">Projects</Typography>
      <Grid container spacing={2}>
        {projects.map((p) => (
          <Grid size={{ xs: 12, md: 6, xl: 4  }} key={p.id}>
            <Card key={p.id}>
              

              <CardMedia sx={{ height: 300 }} image={p.image} title={p.title}  />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {p.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {p.description}
                </Typography>
                {p.tech.map((t) => (
                  <React.Fragment>
                    <Chip label={t}></Chip>&nbsp;&nbsp;
                  </React.Fragment>
                ))}
              </CardContent>
              <CardActions>
                <Button size="small" href={p.link}  target="_blank">GitHub</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
