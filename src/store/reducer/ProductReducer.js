import Chicken from "../../assets/images/chicken.jpg";
const initState = {
  products: [
    {
      id: 1,
      name: "Food",
      image: Chicken,
      price: 599,
      discount: 5,
      discountPrice: 599 - (5 / 100) * 599,
      quantity: 1,
      desc: "Testy",
    },
    {
      id: 2,
      name: "Food",
      image: Chicken,
      price: 599,
      discount: 5,
      discountPrice: 599 - (5 / 100) * 599,
      quantity: 1,
      desc: "pure cotton,color Black, ",
    },
    {
      id: 3,
      name: "Food",
      image: Chicken,
      price: 599,
      discount: 5,
      discountPrice: 599 - (5 / 100) * 599,
      quantity: 1,
      desc: "Testy",
    },
    {
      id: 4,
      name: "Food",
      image: Chicken,
      price: 599,
      discount: 5,
      discountPrice: 599 - (5 / 100) * 599,
      quantity: 1,
      desc: "Testy ",
    },
    {
      id: 5,
      name: "Man T-shirt",
      image: Chicken,
      price: 599,
      discount: 5,
      discountPrice: 599 - (5 / 100) * 599,
      quantity: 1,
      desc: "Testy ",
    },
  ],
     product : {}
};
const ProductsReducer = (state=initState,action) => {
     
      switch(action.type){
            case "PRODUCT":
               return {...state,product:state.products.find(product=> product.id=== parseInt (action.id))}
            default:
             return state
      }

};

export default ProductsReducer;