import Item from "./Item"
import './about.css'

const listMe = [
    {
        key: 'Age',
        value: '22 tuổi'
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
        value: "224 đường bưởi"
    }
]
const listJob = [
    {
        key:'1',
        value: '- Sẵn sàng học thêm và chịu khó tìm hiểu về công nghệ mới để áp dụng vào cuộc việc khi cần.'
    },
    {
        key:'2',
        value: '- Luôn tích cực giao lưu học hỏi và tiếp thu những kiến thức mới để áp dụng vào công việc giúp phát triển bản thân và đóng góp vào sự phát triển của công ty.'
    },
    {
        key:'3',
        value: '- Mong muốn được làm việc ở môi trường chuyên nghiệp và trở thành 1 lập trình viên chuyên nghiệp trong tương lai.'
    }
]
const listStudent = [
    {
        key: '',
        value: '- Hiện đang là sinh viên năm cuối trường Học viện Kỹ thuật mật mã'
    }
]
const listExperience = [
    {
        key: '1',
        value: '- Đã từng đi thực tập 3 tháng về ReactJS'
    },
    {
        key: '2',
        value: '- Và đã làm 1 số project cá nhân'
    },
]

function About() {
    return <div className="about">
        <div className="grid grid-cols-2 mx-16">
            <div className="items">
                <p className="text-3xl text-white font-bold">Thông tin cá nhân</p>
                {listMe.map((item) => (
                    <Item key={item.key} keyy={item.key} value={item.value} />
                ))}
            </div> 
            <div>
                <p className="text-3xl text-white font-bold">Mục tiêu nghề nghiệp</p>
                {
                    listJob.map((item) => (
                        <Item key={item.key} value={item.value} />
                    ))
                }
            </div>
            <div>
                <p className="text-3xl text-white font-bold">Kinh nghiệm làm việc</p>
                {
                    listExperience.map((item) => (
                        <Item key={item.key} value={item.value} />
                    ))
                }
            </div> 
            <div>
                <p className="text-3xl text-white font-bold">Học vấn</p>
                {
                    listStudent.map((item) => (
                        <Item key={item.key} value={item.value} />
                    ))
                }
            </div>            
        </div>
    </div>
}
export default About