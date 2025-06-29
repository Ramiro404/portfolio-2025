import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { ListItem, ListItemText, Typography } from "@mui/material";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import List from "@mui/material/List";

export function Resume() {
  const steps = [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];

  return (
    <React.Fragment>
      <Typography variant="h3">Resume</Typography>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">
              Fullstack Developer (.NET & Angular)
            </Typography>
            <Typography variant="h6">
              Grupo TI Mexico, March 2024 – December 2024
            </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    Refactored duplicated code and applied SOLID principles to
                    improve maintainability.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Analyzed user stories and implemented scalable features using CQRS.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Created and maintained frontend documentation, API endpoints, and technical processes.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Improved system performance by optimizing LINQ queries and removing redundant logic.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Managed Entity Framework migrations to update database schemas.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Pushed source code and managed branches via Azure Repos.
                  </ListItemText>
                </ListItem>
              </List>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">
              Dot Net Developer
            </Typography>
            <Typography variant="h6">
              Petrosmart Innovation, February 2023 – June 2023
            </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    Queried and managed data in SQL Server using views and stored procedures.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Built a financial data dashboard in Visual Basic; integrated JavaScript and JQuery for client-side functionality.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Designed and implemented a 4-layer architecture to enhance code scalability and maintainability.
                  </ListItemText>
                </ListItem>
              </List>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">
              Angular Developer
            </Typography>
            <Typography variant="h6">
              Axolotl Systems, March 2020 – December 2022
            </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    Developed modular UI components and improved performance through lazy loading.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Integrated JWT authentication with user roles, route guards, and authorizations flows.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Applied unit testing to services and components using Jasmine.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Managed application state efficiently using NgRx, and reducer pattern.
                  </ListItemText>
                </ListItem>
              </List>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">
              Software Developer
            </Typography>
            <Typography variant="h6">
              UVM Business Incubator, August 2021 – December 2021
            </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    Performed consulting services and developed software prototypes for clients looking for a customized solution for their business
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Callejero 180: Restaurant web application that allows clients to order food from home. Developed with Angular, Angular Material, MySQL, and Node.JS
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Pizza Detroit: Pizza restaurant landing page. Developed with HTML5, CSS3, and JavaScript
                  </ListItemText>
                </ListItem>
              </List>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}
