import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = ()=>{
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Signin"}/>
                <SubHeading label={"enter your credentials for entering into your account"}/>
                <InputBox placeholder={"name@gmail.com"} label={"Email"}/>
                <InputBox placeholder={"12344"} label={"password"} />
                <div className="pt-4">
                    <Button label={"signin"}/>
                </div>
                <ButtonWarning label={"dont have an account?"} buttonText={"signup"} to={"/signup"}/>
            </div>
        </div>
    </div>
}