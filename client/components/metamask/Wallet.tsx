import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, Badge, Card, Col, Modal, Radio } from 'antd'
import { SketchOutlined, WalletOutlined } from '@ant-design/icons'
import { metamask, walletconnect } from './Connectors'

const Wallet = () => {
  const [visible, setVisible] = useState(false)
  const [connector, setConnector] = useState('metamask')
  const { active, chainId, account, activate, deactivate } = useWeb3React()

  const connect = () => {
    switch (connector) {
      case 'metamask':
        activate(metamask)
        break
      case 'walletconnect':
        activate(walletconnect)
        break
      default:
        window.alert('Invalid Wallet')
    }
  }

  const disconnect = () => {
    deactivate()
    // deactivate(connector);
  }

  const getNetworkName = (chain: number) => {
    switch (chain) {
      case 1:
        return 'Ethereum Mainnet'
      case 3:
        return 'Ropsten Testnet'
      case 4:
        return 'Rinkeby Testnet'
      case 5:
        return 'Goerli Testnet'
      case 42:
        return 'Kovan Testnet'
      case 1337:
        return 'Local Testnet'
    }
  }

  const handleSelectOk = () => {
    connect()
    // connect(connector)
    setVisible(false)
  }

  const handleSelectCancel = () => {
    setVisible(false)
  }

  return (
    <div>
      <Col span={24}>
        <Card
          title={
            <>
              <SketchOutlined />
              &nbsp;&nbsp;&nbsp; Network
            </>
          }
          bordered={false}
        >
          {chainId ? getNetworkName(chainId) : ''}
        </Card>
      </Col>
      <br />
      <Col span={24}>
        <Card
          title={
            <>
              <WalletOutlined />
              &nbsp;&nbsp;&nbsp; Account
            </>
          }
          bordered={false}
        >
          {account}
        </Card>
      </Col>
      <br />

      {active ? (
        <>
          <Button size='large' onClick={disconnect}>
            Disconnect
          </Button>
          <br />
          <Badge status='success' text='Connected to Metamask' />
        </>
      ) : (
        <>
          <Button
            type='primary'
            size='large'
            onClick={() => {
              setVisible(true)
            }}
          >
            Connect
          </Button>
          <br />
          <Badge status='error' text='Not Connected to Metamask' />
        </>
      )}
      <Modal
        title='Select Your Wallet'
        visible={visible}
        width={400}
        onOk={handleSelectOk}
        onCancel={handleSelectCancel}
      >
        <Radio.Group
          defaultValue='metamask'
          buttonStyle='solid'
          size='large'
          onChange={e => {
            setConnector(e.target.value)
          }}
        >
          <Radio.Button value='metamask'>Metamask</Radio.Button>
          <br />
          <Radio.Button value='walletconnect'>WalletConnect</Radio.Button>
          <br />
        </Radio.Group>
      </Modal>
    </div>
  )
}

export default Wallet
