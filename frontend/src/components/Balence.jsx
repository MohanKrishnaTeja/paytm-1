/* eslint-disable react/prop-types */
export const Balence = ({value}) =>{
    return <div>
        <div className="font-bold text-lg">
            your balence
        </div>
        <div className="font-semibold ml-4 text-lg" >
            Rs {value}
        </div>
    </div>
}