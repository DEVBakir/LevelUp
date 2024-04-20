import { useContext } from "react";
import personne from "../assets/personne.png"
import { DataTest } from "../context/Form";
function ChoiceBtn({ text, setSelected, selected, setDataForm, num, style, styleImg , name, grade}) {
  if (style === undefined)
    style = "";
  let className = "ChoiceBtn relative rounded-sm w-full bg-[#E8FBFF] text-black text-3xl max-[568px]:text-2xl lg:h-28 h-24 max-[568px]:h-20 flex justify-center items-center hover:scale-105  transition-all duration-75 outline-[#00333D] bg-red " + style + " btn-" + num;
  const value = useContext(DataTest);
  if (selected == num) {
    className += " outline "
  }
  function handler() {
    if (name == "degree" && value.role == "Teacher") {
      document.querySelector(".btn-" + num).classList.toggle("outline")
      let result = "";
      document.querySelectorAll(".Grade-btn.outline").forEach((el) => {
        result += el.dataset.grade + " /";
      })
      value[name] = result;
      setDataForm(value);
    } else {
      setSelected(num)
      value[name] = text
    }
    // Update The Data Of Form
    setDataForm(value);
  }
  return (
    <button onClick={handler} className={className} data-grade={grade}>
        <img className={"absolute lg:left-11 left-9 lg:w-20 w-20 lg:h-20 h-20 top-1/2 -translate-y-1/2 max-[568px]:h-14 max-[568px]:w-14 " + styleImg} src={personne} alt="personne" />
        {text}
    </button>
  )
}

export default ChoiceBtn;