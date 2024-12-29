import {BallCanvas} from '../canvas';
  import { SectionWrapper } from '../../../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {
        technologies?.map((tech) => (
          <div className='flex flex-col items-center w-32 h-32' key={tech.name}>
            <BallCanvas icon={tech.icon} />
           <span className='mt-2'>{tech.name}</span>
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, '')