import { rainbowButtonStyle } from './rainbowButton.css';
import Button from '../Button/Button';
import { spanStyle } from './spanStyle.css';

export function RainbowButton() {
  return (
    <span className={spanStyle}>
      <Button borderStyle={'none'} className={rainbowButtonStyle()}>
        Купить
      </Button>
    </span>
  );
}

export default RainbowButton;
