const rentals = [
  {
    id: 1,
    suburb: "Mount Eden, Auckland",
    image: "/images/rentals/2.jpeg",
    description:
      "Linger Lakeside is the perfect luxurious lakeside retreat for those who enjoy the finer things in life. This impressive 5 bedroom, 5 bathroom beauty nestled high above the lake, has it's own private path to the lakefront below.",
    type: "House",
    bedroom: 4,
    toiletbathroom: 2,
    lounge: 1,
    price: "$250",
  },
  {
    id: 2,
    suburb: "Mount Eden, Auckland",
    image: "/images/rentals/77.jpeg",
    description:
      "Linger Lakeside is the perfect luxurious lakeside retreat for those who enjoy the finer things in life. This impressive 5 bedroom, 5 bathroom beauty nestled high above the lake, has it's own private path to the lakefront below.",
    type: "Apartment",
    bedroom: 2,
    toiletbathroom: 1,
    lounge: 1,
    price: "$350",
  },

  {
    id: 3,
    suburb: "Epsom, Auckland",
    image: "/images/rentals/99.jpeg",
    description:
      "Linger Lakeside is the perfect luxurious lakeside retreat for those who enjoy the finer things in life. This impressive 5 bedroom, 5 bathroom beauty nestled high above the lake, has it's own private path to the lakefront below.",
    type: "Unit",
    bedroom: 1,
    toiletbathroom: 1,
    lounge: 1,
    price: "$260",
  },
  {
    id: 4,
    suburb: "CBD, Auckland",
    image: "/images/rentals/444.jpeg",
    description:
      "Linger Lakeside is the perfect luxurious lakeside retreat for those who enjoy the finer things in life. This impressive 5 bedroom, 5 bathroom beauty nestled high above the lake, has it's own private path to the lakefront below.",
    type: "Apartment",
    bedroom: 2,
    toiletbathroom: 1,
    lounge: 1,
    price: "$350",
  },
];
export function getRentals() {
  return rentals;
}
