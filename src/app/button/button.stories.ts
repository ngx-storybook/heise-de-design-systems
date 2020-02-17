import {ButtonComponent} from './button.component';
import {text} from '@storybook/addon-knobs';

export default {
  title: 'Components | Button',
  component: ButtonComponent,
};

export const primary = () => ({
  component: ButtonComponent,
  props: {
    label: text('Label', 'A different label')
  }
});
