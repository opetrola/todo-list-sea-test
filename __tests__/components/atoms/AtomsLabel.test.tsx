/**
 * @format
 */

import { describe, it } from '@jest/globals'
import { render } from '@testing-library/react-native'
import AtomLabel from '@atoms/AtomLabel.tsx'

describe('AtomLabel', () => {
  const labelText = 'Test atom Label'
  const size = 'md'

  it('atom label render correctly', () => {
    const { getByTestId } = render(<AtomLabel text={labelText} size={size} />)
    expect(getByTestId('atomLabel')).toBeTruthy()
  })

  it('atom label render correct text', () => {
    const { getByTestId } = render(<AtomLabel text={labelText} size={size} />)
    expect(getByTestId('atomLabel').props.children).toEqual(labelText)
  })

  it('size isn`t defined, render md', () => {
    const { getByTestId } = render(<AtomLabel text={labelText} />)
    expect(getByTestId('atomLabel').props.size).not.toBeTruthy()
    expect(getByTestId('atomLabel').props.style.fontSize).toEqual(18)
  })

  it('should be uppercase if declared upper', () => {
    const { getByTestId } = render(<AtomLabel text={labelText} uppercase />)
    expect(getByTestId('atomLabel').props.style.textTransform).toEqual(
      'uppercase',
    )
  })

  it('should not be uppercase if isn`t declared upper', () => {
    const { getByTestId } = render(<AtomLabel text={labelText} />)
    expect(getByTestId('atomLabel').props.style.textTransform).toEqual('none')
  })
})
