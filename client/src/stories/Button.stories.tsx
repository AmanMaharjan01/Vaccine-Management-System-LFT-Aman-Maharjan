import ButtonComponent, { IButton } from 'components/ButtonComponent';

export default {
  title: 'Example button',
  component: ButtonComponent,
  argsType: { handleClick: { action: 'handleClick' } },
};

function Template(args: IButton) {
  const props = args;
  return <ButtonComponent {...props} />;
}

export const Primary: any = Template.bind({});
export const Secondary: any = Template.bind({});
export const Success: any = Template.bind({});

Primary.args = {
  label: 'Primary',
  bgColor: 'blue',
  color: '#fff',
  handleClick: () => {
    alert(' hello aman');
  },
};

Secondary.args = {
  label: 'Secondary',
  bgColor: 'grey',
  handleClick: () => {
    alert(' hello aman');
  },
};

Success.args = {
  label: 'Success',
  bgColor: 'green',
  color: '#fff',

  handleClick: () => {
    alert(' hello aman');
  },
};
