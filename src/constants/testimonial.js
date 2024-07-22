 const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugiat repellendus, fugit aut illo ut esse similique",
    image: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Abraham Lincoln",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugiat repellendus, fugit aut illo ut esse similique",
    image: "https://picsum.photos/101/102",
  },
  {
    id: 3,
    name: "Alxeander Hamilton",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugiat repellendus, fugit aut illo ut esse similique",
    image: "https://picsum.photos/101/103",
  },
];

 const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


export { TestimonialData, settings };