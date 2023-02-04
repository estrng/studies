import { Route, Routes as ReactRouters } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { Success } from '../pages/Success'

export function Routes() {
  return (
    <ReactRouters>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </ReactRouters>
  )
}