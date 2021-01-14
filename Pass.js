import React, {Component} from 'react';

class Pass extends Component {
  render(){
   let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9'];

   let x;
   let pass = [];
  
    for(let i = 0; i < 15; i++){
      x = Math.floor(Math.random() * letters.length);
      pass += letters[x];
    }
    
    return (
      <div>
        {pass}
      </div>
    );
  }
}

export default Pass;