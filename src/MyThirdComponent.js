
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";

function MyThirdComponent(props) {

    const { parentComponentName} = props;
    return (
        <>
        <h2>
        Inside MyThirdCompontnt {parentComponentName}
         </h2>

         <FirstChild parentComponentName={"MyThirdComponent"}/>
         <SecondChild parentComponentName={"MyThirdComponent"}/>
         <ThirdChild parentComponentName={"MyThirdComponent"}/>
        
        </>
    );
}
export default MyThirdComponent;

