import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with login button", () => {
  render(
    <BrowserRouter>
      {/*We are writing BrowserRouter because we used Link element in Header file and it comes from react-router-dom and to provide a router 
      we use BrowserRouter, but testing library can only test elements from only React*/}
      <Provider store={appStore}>
        {/*We are writing Provider because it comes from React-Redux, but testing library can only test elements from only React or JSX or 
        JavaScript*/}
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with login button having name as Login", () => {
  render(
    <BrowserRouter>
      {/*We are writing BrowserRouter because we used Link element in Header file and it comes from react-router-dom and to provide a router 
        we use BrowserRouter, but testing library can only test elements from only React*/}
      <Provider store={appStore}>
        {/*We are writing Provider because it comes from React-Redux, but testing library can only test elements from only React or JSX or 
          JavaScript*/}
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with cart items", () => {
  render(
    <BrowserRouter>
      {/*We are writing BrowserRouter because we used Link element in Header file and it comes from react-router-dom and to provide a router 
        we use BrowserRouter, but testing library can only test elements from only React*/}
      <Provider store={appStore}>
        {/*We are writing Provider because it comes from React-Redux, but testing library can only test elements from only React or JSX or 
          JavaScript*/}
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart(0)");

  /*This is known as regex form, used when we don't know the exact name*/
  const cartItems1 = screen.getByText(/Cart/);

  expect(cartItems1).toBeInTheDocument();
});

it("Should change Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      {/*We are writing BrowserRouter because we used Link element in Header file and it comes from react-router-dom and to provide a router 
          we use BrowserRouter, but testing library can only test elements from only React*/}
      <Provider store={appStore}>
        {/*We are writing Provider because it comes from React-Redux, but testing library can only test elements from only React or JSX or 
            JavaScript*/}
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(loginButton).toBeInTheDocument();
});
