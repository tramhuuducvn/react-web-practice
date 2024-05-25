import OrderPageProvider, { useOrderState } from "context/OrderContext";
import { observer } from "mobx-react-lite";
import OrderState from "mobx/order";
import { useState } from "react";

// Don't forget to wrap this function by observer(), or your state won't update when there are any state changes 😁😁😁
const ListItems = observer(() => {
    const state = useOrderState();

    return (
        <div>
            <ul>
                {state.items.map((item) => {
                    return (
                        <li>
                            <div>{item.product.name}</div>
                            <div>{item.amount}</div>
                            <input
                                type="button"
                                value="increase"
                                onClick={() => {
                                    //Handle increasing item
                                }}
                            />
                            <input
                                type="button"
                                value="decrease"
                                onClick={() => {
                                    //Handle decreasing item
                                }}
                            />
                            <input
                                type="button"
                                value="delete"
                                onClick={() => {
                                    //Handle deleting item
                                }}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
});

// I'm a bit lazy, so you can use a similar mindset to the ListItems component above for coding 😅😅😅
// Don't forget to wrap this function by observer(), or your state won't update when there are any state changes 😁😁😁
const DeliveryMilestone = observer(() => {
    const state = useOrderState();
    return <></>;
});

const OrderPage = () => {
    const [state] = useState(() => new OrderState());
    return (
        <OrderPageProvider state={state}>
            <div>
                <ListItems />
                <DeliveryMilestone />
            </div>
        </OrderPageProvider>
    );
};

export default OrderPage;
