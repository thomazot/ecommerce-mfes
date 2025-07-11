import { render } from "@testing-library/react"
import { Logo } from "./Logo"

describe('<Logo />', () => {
    it('should render component', () => {
        const {container} = render(<Logo />)

        expect(container).toBeInTheDocument()
    })
})