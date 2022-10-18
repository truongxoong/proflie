import './home.css'
function HomePage() {
    return <div className="flex justify-center items-center text-center home">
        <div>
             <div className="w-[350px] h-[350px] overflow-hidden rounded-full">
                <img className="w-full h-full object-cover" src="https://truongxoong.github.io/cv/img/adm.png" />
            </div>
            <div className="text-2xl font-bold text-white pt-4">
                Cù Văn Trường <span className="text-[#1ab394]">22 tuổi</span>
            </div>
            <p className="text-lg font-semibold text-slate-300">Frontend Developer</p>
        </div>
    </div>
}
export default HomePage