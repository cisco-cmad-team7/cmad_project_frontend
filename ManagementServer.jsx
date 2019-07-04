import React from 'react';
import Header from './Header.jsx';
import SideBar from './SideBar.jsx';
import Statistics from './Statistics.jsx';
import MessageFilter from './MessageFilter.jsx';
import MessageList from './MessageList.jsx';

class Directory extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         
      }
      
   }
   
   render() {
      return (
         <div>
            <Header />
            <div class="row" style={{marginTop:"2%"}}>
                <div class="col-md-3">
                    <SideBar />
                </div>
                <div class="col-md-9">
                <div class="row">
                        <Statistics />
                    </div>
                    <div class="row">
                        <MessageFilter />
                    </div>
                    <div class="row">
                        <MessageList />
                    </div>
                    
                </div>
            </div>
            
            
         </div>
      )
   }
}

export default Directory;