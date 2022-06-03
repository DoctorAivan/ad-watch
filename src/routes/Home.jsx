import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileAudio,
  faFileArrowUp,
  faChevronRight,
  faFingerprint,
  faFileWaveform
} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className="mx-10 my-8">
      <div className="font-medium font-regular text-2xl text-slate-300 tracking-wider">
        <FontAwesomeIcon icon={faFileAudio} className='mr-3' /> Compare Audio Sources
      </div>
      <div className='mt-6 grid grid-cols-[1fr_70px_1fr_70px_1fr] gap-8'>
        <div className='text-center text-slate-200 py-10 rounded-xl bg-gradient-to-tl from-slate-700 to-slate-600'>
          <FontAwesomeIcon icon={faFileArrowUp} className='text-5xl' />
          <div className="text-green-400 text-xl font-medium pt-5 pb-0.5">
            First Step
          </div>
          <div className="text-base font-light">
            Select Recorded File
          </div>
        </div>
        <div className='text-slate-600 grid content-center justify-items-center'>
          <FontAwesomeIcon icon={faChevronRight} className='text-6xl' />
        </div>
        <div className='text-center text-slate-200 py-10 rounded-xl bg-gradient-to-tl from-slate-700 to-slate-600'>
          <FontAwesomeIcon icon={faFileArrowUp} className='text-5xl' />
          <div className="text-green-400 text-xl font-medium pt-5 pb-0.5">
            Second Step
          </div>
          <div className="text-base font-light">
            Select Music File
          </div>
        </div>
        <div className='text-slate-600 grid content-center justify-items-center'>
          <FontAwesomeIcon icon={faChevronRight} className='text-6xl' />
        </div>
        <div className='text-center text-slate-200 py-10 rounded-xl bg-gradient-to-tl from-slate-700 to-slate-600'>
          <FontAwesomeIcon icon={faFileWaveform} className='text-5xl' />
          <div className="text-green-400 text-xl font-medium pt-5 pb-0.5">
            Final Step
          </div>
          <div className="text-base font-light">
            Compare Audio
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home