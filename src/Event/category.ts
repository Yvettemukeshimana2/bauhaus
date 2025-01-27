

// Define the ItemType for items in each category
export type ItemType = {
  name: string;
  description: string;
  image: string;
};

// Define the CategoryType for categories containing items
export type CategoryType = {
  name: string;
  items: ItemType[];
};
export const categories:CategoryType[] = [
  {
    name: "Vendor",
    items: [
      {
        name: "Catering",
        description: "Professional catering services for any event.",
        image:
          "https://media-api.xogrp.com/images/4de847f3-6912-4d21-8d88-42b8645162fa",
      },
      {
        name: "Photography",
        description: "Capture your memories with professional photography.",
        image:
          "http://roamnewroads.ca/wp-content/uploads/2016/04/shutterstock_313805903-1050x673.jpg",
      },
      {
        name: "DJ",
        description: "Get the party started with our DJ services.",
        image:
          "http://nocturnosonline.com/wp-content/uploads/2020/02/5658/los-mejores-cursos-de-dj-en-barcelona-aprende-a-pinchar-como-un-dj-profesional.jpg",
      },
      {
        name: "cakes",
        description: "Get the party started with our DJ services.",
        image:
          "https://i.pinimg.com/originals/a2/5c/f3/a25cf3b48e3f9afb870247e1013faee9.jpg",
      },
      {
        name: "Entertainment ",
        description: "Get the party started with our DJ services.",
        image:
          "https://mythsmusic.com/wp-content/uploads/2019/07/Entertainment.jpg",
      },
      {
        name: "audio and video",
        description: "Get the party started with our DJ services.",
        image:
          " https://tse4.mm.bing.net/th?id=OIP.bXKlIHgY30K7nIYaJ0dgWAHaE8&pid=Api&P=0&h=220",
      },
    ],
  },
  {
    name: "Venue",
    items: [
      {
        name: "Bugesera",
        description: "Spacious and elegant halls for events.",
        image:
          "https://gmkintlpartners.com/wp-content/uploads/2022/02/INTARE-ARENA-@-GMK-1-768x461.jpg",
      },
      {
        name: "Kicukiro",
        description: "Beautiful gardens for outdoor events.",
        image: "https://intare.rw/images/gallery/popup/pavillion-01-popup.jpg",
      },
      {
        name: "Gisozi",
        description: "Stylish terraces with stunning views.",
        image:
          "https://tse2.mm.bing.net/th?id=OIP.dXfsIMct-UIe17KVanZDhwHaE8&pid=Api&P=0&h=220",
      },
      {
        name: "Kacyiru",
        description: "Stylish terraces with stunning views.",
        image:
          "https://pinnaclegardenskigali.com/wp-content/uploads/2022/03/243031491_1998490510324949_1643438225091676155_n.jpg",
      },
      {
        name: "Kabeza",
        description: "Stylish terraces with stunning views.",
        image:
          "https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2019/02/27/cactus-green-park-project_0.jpg",
      },
      // {
      //   name: "Heaven Garden Rebero",
      //   description: "Stylish terraces with stunning views.",
      //   image:
      //     "https://i.ytimg.com/vi/uV7S7auN8ZA/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWChRMA8=&rs=AOn4CLAo_S-_oExaHPF2OrfRD9565jrTMA",
      // },
      // {
      //   name: "Parkland Garden",
      //   description: "Stylish terraces with stunning views.",
      //   image:
      //     "https://tse3.mm.bing.net/th?id=OIP.HORNhePfvH7gw_OUWg1-dQHaFj&pid=Api&P=0&h=220",
      // },
      // {
      //   name: "Kagarama Garden",
      //   description: "Stylish terraces with stunning views.",
      //   image:
      //     "https://i.pinimg.com/736x/1b/51/0c/1b510c839548c52d83c62d0918f0ef68--le-pain-green-walls.jpg",
      // },
      // {
      //   name: "Sunday Park",
      //   description: "Stylish terraces with stunning views.",
      //   image:
      //     "https://cdn.pixabay.com/photo/2016/11/06/15/58/sunday-1803312_1280.jpg",
      // },
      // {
      //   name: "Parnarama Hope Garden",
      //   description: "Stylish terraces with stunning views.",
      //   image:
      //     "https://lh5.googleusercontent.com/p/AF1QipPzp-zOJ0grRnjHwtZYMczVOIku_B9xm54zysS9=w408-h306-k-no",
      // },
    ],
  },
  {
    name: "Rental",
    items: [
      {
        name: "Glass",
        description: "High-quality glassware for your events.",
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20230906/pngtree-four-wine-glasses-standing-upright-in-the-middle-of-a-glass-image_13293785.jpg",
      },
      {
        name: "Chairs",
        description: "Comfortable chairs for all occasions.",
        image:
          "https://www.brides.com/thmb/zTNZ98p69zUwRbvBfMFiDPy1e2s=/6720x4480/filters:no_upscale():max_bytes(150000):strip_icc()/KSW02471-09bf7839d7db4339b15a4fc1b9a777c8.JPG",
      },
      {
        name: "Tables",
        description: "Sturdy and elegant tables for events.",
        image:
          "http://emmalovesweddings.com/wp-content/uploads/2017/11/elegant-round-and-rectangle-wedding-reception-table-layout-ideas.jpg",
      },
    ],
  },
];
