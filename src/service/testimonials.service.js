import img01 from "../assets/img/greek salad.jpg";
import img02 from "../assets/img/bruchetta.jpg";
import img03 from "../assets/img/lemon dessert.jpg";
import img04 from "../assets/img/Mario and Adrian A.jpg";

export const getTestimonials = async () =>
  await [
    {
      id: "01",
      name: "John Smith",
      photo: img01,
      rating: 4.5,
      review:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: "02",
      name: "John Smith",
      photo: img02,
      rating: 4.5,
      review:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: "03",
      name: "John Smith",
      photo: img03,
      rating: 4.5,
      review:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: "04",
      name: "John Smith",
      photo: img04,
      rating: 4.5,
      review:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
  ];
