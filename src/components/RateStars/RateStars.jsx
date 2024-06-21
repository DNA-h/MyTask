import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {global_color} from '../../assets/styles/style';

const RateStars = ({stars}) => {
  const numberOfStars = stars || 0;

  return (
    <>
      {[...Array(numberOfStars)]?.map((_, index) => (
        <FontAwesome
          name="star"
          style={{color: global_color.WARNING}}
          key={index}
        />
      ))}
      {[...Array(5 - numberOfStars)]?.map((_, index) => (
        <FontAwesome name="star" key={index} />
      ))}
    </>
  );
};

export default RateStars;
