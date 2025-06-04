// import { listProducts } from "@lib/data/products" // TODO: Create or mock
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

// import InteractiveLink from "@modules/common/components/interactive-link" // TODO: Create or mock
// import ProductPreview from "@modules/products/components/product-preview" // TODO: Create or mock

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  // const { // TODO: Uncomment and fix when listProducts and dependencies are ready
  //   response: { products: pricedProducts },
  // } = await listProducts({
  //   regionId: region.id,
  //   queryParams: {
  //     collection_id: collection.id,
  //     fields: "*variants.calculated_price",
  //   },
  // })

  // if (!pricedProducts) { // TODO: Uncomment when data fetching is active
  //   return null
  // }
  const pricedProducts: any[] = [] // Mock data

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between mb-8">
        <Text className="txt-xlarge">{collection.title}</Text>
        {/* <InteractiveLink href={`/collections/${collection.handle}`}> TODO: Create or mock InteractiveLink
          View all
        </InteractiveLink> */}
        <a href={`/collections/${collection.handle}`}>View all (Placeholder)</a>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
        {pricedProducts && pricedProducts.length > 0 ?
          pricedProducts.map((product) => (
            <li key={product.id}>
              {/* <ProductPreview product={product} region={region} isFeatured /> TODO: Create or mock ProductPreview */}
              <div>Product: {product.title} (Placeholder)</div>
            </li>
          )) : <li>No products in this collection (Placeholder)</li>}
      </ul>
    </div>
  )
}
