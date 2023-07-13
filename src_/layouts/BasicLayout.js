import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
    return ( 
        <div className="container mx-auto bg-gray-700 min-w-[1280px]">
            <div>
                <SampleNav></SampleNav>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}
 
export default BasicLayout;