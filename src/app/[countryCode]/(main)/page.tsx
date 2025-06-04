import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
// import { listCollections } from "@lib/data/collections" // Simplified
// import { getRegion } from "@lib/data/regions" // Simplified
import { HttpTypes } from "@medusajs/types" // Added for mock types

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  // const region = await getRegion(countryCode) // Simplified
  const region: HttpTypes.StoreRegion | null = { // Mocked
    id: "reg_mock",
    name: "Mock Region",
    currency_code: "usd",
    currency_symbol: "$",
    tax_rate: 0,
    tax_code: "mock",
    countries: [{ id: "us", iso_2: "us", iso_3: "usa", name: "United States", display_name: "United States" }],
    payment_providers: [],
    fulfillment_providers: [],
  }


  // const { collections } = await listCollections({ // Simplified
  //   fields: "id, handle, title",
  // })
  const collections: HttpTypes.StoreCollection[] = [] // Simplified

  if (!collections || !region) {
    // This condition might still be met if mocks are not sufficient
    // or if FeaturedProducts has internal issues due to missing ProductRail
    // return null
  }

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          {/* Passing empty collections and a mock region. FeaturedProducts might still fail due to missing ProductRail */}
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
