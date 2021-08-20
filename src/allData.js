import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
//SEO Related settings
const seo = {
    title: "Solve QA Challenges",
    description:
        "A passionate individual who thrives to success in the automation testing field can find multi challenges to complete in order to gain or brush testing skills",
    og: {
        title: "Solve QA Challenges",
        type: "website",
        url: "http://solveqa.com/",
    },
};
//Home Page


//Home Challenges by order
const challenges = {
    challenges: [
        {
            imageSrc: "https://picsum.photos/id/866/700/400",
            title: "New Hope",
            id: "1",
            subtitle: "This Challenge is for a new begining QA tester",
            challenge_link: "/newHope",
        },
        {
            imageSrc: "https://picsum.photos/id/867/700/400",
            title: "Return of the Tester",
            id: "2",
            subtitle: "This is Challenge QA ",
            challenge_link: "/returnOfTheTester",
        },
        {
            imageSrc: "https://picsum.photos/id/863/700/400",
            title: "todo",
            id: "3",
            subtitle: "This is Challenge QA ",
            challenge_link: "/todo",
        },
        {
            imageSrc: "https://picsum.photos/id/864/700/400",
            title: "Challenge 3",
            id: "4",
            subtitle: "This is Challenge QA ",
            challenge_link: "/babaYaga",
        },
        {
            imageSrc: "https://picsum.photos/id/865/700/400",
            title: "Challenge 1",
            id: "5",
            subtitle: "This is Challenge QA ",
            challenge_link: "/newhope",
        },
        {
            imageSrc: "https://picsum.photos/id/826/700/400",
            title: "Challenge 1",
            id: "6",
            subtitle: "This is Challenge QA ",
            challenge_link: "/newhope",
        },
        {
            imageSrc: "https://picsum.photos/id/866/700/400",
            title: "Challenge 1",
            id: "7",
            subtitle: "This is Challenge QA ",
            challenge_link: "/newhope",
        },
        {
            imageSrc: "https://picsum.photos/id/866/700/400",
            title: "Challenge 1",
            id: "8",
            subtitle: "This is Challenge QA ",
            challenge_link: "/newhope",
        },
        {
            imageSrc: "https://picsum.photos/id/866/700/400",
            title: "Challenge 1",
            id: "9",
            subtitle: "This is Challenge QA ",
            challenge_link: "/newhope",
        },
        {
            imageSrc: "https://picsum.photos/id/866/700/400",
            title: "Challenge 1",
            id: "10",
            subtitle: "This is Challenge QA ",
            challenge_link: "/newhope",
        },
        {
            imageSrc: "https://picsum.photos/id/866/700/400",
            title: "Challenge 1",
            id: "11",
            subtitle: "This is Challenge QA ",
            challenge_link: "/newhope",
        },
        {
            imageSrc: "https://picsum.photos/id/866/700/400",
            title: "Challenge 1",
            id: "12",
            subtitle: "This is Challenge QA ",
            challenge_link: "/newhope",
        },
        {
            imageSrc: "https://picsum.photos/id/866/700/400",
            title: "Challenge 1",
            id: "13",
            subtitle: "This is Challenge QA ",
            challenge_link: "/newhope",
        },
        {
            imageSrc: "https://picsum.photos/id/866/700/400",
            title: "Challenge 1",
            id: "14",
            subtitle: "This is Challenge QA ",
            challenge_link: "/newhope",
        },
        {
            imageSrc: "https://picsum.photos/id/866/700/400",
            title: "Challenge 1",
            id: "15",
            subtitle: "This is Challenge QA ",
            challenge_link: "/newhope",
        },
        {
            imageSrc: "https://picsum.photos/id/866/700/400",
            title: "SEGEV",
            id: "16",
            subtitle: "This is Challenge QA ",
            challenge_link: "/segev",
        },
    ]
}

//Navbar data
const links = [
    {
      id: 1,
      url: '/',
      text: 'home',
    },
    {
      id: 2,
      url: '/about',
      text: 'about',
    },
    {
      id: 3,
      url: '/help',
      text: 'help',
    },
    {
      id: 4,
      url: '/documentation',
      text: 'documentation',
    },
    {
      id: 5,
      url: '/profile',
      text: 'profile',
    },
  ];
  
   const social = [
    {
      id: 1,
      url: 'https://www.twitter.com',
      icon: <FaFacebook />,
    },
    {
      id: 2,
      url: 'https://www.twitter.com',
      icon: <FaTwitter />,
    },
    {
      id: 3,
      url: 'https://www.twitter.com',
      icon: <FaLinkedin />,
    },

  ];






export {
    seo,
    challenges,
    social,
    links
};