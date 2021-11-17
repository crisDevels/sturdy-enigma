import { ResourcePicker } from "@shopify/app-bridge-react";
import { Page } from "@shopify/polaris";
import { useState } from "react";
import { ProductList } from "../components/productList";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [isEmpty, setEmpty] = useState(true)

  const handleProducts = (payload) => {
    setModalOpen(false)
    setProducts(payload.selection)
    setEmpty(false)
  }

  return (
    <Page
      title='Select your products'
      primaryAction={{
        content: 'Products',
        onAction: () => setModalOpen(true)
      }}
    >
      <ResourcePicker
        open={modalOpen}
        resourceType='Product'
        onSelection={handleProducts}
        onCancel={() => setModalOpen(false)}
      />
      <ProductList products={products} empty={isEmpty} />
    </Page>
  )
}

export default Index;
