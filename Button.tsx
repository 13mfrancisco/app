import * as React from 'react'
import {
  ActivityIndicator,
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native'
import { Icon, IconDefinition } from '../atoms/Icon'
import Typography from '../atoms/Typography'
import { BaseStyles } from '../baseStyles'
import { Color, colors } from '../types'

const styles = StyleSheet.create({
  common: {
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  compact: {
    height: 40,
    alignSelf: 'center',
  },
  pressed: {
    opacity: 0.6,
  },
  large: {
    paddingHorizontal: 24,
    height: 64,
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
})

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
type ButtonSize = 'default' | 'large'
export type ButtonState = 'enabled' | 'disabled' | 'busy'

type ButtonStyles = Record<
  ButtonVariant,
  Record<ButtonState, StyleProp<ViewStyle>> & {
    textColor: Record<ButtonState, Color>
  }
>
const variantButtonStyles: ButtonStyles = {
  primary: {
    enabled: { backgroundColor: colors.gray800 },
    disabled: { backgroundColor: colors.gray200 },
    busy: { backgroundColor: colors.gray200 },
    textColor: {
      enabled: 'white',
      disabled: 'gray400',
      busy: 'gray400',
    },
  },
  secondary: {
    enabled: {
      backgroundColor: colors.white,
      ...BaseStyles.shadow,
    },
    disabled: {
      backgroundColor: colors.white,
    },
    busy: {
      backgroundColor: colors.white,
    },
    textColor: {
      enabled: 'gray900',
      disabled: 'gray300',
      busy: 'gray300',
    },
  },
  tertiary: {
    enabled: {},
    disabled: {},
    busy: {},
    textColor: {
      enabled: 'pink500',
      disabled: 'gray300',
      busy: 'gray300',
    },
  },
}

type ButtonProps = {
  onPress?: () => void
  state?: ButtonState
  compact?: boolean
  size?: ButtonSize
  icon?: IconDefinition
  iconPosition?: 'left' | 'right'
  busyLabel?: string
  testID?: string
  children: string
  accessibilityLabel?: string
}

const createButton = (variant: ButtonVariant) => {
  const variantStyle = variantButtonStyles[variant]
  const variantTextColor = variantStyle.textColor
  return React.memo((props: ButtonProps) => {
    const {
      onPress,
      state = 'enabled',
      compact,
      icon,
      size = 'default',
      iconPosition = 'left',
      busyLabel,
      testID,
      children,
      accessibilityLabel,
    } = props

    const stateTextColor = variantTextColor[state]
    const onStyle = React.useCallback(
      ({ pressed }: PressableStateCallbackType) => [
        styles.common,
        variantStyle[state],
        compact ? styles.compact : {},
        pressed ? styles.pressed : {},
        size === 'large' && styles.large,
        iconPosition === 'right' ? styles.reverse : {},
      ],
      [state, iconPosition, compact],
    )
    return (
      <Pressable
        accessibilityRole="button"
        disabled={state !== 'enabled'}
        accessibilityState={{
          disabled: state !== 'enabled',
          busy: state === 'busy',
        }}
        accessibilityLabel={accessibilityLabel}
        onPress={onPress}
        style={onStyle}
        testID={testID}
      >
        {state === 'busy' ? (
          <ActivityIndicator
            accessible
            accessibilityRole="progressbar"
            accessibilityState={{ busy: true }}
            color={stateTextColor}
          />
        ) : (
          icon && <Icon definition={icon} color={stateTextColor} />
        )}
        <Typography.Callout color={stateTextColor} textAlign="center">
          {(state === 'busy' && busyLabel) || children}
        </Typography.Callout>
      </Pressable>
    )
  })
}

export default {
  Primary: createButton('primary'),
  Secondary: createButton('secondary'),
  Tertiary: createButton('tertiary'),
}
