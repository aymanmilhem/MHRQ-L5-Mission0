// import logo from './logo.svg';
import './App.css';
import TopNavBar from './components/TopNavBar';
import Banner from './components/Banner';
import MainContent from './components/MainContent';
import Card from './components/Card';


const fakeData = [
  {
    picture: "/images/bannerImages/bannerImagePlaceholder.svg",
    title: "Lorem ipsum",
    description: "Est venenatis",
  },
  {
    picture: "/images/bannerImages/bannerImagePlaceholder.svg",
    title: "Lorem ipsum",
    description: "Est venenatis",
  },
  {
    picture: "/images/bannerImages/bannerImagePlaceholder.svg",
    title: "Lorem ipsum",
    description: "Est venenatis",
  },
  {
    picture: "/images/bannerImages/bannerImagePlaceholder.svg",
    title: "Lorem ipsum",
    description: "Est venenatis",
  },
  {
    picture: "/images/bannerImages/bannerImagePlaceholder.svg",
    title: "Lorem ipsum",
    description: "Est venenatis",
  },
  {
    picture: "/images/bannerImages/bannerImagePlaceholder.svg",
    title: "Lorem ipsum",
    description: "Est venenatis",
  }
];
function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Banner/>
      <MainContent>
        {fakeData.map((cardObject) => {
          return (
            <Card picture={cardObject.picture} title={cardObject.title} description={cardObject.description} alt={cardObject.title} />
          )
        })}
      </MainContent>

    </div>
  );
}

export default App;
