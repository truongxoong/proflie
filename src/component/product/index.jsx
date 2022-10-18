import './product.css'
function Product() {
    return <div className="grid grid-cols-4 gap-8 product">
        <div className="w-[250px] product-item">
            <div className="w-[250px] h-[300px] overflow-hidden rounded-md">
                <img className="h-full w-full object-cover" src="https://truongxoong.github.io/cv/img/product1.png" />
            </div>
            <div className="text-center pt-3 text-lg text-white font-semibold">Website bán hàng</div>
            <div className="text-slate-300"><span className="text-[#1ab394]">Mô tả chức năng:</span>  Xem nhanh sản phẩm, Thêm, xóa sản phẩm, Tự động cập nhật giá khi thêm, xóa sản phẩm.</div>
            <div className="text-slate-300"><span className="text-[#1ab394]">Công nghệ sử dụng:</span> HTML, CSS, Tailwind, Javascript</div>
            <div className="text-white text-center pt-3">Link: <a href="https://truongxoong.github.io/Tailwind1/src/">Nhấn để xem</a></div>
        </div>
        <div className="w-[250px] product-item">
            <div className="w-[250px] h-[300px] overflow-hidden rounded-md">
                <img className="h-full w-full object-cover" src="https://truongxoong.github.io/cv/img/product2.png" />
            </div>
            <div className="text-center pt-3 text-lg text-white font-semibold">Profile</div>
            <div className="text-slate-300"><span className="text-[#1ab394]">Mô tả chức năng:</span>  Hiển thị thông tin của cá nhân.</div>
            <div className="text-white text-center">Link: <a href="https://truongxoong.github.io/cv/">Nhấn để xem</a></div>
        </div>
        <div className="w-[250px] product-item">
            <div className="w-[250px] h-[300px] overflow-hidden rounded-md">
                <img className="h-full w-full object-cover" src="https://cdn.dribbble.com/users/3577980/screenshots/15163271/media/38c4ddee358cbd6f6091200232f9814c.png?compress=1&resize=400x300" />
            </div>
            <div className="text-center pt-3 text-lg text-white font-semibold">Profile</div>
            <div className="text-slate-300"><span className="text-[#1ab394]">Mô tả chức năng:</span>  Mới hoàn thành được phần User: thêm, xóa, sửa nhân viên.</div>
            <div className="text-slate-300"><span className="text-[#1ab394]">Công nghệ sử dụng:</span> HTML, Tailwind, Reactjs, React Router, Redux toolkit, Firebase</div>
            <div className="text-white text-center">Link: <a href="https://restaurant-manager-f8bca.web.app/">Nhấn để xem</a></div>
        </div>
        <div className="w-[250px] product-item">
            <div className="w-[250px] h-[300px] overflow-hidden rounded-md">
                <img className="h-full w-full object-cover" src="https://cdn.dribbble.com/users/3577980/screenshots/15163271/media/38c4ddee358cbd6f6091200232f9814c.png?compress=1&resize=400x300" />
            </div>
            <div className="text-center pt-3 text-lg text-white font-semibold">Profile</div>
            <div className="text-slate-300"><span className="text-[#1ab394]">Mô tả chức năng:</span>  Mới hoàn thành được phần User: thêm, xóa, sửa nhân viên.</div>
            <div className="text-slate-300"><span className="text-[#1ab394]">Công nghệ sử dụng:</span> HTML, Tailwind, Reactjs, React Router, Redux toolkit, Firebase</div>
            <div className="text-white text-center">Link: <a href="https://restaurant-manager-f8bca.web.app/">Nhấn để xem</a></div>
        </div>
    </div>
}
export default Product