import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, Badge, Space } from 'antd'
import { WalletOutlined } from '@ant-design/icons'
import { metamask } from './Connectors'

const Metamask = () => {
  const { active, chainId, account, activate, deactivate } = useWeb3React()

  const connect = () => {
    activate(metamask)
  }

  const disconnect = () => {
    deactivate()
    // deactivate(metamask)
  }

  return (
    <Space>
      <Button
        size='large'
        icon={<WalletOutlined />}
        onClick={active ? disconnect : connect}
      >
        {active ? 'Disconnect' : 'Connect'}
      </Button>
      <Button type='dashed'>{active ? 'Connected' : 'Disconnected'}</Button>
      <Button type='dashed'>{active ? chainId : ''}</Button>
      <Button type='dashed'>{active ? account : ''}</Button>
    </Space>
  )
}

export default Metamask
