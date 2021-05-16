import React, { Component } from 'react'

class Languages extends Component {
    render() {
        let language=this.props.name;
            if(language === "java"){
                return(  <div>
                    <span className="lang java">‍&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    java
                    </div> )
            }else if(language === "cpp"){
                return( <div>
                    <span className="lang cpp">‍&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    cpp
                    </div> )
            }
            else if(language === "html"){
                return( <div>
                    <span className="lang html">‍&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    html
                    </div>)
            }
            else if(language === "css"){
                return(  <div>
                    <span className="lang css">‍&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    css
                    </div> )
            }
            else if(language === "php"){
                return(  <div>
                    <span className="lang php">‍&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    php
                    </div> )
            }
            else if(language === "csharp"){
                return(  <div>
                    <span className="lang csharp">‍&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    csharp
                    </div> )
            }else{
                return(<div></div>)
            }

        
    }
}

export default Languages
