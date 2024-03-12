/**
 * @format
 */

import 'react-native'

import { it, describe } from '@jest/globals'
import { fireEvent, render } from '@testing-library/react-native'
import MoleculeIconButton from '@molecules/MoleculeIconButton.tsx'

describe('MoleculeIconButton', () => {
  it('render icon button with correct values.', () => {
    const { getByTestId } = render(
      <MoleculeIconButton name="logo-github" onPress={() => {}} />,
    )

    expect(getByTestId('moleculeIconButton')).toBeTruthy()
    // console.log(getByTestId('moleculeIconButton'))
  })

  it('button when active is clickable.', () => {
    const { getByTestId } = render(
      <MoleculeIconButton
        name="logo-github"
        onPress={() => {
          console.log('test')
        }}
      />,
    )

    const byId = getByTestId('moleculeIconButton')

    expect(byId.props.accessibilityState.disabled).not.toBeTruthy()
    fireEvent.press(byId)
  })
})
