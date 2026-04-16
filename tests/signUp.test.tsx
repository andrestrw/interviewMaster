import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import SignUp from "@/app/(auth)/signUp/page";

const setup = () => {
  const user = userEvent.setup();
  render(<SignUp />);
  return { user };
};

describe("SignUp Page", () => {
  describe("Initial Render", () => {
    it("The custom select component for 'Role' is rendered", () => {
      setup();
      expect(screen.getByLabelText(/role/i)).toBeInTheDocument();
    });
    it("it should display the first name and last name field", () => {
      setup();
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    });
    it("it should display the username field", () => {
      setup();
      expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    });
    it("it should display the email adress field", () => {
      setup();

      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    });
    it("it should display the password field", () => {
      setup();

      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    it("The 'Terms and Conditions' checkbox is rendered", () => {
      setup();
      expect(screen.getByRole("checkbox", { name: /terms and conditions/i })).toBeInTheDocument();
    });

    it("The 'Create free account' button should be enabled by default", () => {
      setup();
      expect(screen.getByRole("button", { name: /create free account/i })).toBeEnabled();
    });

    it("The 'Already have an account? Sign in' link is displayed", () => {
      setup();
      expect(screen.getByText(/already have an account/i)).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument();
    });
  });

  describe("Initial State and Accessibility", () => {
    it("The 'Role' select should default to 'Product Designer'", () => {
      setup();

      expect(screen.getByRole("combobox", { name: /role/i })).toHaveTextContent(/product designer/i);
    });

    it("The 'First name' field should initially be empty", () => {
      setup();
      expect(screen.getByLabelText(/first name/i)).toHaveValue("");
    });

    it("The 'Last name' field should initially be empty", () => {
      setup();
      expect(screen.getByLabelText(/last name/i)).toHaveValue("");
    });

    it("The 'Username' field should initially be empty", () => {
      setup();
      expect(screen.getByLabelText(/username/i)).toHaveValue("");
    });

    it("The 'Email address' field should initially be empty", () => {
      setup();
      expect(screen.getByLabelText(/email address/i)).toHaveValue("");
    });

    it("The 'Password' field should initially be empty", () => {
      setup();
      expect(screen.getByLabelText(/password/i)).toHaveValue("");
    });

    it("The 'Password' field should have type='password' by default (security)", () => {
      setup();
      expect(screen.getByLabelText(/password/i)).toHaveAttribute("type", "password");
    });

    it("The 'Terms and Conditions' checkbox should be unchecked by default", () => {
      setup();
      expect(screen.getByRole("checkbox", { name: /terms and conditions/i })).not.toBeChecked();
    });
  });
});
