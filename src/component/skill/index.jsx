import './skill.css'
const listSkill = [
    {
        key: 1,
        value: 'https://vegibit.com/wp-content/uploads/2014/06/html.png'
    },
    {
        key: 2,
        value: 'https://i.pinimg.com/originals/d5/b9/3b/d5b93bad3c10cc5b92b47e4678598548.jpg'
    },
    {
        key: 3,
        value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFmj9qg68AFAx8H7Xo5x20h4Ozi3ug1gXUdKqKnSBUfMdXuOKxMCpV4nsVecAwPNjwPs&usqp=CAU'
    },
    {
        key: 4,
        value: 'https://kobaltsolutions.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-08-at-4.06.03-PM.png'
    },
    {
        key: 5,
        value: 'https://marcosaguilar.es/wp-content/uploads/2019/08/bootstrap-social-share.png'
    },
    {
        key: 6,
        value: 'https://d6f6d0kpz0gyr.cloudfront.net/uploads/images/_1200x630_crop_center-center_82_none/tailwind-thumb.jpg?mtime=1609771799'
    },
    {
        key: 7,
        value: 'https://img-blog.csdnimg.cn/img_convert/6401d6f44efe58a024c7719c8eab5c83.png'
    },
    {
        key: 8,
        value: 'https://www.seekpng.com/png/detail/377-3772047_sass-logo.png'
    },

]
function Skill() {
    return <div className="skill flex flex-col justify-center items-center">
        <div className='text-center text-[40px] font-bold text-[#1ab394]'>Skill</div>
        <div className='w-[90%] ml-20 mt-5 grid grid-cols-4'>
        {
            listSkill.map((item) => (
                <div key={item.key} className='rounded-md overflow-hidden h-[250px] w-[200px] mb-5'>
                    <img className='w-full h-full object-cover' src={item.value} />
                </div>
            ))
        }
        </div>
    </div>
}
export default Skill