import { Metadata } from "next"

// import { listCartOptions, retrieveCart } from "@lib/data/cart" // Simplified
// import { retrieveCustomer } from "@lib/data/customer" // Simplified
// import { getBaseURL } from "@lib/util/env" // Simplified
import { StoreCartShippingOption } from "@medusajs/types"
// import CartMismatchBanner from "@modules/layout/components/cart-mismatch-banner" // Simplified
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
// import FreeShippingPriceNudge from "@modules/shipping/components/free-shipping-price-nudge" // Simplified

export const metadata: Metadata = {
  // metadataBase: new URL(getBaseURL()), // Simplified
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  const customer = null // await retrieveCustomer() // Simplified
  const cart = null // await retrieveCart() // Simplified
  let shippingOptions: StoreCartShippingOption[] = [] // Simplified

  // if (cart) { // Simplified
  //   const { shipping_options } = await listCartOptions()
  //   shippingOptions = shipping_options
  // }

  return (
    <>
      <Nav />
      {/* {customer && cart && ( // Simplified
        <CartMismatchBanner customer={customer} cart={cart} />
      )} */}

      {/* {cart && ( // Simplified
        <FreeShippingPriceNudge
          variant="popup"
          cart={cart}
          shippingOptions={shippingOptions}
        />
      )} */}
      {props.children}
      <Footer />
    </>
  )
}
