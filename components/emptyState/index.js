import { Card, EmptyState, Page } from '@shopify/polaris';
import React from 'react';

export const EmptyPage = ({ setModalOpen }) => (
  <Page>
    <Card sectioned>
      <EmptyState
        heading="You dont have products !"
        action={{
          content: 'Add products',
          onAction: () => setModalOpen(true)
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Add news products in your store</p>
      </EmptyState>      
    </Card>
  </Page>
)

