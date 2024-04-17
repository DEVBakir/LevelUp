export default function InputField(props) {
    return (
        <input type={props.type} placeholder={props.name} name={props.name}
        className='focus-visible:outline-none h-12 mb-5 flex items-center ps-4 w-full bg-[#B2F2FF] rounded-xl text-[#006073] placeholder:text-[#0095B2] font-customFont text-xl' />
    )
}