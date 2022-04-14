import { Space, Spin,Modal } from 'antd'
import React from 'react'

const Loader = () => {
    
  return (
    <div>
        
        <Space style={{display:"flex",justifyContent:"center",alignItems:"center"}} size="middle">
          <Spin size="large" />
        </Space>
    </div>
  )
}

export default Loader