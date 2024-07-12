import React, { useState ,forwardRef,useImperativeHandle} from 'react';
import { Button, Modal, Checkbox, Form, Input  } from 'antd';


// 使用 forwardRef 来获取 ref

const NewDevice =forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    // useImperativeHandle 使父组件可以调用这些方法
    useImperativeHandle(ref, () => ({
         
        showModal(){
          setIsModalOpen(true);
        }
        
      }));

      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      // 表相关代码
      const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
    <>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
});
export default NewDevice;