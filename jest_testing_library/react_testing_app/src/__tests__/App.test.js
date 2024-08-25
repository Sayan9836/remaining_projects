import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";


beforeAll(() => {
    console.log("****************beforeAll hook********");
})

afterAll(() => {
    console.log("****************afterAll hook********");
})

beforeEach(() => {
    console.log("****************beforeEach hook********");
})

afterEach(() => {
    console.log("****************afterEach hook********");
})


test('testing presence of element', () => {

    render(<App />);

    const form = screen.getByRole('form');
    const loginButton = screen.getByTestId('login_btn');
    const todoRemoveBtn = screen.getByTestId('removeTodo');
    const todosWrapper = screen.getByTestId('todos_wrapper');

    expect(form).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(todoRemoveBtn).toBeInTheDocument();
    expect(todosWrapper).toBeInTheDocument();
})

test('testing initial state', () => {

    render(<App />);
    const List_Of_Todos = screen.getByTestId('todos_wrapper');
    expect(List_Of_Todos).toBeEmptyDOMElement();
})



test('testing updated state', () => {

    render(<App />);
    const todoRemoveBtn = screen.getByTestId("removeTodo");
    fireEvent.click(todoRemoveBtn);
    const todos = screen.getByTestId('todos_wrapper');
    expect(todos).toBeEmptyDOMElement();

})
