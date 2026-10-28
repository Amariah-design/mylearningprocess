import Button1 ,{Button2} from "./components/Buttons";


export default function App(){
    
    return (
        <div>
            hello world
            <Button1 btnName = {'sign Up'} color={'white'} bg={'red'}/>
            <Button1 btnName = {'sign Up'} color={'white'} bg={'red'}/>
            <Button1 btnName = {'LOGIN'} color={'yellow'} bg={'blue'}/>
            <Button2 btnName = {'Home'} color={'green'} bg={'pink'}/>

        </div>
    )
}