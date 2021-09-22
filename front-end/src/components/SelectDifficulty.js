import styled from 'styled-components'
const LabelHousing = styled.div`
  margin-left: 15vw;
  margin-bottom: 5vh;
`

function SelectDifficulty({ handleDifficultyChange, difficulty }) {

    return (
        <div>
        <LabelHousing>
          <label htmlFor='difficulty'>Pick your difficulty</label>
          <select 
            id='difficulty' 
            onChange={handleDifficultyChange} 
            value={Number(difficulty)}
          >
            <option value='default'>-Choose difficulty-</option>
            <option value='1' defaultChecked>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
        </LabelHousing>
        </div>
    );
};

export default SelectDifficulty;
