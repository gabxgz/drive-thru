const stubState = {
  nextOrder: 4,
  orders:[
    {
      items: [
        {
          "id": 1,
          "name": "Burger",
          "icon": "burger.jpg",
          "price": 3.5,
        }, {
          "id": 2,
          "name": "Drink",
          "icon": "drink.jpg",
          "price": 1,
        }, {
          "id": 3,
          "name": "Side",
          "icon": "side.jpg",
          "price": 2,
        },
      ],
      total: '6.50',
      id: 1,
      paid: false,
      completed: false,
      editing: false,
    }, {
      items: [
        {
          "id": 1,
          "name": "Burger",
          "icon": "burger.jpg",
          "price": 3.5,
        }, {
          "id": 2,
          "name": "Side",
          "icon": "side.jpg",
          "price": 2,
        },
      ],
      total: "5.50",
      id: 2,
      paid: false,
      completed: false,
      editing: false,
    }, {
      items: [
        {
          "id": 1,
          "name": "Side",
          "icon": "side.jpg",
          "price": 2,
        },
      ],
      total: "2",
      id: 3,
      paid: false,
      completed: false,
      editing: false,
    },
  ],
};

export default stubState;
