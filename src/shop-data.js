const SHOP_DATA = [
  {
    title: 'Hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://source.unsplash.com/800x450/?hat,brown_brim',
        price: 25,
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://source.unsplash.com/800x450/?hat,blue_beanie',
        price: 18,
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://source.unsplash.com/800x450/?hat,brown_cowboy',
        price: 35,
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://source.unsplash.com/800x450/?hat,grey_brim',
        price: 25,
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://source.unsplash.com/800x450/?hat,green_beanie',
        price: 18,
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://source.unsplash.com/800x450/?hat,palm_tree_cap',
        price: 14,
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://source.unsplash.com/800x450/?hat,red_beanie',
        price: 18,
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://source.unsplash.com/800x450/?hat,wolf_cap',
        price: 14,
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://source.unsplash.com/800x450/?hat,blue_snapback',
        price: 16,
      },
    ],
  },
  {
    title: 'Sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://source.unsplash.com/800x450/?sneaker,adidas_nmd',
        price: 220,
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://source.unsplash.com/800x450/?sneaker,yeezy',
        price: 280,
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://source.unsplash.com/800x450/?sneaker,black_converse',
        price: 110,
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl:
          'https://source.unsplash.com/800x450/?sneaker,white_nike_high_tops',
        price: 160,
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://source.unsplash.com/800x450/?sneaker,nikes_red',
        price: 160,
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://source.unsplash.com/800x450/?sneaker,nike_brown',
        price: 160,
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://source.unsplash.com/800x450/?sneaker,nike_funky',
        price: 190,
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://source.unsplash.com/800x450/?sneaker,timberlands',
        price: 200,
      },
    ],
  },
  {
    title: 'Jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://source.unsplash.com/800x450/?jacket,black_shearling',
        price: 125,
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl:
          'https://source.unsplash.com/800x450/?jacket,blue_jean_jacket',
        price: 90,
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl:
          'https://source.unsplash.com/800x450/?jacket,grey_jean_jacket',
        price: 90,
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://source.unsplash.com/800x450/?jacket,brown_shearling',
        price: 165,
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://source.unsplash.com/800x450/?jacket,brown_trench',
        price: 185,
      },
    ],
  },
  {
    title: 'Womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://source.unsplash.com/800x450/?women,blue_tanktop',
        price: 25,
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://source.unsplash.com/800x450/?women,floral_blouse',
        price: 20,
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://source.unsplash.com/800x450/?women,floral_skirt',
        price: 80,
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl:
          'https://source.unsplash.com/800x450/?women,red_polka_dot_dress',
        price: 80,
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://source.unsplash.com/800x450/?women,striped_sweater',
        price: 45,
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl:
          'https://source.unsplash.com/800x450/?women,yellow_track_suit',
        price: 135,
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://source.unsplash.com/800x450/?women,white_vest',
        price: 20,
      },
    ],
  },
  {
    title: 'Mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://source.unsplash.com/800x450/?men,camo_vest',
        price: 325,
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://source.unsplash.com/800x450/?men,floral_shirt',
        price: 20,
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://source.unsplash.com/800x450/?men,long_sleeve',
        price: 25,
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://source.unsplash.com/800x450/?men,pink_shirt',
        price: 25,
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://source.unsplash.com/800x450/?men,roll_up_jean_shirt',
        price: 40,
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://source.unsplash.com/800x450/?men,polka_dot_shirt',
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
