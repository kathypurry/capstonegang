import styled from "styled-components";
// import Button from "react-bootstrap/Button";
// import ButtonGroup from "react-bootstrap/ButtonGroup";

const LabelHousing = styled.div`
  margin-left: 15vw;
  margin-bottom: 5vh;
`;

const Button = styled.button`
  background-color: var(--background);
  border-color: var(--neongreen);
  color: var(--neongreen);
  width: 130px;
  transition-duration: 0.4s;

  &:hover {
    background-color: var(--neongreen);
    color: var(--background);
  }

  &:focus {
    background-color: var(--neongreen);
    color: var(--background);
    cursor: not-allowed;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
`;

function SelectDifficulty({ handleDifficultyChange, difficulty }) {
  return (
    <div>
      <LabelHousing>
        <label htmlFor="difficulty">Pick your difficulty</label>
        <br />
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
          <Button onClick={handleDifficultyChange} value={1} variant="custom">
            Easy
          </Button>
          <Button onClick={handleDifficultyChange} value={2} variant="custom">
            Medium
          </Button>
          <Button onClick={handleDifficultyChange} value={3} variant="custom">
            Hard
          </Button>
          <Button onClick={() => { window.location.reload(true)}} variant="custom">
            Reset
          </Button>
        </ButtonGroup>
      </LabelHousing>
    </div>
  );
}

export default SelectDifficulty;
