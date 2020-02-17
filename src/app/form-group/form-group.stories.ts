import {moduleMetadata, storiesOf} from '@storybook/angular';
import {FormGroupModule} from './form-group.module';
import {InputModule} from '../input/input.module';
import {withKnobs, text, number} from '@storybook/addon-knobs';

export default {
  title: 'Components | Form Group',
  decorators: [moduleMetadata({
    imports: [FormGroupModule, InputModule]
  })]
};

export const Basic = () => ({
  template: `
      <app-form-group [columns]="columns" [heading]="heading">
        <app-input label="Username" placeholder="johndoe@gmail.com"></app-input>
        <app-input label="Password" placeholder="password" type="password" type="password"></app-input>
      </app-form-group>
    `,
  props: {
    heading: text('Heading', 'This is the heading'),
    columns: number('Columns', 2)
  }
});
