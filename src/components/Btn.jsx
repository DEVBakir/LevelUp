export default function Btn(props) {
    let className = 'bg-[#FCEE65] w-36 h-12 flex items-center justify-center text-[#3D3700] font-medium text-lg rounded-lg cursor-pointer';
    if (props.type === "submit") {
        return (
            <input type="submit" value={props.text} className={className} />
        );
    }
    return (
        <button className={className}>
            {props.text}
        </button>
    );
}

