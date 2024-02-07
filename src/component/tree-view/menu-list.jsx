import MenuItem from './menu-item'


export default function MenuList({list = []}){

	return (
		<div className="list">

			{
				list && list.length > 0 
				? 	list.map((item, i) =>
						<MenuItem key={i} item={item} />
					)
				: <p> No record found </p>
			}
			
		</div>
	);
}