import { Product } from "@ecommerce-mfe/shared/schemas/products"
import { Card } from "../card"
import { showcase } from "./showcase.variants"

const S = showcase()

type ShowcaseProps = {
    title: string,
    products: Product[]
}

export const Showcase = ({ title, products }: ShowcaseProps) => {
    return <section className={S.base()}>
        <h2 className={S.title()}>{title}</h2>
        <div className={S.list()}>
            {products?.map((product) => <Card key={product.id} {...product} />)}
        </div>
    </section>
}