const SHOP_DATA =  [
    {
      id: 1,
      title: 'Clothes',
      routeName: 'clothes',
      items: [
        {
          id: 1,
          name: 'Yellow Rain Coat',
          imageUrl: 'https://images.unsplash.com/photo-1530041539828-114de669390e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          price: 40
        },
        {
          id: 2,
          name: 'Yellow Hat',
          imageUrl: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
          price: 10
        },
        {
          id: 3,
          name: 'Mouse Hoodie',
          imageUrl: 'https://images.unsplash.com/photo-1576873689575-e3d860bccdc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          price: 35
        },
        {
          id: 4,
          name: 'Fancy Hoodie',
          imageUrl: 'https://images.unsplash.com/photo-1578783204979-6dd8f7603377?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          price: 50
        },
        {
          id: 5,
          name: 'Cosy Hoodie',
          imageUrl: 'https://images.unsplash.com/photo-1577175825592-199971058239?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          price: 30
        },
        {
          id: 6,
          name: 'Cosy Winter Sweater',
          imageUrl: 'https://images.unsplash.com/photo-1577447217290-a609cd45101f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          price: 40
        },
        {
          id: 7,
          name: 'Birthday Costume',
          imageUrl: 'https://images.unsplash.com/photo-1579981590277-3c9d25700f6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
          price: 35
        },
        {
          id: 8,
          name: 'Red West',
          imageUrl: 'https://images.unsplash.com/photo-1579981585180-a607ac041812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
          price: 14
        },
        {
          id: 9,
          name: 'French Beret',
          imageUrl: 'https://images.unsplash.com/photo-1517519014922-8fc06b814a0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Toys',
      routeName: 'sneakers',
      items: [
        {
          id: 1,
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          price: 220
        },
        {
          id: 2,
          name: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          price: 280
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          price: 110
        },
        {
          id: 4,
          name: 'Nike White AirForce',
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          price: 160
        },
        {
          id: 5,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 6,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 7,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 8,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 1,
          name: 'Black Jean Shearling',
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          price: 125
        },
        {
          id: 2,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          price: 90
        },
        {
          id: 3,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          price: 90
        },
        {
          id: 4,
          name: 'Brown Shearling',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          price: 165
        },
        {
          id: 5,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 1,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25
        },
        {
          id: 2,
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20
        },
        {
          id: 3,
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80
        },
        {
          id: 4,
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80
        },
        {
          id: 5,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 6,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 7,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 1,
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325
        },
        {
          id: 2,
          name: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20
        },
        {
          id: 3,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25
        },
        {
          id: 4,
          name: 'Pink T-shirt',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          price: 25
        },
        {
          id: 5,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 6,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ]
  
  export default SHOP_DATA;