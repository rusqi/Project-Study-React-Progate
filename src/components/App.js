import React from 'react';
import Language from './';

class App extends React.Component {
  render() {
    // Tempelkan code yang disediakan di jendela instruksi ke bawah baris ini 
const languageList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
      },
      {
        name: 'Ruby',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg'
      },
      {
        name: 'Ruby on Rails',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg'
      },
      {
        name: 'Python',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg'
      }
    ];

    return (
      <div>
        <h1>List of Language</h1>
        <div className='language'>
          {/* hapus code dari sini */}
          {/* Sampai sini */}
          {/* Gunakan method map untuk mendisplay component Language */}
          {languageList.map((languageItem) => {
            return (
              // Panggil component Language dan teruskan props ke component tersebut
              <Language
              name = {languageItem.name}
              image = {languageItem.image}
              />
            )
          })}
          
        </div>
      </div>
    );
  }
}

export default App;