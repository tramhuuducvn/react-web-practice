import OrderState from "mobx/order";
import { createContext, useContext } from "react";

/**
 * Interface Definition
 * This defines the types for the properties that the OrderPageProvider component will accept.
 */
interface Props {
    children: React.ReactElement;
    state: OrderState;
}

// Create a context to share the OrderState props, yes it's can be undefined
const Context = createContext<OrderState | undefined>(undefined);

/**
 * This is a functional component that acts as a context provider
 * @param props Props
 * @returns It returns a Context.Provider component that provides the state (an instance of OrderState) to its children.
 */
const OrderPageProvider: React.FC<Props> = (props: Props) => {
    return <Context.Provider value={props.state}>{props.children}</Context.Provider>;
};

export default OrderPageProvider;

/**
 * This is a custom hook that makes it easier to access the OrderState from the context.
 * @returns It casts the value of the context to OrderState and returns it
 */
export const useOrderState = () => {
    const state = useContext(Context);
    return state as OrderState;
};
