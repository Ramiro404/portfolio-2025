import { Typography } from "@mui/material";
import React from "react";
import { Box, Grid } from "@mui/system";
import { TechCard } from "../TechCard/TechCard";
import { Skill } from "../Skill/Skill";
import { SKILLS } from "../Data/skills-data";
import { TECHNOLOGIES } from "../Data/tech-data";

export function About() {
  return (
    <React.Fragment>
      <Typography variant="h2">About</Typography>
      <Typography variant="h5">
        Full-Stack Developer with over 7 years of experience designing scalable,
        efficient, and maintainable web applications using .NET Core, Angular,
        and SQL Server. 
        <br/><br/>
        ✔️ Strong grasp of system architecture, clean code
        principles, and agile methodologies. <br/>
        ✔️ Passionate about continuous
        learning and delivering high-quality software solutions. <br/>
        ✔️ Recognized
        for being a collaborative and well-organized team player. <br/>
        
        Throughout my
        career, I've applied clean code practices and architectural principles
        across multiple projects. My performance has been consistently praised
        by my superiors, and my colleagues appreciate the guidance and support I
        provide. <br/><br/>
        
        Currently, I'm developing a personal project: a Clothing Store
        Web App built with SQL Server as the database backend. I planned the
        data entities, mapped core functionalities, and determined the essential
        information needed from clients and employees. The app’s primary value
        lies in enabling customers to place orders independently or with the
        help of an employee—made possible through SignalR for real-time
        communication. <br/><br/>
        
        On the backend, I used Entity Framework Migrations and
        processed data with LINQ. I implemented CQRS architecture using the
        MediatR library to separate queries and commands for better
        maintainability. On the frontend, I chose React with TypeScript,
        consuming data via API in JSON format to deliver a seamless ordering
        experience for users.
      </Typography>
      <br /><br/>

      <Typography variant="h4">Skills</Typography>

      <Grid container spacing={4}>
        {SKILLS.map((s) => (
          <Grid size={{ xs: 12, md: 4, xl: 2 }} key={s.title}>
            <Skill icon={s.icon} title={s.title} sx={s.sx} />
          </Grid>
        ))}
      </Grid>

      <br />
      <Typography variant="h4">Technologies</Typography>
      <Box
        sx={{
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          width: 1,
          height: 300,
        }}
      >
        {TECHNOLOGIES.map((t) => (
          <TechCard key={t.title} img={t.img} title={t.title} />
        ))}
      </Box>
    </React.Fragment>
  );
}
