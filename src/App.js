import Header from "./component/header/Header";
import './app.scss'
import Headline from "./component/headline/Headline";
import SharedButton from "./component/button/SharedButton";
import ListItem from './component/listItem/ListItem'
import {connect,useDispatch,useSelector} from 'react-redux'
import { fetchPosts } from "./redux/reducers/actions";

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}]
function App(props) {
  const {posts} =  useSelector(state => state)
  const dispatch = useDispatch()
  const configButton = {
    btnText: 'Get Posts',
    emitEvent: ()=>dispatch(fetchPosts()),
  }

  return (
    <div className="App" data-test='appComponent'>
      <Header />
        <section className="main">
      <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
      <SharedButton {...configButton} />
      {posts.length > 0 && <div>{
        posts.map((post,index)=>{
          const {title,body} = post
          const configListItem = {
            title,
            desc: body
          }
          return(
          <ListItem key={index} {...configListItem}/>)
        })
      }</div>}
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
