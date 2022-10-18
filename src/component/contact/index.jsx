import './contact.css'
const contact = [
    {
        key: 'Name',
        value: 'Cù Văn Trường'
    },
    {
        key: 'Date',
        value: '04/02/2000'
    },
    {
        key: 'Phone',
        value: '0388513292'
    },
    {
        key: 'Gmail',
        value: 'truongxoongx3@gmail.com'
    },
    {
        key: 'Address',
        value: '224 đường bưởi'
    },
    {
        key: 'Student',
        value: 'Học viện kỹ thuật mật mã'
    },
]
function Contact() {
    return <div className="flex contact">
        <div>
        {
            contact.map((item) => (
                <div key={item.key} className="flex text-xl p-3 bg-slate-500 mb-1 rounded-md">
                    <div className="text-[#1ab394]">{item.key}: </div>
                    <div className="pl-3 text-white font-bold">{item.value}</div>
                </div>
            ))
        }
        </div>
    </div>
}
export default Contact