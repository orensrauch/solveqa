import React from "react";
import { Grid } from "@material-ui/core";
import MediaCard from "./MediaCard.component";
import { Fade } from "react-reveal";

//all the challenges cards to appear on home page
function HomeChallenge() {
  return (
    <Fade bottom duration={2000} distance="20px">
      <Grid
        container
        xs={12}
        space-around="center"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        margin="4px"
      >
        <MediaCard
          imageSrc="https://picsum.photos/id/866/700/400"
          challenge="Challenge 1"
          id="1"
          descriptionSrc="This is Challenge QA "
        />

        <MediaCard
          imageSrc="https://picsum.photos/id/867/700/400"
          challenge="Challenge 2"
          id="2"
          descriptionSrc="This is Challenge QA "
        />

        <MediaCard
          imageSrc="https://picsum.photos/id/868/700/400"
          challenge="Challenge 3"
          id="3"
          descriptionSrc="This is Challenge QA "
        />

        <MediaCard
          imageSrc="https://picsum.photos/id/869/700/400"
          challenge="Challenge 4"
          descriptionSrc="This is Challenge QA "
        />

        <MediaCard
          imageSrc="https://picsum.photos/id/866/700/400"
          challenge="Challenge 5"
          descriptionSrc="This is Challenge QA "
        />

        <MediaCard
          imageSrc="https://picsum.photos/id/867/700/400"
          challenge="Challenge 6"
          descriptionSrc="This is Challenge QA "
        />

        <MediaCard
          imageSrc="https://picsum.photos/id/868/700/400"
          challenge="Challenge 7"
          descriptionSrc="This is Challenge QA "
        />

        <MediaCard
          imageSrc="https://picsum.photos/id/869/700/400"
          challenge="Challenge 8"
          descriptionSrc="This is Challenge QA "
        />
        <MediaCard
          imageSrc="https://picsum.photos/id/866/700/400"
          challenge="Challenge 9"
          descriptionSrc="This is Challenge QA "
        />

        <MediaCard
          imageSrc="https://picsum.photos/id/867/700/400"
          challenge="Challenge 10"
          descriptionSrc="This is Challenge QA "
        />

        <MediaCard
          imageSrc="https://picsum.photos/id/868/700/400"
          challenge="Challenge 11"
          descriptionSrc="This is Challenge QA "
        />

        <MediaCard
          imageSrc="https://picsum.photos/id/869/700/400"
          challenge="Challenge 12"
          descriptionSrc="This is Challenge QA "
        />

        <MediaCard
          imageSrc="https://picsum.photos/id/866/700/400"
          challenge="Challenge 13"
          descriptionSrc="This is Challenge QA "
        />

        <MediaCard
          imageSrc="https://picsum.photos/id/867/700/400"
          challenge="Challenge 14"
          descriptionSrc="This is Challenge QA "
        />

        <MediaCard
          imageSrc="https://picsum.photos/id/868/700/400"
          challenge="Challenge 15"
          descriptionSrc="This is Challenge QA "
        />

        <MediaCard
          imageSrc="https://picsum.photos/id/869/700/400"
          challenge="Challenge 16"
          descriptionSrc="This is Challenge QA "
        />
      </Grid>
    </Fade>
  );
}

export default HomeChallenge;
