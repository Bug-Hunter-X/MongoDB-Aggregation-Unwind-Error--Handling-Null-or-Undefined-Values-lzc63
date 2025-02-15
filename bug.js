```javascript
const pipeline = [
  {
    $match: {
      // some match condition
    }
  },
  {
    $lookup: {
      from: "collection2",
      localField: "_id",
      foreignField: "foreignKey",
      as: "results"
    }
  },
  {
    $unwind: "$results" 
  },
  {
    $project: {
      _id: 0,
      field1: "$results.fieldA",
      field2: "$results.fieldB"
    }
  }
]

const cursor = db.collection('collection1').aggregate(pipeline)
cursor.forEach(doc => {
  console.log(doc)
})
```