import { CollectionConfig } from 'payload/types'
import payload from 'payload'

const Items: CollectionConfig = {
	slug: 'items',
	fields: [],
	endpoints: [
		{
			path: '/get-all',
			method: 'get',
			handler: async (req, res) => {
				const allItems = await payload.find({
					collection: 'items',
					limit: 0,
				})

				console.log(
					`Fetched ${allItems.docs.length} items with limit 0 (select all)`)

				res.status(200).send({
					comment: 'You would expect to see as many items as you created. But instead you will see 10 items at most. Look at data.totalDocs , data.limit and data.totalPages',
					data: allItems,
				})
			},
		},
	],
}

export default Items
