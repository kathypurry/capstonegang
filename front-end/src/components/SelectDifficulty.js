import styled from "styled-components";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const LabelHousing = styled.div`
  margin-left: 15vw;
  margin-bottom: 5vh;
`;

function SelectDifficulty({ handleDifficultyChange, difficulty }) {
  return (
    <div>
      <LabelHousing>
        <label htmlFor="difficulty">Pick your difficulty</label>
        <br/>
        {/* <select 
            id='difficulty' 
            onChange={handleDifficultyChange} 
            value={Number(difficulty)}
          >
            <option value='default'>-Choose difficulty-</option>
            <option value='1' defaultChecked>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select> */}

        <ButtonGroup aria-label="difficulty selector">
          <Button
            onClick={handleDifficultyChange}
            value={1}
            variant="custom"
          >
            Easy
          </Button>
          <Button
            onClick={handleDifficultyChange}
            value={2}
            variant="custom"
          >
            Medium
          </Button>
          <Button
            onClick={handleDifficultyChange}
            value={3}
            variant="custom"
          >
            Hard
          </Button>
        </ButtonGroup>
      </LabelHousing>
    </div>
  );
}

export default SelectDifficulty;
