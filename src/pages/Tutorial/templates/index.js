import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import DefaultButton from '../../../components/atoms/DefaultButton';
import {
  TUTORIAL_MAX_NUMBER,
  TUTORIAL_MIN_NUMBER,
} from '../../../lib/constants/tutorialConstants';

// TODO 유기체, 분자로 세분화 리펙토링 필요.
const Templates = ({ data }) => {
  const { number, setNumber } = data;

  const handleNumberUp = useCallback(() => {
    if (TUTORIAL_MAX_NUMBER <= number) return;

    setNumber(number + 1);
  }, [number, setNumber]);

  const handleNumberDown = useCallback(() => {
    if (TUTORIAL_MIN_NUMBER >= number) return;

    setNumber(number - 1);
  }, [number, setNumber]);

  return (
    <>
      <main>
        <h2>Tutorial Page</h2>
        <DefaultButton onClick={handleNumberDown}>{`<`}</DefaultButton>
        <p>{number}</p>
        <DefaultButton onClick={handleNumberUp}>{`>`}</DefaultButton>
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
};

Templates.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.number,
    setNumber: PropTypes.func,
  }),
};

Templates.defaultProps = {
  data: { number: 0, setNumber: null },
};

export default Templates;
