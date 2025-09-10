// src/data/cardsData.ts
 import c1 from "../assets/images/image1.avif";
 import c2 from "../assets/images/DSC_3894.jpg";
 import c3 from "../assets/images/planning-picture.jpg";
  
export interface Card {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  fullDescription: string;
  additionalImages: string[];
}

export const cardsData: Card[] = [
  {
    id: 1,
    title: "Crafting Memorable Events",
    description:
      "Step into the world of event magic! Join us behind the scenes...",
    imageUrl:
      " https://cdnp0.stackassets.com/6a33e4d7caf88d7f482cfe2a8e60e2116d6f4813/store/1f120472cb9be4596563bb9c37e6769c014681a56f87458e199a9b07cb23/product_33010_product_shots4.jpg",
    fullDescription:
      "Step into the world of event magic with our team of experienced professionals. We specialize in creating memorable events tailored to your needs, whether it’s corporate events or intimate gatherings. Our services range from event planning to providing live entertainment, ensuring every detail is perfect.",
    additionalImages: [
      "https://media.gettyimages.com/id/83480768/photo/family-giving-birthday-party-to-grandmother.jpg?s=612x612&w=gi&k=20&c=LQy2PQNufjVy8UOBnGKrTLkUzYCSXOUP2Gsn72KObFk=",
      c1,
      "https://media.istockphoto.com/id/672558746/video/crowd-on-oncert.jpg?s=640x640&k=20&c=6G2cq02EPM4ie2w4b2vP8AEt4j6fa_A90xHZn9lAmD8=",
    ],
  },
  {
    id: 2,
    title: "Unlocking Digital Success",
    description: "Discover the power of digital services and technologies.",
    imageUrl: c2,
    fullDescription:
      "In today's fast-paced digital landscape, success depends on the right digital strategies. Our digital services can boost your business by improving workflows, enhancing customer engagement, and driving innovation in your industry.",
    additionalImages: [
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmFwyzLmTDfIpGDX4Q9o2PAPySP5ASTS56P7r1EnlcgY0aqiVg",
      "https://i.pinimg.com/originals/ec/8f/12/ec8f129fe6175d7074f6e1826a232132.jpg",
      "https://omgcontent.affino.com/AcuCustom/Sitename/DAM/086/Bridal-Trends-Pinterest_1.png",
    ],
  },
  {
    id: 3,
    title: "Bauhaus's Impact on Industry Trends",
    description:
      "Stay ahead of the curve with Bauhaus! Dive into the future of trends.",
    imageUrl: c3,
    fullDescription:
      "Explore the cutting-edge innovations and trends shaping the future of various industries. From technology to sustainable solutions, discover how Bauhaus is driving positive change.",
    additionalImages: [
      "https://i.pinimg.com/736x/7b/df/4f/7bdf4f0ccd137e0da58779d6bba9309a.jpg",
      "https://i.pinimg.com/736x/7d/2a/43/7d2a43f7f14e63164e0992f59df42405.jpg",
      "https://img.freepik.com/premium-photo/grand-wedding-stage-with-luxurious-decor_641503-148171.jpg",
    ],
  },
];
