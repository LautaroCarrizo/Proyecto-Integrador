import Card from './Card';
export default function Cards(props) {
  
   return (
      <div className='containerCard'>
         {props.characters.map((element) => (
           <Card key={element.id}
           onClose={() => window.alert('Emulamos que se cierra la card')}
           name={element.name}
           status={element.status}
           species={element.species}
           gender={element.gender}
           origin={element.origin.name}
           image={element.image} >
           </Card>
         ))}
      </div>
      
      ) 
}
