import './home.css'
import { useNavigate } from 'react-router-dom'
function HomePage() {
    const navigation = useNavigate()
    const clickContact = () => {
        navigation('/contact')
    }
    return <div className="flex justify-center items-center text-center home">
        <div>
             <div className="w-[350px] h-[350px] overflow-hidden rounded-full">
                <img className="w-full h-full object-cover" src="https://truongxoong.github.io/cv/img/adm.png" />
            </div>
            <div className="text-2xl font-bold text-white pt-4">
                Cù Văn Trường <span className="text-[#1ab394]">22 tuổi</span>
            </div>
            <p className="text-lg font-semibold text-slate-300">Frontend Developer</p>
            <div className='py-3 border-2 rounded-3xl text-2xl cursor-pointer bg-[#0d5e4e] text-white mt-12'
            onClick={clickContact}>
                Contact
            </div>
        </div>
    </div>
}
export default HomePage