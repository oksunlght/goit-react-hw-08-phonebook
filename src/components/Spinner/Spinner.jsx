import { ColorRing } from 'react-loader-spinner';

const Spinner = () => (
  <ColorRing
    visible={true}
    height="48"
    width="48"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
);

export default Spinner;
