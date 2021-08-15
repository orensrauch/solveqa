import React from "react";
import { Grid } from "@material-ui/core";
import MediaCard from "./MediaCard.component";

//all the challenges cards to appear on home page
function HomeChallenge() {
  return (
    <Grid
      container
      xs={12}
      space-around="center"
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <MediaCard
        imageSrc="https://picsum.photos/id/866/700/400"
        titleSrc="Challenge 1"
        descriptionSrc="This is Challenge QA "
      />

      <MediaCard
        imageSrc="https://picsum.photos/id/867/700/400"
        titleSrc="Challenge 2"
        descriptionSrc="This is Challenge QA "
      />

      <MediaCard
        imageSrc="https://picsum.photos/id/868/700/400"
        titleSrc="Challenge 3"
        descriptionSrc="This is Challenge QA "
      />

      <MediaCard
        imageSrc="https://picsum.photos/id/869/700/400"
        titleSrc="Challenge 4"
        descriptionSrc="This is Challenge QA "
      />

      <MediaCard
        imageSrc="https://picsum.photos/id/866/700/400"
        titleSrc="Challenge 5"
        descriptionSrc="This is Challenge QA "
      />

      <MediaCard
        imageSrc="https://picsum.photos/id/867/700/400"
        titleSrc="Challenge 6"
        descriptionSrc="This is Challenge QA "
      />

      <MediaCard
        imageSrc="https://picsum.photos/id/868/700/400"
        titleSrc="Challenge 7"
        descriptionSrc="This is Challenge QA "
      />

      <MediaCard
        imageSrc="https://picsum.photos/id/869/700/400"
        titleSrc="Challenge 8"
        descriptionSrc="This is Challenge QA "
      />
      <MediaCard
        imageSrc="https://picsum.photos/id/866/700/400"
        titleSrc="Challenge 9"
        descriptionSrc="This is Challenge QA "
      />

      <MediaCard
        imageSrc="https://picsum.photos/id/867/700/400"
        titleSrc="Challenge 10"
        descriptionSrc="This is Challenge QA "
      />

      <MediaCard
        imageSrc="https://picsum.photos/id/868/700/400"
        titleSrc="Challenge 11"
        descriptionSrc="This is Challenge QA "
      />

      <MediaCard
        imageSrc="https://picsum.photos/id/869/700/400"
        titleSrc="Challenge 12"
        descriptionSrc="This is Challenge QA "
      />

      <MediaCard
        imageSrc="https://picsum.photos/id/866/700/400"
        titleSrc="Challenge 13"
        descriptionSrc="This is Challenge QA "
      />

      <MediaCard
        imageSrc="https://picsum.photos/id/867/700/400"
        titleSrc="Challenge 14"
        descriptionSrc="This is Challenge QA "
      />

      <MediaCard
        imageSrc="https://picsum.photos/id/868/700/400"
        titleSrc="Challenge 15"
        descriptionSrc="This is Challenge QA "
      />

      <MediaCard
        imageSrc="https://picsum.photos/id/869/700/400"
        titleSrc="Challenge 16"
        descriptionSrc="This is Challenge QA "
      />
    </Grid>
  );
}

export default HomeChallenge;
