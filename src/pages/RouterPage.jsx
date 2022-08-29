import React, { useContext } from 'react'
import {UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Ingresar } from './Ingresar';
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket';
import { Escritorio } from './Escritorio';
import { UiContext } from '../context/UiContext';

  const { Sider, Content } = Layout;
  
export const RouterPage = () => {

  const { ocultarMenu } = useContext( UiContext );

  return (
    <BrowserRouter>
    <Layout style={{ height: '100vh'}}>
      <Sider collapsedWidth="0" breakpoint='md' hidden={ ocultarMenu }>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
                key: '1',
                icon: <UserOutlined />,
                label: <Link to={'/ingresar'}>Ingresar</Link>
            },
            {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: <Link to={'/cola'}>Cola de tickets</Link>
            },
            {
                key: '3',
                icon: <UploadOutlined />,
                label: <Link to={'/crearticket'}>Crear tickets</Link>
            },
           
          ]}
          />
         
      </Sider>
      <Layout className="site-layout">
    
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routes>
            <Route path='/ingresar' element={ <Ingresar /> } />
            <Route path='/cola' element={ <Cola /> } />
            <Route path='/crearticket' element={ <CrearTicket /> } />
            <Route path='/escritorio' element={ <Escritorio /> } />
          
            <Route path='/*' element={ <Ingresar /> }/>
          
          </Routes>
        </Content>
      </Layout>
    </Layout>
    </BrowserRouter>
  )
}
