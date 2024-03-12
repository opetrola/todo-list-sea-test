import AtomModal from '@atoms/AtomModal.tsx'
import AtomSpinner from '@atoms/AtomSpinner.tsx'

interface IMoleculeModalLoading {
  isLoading: boolean
}

const MoleculeModalLoading = ({ isLoading }: IMoleculeModalLoading) => {
  return (
    <AtomModal visible={isLoading}>
      <AtomSpinner size="large" />
    </AtomModal>
  )
}

export default MoleculeModalLoading
