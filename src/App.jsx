import ColorPicer from './ColorPicer'
import CosmicPortal from './CosmicPortal'
import './index.css'

const App = () => {
  return (
    <>
    <div className='fixed top-0 w-full h-screen'>
    <CosmicPortal />
    </div>
      <div className='flex justify-center items-center w-full min-h-screen bg'>
        <ColorPicer />
      </div>
    </>
  )
}

export default App