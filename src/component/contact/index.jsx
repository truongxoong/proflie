import './contact.css'
import { Button, Checkbox, Form, Input } from 'antd';
const {TextArea} = Input

function Contact() {
    return <div className="contact">
        <div className='text-center text-[40px] font-bold text-[#1ab394]'>Contact</div>
        <div className='grid grid-cols-2 gap-12 mx-10 mt-12'>
            <div className='form_contact'>
                <Form>
                    <Form.Item
                    className='form_input'
                    name= 'name'
                    rules={[
                        {
                            required: true,
                            message: 'Trường bắt buộc'
                        }
                    ]}
                    >
                        <Input placeholder='Full Name' className='text-white'/>
                    </Form.Item>
                    <Form.Item
                    className='form_input'
                    name='email'
                    rules={[
                        {
                            required: true,
                            message: 'Trường bắt buộc'
                        }
                    ]}
                    >
                        <Input placeholder='Address Email' className='text-white'/>
                    </Form.Item>
                    <Form.Item
                    className='form_input'
                    name='message'
                    rules={[
                        {
                            required: true,
                            message: 'Trường bắt buộc'
                        }
                    ]}
                    >
                        <TextArea placeholder='Message' rows={4}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>Sent Massage</Button>
                    </Form.Item>
                </Form>
            </div>
            <div className='w-full h-[500px] bg-slate-300 rounded-xl overflow-hidden'>
                <img className='w-full h-full object-cover' src='https://images.foody.vn/res/g69/681881/map/s960/foody-map-681881_21-0362310772275_105-8078010007739.jpg' />
            </div>
        </div>
    </div>
}
export default Contact