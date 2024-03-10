/**
 * @format
 */

import 'react-native'

import { it, describe } from '@jest/globals'
import { render } from '@testing-library/react-native'
import MoleculeButton from '@molecules/MoleculeButton.tsx'

describe('Atom button', () => {
  // Render button with correct values
  it('Render button with correct values', () => {
    const textButton = 'Test Button'

    const { getByText } = render(
      <MoleculeButton
        text={textButton}
        action={() => {
          console.log('Clicked..')
        }}
        size={'md'}
      />,
    )

    getByText(textButton)
  })
})
