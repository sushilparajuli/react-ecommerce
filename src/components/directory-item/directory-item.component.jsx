import { useNavigate } from 'react-router';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();
  
  const navigateHandler = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}/>
      <Body onClick={navigateHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
