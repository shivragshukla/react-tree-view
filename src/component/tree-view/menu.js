const menu = [
	{ 
		text: 'Menu-1'
	},
	{ 
		text: 'Menu-2',
		nodes: [
			{ 
				text: 'Menu-2-1'
			},
			{ 
				text: 'Menu-2-2'
			},

		]
	},
	{ 
		text: 'Menu-3',
		nodes: [
			{ 
				text: 'Menu-3-1',
				nodes: [
					{ 
						text: 'Menu-3-1-1'
					},
					{ 
						text: 'Menu-3-1-2',
						nodes: [
							{ 
								text: 'Menu-3-1-2-1'
							},
							{ 
								text: 'Menu-3-1-2-2'
							},

						]
					},
				]
			},
			{ 
				text: 'Menu-3-2'
			},

		]
	},
	{ 
		text: 'Menu-4'
	},
];

export default menu

