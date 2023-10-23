import React, { useState } from 'react';

const FormatApiResponse = (response) => {
  const bulletPoints = response.response.split('* ').filter(point => point.trim() !== '');
  const bulletPointsHindi = response.hindiapiResponse.split('* ').filter(point => point.trim() !== '');
  const containsAsterisk = response.response.includes('*');

  const [showHindi, setShowHindi] = useState(false);
  const [responses, setResponses] = useState([bulletPoints, bulletPointsHindi]);

  const toggleHindi = () => {
    setShowHindi(!showHindi);
  };

  return (
    <div>
      {containsAsterisk ? (
        <>
          <ul>
            {responses[showHindi ? 1 : 0].map((point, index) => (
              <li className='font-medium	' key={index}>{point}</li>
            ))}
          </ul>
          <br></br>
          <button onClick={toggleHindi} className='text-sky-400'>
            {showHindi ? 'Show English Translation' : 'Show Hindi Translation'}
          </button>
        </>
      ) : (
        <p>{response.response}</p>
      )}
    </div>
  );
};

export default FormatApiResponse;
