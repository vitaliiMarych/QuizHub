import React, { useState } from 'react';
import cl from './style/Quizzes.module.css';
import MyInput from '../UI/myInput/MyInput';
import MySelect from '../UI/mySelect/MySelect';
import { Quiz } from '../../types/QuizzesTypes';
import { optionValueInSort, optionValueTypes } from '../../types/HTMLtypes';
import { useActions } from '../../hooks/useActions';

const QuizzesFindComponent = () => {
  const [selectedSort, setSelectedSort] = useState<optionValueInSort>(optionValueInSort.default);
  const [findPart, setFindPart] = useState('')
  const {selectAndSortQuizzes} = useActions();

  const sortQuizzes = (sort:optionValueInSort) => {
    setSelectedSort(sort);
    selectAndSortQuizzes(findPart, sort);
  }

  const selectQuizzes = (findPart: string) => {
    setFindPart(findPart);
    selectAndSortQuizzes(findPart, selectedSort);
  }


  return (
    <div className={cl.quiz_finder}>
        <MyInput value={findPart} onChange={selectQuizzes}>Find</MyInput>
        <div className={cl.select_wrapper}>
          <MySelect
            selectValue={selectedSort} onChange = {sortQuizzes}
            defaultName='Sort' defaultValue={optionValueInSort.default} options={[
              {name: 'by title', value: optionValueInSort.title},
              {name: 'by date', value: optionValueInSort.date},
          ]}/>        
        </div>
    </div>

  );
}

export default QuizzesFindComponent;