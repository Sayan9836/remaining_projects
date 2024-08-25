import { render } from "@testing-library/react"
import Home from "../Home"


test('snapshot testing', () => {
    const container  = render(<Home/>);
    expect(container).toMatchSnapshot();
    expect(container.handleClick("hii")).toMatch('hii')
})
