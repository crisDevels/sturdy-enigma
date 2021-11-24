import { ResourcePicker } from "@shopify/app-bridge-react";
import { useEffect, useState } from "react";
import { EmptyPage } from "../components/emptyState";
import { PageProducts } from "../components/pageProducts";
import store from 'store-js';

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [isEmpty, setEmpty] = useState(true)
  const [idsIn, setIds] = useState([])

  useEffect(() => {
    const storeProducts = store.get(`_products`)
    storeProducts && setProducts(storeProducts)
  }, [])

  useEffect(() => {
    const ids = products.map(product => { 
      return { id: product.id }
    })
    console.log(ids);
    setIds(ids)
  }, [products])

  const handleProducts = (payload) => {
    setModalOpen(false)
    setProducts(payload.selection)
    setEmpty(false)
    store.set(`_products`, payload.selection)
  }

  return (
    <>
      <ResourcePicker
        open={modalOpen}
        showVariants={true}
        initialSelectionIds={idsIn}
        resourceType='Product'
        onSelection={handleProducts}
        onCancel={() => setModalOpen(false)}
      />
      {isEmpty
        ? <EmptyPage setModalOpen={setModalOpen} />
        : <PageProducts
            products={products}
            isEmpty={isEmpty}
            setModalOpen={setModalOpen}
          />
      }
    </>
  )
}

export default Index;
