// import Card from "./components/Card";
// import {CustomText} from "./components/Text";
import { Profile } from "./components/Profile";
import { Buttons } from "./components/Buttons";
import { ColorText } from "./components/ColorText";
export default function App(){
  return(
    <div>
        <Profile  username={'David'} hobby={'singing'} location={'Abuja'} email={'david@g.com'} />
        <Profile  username={'John'} hobby={'Dancing'} location={'Abraka'} email={'john@g.com'} />
        <Profile  username={'Daniel'} hobby={'jogging'} location={'Abia'} email={'daniel@g.com'} />

       <Buttons color={'blue'}>Click me</Buttons>
       <Buttons color={'pink'} >Submit</Buttons>
       <Buttons color={'purple'} >Login</Buttons>
       <Buttons color={'red'} >Signup</Buttons>

       <ColorText colors={'pink'}>
           <p>Dch academy</p>
           <p>Web DEV</p>
        </ColorText>
        <ColorText colors={'yellow'}>
           <p>Delta uni</p>
           <p>comp sci</p>
        </ColorText>
       <ColorText colors={'orange'}>
           <p>Abraka</p>
           <p>Social</p>
       </ColorText>
   
    </div>

  )
//   return(
//     <div>
//       <div>
//       Hello world
//       <Card  name={'David'} age={20} emps={'unemployed'}/>
//       <Card name={'john'} age={30} emps={'employed'}/>
//     </div>

//       <CustomText pickC={'pink'}>
//         <div>i Am a girl</div>
//       </CustomText>
//      </div> 

//   )


}



