import HashLoader from "react-spinners/HashLoader";
import "./customLoading.scss";

export const CustomLoading = function () {
    return (
        <div className='loading-wrapper'>
           <HashLoader size={115} color={"gray"}/>
        </div>
    );
};
