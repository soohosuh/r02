import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
    return ( 
        <div className="container mx-auto bg-gray-700 h-[100vh]">
            <div>
                <SampleNav></SampleNav>
            </div>
            <div>
                <img src={require('../image/spzl1.jpg')} width={300}/>
                <img src={require('../image/spzl2.jpg')} width={300}/>
                <img src={require('../image/spzl3.jpg')} width={300}/>
            </div>
        </div>
    );
}
 
export default BasicLayout;