import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { Card } from "./card"
import { Product } from "@ecommerce-mfe/shared/schemas/products"

jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => {
      return <img {...props} />
    }
  }));

jest.mock('@ecommerce-mfe/shared/commons/link')

const productMock: Product = {
    id: 1,
    category: 'category',
    description: 'description',
    image:"image",
    price: 1.0,
    rating: {
        count: 1,
        rate: 2
    },
    title:"title"
}

describe('Card', () => {
    it('should render', () => {
        const {container} = render(<Card {...productMock} />)
        expect(container).toBeInTheDocument()
    })
})