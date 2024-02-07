import menu from './menu'
import MenuList from './menu-list'
import './styles.css';

export default function TreeView(){

	return (
		<div className="container">
			<h1>Tree View</h1>
			
			<div className="content">
				<MenuList list={menu} />
			</div> 
		</div>
	);
}