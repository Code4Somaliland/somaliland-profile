import React from "react";



function Gallery() {
  var images = [
    {
      src: "/gallery/parliament1960.jpg",
      desc: "Somaliland Parliament 1960",
      sub: "Somaliland Parliament 1960",
    },
    {
      src: "/gallery/currency1960.jpg",
      desc: "Somaliland currency before 1960",
      sub: "Somaliland currency ",
    },
    {
      src: "/gallery/hargeisa.jpg",
      desc: "Capital City of Somaliland",
      sub: "Hargeisa ",
    },
    {
      src: "/gallery/musebixi.jpg",
      desc: "Somaliland President",
      sub: "H.E Muse Bihi Abid ",
    },
    {
      src: "/gallery/people.jpg",
      desc: "Somaliland People",
      sub: "18 May celebrations",
    },
  ];
  var settings = {
    columnCount: {
      default: 5,
      mobile: 3,
      tab: 4,
    },
    mode: "dark",
  };
  return (
    <div>
    
    </div>
  );
}

export default Gallery;
