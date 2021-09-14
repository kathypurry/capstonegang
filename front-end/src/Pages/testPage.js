import StatGraph from '../Components/StatGraph';
import Timer from '../Components/Timer';
import Snippets from '../Components/Snippets';
// import DisplaySnippets from '../Components/DisplaySnippets'
import PlayerInput from '../Components/PlayerInput'

const TestPage = () => {
    
    return (
        <div>
            <StatGraph/>
            <Timer expiryTimestamp={30} />
            <Snippets/>
            <PlayerInput />
        </div>
    )
};

export default TestPage;
