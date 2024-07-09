import React, { useState } from 'react';
import './works.css';
import Portfolio1 from '../../assets/work-1.jpg';
import Portfolio2 from '../../assets/work-2.jpg';
import Portfolio3 from '../../assets/work-3.jpg';
import Portfolio4 from '../../assets/work-4.jpg';
import Portfolio5 from '../../assets/work-5.jpg';
import Portfolio6 from '../../assets/work-6.jpg';

const Works = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id='works'>
      <h6 className='worksTitle'>Portfolio</h6>
      <span className='worksDesc'>
        I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. 
        I am excited to bring my skills into the practical world and thereby learn new skills.
      </span>
      <div className='worksImgs'>
        <div className='workItem'>
          <img src={Portfolio1} alt='' className='worksImg' />
          <a href="https://github.com/AparnaSumaVishnu/amazone-clone-homepage" target="_blank" rel="noopener noreferrer">
            GitHub Link
          </a>
        </div>
        <div className='workItem'>
          <img src={Portfolio2} alt='' className='worksImg' />
          <a href="https://github.com/AparnaSumaVishnu/charity" target="_blank" rel="noopener noreferrer">
            GitHub Link
          </a>
        </div>
        <div className='workItem'>
          <img src={Portfolio3} alt='' className='worksImg' />
          <a href="https://github.com/AparnaSumaVishnu/workspace" target="_blank" rel="noopener noreferrer">
            GitHub Link
          </a>
        </div>
        {showMore && (
          <>
            <div className='workItem'>
              <img src={Portfolio4} alt='' className='worksImg' />
              <a href="https://github.com/AparnaSumaVishnu/Edusity.git" target="_blank" rel="noopener noreferrer">
                GitHub Link
              </a>
            </div>
            <div className='workItem'>
              <img src={Portfolio5} alt='' className='worksImg' />
              <a href="https://github.com/AparnaSumaVishnu/online-voting-system.git" target="_blank" rel="noopener noreferrer">
                GitHub Link
              </a>
            </div>
            <div className='workItem'>
              <img src={Portfolio6} alt='' className='worksImg' />
              <a href="https://github.com/AparnaSumaVishnu/todo.git" target="_blank" rel="noopener noreferrer">
                GitHub Link
              </a>
            </div>
          </>
        )}
      </div>
      <button className='workBtn' onClick={toggleShowMore}>
        {showMore ? 'Show Less' : 'See More'}
      </button>
    </section>
  );
}

export default Works;
