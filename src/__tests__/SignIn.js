import {
  fireEvent,
  render,
  screen,
  userEvent,
  waitFor,
} from "@testing-library/react-native";
import SignIn from "../components/SignIn";
// ...

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      render(<SignIn handleSubmit={onSubmit} />);

      const user = userEvent.setup();
      const usernameField = screen.getByPlaceholderText("Username");
      await user.type(usernameField, "kalle");

      const passwordField = screen.getByPlaceholderText("Password");
      await user.type(passwordField, "password");

      fireEvent.press(screen.getByRole("signInButton"));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith({
          password: "password",
          username: "kalle",
        });
      });
    });
  });
});
