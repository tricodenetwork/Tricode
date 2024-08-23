import { render, screen, fireEvent } from "@testing-library/react";
import FileUpload from "../chest/modals/FileUpload";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { SessionProvider } from "next-auth/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockRouter = {
  query: {},
  back: jest.fn(),
};

useRouter.mockReturnValue(mockRouter);

const mockStore = configureStore([]);

describe("FileUpload Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test("renders upload button", () => {
    render(
      <Provider store={store}>
        <SessionProvider session={null}>
          <FileUpload close={() => {}} files={[]} setFiles={() => {}} />
        </SessionProvider>
      </Provider>
    );
    expect(screen.getByText(/Browse files/i)).toBeInTheDocument();
  });

  test("handles file input change", () => {
    const setFiles = jest.fn();
    render(
      <Provider store={store}>
        <SessionProvider session={null}>
          <FileUpload close={() => {}} files={[]} setFiles={setFiles} />
        </SessionProvider>
      </Provider>
    );

    const fileInput = screen.getByRole("", {
      name: /Browse files/i,
    });
    const file = new File(["file contents"], "test-file.jpg", {
      type: "image/jpeg",
    });

    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(setFiles).toHaveBeenCalledWith([file]);
  });

  // test("displays file name after upload", () => {
  //   render(
  //     <Provider store={store}>
  //       <SessionProvider session={null}>
  //         <FileUpload
  //           close={() => {}}
  //           files={["test-file.jpg"]}
  //           setFiles={() => {}}
  //         />
  //       </SessionProvider>
  //     </Provider>
  //   );

  //   expect(screen.getByText(/test-file.jpg/i)).toBeInTheDocument();
  // });
});
