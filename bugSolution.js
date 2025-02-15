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
    $unwind: {
      path: "$results",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $project: {
      _id: 0,
      field1: { $ifNull: ["$results.fieldA", null] },
      field2: { $ifNull: ["$results.fieldB", null] }
    }
  }
]

const cursor = db.collection('collection1').aggregate(pipeline)
cursor.forEach(doc => {
  console.log(doc)
})
```