import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Templates from './templates';
import { setNumber } from '../../reducers/tutorial/tutorialReducer';

const TutorialPage = () => {
  const dispatch = useDispatch();
  const number = useSelector(({ tutorial }) => tutorial.number);

  const data = useMemo(
    () => ({
      number,
      setNumber: (value) => dispatch(setNumber(value)),
    }),
    [dispatch, number],
  );

  return <Templates data={data} />;
};

export default TutorialPage;
