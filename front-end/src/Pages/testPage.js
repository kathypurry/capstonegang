import StatGraph from '../Components/StatGraph'
import Timer from '../Components/Timer'

const TestPage = () => {
    
    return (
        <div>
            <StatGraph/>
            <Timer expiryTimestamp={30}/>
        </div>
    )
};

export default TestPage;
