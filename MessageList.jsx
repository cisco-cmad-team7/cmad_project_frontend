import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Griddle from 'griddle-react';
class MessageList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: []
      }
      this.fetchData = () => {
            console.log("in fetch data")
      }

   }
   componentDidMount() {
      fetch('http://localhost:8090/message?pageNumber=0&numOfRecords=20&sortBy=datetime').then(response => {
         response.json().then(data => {

            this.setState({
               data: data
            });
         })
      });
   }
   render() {
      return (
         <div style={{marginLeft:'-155px',marginTop:'30px'}}>
         <Griddle results={this.state.data} resultsPerPage={5} enableInfiniteScroll={true} bodyHeight={200}/>
         </div>


      )
   }
}

export default MessageList;
