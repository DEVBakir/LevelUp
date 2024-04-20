import Arrow from "../assets/Arrow.svg"
import ChoiceBtn from '../components/ChoiceBtn';
import Btn from '../components/Btn';
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DataTest } from "../context/Form";
function SignStep1({ setDataForm }) {
  const navigate = useNavigate();
  const value = useContext(DataTest);
  const [selected, setSelected] = useState();
  const handlerNextBtn = () => {
    navigate("/SignUp/step3")
    }
    return (
        <div className="container mx-auto py-12 px-5 relative">
        <header className="flex justify-center">
            <button>
              <img src={Arrow} className="w-2 h-4" />                  
            </button>
            <div className="relative ms-5 max-w-[50rem] w-[80%] h-4 bg-[#FFF8B2] rounded-full before:w-1/2 before:h-full before:absolute before:left-0 before:bg-[#FAE200] before:rounded-full"></div>
        </header>  
        <main className='flex items-center flex-col mt-20 mb-10'>
          <h2 className='lg:text-4xl text-3xl max-[568px]:text-2xl font-medium max-[568px]:max-w-[360px] text-center'>
            {value.role == "Student" && "In which college year are you studying ?"}
            {value.role == "Teacher" && "Which undergraduate year are you teaching?"}
          </h2>
          <div >
            <h4 className="text-3xl mt-8">Bachelor</h4>
            <div className='lg:w-[35rem] w-[25rem] max-[568px]:w-72 mt-3 flex flex-col gap-7 '>
              <ChoiceBtn grade="Bachelor 1st Year" num="1" text="1st Year" setSelected={setSelected} selected={selected} setDataForm={setDataForm} style={"Grade-btn lg:h-20 lg:text-3xl"}styleImg={"lg:w-16 lg:h-16"} name="degree" /> 
              <ChoiceBtn grade="Bachelor 2st Year" num="2" text="2st Year" setSelected={setSelected} selected={selected} setDataForm={setDataForm} style={"Grade-btn lg:h-20 lg:text-3xl"}styleImg={"lg:w-16 lg:h-16"} name="degree" />  
              <ChoiceBtn grade="Bachelor 3st Year" num="3" text="3st Year" setSelected={setSelected} selected={selected} setDataForm={setDataForm} style={"Grade-btn lg:h-20 lg:text-3xl"}styleImg={"lg:w-16 lg:h-16"} name="degree"/>  
          </div>
         </div> 
          <div >
            <h4 className="text-3xl mt-3">Master</h4>
            <div className='lg:w-[35rem] w-[25rem] max-[568px]:w-72 mt-3 flex flex-col gap-7 '>
              <ChoiceBtn grade="Master 1st Year" num="4" text="1st Year" setSelected={setSelected} selected={selected} setDataForm={setDataForm} style={"lg:h-20 lg:text-3xl Grade-btn"}styleImg={"lg:w-16 lg:h-16"} name="degree"/> 
              <ChoiceBtn grade="Master 2st Year" num="5" text="2st Year" setSelected={setSelected} selected={selected} setDataForm={setDataForm} style={"lg:h-20 lg:text-3xl Grade-btn"}styleImg={"lg:w-16 lg:h-16"} name="degree"/>  
            </div>
         </div> 
    </main>
        <Btn text="Next" style={"w-44 h-16 text-xl absolute bottom-3 right-10 max-[568px]:w-36 "} handleSubmit={handlerNextBtn} />
  </div>
  )
}

export default SignStep1