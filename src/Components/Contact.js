import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Contact = () => {
  return (
    <>
    {/* material ui card */}
        {/* <Card sx={{ maxWidth: 345 }}> */}
        <div className = "text-center my-5">
          <Typography gutterBottom variant="h5" component="div" sx= {{mb:3}}>
            Contact Us
          </Typography>
        <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/premium-vector/map-with-destination-location-point-city-map-with-street-river-gps-map-navigator-concept_34645-1078.jpg?w=2000"
            alt="Location"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Location
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1234 Main Street, Anywhere, USA
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Contact Number
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123-456-7890
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Email
            </Typography>
            <Typography variant="body2" color="text.secondary">
              LoL@gmail.com
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    </>
  )
}

export default Contact