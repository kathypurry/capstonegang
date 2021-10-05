import styled from "styled-components";

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

function SelectDifficulty({ handleDifficultyChange }) {
  return (
    <div>
      <LabelHousing>
        <label htmlFor="difficulty">Pick your difficulty</label>
        <br />

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
        </ButtonGroup>
      </LabelHousing>
    </div>
  );
};

export default SelectDifficulty;
