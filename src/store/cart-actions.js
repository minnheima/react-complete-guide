import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://react-http-ad57f-default-rtdb.firebaseio.com/cart.json");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        //cartActions.replaceCart(cartData);
        cartActions.replaceCart({
          items: cartData.items || [], // cart가 비어질 때  state.itmes.find()에서 에러남, 빈배열[]이거나 cartData가 있는 상태로 값을 넣어줘야함
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch("https://react-http-ad57f-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });
      // body: JSON.stringify(cart) 로 전체를 보내는게 아니고 changed가 포함되지 않은 새로운 객체로 보낸다

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
