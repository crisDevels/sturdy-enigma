import { ResourceItem, TextStyle, Thumbnail } from "@shopify/polaris";
import { SlideshowMajor } from '@shopify/polaris-icons';

export const ProductCard = ({ title, variants  }) => {
  const { price, image, displayName, id } = variants[0];
  const media = image ? image : SlideshowMajor
  return (
    <ResourceItem
      verticalAlignment="center"
      id={id}
      media={
        <Thumbnail
          alt={title}
          source={media}
        />
      }
      accessibilityLabel={`View details for ${title}`}
      name={title}
    >
      <h3>
        <TextStyle variation="strong">{displayName}</TextStyle> - {price}
      </h3>
    </ResourceItem>
  )
}


