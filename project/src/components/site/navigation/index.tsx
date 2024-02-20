import { User } from '@clerk/nextjs/server'
import React from 'react'

type Props = {
    user?:null|User
}

const Navigation = (props: Props) => {
  return (
    <div>Navigation</div>
  )
}

export default Navigation