import * as actionTypes from './actionTypes'
import IMG1 from '../../images/cup.png'
import IMG2 from '../../images/panties.png'
import IMG3 from '../../images/disc.png'
import IMG4 from '../../images/patch.png'
import IMG5 from '../../images/bottle.png'

const INITIAL_STATE = {
    products: [
      {
        id: 4,
        title: "Heat Patch (5 Pack)",
        description:
          <p> 
            Comes in a pack of 5 patches <br />
            Single use heating patches <br />
            Made for menstrual cramps because nothing should cramp your style! <br />
            heat on the go <br />
          </p>
        ,
        price: 15000,
        image: IMG4,
        quantity: 6
      },
      {
      id: 1,
      title: "Menstrual Cup",
      description: 
        <p>
          Comes with one cup and one storage container <br />
          100% medical-grade silicone <br />
          Soft and flexible enough for easy insertion <br />
          Firm rim that pops open and creates a leak-free seal <br />
          Capacity of 2-3 pads
        </p>
      ,
      price: 50000,
      image: IMG1,
      quantity: 6
    },
    {
      id: 3,
      title: "Menstrual Disc",
      description:
        <p>
          Comes with one disc and one storage container <br />
          100% medical-grade silicone <br />
          Soft and flexible enough for easy insertion <br />
          Firm rim that keeps it in place and creates a leak-free & suction-free seal <br />
          Capacity of 3-4 pads
        </p>
      ,
      price: 60000,
      image: IMG3,
      quantity: 6
    },
    {
      id: 5,
      title: "Hot Water Bottle",
      description:
        <p> 
          Comes with one bottle and belt <br />
          Not your regular hot water bottle <br />
          Reusable hot water bottle for period cramps <br />
          A hands-free bottle that placed inside the pouch and the belt wrapped around your abdomen <br />
          No need to hold hold it. <br />
        </p>
      ,
      price: 60000,
      image: IMG5,
      quantity: 6
    },
    {
      id: 2,
      title: "Menstrual Underwear",
      description:
        <p>
          Comes with 2 pieces of underwear of any color available <br />
          Absorbent, breathable, hygienic and antibacterial <br />
          Recommended for light flow and for the last days of your period <br />
          Wash by hand or washing machine in cold water <br />
        </p>
      ,
      price: 50000,
      image: IMG2,
      quantity: 0
    },
  ],
  cart: [],
  currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      }; 
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;