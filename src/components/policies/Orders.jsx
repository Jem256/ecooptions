import React from 'react'
import './Orders.css'

function Orders() {
  return (
    <section className='orders container'>
        <h1>Orders & Shipping</h1>
        <p>
            Once your payment has been processed, you'll receive an email
            confirming your order. Please allow for 1 business day for your 
            order to be processed and shipped.

            For orders outside Kampala, please leave explicit details of how you'd 
            like your order to be shipped. 
        </p>
        <h3>How much does shipping cost?</h3>
        <p>
            We make deliveries using Sendy Fulfillment Uganda. Shipping fee to your 
            preferred destination is therefore determined by this. 
            For those outside the coverage of these platforms but within Uganda, your shipping 
            fee is determined by the courier (buses/taxis) to your destination. 
        </p>
        <h3>I changed my mind. Can I cancel my order?</h3>
        <p>
            Provided your order hasn't yet shipped, please call us to cancel your order.
        </p>
    </section>
  )
}

export default Orders