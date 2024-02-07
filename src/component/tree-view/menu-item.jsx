import { useState} from 'react'
import MenuList from './menu-list'

export default function MenuItem({item = {}}){

	const [selected, setSelected] = useState(false);

	return (
		<div className="item">

			<div className="title">
				<span>{ item.text} </span>
				{
					item.nodes && item.nodes.length > 0
					? 	<button className="icon" onClick={() => setSelected(!selected)}>
							{selected ? "-" : "+"  } 
						</button> 
					: null
				}
			</div>
			{
				selected && item.nodes && item.nodes.length > 0
				?	<MenuList list={item.nodes} />
				: null
			}
		</div>
	);
}