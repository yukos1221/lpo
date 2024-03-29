import breakpoints from '../../../../../../lib/breakpoints';
import { MAIN_COLOR } from '../../../../../../lib/constants';

const styles = {
  container: {
    width: "calc(((100vw - 12rem) / 5) - 1.5rem)",
    height: "100%",
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 0.75rem',
    marginBottom: '2.5rem',
    [breakpoints.down('800')]: {
      minWidth: 'auto',
      marginBottom: '8rem',
      width: "calc(((100vw - 6rem) / 2) - 1.5rem)",
      height: "calc(((100vw - 6rem) / 2) - 1.5rem)",
    },
    [breakpoints.down('600')]: {
      minWidth: '280px',
      marginBottom: '4rem',
      width: "calc(((100vw - 6rem) / 2) - 1.5rem)",
      height: "100%",
    },
  },
  photoBlock: {
    width: 'fit-content',
    height: '100%',
    backgroundColor: MAIN_COLOR,
  },
  photo: {
    objectFit: 'cover',
    width: '100%',
    transform: 'translate(-15px, -15px)',
  },
  name: {
    color: 'white',
    fontWeight: 500,
    width: 'fit-content',
    padding: '0.625rem 0.75rem 0.375rem',
    backgroundColor: 'black',
    margin: '1rem 0 0.5rem',
    textTransform: 'uppercase',
  },
  description: {
    fontFamily: 'Museo Sans Cyrl',
  }
};

export default styles;
