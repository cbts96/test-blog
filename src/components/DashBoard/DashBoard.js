import { Empty } from 'antd'
import React from 'react'
import AdminNav from './Nav/AdminNav'

const DashBoard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        </div>
        <div className='col-md-10'>
        <Empty />
        </div>
    </div>
  )
}

export default DashBoard