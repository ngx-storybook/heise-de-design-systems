import {select, text, withKnobs} from '@storybook/addon-knobs';
import {InputComponent} from './input.component';

export default {
  title: 'Components | Input',
  decorators: [withKnobs]
};

export const Basic = () => ({
  component: InputComponent,
  props: {
    label: text('Label', 'My Label'),
    placeholder: text('Placeholder', 'My Placeholder'),
    type: select('Type', ['text', 'password'], 'text')
  }
});
