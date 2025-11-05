import { faThumbsUp } from '@fa-pro/pro-regular-svg-icons/faThumbsUp'
import Button from '../Button'
import { Stack } from '@mobily/stacks'
import type { StoryObj } from '@storybook/react'

export const Primary = () => (
  <Stack space={4}>
    <Button.Primary>Primary</Button.Primary>
    <Button.Primary compact>Compact</Button.Primary>
    <Button.Primary icon={faThumbsUp}>Primary</Button.Primary>
    <Button.Primary compact icon={faThumbsUp}>
      Primary
    </Button.Primary>
    <Button.Primary icon={faThumbsUp} iconPosition="right">
      Primary
    </Button.Primary>

    <Button.Primary state="disabled">Disabled</Button.Primary>
    <Button.Primary compact state="disabled">
      Compact Disabled
    </Button.Primary>
    <Button.Primary state="disabled" icon={faThumbsUp}>
      Disabled
    </Button.Primary>
    <Button.Primary compact state="disabled" icon={faThumbsUp}>
      Disabled
    </Button.Primary>
    <Button.Primary state="disabled" icon={faThumbsUp} iconPosition="right">
      Disabled
    </Button.Primary>

    <Button.Primary state="busy">Busy...</Button.Primary>
    <Button.Primary state="busy" busyLabel="Custom Busy...">
      Busy...
    </Button.Primary>
    <Button.Primary compact state="busy">
      Compact Busy...
    </Button.Primary>
    <Button.Primary state="busy" iconPosition="right">
      Busy...
    </Button.Primary>
  </Stack>
)
export const Secondary = () => (
  <Stack space={4}>
    <Button.Secondary>Secondary</Button.Secondary>
    <Button.Secondary compact>Compact</Button.Secondary>
    <Button.Secondary icon={faThumbsUp}>Secondary</Button.Secondary>
    <Button.Secondary compact icon={faThumbsUp}>
      Secondary
    </Button.Secondary>
    <Button.Secondary icon={faThumbsUp} iconPosition="right">
      Secondary
    </Button.Secondary>

    <Button.Secondary state="disabled">Disabled</Button.Secondary>
    <Button.Secondary compact state="disabled">
      Compact Disabled
    </Button.Secondary>
    <Button.Secondary state="disabled" icon={faThumbsUp}>
      Disabled
    </Button.Secondary>
    <Button.Secondary compact state="disabled" icon={faThumbsUp}>
      Disabled
    </Button.Secondary>
    <Button.Secondary state="disabled" icon={faThumbsUp} iconPosition="right">
      Disabled
    </Button.Secondary>

    <Button.Secondary state="busy">Busy...</Button.Secondary>
    <Button.Secondary state="busy" busyLabel="custom.Busy">
      Busy...
    </Button.Secondary>
    <Button.Secondary compact state="busy">
      Compact Busy...
    </Button.Secondary>
    <Button.Secondary state="busy" iconPosition="right">
      Busy...
    </Button.Secondary>
  </Stack>
)
export const Tertiary = () => (
  <Stack space={4}>
    <Button.Tertiary>Tertiary</Button.Tertiary>
    <Button.Tertiary compact>Compact</Button.Tertiary>
    <Button.Tertiary icon={faThumbsUp}>Tertiary</Button.Tertiary>
    <Button.Tertiary compact icon={faThumbsUp}>
      Tertiary
    </Button.Tertiary>
    <Button.Tertiary icon={faThumbsUp} iconPosition="right">
      Tertiary
    </Button.Tertiary>

    <Button.Tertiary state="disabled">Disabled</Button.Tertiary>
    <Button.Tertiary compact state="disabled">
      Compact Disabled
    </Button.Tertiary>
    <Button.Tertiary state="disabled" icon={faThumbsUp}>
      Disabled
    </Button.Tertiary>
    <Button.Tertiary compact state="disabled" icon={faThumbsUp}>
      Disabled
    </Button.Tertiary>
    <Button.Tertiary state="disabled" icon={faThumbsUp} iconPosition="right">
      Disabled
    </Button.Tertiary>

    <Button.Tertiary state="busy">Busy...</Button.Tertiary>
    <Button.Tertiary state="busy" busyLabel="custom.Busy">
      Busy...
    </Button.Tertiary>
    <Button.Tertiary compact state="busy">
      Compact Busy...
    </Button.Tertiary>
    <Button.Tertiary state="busy" iconPosition="right">
      Busy...
    </Button.Tertiary>
  </Stack>
)

export const Playground: StoryObj<{
  label: string
  variant: 'primary' | 'secondary' | 'tertiary'
  state: 'enabled' | 'disabled' | 'busy'
  compact: boolean
  icon: boolean
  iconLocation: 'left' | 'right'
}> = {
  args: {
    label: 'Click me!',
    variant: 'primary',
    state: 'enabled',
    compact: false,
    icon: true,
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'primary',
    },
    state: {
      control: 'radio',
      options: ['enabled', 'disabled', 'busy'],
      defaultValue: 'enabled',
    },
    compact: {
      control: 'boolean',
    },
    icon: {
      control: 'boolean',
    },
    iconLocation: {
      control: 'radio',
      options: ['left', 'right'],
      defaultValue: 'left',
    },
  },
  render: (props) => {
    const ButtonVariant = {
      primary: Button.Primary,
      secondary: Button.Secondary,
      tertiary: Button.Tertiary,
    }[props.variant]
    return (
      <ButtonVariant
        compact={props.compact}
        icon={props.icon ? faThumbsUp : undefined}
        iconPosition={props.iconLocation}
        state={props.state}
      >
        {props.label}
      </ButtonVariant>
    )
  },
}

export default {
  title: 'NewStore/Molecules/Button',
}
