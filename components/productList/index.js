import { Card, ResourceList } from "@shopify/polaris";
import { ProductCard } from "../productCard";

export const ProductList = ({ products, empty }) => {
  return (
    <Card
      title="Online store dashboard" 
      sectioned
    >
      {empty
        ? <p>Dont have products.</p>
        : <ResourceList
            showHeader={true}
            resourceName={{singular: 'product', plural: 'products'}}
            items={products}
            renderItem={(product) => <ProductCard {...product} />}
          />
      }
    </Card>
  )
}
