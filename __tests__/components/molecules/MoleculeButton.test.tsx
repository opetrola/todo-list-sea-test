/**
 * @format
 */

import 'react-native'

import { it, describe } from '@jest/globals'
import { fireEvent, render } from '@testing-library/react-native'
import MoleculeButton from '@molecules/MoleculeButton.tsx'

describe('AtomButton', () => {
  const textButton = 'Test Button'

  it('render button with correct values.', () => {
    const { getByTestId, getByText } = render(
      <MoleculeButton
        text={textButton}
        size={'md'}
        action={() => {
          console.log('Clicked..')
        }}
      />,
    )

    expect(getByTestId('moleculeButton')).toBeTruthy()
    expect(getByText(textButton).props.children).toEqual(textButton)
  })

  it('button when active is clickable.', () => {
    const { getByTestId } = render(
      <MoleculeButton
        text={textButton}
        size={'md'}
        action={() => {
          console.log('Clicked..')
        }}
      />,
    )

    const byId = getByTestId('moleculeButton')

    expect(byId.props.accessibilityState.disabled).not.toBeTruthy()
    fireEvent.press(byId)
  })
})
