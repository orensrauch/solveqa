/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 330,
    margin: 2,

  },
  media: {
    height: 180,
  },
});
export default (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageSrc}
          title={props.titleSrc}
        />
        <CardContent > 
        
          <Typography gutterBottom variant="h5" component="h2" >
            {props.id}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {props.descriptionSrc}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary"
          onClick>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};


