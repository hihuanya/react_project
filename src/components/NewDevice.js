import React, { useState ,forwardRef,useImperativeHandle} from 'react';
import { Button, Modal , Form, Input, Select, Space,Flex  } from 'antd';

const layout = {
  labelCol: {
    // span: 8,
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const boxStyle = {
  width: '100%',
  // height: 120,
  height: 60,
  marginLeft: 50,
  borderRadius: 6,
  // border: '1px solid #40a9ff',
};

// 使用 forwardRef 来获取 ref

const NewDevice =forwardRef((props, ref) => {


  const [form] = Form.useForm();

  const onFill = () => {
    form.setFieldsValue({
      deviceName: '设备名称--',
      serialNumber: '序列号',
      location: '中国'
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
    // useImperativeHandle 使父组件可以调用这些方法
    useImperativeHandle(ref, () => ({
         
        showModal(){
          setIsModalOpen(true);
        }
        
      }));

  const handleOk = () => {
    var values = form.getFieldValue();
    console.log(values);
    // 关闭弹框
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    // 表单置空
    form.resetFields();
    // 关闭弹框
    setIsModalOpen(false);
  };



  return (
    <>
        <Flex style={boxStyle} justify="flex-start" align="center">
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            新增设备
          </Button>
        </Flex>
      
      <Modal title="新增设备" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form
          {...layout}
          form={form}
          name="control-hooks"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="key"
            label="id"
            rules={[
              {
                required: false,
              },
            ]}
            hidden="true"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="deviceName"
            label="设备名称"
            rules={[
              {
                required: true,
              },
            ]}
          >
             <Input />
          </Form.Item>
          <Form.Item
            name="serialNumber"
            label="设备编号"
            rules={[
              {
                required: true,
              },
            ]}
          >
             <Input />
          </Form.Item>
          <Form.Item
            name="location"
            label="设备地址"
            rules={[
              {
                required: true,
              },
            ]}
          >
             <Input />
          </Form.Item>
         
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
          >
            {({ getFieldValue }) =>
              getFieldValue('gender') === 'other' ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
            
              <Button type="link" htmlType="button" onClick={onFill}>
                Fill form
              </Button>
            </Space>
          </Form.Item>
        </Form>
     
      </Modal>
    </>
  );
});
export default NewDevice;