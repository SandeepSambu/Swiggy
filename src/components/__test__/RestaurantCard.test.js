import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard.js";

test("Should render Restaurant Card component with props data", () => {
  /*When trying to render a component with props, should give the props data as a mock data while testing*/
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

// test("Should render Restaurant Card component with Promoted Label", () => {
//   render(withPromotedLable);
// });
