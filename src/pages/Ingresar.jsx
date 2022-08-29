import React, { useState } from 'react'
import { Button, Form, Input, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useNavigate, Navigate } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';


const { Title, Text, } = Typography



export const Ingresar = () => {

  const navigate = useNavigate();
  const [ usuario ] = useState( getUsuarioStorage())
  useHideMenu(false);

  const onFinish = ({ agente, escritorio }) => {

    localStorage.setItem('agente', agente)
    localStorage.setItem('escritorio', escritorio)
  
    navigate('/escritorio')
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  if (usuario.agente && usuario.escritorio) {
    return <Navigate to="/escritorio" />;
  }
  
  return (

    <>

    <Title level={ 2 }>Ingresar</Title>
    <Text> Ingrese su nombre y su número de escritorio</Text>
    <Divider />
    
      <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Nombre del agente"
        name="agente"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su nombre!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Escritorio"
        name="escritorio"
        rules={[
          {
            required: true,
            message: 'Ingrese el numero de escritorio!',
          },
        ]}
      >
        <InputNumber min= { 1 } max={ 90 }/>
      </Form.Item>

      <Form.Item
        // name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        {/* <Checkbox>Remember me</Checkbox> */}
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button 
        type="primary"
        htmlType="submit"
        shape='round'
         >
          <SaveOutlined />
          Ingresar
        </Button>
      </Form.Item>
    </Form>
    </>
  
  );
};


