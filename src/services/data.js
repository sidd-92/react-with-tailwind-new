const recipiesData = [
  {
    name: "Aloo Palak Subji",
    description_text: "Some Text",
    description_html: "<div className='font-bold text-3xl'>Some Text</div>",
    cusine: [
      {
        name: "North Indian",
        _id: 12,
      },
      {
        name: "Continetial",
        _id: 13,
      },
    ],
    category: [
      { name: "lunch", _id: 9 },
      { name: "dinner", _id: 19 },
      { name: "indian bread", _id: 89 },
    ],
    ingredients: [
      { name: "2 Strands Of Coriander Leaves", _id: 1 },
      { name: "1 Cup water", _id: 2 },
      { name: "1/2 tsp mustard seeds", _id: 3 },
      { name: "2 Tomatoes", _id: 4 },
      { name: "1/2 tsp cooking oil", _id: 5 },
    ],
    prep_time: "20 Mins",
    cook_time: "15 Mins",
    fermenation_time: null,
    soak_time: null,
    rest_time: "5 Mins",
    instructions: [
      {
        for: "Making Roti Dough",
        steps: [
          { step_no: 1, step: "Take 1 cup of atta and put in a large bowl" },
          {
            step_no: 2,
            step: "Take 1 cup of water and slowely add water in the bowl and start mixing with hands",
          },
        ],
      },
      {
        for: "Making Aloo Palak Subji",
        steps: [
          { step_no: 1, step: "Cut 2 tomatoes into equal pieces" },
          {
            step_no: 2,
            step: "place kadai onto the stove and turn on the flame and keep it low",
          },
          {
            step_no: 3,
            step: "add 1/2 tsp oil into the kadai and let the oil heat up a bit",
          },
        ],
      },
    ],
  },
];
