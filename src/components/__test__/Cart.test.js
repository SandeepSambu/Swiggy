import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should render the Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const recommended = screen.getByText("Recommended (20)");

  fireEvent.click(recommended);

  const addBtn = screen.getAllByText("Add +");

  fireEvent.click(addBtn[0]);

  const items = screen.getAllByTestId("items");

  expect(items.length).toBe(21);
});
