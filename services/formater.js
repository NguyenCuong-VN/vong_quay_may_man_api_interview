const formatItems = (items) => {
  if (!items || items.length === 0) return [];

  const result = items.map(item => {
    return {
      id: item['_id'],
      name: item.name,
      quantity: parseInt(item.quantity) || parseFloat(item.quantity),
      rate: parseFloat(item.rate) || 0
    }
  })

  return result;
}

const formatUsers = (users) => {
  if (!users || users.length === 0) return [];

  const result = users.map(user => {
    return {
      id: user['_id'],
      username: user.username
    }
  })

  return result;
}

module.exports = { formatItems, formatUsers }