import React from 'react';

class MessageFilter extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         secondaryFilterOptions: [],
         filterType:"",
         filterValue:"",

      }
      this.filterMapping = {"severity":["","error","warn","info","debug"],"location":["","SJ","BGL","OTT","OTH"]}
      this.createSelectItems = (e) => {
         let items = [];         
         for (let i = 0; i <= this.filterMapping.length; i++) {             
              items.push(<option key={i} value={i}>{i}</option>);   
              //here I will be creating my options dynamically based on
              //what props are currently passed to the parent component
         }
         return items;
      }
      
      this.onfilterTypeSelected  = (e) => {
        
         console.log(e.target.value)
         this.setState({
            secondaryFilterOptions:this.filterMapping[e.target.value],
            filterType :  e.target.value
         })
         console.log(this.state.secondaryFilterOptions)
      }

      this.onfilterValueSelected  = (e) => {
         this.setState({
            filterValue :  e.target.value
         })
        
      }
      

   }
   
   
   
 
   render() {
      return (
         <div class="kt-portlet" style={{marginLeft:'-155px',marginTop:'30px'}}>
            <div class="kt-portlet__head">
                <div class="kt-portlet__head-label">
                    <span class="kt-portlet__head-icon kt-hidden">
                        <i class="la la-gear"></i>
                    </span>
                    <h3 class="kt-portlet__head-title">
                      Message Filters
                    </h3>
                </div>
            </div>
            <div class="kt-portlet__body">
               
                <div class="kt-section">
                <span class="kt-section__info">Filter Messages by selecting the criteria from first dropdown and the corresponding value from second dropdown </span>

                        <div class="row">

                            <div class="col" style={{display:'-webkit-inline-box'}}>
                            <div class="dropdown">
                            <select class="btn btn-primary dropdown-toggle" id="lang" onChange={this.onfilterTypeSelected} value={this.state.filterType}>
                               
                              <option value="severity">Severity</option>
                              <option value="location">Location</option>
                              
                           </select>
                             
                           </div>
                           <div class="dropdown" style={{marginLeft:'10%'}}>
                           <select class="btn btn-primary dropdown-toggle" id="lang" onChange={this.onfilterValueSelected} value={this.state.filterValue}>
                               
                               {
                                  this.state.secondaryFilterOptions.map(e=> <option value={e}>{e}</option> )
                               }
                            </select>
                           </div>
                            </div>
                          
                        </div>

                    </div>
               
               
            </div>
        </div>
      )
   }
}

export default MessageFilter;