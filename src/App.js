import './App.css';
import React,{ useState } from 'react'
import MovieCard from './Components/MovieCard.js'
import MovieList from './Components/MovieList.js'
import MovieDescription from './Components/MovieDescription.js'
import HeaderNav from './Components/HeaderNav.js'
import {Route} from 'react-router-dom'

function App( ) {

  const[products, setProducts]=useState( 
   [ 
    {
       title : "Outside the Wire", 
       description : "In the near future, a drone pilot sent into a war zone finds himself paired with a top-secret android officer on a mission to stop a nuclear attack.",
        posterUrl :"https://i2.wp.com/vsmoviepodcast.com/wp-content/uploads/2021/01/Outside-the-Wire-poster-Courtesy-of-Netflix.jpg?fit=1000%2C1482&ssl=1" ,
        rate : 7,
        trailerURL : "https://www.youtube.com/embed/u8ZsUivELbs"
    },
    {
       title : "The Old Guard", 
       description : "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal",
        posterUrl :"https://i0.wp.com/cinedweller.com/wp-content/uploads/2020/07/the-old-guard-affiche.jpg?fit=608%2C900&ssl=1" ,
        rate : 6.5,
        trailerURL : "https://www.youtube.com/embed/aK-X2d0lJ_s"
    },
    {
       title : "Spider-Man: Homecoming", 
       description : "Peter Parker returns to routine life as a high schooler until the Vulture's arrival gives him the chance to prove himself as a web-slinging superhero.",
        posterUrl :"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/uc7ae2rek8ne8ov0ue8e/spider-man-homecoming-poster" ,
        rate : 8, 
        trailerURL : "https://www.youtube.com/embed/n9DwoQ7HWvI"
    },
    {
       title : "Extraction", 
       description : "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",
        posterUrl :"https://www.cavsconnect.com/wp-content/uploads/2020/05/Extraction-poster-600x889-1.jpg" ,
        rate : 7.5, 
        trailerURL :"https://www.youtube.com/embed/L6P3nI6VnlY"
    }, 
    {
       title : "We Can Be Heroes", 
       description : "When alien invaders capture Earth’s superheroes, their kids must learn to work together to save their parents — and the planet.",
        posterUrl :"https://m.media-amazon.com/images/M/MV5BYmU3OGFhZDItMjhlZi00YjQwLWJlOTItYzlhOGEwNGU3NjIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" ,
        rate : 5 , 
        trailerURL : "https://www.youtube.com/embed/VaTuk02FgQc"
    }, 
    {
       title : "Suicide Squad", 
       description : "A secret government official releases the world's worst super villains from prison to have them stop an impending apocalypse in exchange for freedom.",
        posterUrl :"https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg" ,
        rate : 5.5, 
        trailerURL : "https://www.youtube.com/embed/CmRih_VtVAs"
    }, 
    {
       title : "Little Man", 
       description : "A man is so eager to become a dad that he'll believe anything, including the notion that a baby-faced thief on the lam is really an abandoned toddler.",
        posterUrl :"https://m.media-amazon.com/images/M/MV5BMTI0NTA3MjI3NV5BMl5BanBnXkFtZTcwNTI1ODYzMQ@@._V1_.jpg" ,
        rate : 8.5, 
        trailerURL : "https://www.youtube.com/embed/n6ir-qPI2PU"
    }, 
    {
       title : "Skyscraper", 
       description : "When terrorists attack the tallest building in the world, a security consultant will do anything to save his family from the carnage.",
        posterUrl :"https://i.pinimg.com/564x/c2/ef/51/c2ef51123c764541e2087b0324ee72e7.jpg",
        rate : 6, 
        trailerURL : "https://www.youtube.com/embed/t9QePUT-Yt8"
      },
      {
        title : "Changeling", 
        description : "When her kidnapped son is brought home, a mother suspects that the boy isn't her child, so the police captain has her committed to an asylum.",
        posterUrl :"https://i.pinimg.com/originals/04/26/28/042628413d0697e2942f97475aae0f5a.jpg",
        rate : 6.5, 
        trailerURL : "https://www.youtube.com/embed/PmfjureC-5I"
    },
      {
        title : "Jumanji: Welcome to the Jungle", 
        description : "Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars.",
        posterUrl :"https://m.media-amazon.com/images/I/71zfxjVkzGL._AC_SL1000_.jpg",
        rate : 8.5, 
        trailerURL : "https://www.youtube.com/embed/2QKg5SZ_35I"
    },
      {
        title : "6 Underground", 
        description : "After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.",
        posterUrl :"https://fr.web.img3.acsta.net/pictures/19/11/14/15/36/5224064.png",
        rate : 6, 
        trailerURL : "https://www.youtube.com/embed/YLE85olJjp8"
      },
      {
        title : "The Dark Knight", 
        description : "As Batman, Lt. Gordon and the district attorney continue to dismantle Gotham's criminal underground, a new villain threatens to undo their good work..",
        posterUrl :"https://images-na.ssl-images-amazon.com/images/I/71tUSFn3W0L._AC_SL1000_.jpg",
        rate : 7.5, 
        trailerURL : "https://www.youtube.com/embed/EXeTwQWrcwY"
      }
   ] );

   const [filterPro, setFilterPro]=useState("");

   const [cartItems, setCartItems] =useState([]);

   const [filterRate, setFilterRate]=useState("");

   const onAdd = (product) => {
    const exist = cartItems.find((x)=> x.title === product.title);  
    if (exist) {
      alert("This Movie is already exists in the cart !");
    } else {
      setCartItems([...cartItems,{...product}]);
    }
   };

   const onRemove = (product) => { 
   setCartItems(cartItems.filter((x) => x.title !== product.title))
   }

   const handleInput = (e) => {    
    setFilterPro(  e.target.value ); 
  } 

  const handleInputRate = (e) => {
    setFilterRate(e.target.value );
  }

  const [form,setForm] = useState({title : "" , description : "",posterUrl :"", rate : "", trailerURL :"" })

  const handlechange = (e) => {  
   setForm( { ...form,[e.target.name]: e.target.value})    
  }

  const submit = (e) => {
    e.preventDefault();
    if (form.title==="" || form.description==="" || form.posterUrl==="" ||form.trailerURL==="" || form.rate<0 || form.rate>10) 
    {alert("Please give the requested informations of the Movie ! All the fields below are mandatory.")}
    else { 
    setProducts([...products,{...form}]);
    setForm({title : "" , description : "",posterUrl :""  ,rate : "" ,trailerURL :""})
    alert("The Movie has been succefully added to the Movie List, check the bottom of the list, Thanks.")}
  }

   let filterProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(filterPro.toLowerCase())
  })

  let filterProductsRate = filterProducts.filter((product) => {
    return product.rate.toString().startsWith(filterRate)
  })

  return (
    <div className="App">      
      <Route  path="/" render= {() => <HeaderNav filterProducts={filterProducts} handleInput={handleInput} handleInputRate={handleInputRate} cartItems={cartItems} filterPro={filterPro} filterRate={filterRate}/>}/>
      <Route exact path="/" render= {() => <MovieList filterProductsRate={filterProductsRate} onAdd={onAdd} handlechange={handlechange} submit={submit} form={form}/> }/>
      <Route path="/MovieCart" render= {() => <MovieCard cartItems = {cartItems} onRemove={onRemove}/>}/>
      <Route path="/Movie/:title" render={(props)=> <MovieDescription filterProductsRate={filterProductsRate} {...props}/>}/>
    </div>
  );
}

export default App;