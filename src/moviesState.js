//Import Images
import athlete from "./assets/images/athlete-small.png"
import goodTimes from "./assets/images/goodtimes-small.png"
import theRacer from "./assets/images/theracer-small.png"
import athleteTwo from "./assets/images/athlete2.png"
import goodTimesTwo from "./assets/images/good-times2.jpg"
import theRacerTwo from "./assets/images/the-racer2.jpg"

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athleteTwo,
      url: "/our-work/the-athlete",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodTimes,
      url: "/our-work/good-times",
      secondaryImg: goodTimesTwo,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
              "“Lorem Ipsum is simply dummy text of the printßing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theRacer,
      url: "/our-work/the-racer",
      secondaryImg: theRacerTwo,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
