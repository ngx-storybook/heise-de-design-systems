import {ButtonComponent} from './button.component';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Components | Button',
  decorators: [withKnobs]
};

export const primary = () => ({
  component: ButtonComponent,
  props: {
    label: text('Label', 'A different label')
  }
});
