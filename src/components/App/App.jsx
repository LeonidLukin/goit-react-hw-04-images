import { useState } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [keyword, setKeyword] = useState('')

  const handleSearchFormSubmit = keyword => setKeyword(keyword)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar onSubmit={handleSearchFormSubmit} />
      <ImageGallery keyword={keyword} />
    </div>
  );
}

// export default class App extends Component {
//   state = {
//     keyword: '',
//   };

//   handleSearchFormSubmit = keyword => {
//     this.setState({ keyword });
//   };

//   render() {
//     return (
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr',
//           gridGap: '16px',
//           paddingBottom: '24px',
//         }}
//       >
//         <Searchbar onSubmit={this.handleSearchFormSubmit} />
//         <ImageGallery keyword={this.state.keyword} />
//         {/* <ToastContainer/> */}
//       </div>
//     );
//   }
// }