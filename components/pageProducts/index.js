import { Page } from '@shopify/polaris';
import { ProductList } from '../productList';

export function PageProducts({ products, isEmpty, setModalOpen }) {
  return (
    <Page
      title='Select your products'
      primaryAction={{
        content: 'Products',
        onAction: () => setModalOpen(true)
      }}
    >
      <ProductList
        products={products}
        empty={isEmpty}
      />  
    </Page>
  );
}
