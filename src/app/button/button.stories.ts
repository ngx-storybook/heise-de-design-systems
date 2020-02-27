import {ButtonComponent} from './button.component';
import { text, withKnobs } from '@storybook/addon-knobs';
import markdown from './button.component.md';

export default {
  title: 'Components | Button',
  decorators: [withKnobs],
  parameters: {
    notes: markdown
  }
};

export const primary = () => ({
  component: ButtonComponent,
  props: {
    label: text('Label', 'A label')
  }
});
