import { ReactNode } from "react";
import { QueryClient } from "@tanstack/react-query";
import { renderHook } from "@testing-library/react-hooks";
import nock from "nock";
import { act } from "@testing-library/react";
import { QueryClientProvider } from "@tanstack/react-query";

import { useSignupMutation } from "../pages/SignUpPage";

jest.mock("axios");

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

// Disable console errors
console.error = () => {};

const mockedConsoleLog = jest.fn();
console.log = mockedConsoleLog;

describe("Log in", () => {
  test("useLoginMutation should navigate to '/login' on success", async () => {
    const { result, waitFor } = renderHook(() => useSignupMutation(), {
      wrapper: wrapper,
    });
    nock("http://localhost:3001")
      .post("/api/user/register", {
        username: "string",
        password: "string",
        confirmPassword: "string",
      })
      .reply(200, {});
    act(() => {
      result.current.mutate({
        username: "string",
        password: "string",
        confirmPassword: "string",
      });
    });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(mockedUsedNavigate).toBeCalledWith("/login");
      expect(mockedConsoleLog).toBeCalledWith("Success");
    });
  });
});
