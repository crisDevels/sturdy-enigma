import { withRouter } from 'next/router'
import { ClientRouter as OhterRouter } from '@shopify/app-bridge-react'

function ClientRouter (props) {
  const { router } = props;
  return <OhterRouter history={ router } />
}

export default withRouter(ClientRouter)