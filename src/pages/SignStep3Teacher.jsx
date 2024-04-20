import Arrow from "../assets/Arrow.svg"
import ArrowWhite from "../assets/Arrow-white.svg"
import ChoiceBtn from '../components/ChoiceBtn';
import Btn from '../components/Btn';
import Check from "../assets/check.svg"
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DataTest } from "../context/Form";
import SlideBar from "../components/SlideBar";
function SignStep1({ setDataForm }) {
  const navigate = useNavigate();
  const value = useContext(DataTest);
  const [selected, setSelected] = useState();
  const handlerNextBtn = () => {
    let result = [];
    document.querySelectorAll(".checkedChoice").forEach((el) => {
      result.push(el.dataset.id);
    })
    value["cours"] = result;
    setDataForm(value);
    navigate("/otpValidation");
    }
    return (
        <div className="container mx-auto py-12 px-5 relative">
        <header className="flex justify-center">
            <button>
              <img src={Arrow} className="w-2 h-4" />                  
            </button>
            <div className="relative ms-5 max-w-[50rem] w-[80%] h-4 bg-[#FFF8B2] rounded-full before:w-1/2 before:h-full before:absolute before:left-0 before:bg-[#FAE200] before:rounded-full"></div>
        </header>  
        <main className='flex items-start flex-col mt-20 mb-10'>
          <h2 className='lg:text-4xl text-3xl max-[568px]:text-2xl font-medium max-[568px]:max-w-[360px] text-center w-full'>
          Which modules are you teaching ?
          </h2>
          <div className="w-full">
            <h4 className="text-3xl mt-8 mb-4">Bachelor 1st year</h4>
            <div className="flex justify-between items-center w-[90%] ps-12">
              <button className="w-10 h-10 bg-[#00333D] flex justify-center items-center rounded-lg">
                <img src={ArrowWhite}  />
              </button>
                <div className="grid grid-cols-3 items-between gap-5 w-[90%]">
                  <button onClick={(ev) => { ev.target.classList.toggle("checkedChoice") }} className="h-20 bg-[#E8FBFF] flex items-center justify-center text-3xl rounded-lg relative"><img src={Check} className="absolute left-14 hidden"/>Algebra</button>
                  <button onClick={(ev) => {ev.target.classList.toggle("checkedChoice")}} className="h-20 bg-[#E8FBFF] flex items-center justify-center text-3xl rounded-lg relative"><img src={Check} className="absolute left-14 hidden"/>Algebra</button>
                  <button onClick={(ev) => {ev.target.classList.toggle("checkedChoice")}} className="h-20 bg-[#E8FBFF] flex items-center justify-center text-3xl rounded-lg relative"><img src={Check} className="absolute left-14 hidden"/>Algebra</button>
                </div>
              <button className="rotate-180 w-10 h-10 bg-[#00333D] flex justify-center items-center rounded-lg">
                <img src={ArrowWhite}  />
                </button>
            </div>
            <SlideBar text={"Bachelor 2st year"} data={["Algebre","Analyze","OOP"] }/>
            <SlideBar text={"Bachelor 2st year"} data={["Algebre","Analyze","OOP"] }/>
         </div> 
    
    </main>
        <Btn text="Next" style={"w-44 h-16 text-xl absolute bottom-3 right-10 max-[568px]:w-36 "} handleSubmit={handlerNextBtn} />
  </div>
  )
}

export default SignStep1