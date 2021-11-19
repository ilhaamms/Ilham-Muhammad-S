import { useState } from 'react';
import './App.css';
import './components/Wishlist.css';
import './components/Navbar.css';
import './components/Overview.css';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [overview, setOverview] = useState([]);
  const [page, setPage] = useState('movies')

  const [movies] = useState (
    [
      {
        name: 'Film : The Nun',
        genre: 'Genre : Mystery',
        image: 'https://i1.wp.com/www.musetv.net/wp-content/uploads/2018/09/1532553439896_246316_cops_0.jpg?fit=520%2C780&ssl=1',
        tagline: 'Pray For Forgiveness',
        kualitas: 'HD',
        tahun: '2018',
        durasi: '96 min',
        negara: 'USA',
        rilis: '5 September 2018',
        bahasa: 'English, Français, Latin, Română',
        direksi: 'Corin Hardy',
        pemain: 'Demián Bichir, Jonas Bloquet, Taissa Farmiga',
        overview: "Ketika seorang biarawati muda di sebuah biara terpencil di Rumania mengambil nyawanya sendiri, seorang imam dengan masa lalu yang angker dan seorang novisiat di ambang sumpah terakhirnya dikirim oleh Vatikan untuk menyelidiki. Bersama-sama mereka mengungkap rahasia suci ordo. Mempertaruhkan tidak hanya hidup mereka tetapi juga iman dan jiwa mereka, mereka menghadapi kekuatan jahat dalam bentuk biarawati iblis yang sama yang pertama kali meneror penonton di “The Conjuring 2” saat biara menjadi medan pertempuran yang mengerikan antara yang hidup dan yang terkutuk."
      },
      {
        name: 'Film : Danur',
        genre: 'Genre : Horror',
        image: 'https://upload.wikimedia.org/wikipedia/id/0/09/Danur_poster.jpg',
        tagline: 'I Cant See Ghost',
        kualitas: 'HD',
        tahun: '2017',
        durasi: '74 min',
        negara: 'Indonesia',
        rilis: '26 Maret 2017',
        bahasa: 'Bahasa Indonesia',
        direksi: 'Awi Suryadi',
        pemain: 'Prilly Latuconsina, Sandrinna Michelle, Shareefa Daanish',
        overview: 'Risa kaget karena ketiga sahabatnya itu hantu. Seorang roh jahat menculik saudara perempuan Risa. Risa meminta bantuan Peter, Wiliam, dan Janshen.'
      },
      {
        name: 'Film : Junggle Cruise',
        genre: 'Genre : Action',
        image: 'https://blogunik.com/wp-content/uploads/2020/10/Jungle-Cruise.jpg',
        tagline: 'Icant Junggle',
        kualitas: 'Bluray',
        tahun: '2021',
        durasi: '96 min',
        negara: 'USA',
        rilis: '29 Jul 2021',
        bahasa: 'English',
        direksi: 'Jaume Collet-Serra',
        pemain: 'Dwayne Johnson, Edgar Ramírez, Emily Blunt',
        overview: "Based on Disneyland’s theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles, but with a supernatural element."
      },
      {
        name: 'Film : Mr. Robot',
        genre: 'Drama',
        image: 'https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg',
        tagline: 'Wadepak Hacker Man',
        kualitas: 'Bluray',
        tahun: '2015',
        durasi: '120 min',
        negara: 'USA',
        rilis: '29 Jul 2015',
        bahasa: 'English',
        direksi: 'Hackker man',
        pemain: 'Rami Malek, Carly Chaikin, Martin Wallström',
        overview: "Elliot Alderson, seorang pemuda yang tinggal di New York City dan bekerja sebagai ahli keamanan maya di Allsafe. Ia mengalami kegelisahan sosial, gangguan identitas disosiatif, dan depresi klinis. Karena itu, jalan berpikir Elliot tampaknya sangat dipengaruhi oleh paranoia dan delusi. Ia berinteraksi dengan orang lain dengan cara meretas mereka. Dengan kemampuannya, ia kadang main hakim sendiri. Elliot direkrut oleh seorang anarkis insureksioner misterius yang biasa dipanggil Mr. Robot. Ia kemudian bergabung dengan kelompok hacktivis bernama fsociety. Salah satu misi mereka adalah memutihkan semua utang konsumen dengan menghancurkan data milik salah satu perusahaan terbesar di dunia, E Corp, sekaligus klien terbesar Allsafe."
      },
    ]);

    const addToWishlist = (movie) => {
      setWishlist([...wishlist, {...movie}]);
    };

    const removeFromWL = (movieToRemove) => {
      setWishlist(
        wishlist.filter((movie) => movie !== movieToRemove)
      );
    };

    const toOverviewHandler = (movie) => {
      setOverview([...overview, {...movie}]);
      setPage('overview');
    };

    const fromOverviewHandler = (overviewToRemove) => {
      setOverview(
        overview.filter((movie) => movie !== overviewToRemove)
        );
      navigateTo('movies');
    };

    const navigateTo = (nextPage) => {
      setPage(nextPage);
    };

    const renderMovies = () => (
      <>
              <div className = "Navbar">
                  <ul>
                      <li>
                        <h4>Nonton-Skuy 21</h4>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('wishlist')} className="WLButton">Wishlist</a>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('movies')} className = "ActivedHome">Home</a>
                      </li>
                  </ul>
              </div>
              <div className="Cards">
              {movies.map((movie, idx) => (
                <div className = "Card" key={idx}>
                  <img onClick={() => toOverviewHandler(movie)} className="MoviePoster" src = {movie.image}></img>
                  <div className = "Container">
                    <h5>{movie.name}</h5>
                    <h5>{movie.genre}</h5>
                    <div onClick={() => addToWishlist(movie)} className="Button">
                    <p>Add to Wishlist</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </>
    );

    const renderOverview = () => (
      <>
      <div className = "Navbar">
        <ul>
            <li>
                <h4>Nonton-Skuy 21</h4>
            </li>
        </ul>
      </div>
      <div className="OverviewContent">
          <div className = "Overview">
            {overview.map((movie, idx) => (
            <div className = "OverviewContainer">
              <img className = "OverviewPoster" src = {movie.image}></img>
              <div className = "MovieOverview">
                <h3>Sinopsis {movie.name}</h3>
                <p>{movie.overview}</p>
                <table>
                        <tr>
                          <td class="title-table">Tagline</td>
                          <td>: {movie.tagline}</td>
                        </tr>
                        <tr>
                          <td class="title-table">Genre</td>
                          <td>: {movie.genre}</td>
                        </tr>
                        <tr>
                          <td class="title-table">Kualitas</td>
                          <td>: {movie.kualitas}</td>
                        </tr>
                        <tr>
                          <td class="title-table">Tahun</td>
                          <td>: {movie.tahun}</td>
                        </tr>
                        <tr>
                          <td class="title-table">Durasi</td>
                          <td>: {movie.durasi}</td>
                        </tr>
                        <tr>
                          <td class="title-table">Negara</td>
                          <td>: {movie.negara}</td>
                        </tr>
                        <tr>
                          <td class="title-table">Rilis</td>
                          <td>: {movie.rilis}</td>
                        </tr>
                        <tr>
                          <td class="title-table">Bahasa</td>
                          <td>: {movie.bahasa}</td>
                        </tr>
                        <tr>
                          <td class="title-table">Direksi</td>
                          <td>: {movie.direksi}</td>
                        </tr>
                        <tr>
                          <td class="title-table">Pemain</td>
                          <td>: {movie.pemain}</td>
                        </tr>
                      </table>
              </div>
              <h5 className="BackButton" onClick={() => fromOverviewHandler(movie)}>Back</h5>
            </div>
          ))}
          </div>
      </div>
      
      </>
    )

    const renderWishlist = () => (
      <>
      <div className = "Navbar">
                  <ul>
                      <li>
                        <h4>Nonton-Skuy 21</h4>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('wishlist')} className="ActivedWL">Wishlist</a>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('movies')} className = "Home">Home</a>
                      </li>
                  </ul>
      </div>
      <div className = "Wishlist">
        <div className = 'WishlistContent'>
          <div className = "WishlistHeader">
            <h5>Wishlist</h5>
          </div>
          <div className = "WishlistBody">
            <div className = "WishlistCards">
              {wishlist.map((movie, idx) => (
                <div className = "WishlistCard">
                  <div className = "Details">
                    <img src = {movie.image}></img>
                    <h5>{movie.name}</h5>
                  </div>
                  <div className = "RemoveButton">
                    <h5 onClick={() => removeFromWL(movie)}>Remove</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </>
    );

  return (
    <div className="App">
            {page === 'movies' && renderMovies()}
            {page === 'overview' && renderOverview()} 
            {page === 'wishlist' && renderWishlist()}
    </div>
  );
}
export default App;
