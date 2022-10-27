import "./about.css";
function Item(props) {
  return (
    <div className="flex text-lg font-medium pb-3 aboutItem">
      <div className="text-teal-600">{props.keyy}</div>
      <div className="text-slate-300 pl-1">{props.value}</div>
    </div>
  );
}
export default Item;
