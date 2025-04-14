import { rainbowButtonStyle } from './rainbowButton.css';
import Button from '../Button/Button';

export function RainbowButton() {
  return (
    <Button borderStyle={'none'} className={rainbowButtonStyle()}>
      wdwd
    </Button>
  );
}

export default RainbowButton;
