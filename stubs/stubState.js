const stubState = {
  "activeView": {
    "viewName": "ORDER_MANAGER",
    "id": null
  },
  orders:[
    {
      name:'item 1',
      items: [
        {
          "id": 1,
          "name": "Burger",
          "icon": "burger.jpg",
          "price": 3.5,
        }, {
          "id": 1,
          "name": "Drink",
          "icon": "drink.jpg",
          "price": 1,
        }, {
          "id": 1,
          "name": "Side",
          "icon": "side.jpg",
          "price": 2,
        },
      ],
      id: 1,
      paid: false,
      completed: false,
      editing: false,
    }, {
      name:'item 2',
      items: [
        {
          "id": 1,
          "name": "Burger",
          "icon": "burger.jpg",
          "price": 3.5,
        }, {
          "id": 1,
          "name": "Side",
          "icon": "side.jpg",
          "price": 2,
        },
      ],
      id: 2,
      paid: false,
      completed: false,
      editing: false,
    }, {
      name:'item 3',
      items: [
        {
          "id": 1,
          "name": "Side",
          "icon": "side.jpg",
          "price": 2,
        },
      ],
      id: 3,
      paid: false,
      completed: false,
      editing: false,
    },
  ]
};

export default stubState;
